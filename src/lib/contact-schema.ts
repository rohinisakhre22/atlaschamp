import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Full name is required'),
  email: z.string().trim().email('Enter a valid email address'),
  company: z.string().trim().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const initialContactFormValues: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};
