import { describe, it, expect } from 'vitest';
import { sanitizeHtml, getFilteredProjects } from './utils';
import type { Project } from './data/projects';

describe('sanitizeHtml', () => {
  describe('plain text passthrough', () => {
    it('should return plain text unchanged', () => {
      const input = 'This is plain text';
      expect(sanitizeHtml(input)).toBe(input);
    });

    it('should preserve whitespace in plain text', () => {
      const input = 'Text   with   spaces';
      expect(sanitizeHtml(input)).toBe(input);
    });

    it('should preserve newlines in plain text', () => {
      const input = 'Line 1\nLine 2\nLine 3';
      expect(sanitizeHtml(input)).toBe(input);
    });
  });

  describe('HTML tag stripping', () => {
    it('should remove simple HTML tags', () => {
      const input = '<p>Hello World</p>';
      expect(sanitizeHtml(input)).toBe('Hello World');
    });

    it('should remove multiple HTML tags', () => {
      const input = '<div><p>Hello</p> <span>World</span></div>';
      expect(sanitizeHtml(input)).toBe('Hello World');
    });

    it('should remove self-closing tags', () => {
      const input = 'Text <br/> with <img src="test.jpg" /> tags';
      expect(sanitizeHtml(input)).toBe('Text  with  tags');
    });

    it('should remove tags with attributes', () => {
      const input = '<div class="test" id="main">Content</div>';
      expect(sanitizeHtml(input)).toBe('Content');
    });

    it('should remove tags with multiple attributes', () => {
      const input =
        '<a href="http://example.com" target="_blank" rel="noopener">Link</a>';
      expect(sanitizeHtml(input)).toBe('Link');
    });
  });

  describe('script tag removal', () => {
    it('should remove script tags', () => {
      const input = '<script>alert("XSS")</script>Safe text';
      expect(sanitizeHtml(input)).toBe('alert("XSS")Safe text');
    });

    it('should remove script tags with attributes', () => {
      const input = '<script type="text/javascript">console.log("test")</script>Text';
      expect(sanitizeHtml(input)).toBe('console.log("test")Text');
    });

    it('should remove inline script handlers', () => {
      const input = '<button onclick="alert(1)">Click</button>';
      expect(sanitizeHtml(input)).toBe('Click');
    });
  });

  describe('nested tags', () => {
    it('should remove deeply nested tags', () => {
      const input = '<div><ul><li><a href="#">Item</a></li></ul></div>';
      expect(sanitizeHtml(input)).toBe('Item');
    });

    it('should handle nested tags with text at multiple levels', () => {
      const input = '<div>Outer <span>Middle <b>Inner</b> Middle</span> Outer</div>';
      expect(sanitizeHtml(input)).toBe('Outer Middle Inner Middle Outer');
    });

    it('should remove mixed nested tags', () => {
      const input =
        '<article><header><h1>Title</h1></header><p>Content</p></article>';
      expect(sanitizeHtml(input)).toBe('TitleContent');
    });
  });

  describe('empty string and edge cases', () => {
    it('should handle empty string', () => {
      expect(sanitizeHtml('')).toBe('');
    });

    it('should handle string with only tags', () => {
      const input = '<div></div><span></span>';
      expect(sanitizeHtml(input)).toBe('');
    });

    it('should handle malformed tags', () => {
      const input = '<div>Text <span>More';
      expect(sanitizeHtml(input)).toBe('Text More');
    });

    it('should handle unclosed tags', () => {
      const input = '<p>Paragraph text';
      expect(sanitizeHtml(input)).toBe('Paragraph text');
    });

    it('should handle tags with no closing bracket', () => {
      const input = 'Text <div More text';
      expect(sanitizeHtml(input)).toBe('Text  More text');
    });
  });

  describe('special characters', () => {
    it('should preserve HTML entities', () => {
      const input = '&lt;p&gt;Text&lt;/p&gt;';
      expect(sanitizeHtml(input)).toBe('&lt;p&gt;Text&lt;/p&gt;');
    });

    it('should remove tags but preserve entity content', () => {
      const input = '<p>&copy; 2025 &mdash; Company</p>';
      expect(sanitizeHtml(input)).toBe('&copy; 2025 &mdash; Company');
    });

    it('should handle mixed brackets in text', () => {
      const input = 'Math: 5 < 10 and 20 > 15';
      expect(sanitizeHtml(input)).toBe('Math: 5  15');
    });
  });

  describe('XSS attack vectors', () => {
    it('should neutralize basic XSS attempt', () => {
      const input = '<script>document.cookie</script>Normal text';
      expect(sanitizeHtml(input)).toBe('document.cookieNormal text');
    });

    it('should remove event handlers', () => {
      const input = '<img src=x onerror="alert(1)">';
      expect(sanitizeHtml(input)).toBe('');
    });

    it('should handle JavaScript URL protocol', () => {
      const input = '<a href="javascript:alert(1)">Click</a>';
      expect(sanitizeHtml(input)).toBe('Click');
    });

    it('should remove style tags', () => {
      const input = '<style>body{display:none}</style>Content';
      expect(sanitizeHtml(input)).toBe('body{display:none}Content');
    });
  });
});

describe('getFilteredProjects', () => {
  const mockProjects: Project[] = [
    {
      id: '1',
      title: 'Project 1',
      category: 'structural-audit',
      imageSrc: '/test1.jpg',
      imageAlt: 'Test 1',
    },
    {
      id: '2',
      title: 'Project 2',
      category: 'qaqc-tpqm',
      imageSrc: '/test2.jpg',
      imageAlt: 'Test 2',
    },
    {
      id: '3',
      title: 'Project 3',
      category: 'restoration',
      imageSrc: '/test3.jpg',
      imageAlt: 'Test 3',
    },
    {
      id: '4',
      title: 'Project 4',
      category: 'structural-audit',
      imageSrc: '/test4.jpg',
      imageAlt: 'Test 4',
    },
    {
      id: '5',
      title: 'Project 5',
      category: 'qaqc-tpqm',
      imageSrc: '/test5.jpg',
      imageAlt: 'Test 5',
    },
  ];

  describe('category filtering', () => {
    it('should return only structural-audit projects', () => {
      const result = getFilteredProjects(mockProjects, 'structural-audit');
      expect(result).toHaveLength(2);
      expect(result.every((p) => p.category === 'structural-audit')).toBe(true);
      expect(result.map((p) => p.id)).toEqual(['1', '4']);
    });

    it('should return only qaqc-tpqm projects', () => {
      const result = getFilteredProjects(mockProjects, 'qaqc-tpqm');
      expect(result).toHaveLength(2);
      expect(result.every((p) => p.category === 'qaqc-tpqm')).toBe(true);
      expect(result.map((p) => p.id)).toEqual(['2', '5']);
    });

    it('should return only restoration projects', () => {
      const result = getFilteredProjects(mockProjects, 'restoration');
      expect(result).toHaveLength(1);
      expect(result.every((p) => p.category === 'restoration')).toBe(true);
      expect(result.map((p) => p.id)).toEqual(['3']);
    });
  });

  describe('"all" category', () => {
    it('should return all projects when category is "all"', () => {
      const result = getFilteredProjects(mockProjects, 'all');
      expect(result).toHaveLength(mockProjects.length);
      expect(result).toEqual(mockProjects);
    });

    it('should preserve original array order for "all"', () => {
      const result = getFilteredProjects(mockProjects, 'all');
      expect(result.map((p) => p.id)).toEqual(['1', '2', '3', '4', '5']);
    });
  });

  describe('empty input array', () => {
    it('should return empty array for empty input with "all"', () => {
      const result = getFilteredProjects([], 'all');
      expect(result).toEqual([]);
    });

    it('should return empty array for empty input with specific category', () => {
      const result = getFilteredProjects([], 'structural-audit');
      expect(result).toEqual([]);
    });
  });

  describe('unknown category', () => {
    it('should return empty array for unknown category', () => {
      const result = getFilteredProjects(mockProjects, 'unknown-category');
      expect(result).toEqual([]);
    });

    it('should return empty array for empty string category', () => {
      const result = getFilteredProjects(mockProjects, '');
      expect(result).toEqual([]);
    });

    it('should handle case-sensitive category matching', () => {
      const result = getFilteredProjects(mockProjects, 'STRUCTURAL-AUDIT');
      expect(result).toEqual([]);
    });
  });

  describe('immutability', () => {
    it('should not mutate the original array', () => {
      const original = [...mockProjects];
      getFilteredProjects(mockProjects, 'structural-audit');
      expect(mockProjects).toEqual(original);
    });

    it('should return a new array instance', () => {
      const result = getFilteredProjects(mockProjects, 'all');
      expect(result).not.toBe(mockProjects);
    });
  });

  describe('order preservation', () => {
    it('should preserve original order in filtered results', () => {
      const result = getFilteredProjects(mockProjects, 'qaqc-tpqm');
      expect(result[0].id).toBe('2');
      expect(result[1].id).toBe('5');
    });
  });
});
