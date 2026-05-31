import { useCallback, useState } from 'react';
import {
  contactFormSchema,
  initialContactFormValues,
  type ContactFormValues,
} from '../lib/contact-schema';
import { ContactSubmitError, submitContactForm } from '../lib/submit-contact';
import { getServiceFromHash } from '../lib/url';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

function getInitialValues(): ContactFormValues {
  return {
    ...initialContactFormValues,
    service: getServiceFromHash(),
  };
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(getInitialValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const updateField = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      setFieldErrors((prev) => {
        if (!prev[name as keyof ContactFormValues]) return prev;
        const next = { ...prev };
        delete next[name as keyof ContactFormValues];
        return next;
      });
      if (formError) setFormError(null);
    },
    [formError]
  );

  const reset = useCallback(() => {
    setValues(getInitialValues());
    setFieldErrors({});
    setFormError(null);
    setStatus('idle');
  }, []);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setFormError(null);

      const parsed = contactFormSchema.safeParse(values);
      if (!parsed.success) {
        const errors: FieldErrors = {};
        for (const issue of parsed.error.issues) {
          const field = issue.path[0] as keyof ContactFormValues;
          if (!errors[field]) errors[field] = issue.message;
        }
        setFieldErrors(errors);
        setStatus('idle');
        return;
      }

      setFieldErrors({});
      setStatus('submitting');

      try {
        await submitContactForm(parsed.data);
        setValues(initialContactFormValues);
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setFormError(
          err instanceof ContactSubmitError
            ? err.message
            : 'Something went wrong. Please try again.'
        );
      }
    },
    [values]
  );

  return {
    values,
    fieldErrors,
    status,
    formError,
    updateField,
    submit,
    reset,
    isSubmitting: status === 'submitting',
  };
}
