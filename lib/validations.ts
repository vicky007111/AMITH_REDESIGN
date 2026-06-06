import { z } from 'zod';

export const contactPayloadSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or less')
    .trim(),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be 254 characters or less')
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(2000, 'Message must be 2000 characters or less')
    .trim(),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

/**
 * Validates contact form payload data
 * @param data - Unknown data to validate
 * @returns Validated ContactPayload if valid
 * @throws ZodError with validation messages if invalid
 */
export function validateContactPayload(data: unknown): ContactPayload {
  return contactPayloadSchema.parse(data);
}
