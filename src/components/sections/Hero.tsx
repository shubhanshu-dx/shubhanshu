// import { ArrowRight, Play } from 'lucide-react';
// import { Button } from '../../components/ui/Button';
// import heroImage from '@/assets/hero-tech.jpg';

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={heroImage} 
//           alt="Modern technology workspace" 
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-brand-green/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-fade-in">
//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl font-inter font-bold text-primary-foreground mb-6 leading-tight">
//             <span className="block">Design.</span>
//             <span className="block text-brand-green">Develop.</span>
//             <span className="block">Deliver.</span>
//           </h1>

//           {/* Subheading */}
//           <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-inter font-light">
//             We solve real-world business and digital problems through the perfect blend of technology, creativity, and domain expertise.
//           </p>

//           {/* Tech Stack Badges */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
//             {['React', 'Node.js', 'Supabase', '2D Animation', 'Mobile Apps'].map((tech) => (
//               <span 
//                 key={tech}
//                 className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm rounded-full text-sm font-medium border border-primary-foreground/20"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
//             <Button 
//               size="lg"
//               onClick={() => scrollToSection('#contact')}
//               className="bg-brand-green hover:bg-brand-green/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
//             >
//               Start Your Project
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
            
//             <Button 
//               variant="outline"
//               size="lg"
//               onClick={() => scrollToSection('#portfolio')}
//               className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
//             >
//               <Play className="mr-2 h-5 w-5" />
//               View Our Work
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
//             {[
//               { number: '50+', label: 'Projects Delivered' },
//               { number: '25+', label: 'Happy Clients' },
//               { number: '5+', label: 'Tech Domains' },
//               { number: '100%', label: 'Client Satisfaction' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-brand-green mb-2">{stat.number}</div>
//                 <div className="text-primary-foreground/80 text-sm uppercase tracking-wide">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import heroImage from '@/assets/hero-tech.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern technology workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-brand-green/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-inter font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block">Design.</span>
            <span className="block text-brand-green">Develop.</span>
            <span className="block">Deliver.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-inter font-light">
            We solve real-world business and digital problems through the perfect blend of technology, creativity, and domain expertise.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {['React', 'Node.js', 'Supabase', '2D Animation', 'Mobile Apps'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm rounded-full text-sm font-medium border border-primary-foreground/20"
              >
                {tech}
              </span>
            ))}
          </div>

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
              onClick={() => scrollToSection('#portfolio')}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '25+', label: 'Happy Clients' },
              { number: '5+', label: 'Tech Domains' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
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