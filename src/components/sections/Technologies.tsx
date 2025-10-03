import { Cloud, Code, Database, Smartphone, Globe } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      name: 'Frontend',
      icon: Globe,
      technologies: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'gRPC', logo: '/grpc_logo.png' }, // Local image from public folder
      ],
    },
    {
      name: 'Backend',
      icon: Code,
      technologies: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
        { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg' },
        { name: 'Fastify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg' },
      ],
    },
    {
      name: 'Databases',
      icon: Database,
      technologies: [
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
        { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      ],
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      technologies: [
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' }, // Added Azure for completeness
        { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' }, // Added Google Cloud for completeness
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
        { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
        { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      ],
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      technologies: [
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
            Our <span className="text-primary">Core Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage a diverse and modern tech stack to build robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.15}s` }}>
              <div className="flex items-center justify-center mb-8">
                <category.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-3xl font-bold text-foreground">{category.name}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm hover:shadow-medium transition-all duration-300 transform hover:scale-105 group"
                  >
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="h-12 w-12 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
