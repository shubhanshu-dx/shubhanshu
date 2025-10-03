import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../../components/ui/Button';
// Placeholder for any background elements or specific images

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-navy opacity-80"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float opacity-30 blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-brand-green/5 rounded-full animate-float-reverse opacity-20 blur-sm" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-primary/20 rounded-full animate-float opacity-40 blur-sm" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <div className="animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-inter font-bold mb-6 leading-tight animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Crafting Digital</span>
            <span className="block text-brand-green">Experiences</span>
            <span className="block">That Matter.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto font-inter font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            We blend innovative technology with creative design to deliver solutions that drive growth and engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="bg-brand-green hover:bg-brand-green/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#services')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            {[{
              number: '50+',
              label: 'Projects'
            },
            {
              number: '25+',
              label: 'Clients'
            },
            {
              number: '10+',
              label: 'Awards'
            },
            {
              number: '99%',
              label: 'Satisfaction'
            }].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up-stagger" style={{ animationDelay: `${1.0 + index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-brand-green mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;