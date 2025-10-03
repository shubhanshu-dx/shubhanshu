import { Star } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Tech Innovators',
      quote: 'SolveSphere delivered a stunning website that perfectly captured our brand. Their team was incredibly professional and responsive throughout the entire process.',
      rating: 5,
    },
    {
      name: 'John Smith',
      title: 'Founder, Startup Hub',
      quote: 'The mobile app SolveSphere built for us exceeded all expectations. The UI/UX is intuitive, and the performance is flawless. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily White',
      title: 'Marketing Director, Global Corp',
      quote: 'Their digital strategy transformed our online presence. SolveSphere’s insights and execution led to a significant increase in our engagement and conversions.',
      rating: 4,
    },
    {
      name: 'David Green',
      title: 'Product Manager, FutureTech',
      quote: 'We were impressed by SolveSphere’s ability to understand our complex requirements and deliver a robust custom web application ahead of schedule.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear directly from the businesses and individuals who have partnered with SolveSphere Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card p-6 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in-up-stagger"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-muted-foreground'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
