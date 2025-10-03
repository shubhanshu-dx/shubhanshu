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
import { Button } from '../../components/ui/button'; // Import the Button component

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Our <span className="text-primary">Comprehensive Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a spectrum of digital solutions designed to elevate your business in today's dynamic landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-gray-200/50 animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 flex flex-col items-start">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
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
        <div className="text-center bg-gradient-section p-8 md:p-12 rounded-3xl mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Partner with SolveSphere Technologies to build innovative solutions that drive your success.
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = '#contact'}
            className="bg-brand-green hover:bg-brand-green/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
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