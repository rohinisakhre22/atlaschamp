import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/site';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { Logo } from './Logo';

const navLinkClass =
  'font-medium text-gray-700 transition-colors duration-200 hover:text-primary-600';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const { pathname } = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex shrink-0 items-center">
            <Logo surface="header" />
          </Link>

          <nav
            className="hidden space-x-8 md:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="/#contact"
              className="rounded-lg bg-primary-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-primary-700"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600"
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={cn(
            'md:hidden',
            isMenuOpen ? 'block border-t border-gray-200 py-4' : 'hidden'
          )}
        >
          <nav
            className="flex flex-col space-y-4"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={navLinkClass}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="rounded-lg bg-primary-600 px-6 py-2 text-center text-white transition-colors duration-200 hover:bg-primary-700"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
