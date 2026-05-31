import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SERVICE_LINKS,
  SITE,
} from '../../constants/site';
import { Container } from './Container';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link to="/" className="mb-6 inline-flex">
              <Logo surface="footer" />
            </Link>
            <p className="mb-6 max-w-md leading-relaxed text-gray-300">
              {SITE.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" aria-hidden />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" aria-hidden />
                <span className="text-gray-300">{SITE.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICE_LINKS.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.href}
                    className="text-gray-300 transition-colors hover:text-primary-400"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-300 transition-colors hover:text-primary-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {SITE.copyrightYear} {SITE.name}. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {FOOTER_LEGAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
