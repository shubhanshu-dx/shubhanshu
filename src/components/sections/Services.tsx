import {
  Smartphone,
  Video,
  Code,
  Cloud,
  Layout,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/Button'; // Import the Button component

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Building robust and scalable web applications tailored to your unique business needs.',
      features: ['React & Next.js', 'Node.js & Python Backend', 'Database Design & Integration', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Solutions',
      description: 'Designing and developing intuitive and high-performance mobile applications for iOS and Android.',
      features: ['Native iOS & Android', 'Cross-platform (React Native)', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: Layout,
      title: 'UI/UX Design & Branding',
      description: 'Crafting stunning user interfaces and experiences that captivate your audience and strengthen your brand identity.',
      features: ['User Research', 'Wireframing & Prototyping', 'Graphic Design', 'Brand Guidelines']
    },
    {
      icon: Video,
      title: '2D Animation & Motion Graphics',
      description: 'Bringing your stories and ideas to life with dynamic and engaging 2D animations and motion graphics.',
      features: ['Explainer Videos', 'Character Animation', 'Motion Infographics', 'Brand Intros']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Consulting',
      description: 'Optimizing your infrastructure for scalability, reliability, and efficiency with expert cloud and DevOps strategies.',
      features: ['AWS, Azure, GCP', 'CI/CD Pipelines', 'Containerization (Docker, Kubernetes)', 'Infrastructure as Code']
    },
    {
      icon: Lightbulb,
      title: 'Digital Strategy & Consulting',
      description: 'Guiding your digital journey with strategic insights, technology roadmaps, and innovative solutions.',
      features: ['Market Analysis', 'Technology Assessment', 'Digital Transformation', 'Growth Strategy']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-inter">
            Our <span className="text-primary">Comprehensive Services</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a spectrum of digital solutions designed to elevate your business in today's dynamic landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-gray-200/50 animate-fade-in-up-stagger" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8 flex flex-col items-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:animate-glow transition-all duration-300">
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-1 sm:space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs sm:text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Services */}
        <div className="text-center bg-gradient-section p-6 sm:p-8 md:p-12 rounded-3xl mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: `${0.2 + services.length * 0.1}s` }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Partner with SolveSphere Technologies to build innovative solutions that drive your success.
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = '#contact'}
            className="bg-brand-green hover:bg-brand-green/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;