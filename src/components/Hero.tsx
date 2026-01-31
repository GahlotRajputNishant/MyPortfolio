import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Vite/React: public folder files are served from root
  // Put your PDF here: /public/resume.pdf
  const resumeUrl = "/resume.pdf";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden grid-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Terminal-style intro */}
        <div className="mb-8 animate-slide-up">
          <span className="font-mono text-sm text-muted-foreground">
            &gt; initializing portfolio...
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-gradient">Nishant</span>{" "}
          <span className="text-foreground">Kumar</span>
        </h1>

        {/* Title */}
        <div
          className="mb-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">&lt;</span>
            Full Stack Developer & IoT Enthusiast
            <span className="text-primary">/&gt;</span>
          </p>
        </div>

        {/* Description */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          B.Tech Computer Science Engineering (IoT) student passionate about
          building innovative web applications and embedded system solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>


          {/* ✅ Download Resume */}
          <a href={resumeUrl} download="Nishant_Kumar_Resume.pdf">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-6 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="https://github.com/GahlotRajputNishant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-kumar-a489a5275/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:nishantsingh9939600@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Location badge */}
      <div
        className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground animate-slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-primary">📍</span> Greater Noida, UP, India
      </div>
    </section>
  );
};

export default Hero;
