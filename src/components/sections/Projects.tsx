import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/Button';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform Redesign',
      description: 'A complete overhaul of an existing e-commerce site, focusing on user experience, performance, and modern design principles.',
      image: 'https://via.placeholder.com/400x250/34D399/FFFFFF?text=Project+1', // Placeholder image
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      link: '#',
    },
    {
      title: 'Mobile Expense Tracker',
      description: 'Developed a cross-platform mobile application for personal finance tracking, featuring intuitive categorization and reporting.',
      image: 'https://via.placeholder.com/400x250/60A5FA/FFFFFF?text=Project+2', // Placeholder image
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      link: '#',
    },
    {
      title: 'AI-Powered Chatbot Integration',
      description: 'Integrated a custom AI chatbot into a customer support system, enhancing response times and automating routine inquiries.',
      image: 'https://via.placeholder.com/400x250/FCD34D/FFFFFF?text=Project+3', // Placeholder image
      technologies: ['Python', 'TensorFlow', 'Flask', 'AWS Lambda'],
      link: '#',
    },
    {
      title: 'Company Intranet Portal',
      description: 'Built a secure and efficient internal portal for employee communication, document management, and HR processes.',
      image: 'https://via.placeholder.com/400x250/A78BFA/FFFFFF?text=Project+4', // Placeholder image
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure'],
      link: '#',
    },
    {
      title: 'Interactive Data Visualization',
      description: 'Created dynamic dashboards for a financial analytics firm, allowing users to visualize complex data sets in real-time.',
      image: 'https://via.placeholder.com/400x250/FB923C/FFFFFF?text=Project+5', // Placeholder image
      technologies: ['D3.js', 'Vue.js', 'PostgreSQL', 'GraphQL'],
      link: '#',
    },
    {
      title: 'Custom CRM Development',
      description: 'Designed and developed a bespoke Customer Relationship Management system to streamline sales and client management workflows.',
      image: 'https://via.placeholder.com/400x250/E879F9/FFFFFF?text=Project+6', // Placeholder image
      technologies: ['Laravel', 'React', 'MySQL', 'AWS S3'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-inter">
            Our Latest <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of our recent work, showcasing our expertise across various domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up-stagger"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="rounded-t-2xl w-full h-40 sm:h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-5 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-2">{project.title}</CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-5 sm:p-6 pt-0 flex justify-end">
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to action for more projects */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-up" style={{ animationDelay: `${0.2 + projects.length * 0.1}s` }}>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Interested in seeing more of our work or starting a new project?
          </p>
          <Button 
            size="lg"
            onClick={() => window.location.href = '#contact'}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
          >
            Contact Us for a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
