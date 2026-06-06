import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { sanitizeHtml, getFilteredProjects } from './utils';
import type { Project, ProjectCategory } from './data/projects';

describe('sanitizeHtml - Property-Based Tests', () => {
  it('Property 8: for any arbitrary string, output contains no < or > characters', () => {
    fc.assert(
      fc.property(fc.string(), (input) => {
        const output = sanitizeHtml(input);
        expect(output).not.toContain('<');
        expect(output).not.toContain('>');
      })
    );
  });

  it('should never introduce new characters not in the input (except removal)', () => {
    fc.assert(
      fc.property(fc.string(), (input) => {
        const output = sanitizeHtml(input);
        // Every character in output must have existed in input
        // (though input may have had more characters that were removed)
        for (const char of output) {
          expect(input).toContain(char);
        }
      })
    );
  });

  it('should be idempotent: sanitize(sanitize(x)) === sanitize(x)', () => {
    fc.assert(
      fc.property(fc.string(), (input) => {
        const once = sanitizeHtml(input);
        const twice = sanitizeHtml(once);
        expect(twice).toBe(once);
      })
    );
  });

  it('should preserve string length or reduce it (never increase)', () => {
    fc.assert(
      fc.property(fc.string(), (input) => {
        const output = sanitizeHtml(input);
        expect(output.length).toBeLessThanOrEqual(input.length);
      })
    );
  });

  it('should handle strings with only angle brackets', () => {
    fc.assert(
      fc.property(
        fc.array(fc.constantFrom('<', '>'), { minLength: 0, maxLength: 100 }),
        (chars) => {
          const input = chars.join('');
          const output = sanitizeHtml(input);
          expect(output).not.toContain('<');
          expect(output).not.toContain('>');
        }
      )
    );
  });
});

describe('getFilteredProjects - Property-Based Tests', () => {
  const validCategories: ProjectCategory[] = [
    'structural-audit',
    'qaqc-tpqm',
    'restoration',
  ];

  // Arbitrary for generating valid Project objects
  const projectArbitrary = fc.record({
    id: fc.string({ minLength: 1 }),
    title: fc.string({ minLength: 1 }),
    category: fc.constantFrom(...validCategories),
    imageSrc: fc.webUrl(),
    imageAlt: fc.string({ minLength: 1 }),
    description: fc.option(fc.string(), { nil: undefined }),
    client: fc.option(fc.string(), { nil: undefined }),
    year: fc.option(fc.integer({ min: 2000, max: 2030 }), { nil: undefined }),
  }) as fc.Arbitrary<Project>;

  it('Property 7: for any project array and valid category, all returned items match the category', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.constantFrom(...validCategories),
        (projects, category) => {
          const filtered = getFilteredProjects(projects, category);
          // Every project in the result must have the specified category
          expect(filtered.every((p) => p.category === category)).toBe(true);
        }
      )
    );
  });

  it('Property 7: selecting "all" returns all items', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        (projects) => {
          const filtered = getFilteredProjects(projects, 'all');
          expect(filtered).toHaveLength(projects.length);
          expect(filtered).toEqual(projects);
        }
      )
    );
  });

  it('should never return more items than input array', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.string(),
        (projects, category) => {
          const filtered = getFilteredProjects(projects, category);
          expect(filtered.length).toBeLessThanOrEqual(projects.length);
        }
      )
    );
  });

  it('should preserve order of filtered items relative to input', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.constantFrom(...validCategories),
        (projects, category) => {
          const filtered = getFilteredProjects(projects, category);
          
          // Extract indices of filtered items in the original array
          const originalIndices = filtered.map((filteredProject) =>
            projects.findIndex((p) => p.id === filteredProject.id)
          );

          // Indices should be in ascending order (preserving original order)
          for (let i = 1; i < originalIndices.length; i++) {
            expect(originalIndices[i]).toBeGreaterThan(originalIndices[i - 1]);
          }
        }
      )
    );
  });

  it('should be idempotent: filter(filter(x, c), c) === filter(x, c)', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.constantFrom(...validCategories),
        (projects, category) => {
          const once = getFilteredProjects(projects, category);
          const twice = getFilteredProjects(once, category);
          expect(twice).toEqual(once);
        }
      )
    );
  });

  it('should not mutate input array', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.string(),
        (projects, category) => {
          const originalCopy = JSON.parse(JSON.stringify(projects));
          getFilteredProjects(projects, category);
          expect(projects).toEqual(originalCopy);
        }
      )
    );
  });

  it('should return empty array for invalid category (non "all", non-valid category)', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 1, maxLength: 50 }),
        fc
          .string()
          .filter(
            (s) =>
              s !== 'all' &&
              !validCategories.includes(s as ProjectCategory)
          ),
        (projects, invalidCategory) => {
          const filtered = getFilteredProjects(projects, invalidCategory);
          expect(filtered).toEqual([]);
        }
      )
    );
  });

  it('filtering then counting should equal direct counting', () => {
    fc.assert(
      fc.property(
        fc.array(projectArbitrary, { minLength: 0, maxLength: 50 }),
        fc.constantFrom(...validCategories),
        (projects, category) => {
          const filtered = getFilteredProjects(projects, category);
          const directCount = projects.filter(
            (p) => p.category === category
          ).length;
          expect(filtered.length).toBe(directCount);
        }
      )
    );
  });
});
