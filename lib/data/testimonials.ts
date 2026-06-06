export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating?: number;
  imageSrc?: string;
}

// Placeholder for future testimonials
export const testimonials: Testimonial[] = [];
