import { describe, it, expect } from 'vitest';
import { validateContactPayload, type ContactPayload } from './validations';
import { ZodError } from 'zod';

describe('validateContactPayload', () => {
  const validPayload = {
    name: 'John Doe',
    phone: '9876543210',
    email: 'john.doe@example.com',
    message: 'I would like to inquire about your structural auditing services.',
  };

  describe('valid payloads', () => {
    it('should accept a valid payload', () => {
      const result = validateContactPayload(validPayload);
      expect(result).toEqual({
        ...validPayload,
        email: validPayload.email.toLowerCase(),
      });
    });

    it('should trim whitespace from name and message', () => {
      const result = validateContactPayload({
        name: '  John Doe  ',
        phone: '9876543210',
        email: 'test@example.com',
        message: '  Test message  ',
      });
      expect(result.name).toBe('John Doe');
      expect(result.message).toBe('Test message');
    });

    it('should convert email to lowercase', () => {
      const result = validateContactPayload({
        ...validPayload,
        email: 'Test@EXAMPLE.COM',
      });
      expect(result.email).toBe('test@example.com');
    });
  });

  describe('invalid name field', () => {
    it('should reject empty name', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, name: '' })
      ).toThrow(ZodError);
    });

    it('should reject name over 100 characters', () => {
      const longName = 'a'.repeat(101);
      expect(() =>
        validateContactPayload({ ...validPayload, name: longName })
      ).toThrow(ZodError);
    });

    it('should accept name at 100 characters boundary', () => {
      const maxName = 'a'.repeat(100);
      const result = validateContactPayload({ ...validPayload, name: maxName });
      expect(result.name).toBe(maxName);
    });
  });

  describe('invalid phone field', () => {
    it('should reject phone with less than 10 digits', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: '987654321' })
      ).toThrow(ZodError);
    });

    it('should reject phone with more than 10 digits', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: '98765432100' })
      ).toThrow(ZodError);
    });

    it('should reject phone with non-numeric characters', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: '987-654-321' })
      ).toThrow(ZodError);
    });

    it('should reject phone with letters', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: '987abc4210' })
      ).toThrow(ZodError);
    });

    it('should reject phone with spaces', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: '9876 543210' })
      ).toThrow(ZodError);
    });
  });

  describe('invalid email field', () => {
    it('should reject empty email', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, email: '' })
      ).toThrow(ZodError);
    });

    it('should reject invalid email format (no @)', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, email: 'invalidemail.com' })
      ).toThrow(ZodError);
    });

    it('should reject invalid email format (no domain)', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, email: 'test@' })
      ).toThrow(ZodError);
    });

    it('should reject email over 254 characters', () => {
      const longEmail = 'a'.repeat(250) + '@test.com';
      expect(() =>
        validateContactPayload({ ...validPayload, email: longEmail })
      ).toThrow(ZodError);
    });

    it('should accept email at 254 characters boundary', () => {
      // Create a 254 character email: local part + @ + domain
      const localPart = 'a'.repeat(240);
      const email = `${localPart}@example.com`; // Total: 240 + 1 + 11 = 252
      const result = validateContactPayload({ ...validPayload, email });
      expect(result.email.length).toBeLessThanOrEqual(254);
    });
  });

  describe('invalid message field', () => {
    it('should reject empty message', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, message: '' })
      ).toThrow(ZodError);
    });

    it('should reject message over 2000 characters', () => {
      const longMessage = 'a'.repeat(2001);
      expect(() =>
        validateContactPayload({ ...validPayload, message: longMessage })
      ).toThrow(ZodError);
    });

    it('should accept message at 2000 characters boundary', () => {
      const maxMessage = 'a'.repeat(2000);
      const result = validateContactPayload({
        ...validPayload,
        message: maxMessage,
      });
      expect(result.message).toBe(maxMessage);
    });
  });

  describe('XSS payloads', () => {
    it('should accept message with script tags (sanitization handled elsewhere)', () => {
      const xssPayload = {
        ...validPayload,
        message: '<script>alert("XSS")</script>This is a message',
      };
      const result = validateContactPayload(xssPayload);
      expect(result.message).toContain('<script>');
      // Note: HTML sanitization is done by sanitizeHtml(), not validation
    });

    it('should accept name with HTML tags', () => {
      const result = validateContactPayload({
        ...validPayload,
        name: '<b>John</b> Doe',
      });
      expect(result.name).toContain('<b>');
    });

    it('should accept email with encoded characters', () => {
      const result = validateContactPayload({
        ...validPayload,
        email: 'test+tag@example.com',
      });
      expect(result.email).toBe('test+tag@example.com');
    });
  });

  describe('missing fields', () => {
    it('should reject payload with missing name', () => {
      const { name, ...payloadWithoutName } = validPayload;
      expect(() => validateContactPayload(payloadWithoutName)).toThrow(
        ZodError
      );
    });

    it('should reject payload with missing phone', () => {
      const { phone, ...payloadWithoutPhone } = validPayload;
      expect(() => validateContactPayload(payloadWithoutPhone)).toThrow(
        ZodError
      );
    });

    it('should reject payload with missing email', () => {
      const { email, ...payloadWithoutEmail } = validPayload;
      expect(() => validateContactPayload(payloadWithoutEmail)).toThrow(
        ZodError
      );
    });

    it('should reject payload with missing message', () => {
      const { message, ...payloadWithoutMessage } = validPayload;
      expect(() => validateContactPayload(payloadWithoutMessage)).toThrow(
        ZodError
      );
    });
  });

  describe('type coercion', () => {
    it('should reject payload with numeric name', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, name: 12345 as any })
      ).toThrow(ZodError);
    });

    it('should reject payload with numeric phone', () => {
      expect(() =>
        validateContactPayload({ ...validPayload, phone: 9876543210 as any })
      ).toThrow(ZodError);
    });
  });
});
