import { CheckCircle, Send } from 'lucide-react';
import {
  CONTACT_INFO,
  SERVICES,
  SITE,
  WHY_CHOOSE_US,
} from '../../constants/site';
import { useContactForm } from '../../hooks/useContactForm';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';

export function Contact() {
  const {
    values,
    fieldErrors,
    status,
    formError,
    updateField,
    submit,
    isSubmitting,
  } = useContactForm();

  return (
    <Section
      id="contact"
      className="bg-gray-50 py-20"
      ariaLabelledBy="contact-heading"
    >
      <Container>
        <SectionHeading
          id="contact-heading"
          title="Get Started Today"
          description="Ready to transform your Atlassian experience? Contact our experts for a free consultation and discover how we can help optimize your team's productivity."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <ul className="mb-10 space-y-6">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.id} className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary-600" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-600 transition-colors hover:text-primary-600"
                      >
                        {info.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                Why Choose {SITE.name}?
              </h4>
              <ul className="space-y-3">
                {WHY_CHOOSE_US.map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle
                      className="h-5 w-5 text-green-500"
                      aria-hidden
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            {status === 'success' ? (
              <div
                className="mb-6 flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="h-5 w-5 text-green-600" aria-hidden />
                <span className="text-green-800">
                  Thank you! We&apos;ll get back to you soon.
                </span>
              </div>
            ) : null}

            {status === 'error' && formError ? (
              <div
                className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
                role="alert"
                aria-live="assertive"
              >
                {formError}
              </div>
            ) : null}

            <form onSubmit={submit} className="space-y-6" noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={updateField}
                    error={fieldErrors.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={values.email}
                    onChange={updateField}
                    error={fieldErrors.email}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={values.company ?? ''}
                    onChange={updateField}
                    error={fieldErrors.company}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Service of Interest
                  </label>
                  <Select
                    id="service"
                    name="service"
                    value={values.service ?? ''}
                    onChange={updateField}
                    error={fieldErrors.service}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={updateField}
                  error={fieldErrors.message}
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="group"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <Send
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
