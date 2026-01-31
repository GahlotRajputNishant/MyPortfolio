import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering (IoT)',
      institution: 'Noida Institute of Engineering and Technology',
      location: 'Greater Noida, UP',
      year: '2023 - Pursuing',
      grade: 'CGPA: 7.41',
      current: true,
    },
    {
      degree: 'Higher Secondary School',
      field: 'Science (PCM)',
      institution: 'Sohan Lal Arya Inter College',
      location: 'Kalyanpur, JH',
      year: '2022',
      grade: 'Percentage: 86%',
      current: false,
    },
    {
      degree: 'Secondary School',
      field: 'General Education',
      institution: 'GMV Public School',
      location: 'Bokaro Steel City, JH',
      year: '2020',
      grade: 'Percentage: 75%',
      current: false,
    },
  ];

  const certifications = [
    {
      title: 'Networking Essentials',
      issuer: 'Cisco',
      icon: Award,
    },
    {
      title: 'Exploring Networking with Cisco Packet Tracer',
      issuer: 'Cisco',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">&gt; education.timeline()</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Journey
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={edu.degree + edu.year} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 w-5 h-5 rounded-full border-4 ${
                      edu.current 
                        ? 'bg-primary border-primary animate-pulse-glow' 
                        : 'bg-card border-border'
                    }`} />

                    <div className={`p-6 rounded-xl border ${
                      edu.current 
                        ? 'bg-card border-primary/30 glow-border' 
                        : 'bg-card border-border'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.field}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-mono rounded-full ${
                          edu.current 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-primary font-semibold">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 bg-card rounded-xl border border-border card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <cert.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">Issued by {cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
