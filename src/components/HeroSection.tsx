import { Github, Linkedin, ArrowDown, Play, Download } from "lucide-react";
import { FloatingAsterisk, ArrowDecor, StarDecor, CircleDashed } from "./DecorativeElements";
import developerPortrait from "@/assets/developer-portrait.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Decorative elements */}
      <FloatingAsterisk className="absolute top-32 right-[15%] hidden lg:block" />
      <ArrowDecor className="absolute bottom-40 right-20 hidden lg:block animate-float-delayed" />
      <CircleDashed className="absolute top-40 left-10 hidden lg:block animate-spin-slow" />
      <StarDecor className="absolute top-60 left-[20%] hidden md:block" />
      <StarDecor className="absolute bottom-60 left-[10%] hidden md:block" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="animate-fade-in-up stagger-1">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Hi! I'm Aryan Pal
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-2 animate-fade-in-up stagger-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                FULL STACK <span className="text-primary">JS</span>
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display italic text-stroke">
                Developer
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 animate-fade-in-up stagger-3">
              Building scalable web applications with clean UI, efficient logic, 
              and modern technologies. Strong in JavaScript, Java, and problem-solving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up stagger-4">
              <a 
                href="https://drive.google.com/file/d/19eE9dxYUrYSPxcWY0m9mAhRulyRxLxzM/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#projects" className="btn-outline">
                <Play className="w-4 h-4" />
                View Projects
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up stagger-5">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Aryanpal1128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-pal-5a824a338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-4 md:-inset-8 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
              
              {/* Image container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border-2 border-primary/30 lime-glow">
                <img
                  src={developerPortrait}
                  alt="Aryan Pal - Full Stack JavaScript Developer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">Open to Work</span>
                </div>
              </div>

              {/* Tech badge */}
              <div className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">JS + Java</div>
                  <div className="text-xs text-muted-foreground">Full Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
