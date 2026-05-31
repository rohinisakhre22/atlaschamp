import { ABOUT_BULLETS, STATS } from '../../constants/site';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export function About() {
  return (
    <Section id="about" className="bg-white py-20" ariaLabelledBy="about-heading">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2
              id="about-heading"
              className="mb-6 text-4xl font-bold text-gray-900"
            >
              Your Trusted Atlassian Partner
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              With over 5 years of specialized experience in Atlassian
              ecosystems, we&apos;ve helped hundreds of organizations transform
              their collaboration and project management workflows.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Our team of certified Atlassian experts understands the
              complexities of enterprise implementations and delivers solutions
              that scale with your business growth.
            </p>

            <ul className="space-y-4">
              {ABOUT_BULLETS.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span
                    className="h-2 w-2 rounded-full bg-primary-600"
                    aria-hidden
                  />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="rounded-2xl bg-gray-50 p-8 text-center transition-colors duration-300 hover:bg-primary-50"
                >
                  <Icon
                    className="mx-auto mb-4 h-12 w-12 text-primary-600"
                    aria-hidden
                  />
                  <div className="mb-2 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 p-12 text-center">
          <h3 className="mb-4 text-3xl font-bold text-white">
            Ready to Transform Your Atlassian Experience?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
            Join hundreds of satisfied clients who have streamlined their
            workflows and boosted productivity with our expert Atlassian
            services.
          </p>
          <a
            href="/#contact"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-primary-600 transition-colors duration-200 hover:bg-gray-100"
          >
            Start Your Project Today
          </a>
        </div>
      </Container>
    </Section>
  );
}
