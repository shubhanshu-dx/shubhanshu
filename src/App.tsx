import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Technologies from './components/sections/Technologies';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process.tsx';
import Contact from './components/sections/Contact';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor instanceof HTMLAnchorElement) {
        event.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <Hero/>
      <About />
      <Services />
      <Technologies />
      <Projects />
      <Testimonials />
      <Process/>
      <Contact />
      
      {/* Footer */}
      <footer className="bg-brand-navy text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 SolveSphere Technologies. All rights reserved.</p>
          <p className="text-sm opacity-80 mt-2">Design. Develop. Deliver.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
