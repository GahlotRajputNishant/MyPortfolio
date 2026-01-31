const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "SQL" },
        { name: "Python" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Git" },
        { name: "Linux" },
        { name: "Arduino IDE" },
        { name: "MongoDB" },
        { name: "XAMPP" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "DSA" },
        { name: "OOP" },
        { name: "DBMS" },
        { name: "IoT & Embedded" },
        { name: "Operating Systems" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">&gt; skills.load()</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary font-mono">
                {"{"} {category.title} {"}"}
              </h3>

              {/* skills as chips */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-full border border-border bg-muted/30 text-foreground text-sm font-medium hover:border-primary/60 hover:bg-muted/40 transition"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
