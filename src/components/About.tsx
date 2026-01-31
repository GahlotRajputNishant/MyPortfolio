import { Code2, Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, label: 'Web Development', description: 'Building responsive, modern web apps' },
    { icon: Cpu, label: 'IoT Systems', description: 'Smart embedded solutions' },
    { icon: Globe, label: 'Full Stack', description: 'End-to-end development' },
    { icon: Zap, label: 'Problem Solver', description: 'Algorithm & DSA enthusiast' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">&gt; about.me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated Computer Science Engineering (IoT) student at Noida Institute of Engineering and Technology
              with hands-on experience in web development, Python programming, and IoT-based projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in building innovative solutions that bridge the gap between software and hardware,
              creating seamless experiences that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy teaching — I've taught basic Python and C programming to help others
              start their journey in tech.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">7.41</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="p-6 bg-card rounded-xl border border-border card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
