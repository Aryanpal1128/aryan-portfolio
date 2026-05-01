import { ArrowUpRight, Code, Server, Database, Wrench } from "lucide-react";
import { FloatingAsterisk } from "./DecorativeElements";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "HTML5", level: "90%" },
        { name: "CSS3 / Tailwind CSS", level: "85%" },
        { name: "JavaScript (ES6+)", level: "88%" },
        { name: "React & Vite", level: "80%" },
        { name: "shadcn/ui", level: "75%" },
        { name: "Responsive Design", level: "85%" },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Node.js", level: "82%" },
        { name: "Express.js", level: "80%" },
        { name: "REST APIs", level: "78%" },
        { name: "JWT Authentication", level: "75%" },
        { name: "API Integration", level: "80%" },
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MongoDB", level: "75%" },
        { name: "IndexedDB / PouchDB", level: "70%" },
        { name: "SQL Basics", level: "65%" },
        { name: "Database Design", level: "70%" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: "88%" },
        { name: "npm / Yarn", level: "85%" },
        { name: "VS Code", level: "92%" },
        { name: "Postman", level: "80%" },
        { name: "Netlify", level: "75%" },
        { name: "Browser DevTools", level: "88%" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50 relative">
      {/* Decorative */}
      <FloatingAsterisk className="absolute bottom-20 left-10 hidden lg:block" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Technical Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            FULL STACK
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
            Technologies
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-background border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline inline-flex">
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
