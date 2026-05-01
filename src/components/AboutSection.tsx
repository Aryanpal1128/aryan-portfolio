import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import { FloatingAsterisk } from "./DecorativeElements";

const AboutSection = () => {
  const stats = [
    { value: "Full Stack", label: "JavaScript" },
    { value: "Java", label: "Fundamentals" },
    { value: "DSA", label: "Problem Solving" },
    { value: "10+", label: "Projects Built" },
  ];

  const highlights = [
    "Full Stack JavaScript Development",
    "Strong Java & OOP Fundamentals",
    "Clean UI & Efficient Logic",
    "DSA & Problem Solving",
    "REST API Development",
    "Continuous Learning Mindset",
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Decorative */}
      <FloatingAsterisk className="absolute top-20 right-10 hidden lg:block" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <span className="section-label">About Me</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                FULL STACK
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
                Developer
              </h3>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Aryan Pal, a Full-Stack JavaScript Developer with strong Java fundamentals. 
              I specialize in building real-world, scalable web applications that combine 
              clean user interfaces with efficient backend logic.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My approach to development focuses on writing clean, maintainable code that solves 
              real problems. With a solid foundation in both frontend technologies (React, Tailwind) 
              and backend development (Node.js, Express), I deliver complete solutions from 
              concept to deployment. I'm passionate about continuous learning and constantly 
              improving my problem-solving skills through DSA practice.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let's Work Together
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
