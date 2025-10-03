import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/card';
import { supabase } from '../../lib/supabaseClient';
import { useState } from 'react';

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/shubhanshu-kumar-347090187/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/Shubhanshusiwan?t=wuFrb_KiH0hGEg4vEeBqPw&s=08', label: 'Twitter' },
    //{ icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('contact_submissions') // Replace with your table name if different
        .insert([formData]);

      if (insertError) {
        throw insertError;
      }

      setSuccess('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (err: unknown) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-inter">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us and let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Get in Touch</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                We'd love to hear about your project. Send us a message and we'll respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
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
                  <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <contact.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground">{contact.title}</h4>
                      <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                        {contact.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-10 animate-fade-in-up" style={{ animationDelay: `${0.2 + (socialLinks.length * 0.1)}s` }}>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-125 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border hover:border-primary"
                    aria-label={social.label}
                    style={{ animationDelay: `${0.3 + (socialLinks.length * 0.1) + index * 0.05}s` }}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in-right mt-12 lg:mt-0">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                      placeholder="solvespheretech@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-sm sm:text-base"
                    placeholder="Project inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5} // Adjusted rows for mobile
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                {success && <p className="text-brand-green text-sm mt-2 animate-fade-in">{success}</p>}
                {error && <p className="text-destructive text-sm mt-2 animate-fade-in">{error}</p>}

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-once" disabled={loading}>
                  {loading ? 'Sending...' : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
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