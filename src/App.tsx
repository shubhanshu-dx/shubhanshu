import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Services from './components/sections/Services';
// import Technologies from './components/sections/Technologies';
// import Projects from './components/sections/Projects';
// import Testimonials from './components/sections/Testimonials';
// import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';
import Process from './components/sections/Process.tsx';
import Hero from './components/sections/Hero.tsx';

function App() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <About />
      <Services />
      <Hero/>
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
