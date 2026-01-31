import { ExternalLink, Github, ShoppingCart, Home, Vote, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'Online Book Store',
      date: 'Jan 2025',
      description: 'A responsive web application for online book purchasing with cart management, order processing, and admin inventory control.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      color: 'primary',
    },
    {
      icon: Home,
      title: 'Home Security System',
      date: 'Jan 2025',
      description: 'IoT-based home security using ESP32-CAM with motion, fire, and intrusion detection. Real-time Telegram alerts for remote monitoring.',
      tech: ['ESP32-CAM', 'IoT', 'Telegram Bot API', 'Sensors'],
      color: 'accent',
    },
    {
      icon: Vote,
      title: 'Online Voting System',
      date: '2024',
      description: 'Secure web-based voting system with role-based authentication for voters and administrators ensuring data integrity.',
      tech: ['PHP', 'MySQL', 'Authentication', 'Security'],
      color: 'primary',
    },
    {
      icon: Mic,
      title: 'Audio Controlled Appliances',
      date: '2024',
      description: 'Voice-controlled home automation system enabling speech-based control of electrical appliances for enhanced accessibility.',
      tech: ['Arduino', 'ESP32', 'Voice Recognition', 'IoT'],
      color: 'accent',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">&gt; projects.showcase()</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my journey in web development and IoT solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card p-8 rounded-xl border border-border card-hover overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                project.color === 'accent' 
                  ? 'bg-gradient-to-br from-accent/5 to-transparent' 
                  : 'bg-gradient-to-br from-primary/5 to-transparent'
              }`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    project.color === 'accent' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <project.icon className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{project.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
