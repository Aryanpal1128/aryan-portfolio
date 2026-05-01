import { Rocket } from "lucide-react";

const LearningSection = () => {
  const learningPath = [
    "Advanced Node.js & Express patterns",
    "Backend Architecture & API Design",
    "Database Optimization (MongoDB, SQL)",
    "Authentication & Security Best Practices",
    "React.js Fundamentals",
    "DSA Practice alongside Development",
  ];

  return (
    <section id="learning" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Learning items */}
          <div className="space-y-6">
            <div>
              <span className="section-label">Learning & Growth</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                CURRENTLY
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
                Exploring
              </h3>
            </div>

            <div className="space-y-4">
              {learningPath.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border card-hover group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="group-hover:text-primary transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Career Objective */}
          <div className="relative">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <span className="code-tag">Career Objective</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Looking <span className="font-display italic text-stroke">Forward</span>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Seeking opportunities as a <span className="text-primary font-semibold">Full Stack JavaScript Developer</span> or 
                <span className="text-primary font-semibold"> Software Engineer</span> where I can apply my skills 
                to build scalable, real-world web applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm interested in roles that value clean code, continuous learning, and offer 
                opportunities to work on challenging full-stack projects. Open to frontend or backend focused roles.
              </p>

              {/* Decorative code block */}
              <div className="mt-8 p-4 rounded-xl bg-background/50 border border-border font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span> goal = {'{'}
                </div>
                <div className="pl-4 text-muted-foreground">
                  role: <span className="text-primary">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  focus: <span className="text-primary">"JavaScript Ecosystem"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  passion: <span className="text-primary">"Building Web Apps"</span>
                </div>
                <div className="text-muted-foreground">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
