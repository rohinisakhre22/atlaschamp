import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';
import { SkipLink } from './SkipLink';

export function Layout() {
  return (
    <div className="min-h-screen">
      <SkipLink />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
