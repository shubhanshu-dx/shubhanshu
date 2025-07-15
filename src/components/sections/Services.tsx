import { 
    Smartphone, 
    Monitor, 
    Video, 
    Palette, 
    Globe, 
    Settings,
    Building,
    Zap
  } from 'lucide-react';
  import { Card, CardContent } from '../../components/ui/card';
  
  const Services = () => {
    const services = [
      {
        icon: Monitor,
        title: 'Custom Web Development',
        description: 'Full-stack web applications built with React, Node.js, and modern technologies. From concept to deployment.',
        features: ['React & TypeScript', 'Node.js Backend', 'Database Design', 'Cloud Deployment']
      },
      {
        icon: Smartphone,
        title: 'Mobile App UI/UX',
        description: 'Beautiful, intuitive mobile interfaces that provide exceptional user experiences across all devices.',
        features: ['iOS & Android Design', 'Responsive Layouts', 'User Testing', 'Prototyping']
      },
      {
        icon: Video,
        title: '2D Animation & Motion',
        description: 'Engaging animations and motion graphics that bring your brand stories to life with professional quality.',
        features: ['Brand Animations', 'Explainer Videos', 'Motion Graphics', 'Visual Effects']
      },
      {
        icon: Palette,
        title: 'Brand Video Editing',
        description: 'Professional video editing services that transform raw footage into compelling brand narratives.',
        features: ['Post-Production', 'Color Grading', 'Audio Enhancement', 'Final Cut Pro']
      },
      {
        icon: Globe,
        title: 'Landing Pages & Sites',
        description: 'High-converting landing pages and corporate websites optimized for performance and user engagement.',
        features: ['SEO Optimized', 'Fast Loading', 'Mobile-First', 'Conversion Focused']
      },
      {
        icon: Settings,
        title: 'Digital Transformation',
        description: 'Strategic consulting to help traditional businesses embrace modern digital solutions and workflows.',
        features: ['Process Automation', 'Digital Strategy', 'Technology Integration', 'Training & Support']
      }
    ];
  
    const industries = [
      { icon: Building, name: 'Civil Engineering', description: 'Digital solutions for construction and infrastructure' },
      { icon: Zap, name: 'Electrical Systems', description: 'Smart automation and control systems' },
      { icon: Settings, name: 'Mechanical Design', description: 'CAD integration and design optimization' },
      { icon: Globe, name: 'Digital Marketing', description: 'Online presence and digital strategies' }
    ];
  
    return (
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We blend technology with creativity to solve problems across multiple domains. 
              From web development to 2D animation, we deliver comprehensive digital solutions.
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
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
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
  
          {/* Industries We Serve */}
          <div className="bg-gradient-section p-8 md:p-12 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h3>
              <p className="text-muted-foreground text-lg">
                Our expertise spans across traditional and digital industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-card rounded-xl hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{industry.name}</h4>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;