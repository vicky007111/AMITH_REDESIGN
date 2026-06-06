import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Project } from './data/projects';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Strips all HTML tags from the input string
 * @param input - String that may contain HTML tags
 * @returns String with all HTML tags removed
 */
export function sanitizeHtml(input: string): string {
  let result = input;
  result = result.replace(/<[^>]*>/g, '');
  result = result.replace(/<[a-zA-Z0-9/]+/g, '');
  result = result.replace(/[<>]/g, '');
  return result;
}

/**
 * Filters projects by category
 * @param projects - Array of Project objects
 * @param category - Category to filter by, or 'all' to return all projects
 * @returns Filtered array of projects
 */
export function getFilteredProjects(projects: Project[], category: string): Project[] {
  if (category === 'all') {
    return [...projects];
  }
  return projects.filter((project) => project.category === category);
}
