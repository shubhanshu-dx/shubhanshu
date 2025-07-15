import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
              About <span className="text-primary">SolveSphere</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a team of passionate problem-solvers who bridge the gap between traditional industries and cutting-edge technology. Our unique approach combines technical expertise with creative excellence to deliver solutions that truly make a difference.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From custom web applications to 2D animations, from mobile interfaces to digital transformation consulting, we bring fresh perspectives to every challenge. We don't just code – we solve problems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">2023</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="rounded-2xl shadow-strong w-full h-64 bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-lg font-semibold">SolveSphere Team Collaboration</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-scale-in bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the go-to digital partner for businesses looking to transform their operations through innovative technology solutions. We envision a world where every industry benefits from seamless digital integration.
            </p>
          </div>

          <div className="animate-scale-in bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To solve real-world business and digital problems through the perfect blend of design, development, and delivery. We combine technical expertise with creative excellence to build solutions that matter.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Client-Centric',
                description: 'Every decision we make puts our clients and their success at the center.'
              },
              {
                icon: Target,
                title: 'Problem-Solving',
                description: 'We don\'t just build features – we solve real problems with elegant solutions.'
              },
              {
                icon: Eye,
                title: 'Innovation',
                description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
              }
            ].map((value, index) => (
              <div key={index} className="animate-fade-in p-6" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;