import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <About />
      <Services />
      <Hero />
      <Contact />
      <Process />
      
      {/* Footer */}
      <footer className="bg-brand-navy text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 SolveSphere Technologies. All rights reserved.</p>
          <p className="text-sm opacity-80 mt-2">Design. Develop. Deliver.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;