import { ArrowRight, CheckCircle } from 'lucide-react';
import { HERO_FEATURES, HERO_HIGHLIGHTS } from '../../constants/site';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function Hero() {
  return (
    <Section id="home" className="bg-gradient-to-br from-primary-50 to-white pb-16 pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Expert Atlassian
              <span className="text-primary-600"> Solutions</span> for Your
              Business
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Transform your team collaboration with our comprehensive
              Atlassian services. From migrations to custom development, we
              help you maximize your Jira and Confluence investment.
            </p>

            <ul className="mt-8 space-y-3" aria-label="Key benefits">
              {HERO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckCircle
                    className="h-5 w-5 text-green-500"
                    aria-hidden
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#services"
                className="group flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-primary-700"
              >
                Explore Services
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
              <a
                href="/#contact"
                className="rounded-lg border-2 border-primary-600 px-8 py-4 text-center font-semibold text-primary-600 transition-all duration-200 hover:bg-primary-50"
              >
                Free Consultation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              <ul className="space-y-6" aria-label="Service highlights">
                {HERO_HIGHLIGHTS.map(
                  ({ id, icon: Icon, title, description, iconBg, iconColor }) => (
                    <li key={id} className="flex items-center space-x-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}
                      >
                        <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
