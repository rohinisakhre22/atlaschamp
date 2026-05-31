import type { ContactFormValues } from './contact-schema';

export class ContactSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ContactSubmitError';
  }
}

type FormspreeErrorResponse = {
  errors?: Array<{ field?: string; message?: string }>;
};

export async function submitContactForm(
  values: ContactFormValues
): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (!endpoint) {
    throw new ContactSubmitError(
      'Contact form is not configured. Set VITE_CONTACT_ENDPOINT in your environment.'
    );
  }

  const payload = {
    ...values,
    _subject: `New website enquiry from ${values.name}`,
  };

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactSubmitError(
      'Network error. Please check your connection and try again.'
    );
  }

  if (!response.ok) {
    let message = 'Unable to send your message. Please try again or email us directly.';
    try {
      const data = (await response.json()) as FormspreeErrorResponse;
      const firstError = data.errors?.[0]?.message;
      if (firstError) message = firstError;
    } catch {
      // Keep the default message if the body isn't JSON.
    }
    throw new ContactSubmitError(message);
  }
}
