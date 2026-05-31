import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getServiceById, SERVICES } from '../constants/site';
import { getServiceIconClasses } from '../lib/service-colors';
import { getContactHref } from '../lib/url';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <main id="main-content" className="pt-20">
      <Section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <a href="/#services" className="hover:text-primary-600">
                  Services
                </a>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-gray-900">{service.title}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-2xl ${getServiceIconClasses(service.color)}`}
            >
              <Icon className="h-10 w-10" aria-hidden />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
                {service.description}
              </p>
              <Link
                to={getContactHref(service.id)}
                className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Discuss this service
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Overview</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                {service.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                What you get
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Included capabilities
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden
                />
                <span className="font-medium text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Other services
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services/${s.id}`}
                  className="block rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:border-primary-200 hover:shadow-md"
                >
                  <span className="font-semibold text-gray-900">{s.title}</span>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {s.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            className="mt-10 inline-flex items-center font-semibold text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
            Back to all services
          </Link>
        </Container>
      </Section>
    </main>
  );
}
