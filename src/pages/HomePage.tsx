import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';

export function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
