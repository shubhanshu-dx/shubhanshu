import { Lightbulb, Code, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button'; // Import the Button component

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Conceptualize',
      subtitle: 'Ideation & Strategy',
      description: 'We begin by deeply understanding your vision, market, and goals. This phase involves extensive research, strategic planning, and concept development to lay a solid foundation for your project.',
      features: ['Market Research', 'Strategy Workshops', 'Concept Generation', 'Feasibility Study']
    },
    {
      icon: Code,
      title: 'Innovate',
      subtitle: 'Design & Development',
      description: 'Our team brings ideas to life through meticulous design and agile development. We focus on creating intuitive user experiences and building robust, scalable solutions using the latest technologies.',
      features: ['UI/UX Design', 'Frontend Development', 'Backend Engineering', 'API Integration', 'Quality Assurance']
    },
    {
      icon: Rocket,
      title: 'Launch',
      subtitle: 'Deployment & Growth',
      description: 'Beyond deployment, we ensure your solution thrives. We provide comprehensive support, performance monitoring, and strategic insights to facilitate continuous growth and adaptation to market needs.',
      features: ['Deployment & Hosting', 'Performance Monitoring', 'Post-Launch Support', 'Scalability Planning', 'User Feedback Loop']
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Our <span className="text-primary">Streamlined Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a clear, collaborative, and agile methodology to ensure your project's success from concept to launch.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-primary opacity-20 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="group relative animate-fade-in-up-stagger" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
                
                <div className="relative bg-card p-8 rounded-3xl shadow-medium group-hover:shadow-strong transition-all duration-500 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg border-2 border-background">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-primary font-semibold text-lg">{step.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Process Works - New Section */}
        <div className="mt-20 text-center bg-gradient-section p-8 md:p-12 rounded-3xl animate-fade-in-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">Why Our Process Delivers Results</h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Our methodology is designed for transparency, efficiency, and continuous improvement, ensuring your project's success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: Lightbulb,
              title: 'Clear Communication',
              description: 'Regular updates and open channels for feedback.'
            },
            {
              icon: Code,
              title: 'Agile Adaptability',
              description: 'Flexible approach to changes and evolving requirements.'
            },
            {
              icon: Rocket,
              title: 'Quality Focused',
              description: 'Rigorous testing and adherence to best practices.'
            }].map((benefit, index) => (
              <div key={index} className="p-6 animate-fade-in-up-stagger" style={{ animationDelay: `${0.8 + index * 0.15}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: `${0.8 + steps.length * 0.15}s` }}>
          <div className="bg-gradient-primary p-8 rounded-3xl text-center animate-scale-in">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Let's discuss how we can bring your vision to life with our proven process.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = '#contact'}
              className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;