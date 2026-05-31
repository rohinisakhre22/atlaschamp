import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getServicePath, SERVICES } from '../../constants/site';
import { getServiceIconClasses } from '../../lib/service-colors';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../layout/SectionHeading';

export function Services() {
  return (
    <Section id="services" className="bg-gray-50 py-20" ariaLabelledBy="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          title="Comprehensive Atlassian Services"
          description="From initial setup to advanced customizations, we provide end-to-end Atlassian solutions that grow with your business needs."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const servicePath = getServicePath(service.id);
            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${getServiceIconClasses(service.color)}`}
                >
                  <Icon className="h-8 w-8 transition-colors duration-300" aria-hidden />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  <Link
                    to={servicePath}
                    className="hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
                  >
                    {service.title}
                  </Link>
                </h3>

                <p className="mb-6 flex-grow leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={servicePath}
                  className="flex items-center font-semibold text-primary-600 transition-colors group-hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
