import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/card';

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/shubhanshu-kumar-347090187/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Shubhanshusiwan?t=wuFrb_KiH0hGEg4vEeBqPw&s=08', label: 'Twitter' },
    //{ icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear about your project. Send us a message and we'll respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              {[{
                icon: Mail,
                title: 'Email',
                value: 'hello@solvesphere.tech',
                href: 'mailto:hello@solvesphere.tech'
              },
              {
                icon: Phone,
                title: 'Phone',
                //value: '+1 (555) 123-4567',
                href: 'tel:+91 8417848540'
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Remote & On-site Available',
                href: '#'
              }].map((contact, index) => (
                <Card key={index} className="animate-fade-in-up-stagger" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.title}</h4>
                      <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {contact.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: `${0.2 + (socialLinks.length * 0.1)}s` }}>
              <h3 className="text-2xl font-bold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125 flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary"
                    aria-label={social.label}
                    style={{ animationDelay: `${0.3 + (socialLinks.length * 0.1) + index * 0.05}s` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in-right">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="solvespheretech@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-once">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;