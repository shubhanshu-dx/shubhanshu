import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';
import teamImage from '/team-collaboration-DIgNr2hI.jpg'; // Import the image from public folder

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            About <span className="text-primary">Our Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are SolveSphere Technologies, a team dedicated to transforming ideas into impactful digital solutions.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-4">Who We Are</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SolveSphere Technologies is a dynamic and innovative digital solutions provider. We specialize in bridging the gap between complex business challenges and cutting-edge technology, delivering tailored web, mobile, and creative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team comprises passionate developers, creative designers, and strategic thinkers committed to excellence. We pride ourselves on a client-centric approach, ensuring every project not only meets but exceeds expectations.
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
            <img 
              src={teamImage} 
              alt="Our Collaborative Team" 
              className="rounded-2xl shadow-strong w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Mission */}
          <div className="animate-scale-in bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and solve real-world problems effectively.
            </p>
          </div>

          {/* Vision */}
          <div className="animate-scale-in bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading force in digital transformation, recognized for our creativity, technical excellence, and unwavering commitment to client success.
            </p>
          </div>

          {/* Core Values */}
          <div className="animate-scale-in bg-card p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
            </div>
            <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
              <li>Innovation & Creativity</li>
              <li>Client Focus</li>
              <li>Integrity & Transparency</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us - New Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Why Choose SolveSphere?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our diverse team brings a wealth of experience and expertise to every project.'
              },
              {
                icon: Lightbulb,
                title: 'Innovative Solutions',
                description: 'We leverage the latest technologies to craft unique and effective digital products.'
              },
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: 'Delivering successful projects and fostering long-term client relationships.'
              }
            ].map((reason, index) => (
              <div key={index} className="animate-fade-in p-6" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h4>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;