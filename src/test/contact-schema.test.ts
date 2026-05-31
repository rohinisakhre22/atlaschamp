import { describe, expect, it } from 'vitest';
import { contactFormSchema } from '../lib/contact-schema';

describe('contactFormSchema', () => {
  it('accepts valid input', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      company: 'Acme',
      service: 'migration',
      message: 'We need help with a Jira migration project.',
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid email and short message', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane',
      email: 'not-an-email',
      message: 'short',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((i) => i.message);
      expect(messages).toContain('Enter a valid email address');
      expect(messages).toContain('Message must be at least 10 characters');
    }
  });
});
