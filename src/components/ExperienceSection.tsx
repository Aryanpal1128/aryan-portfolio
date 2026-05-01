import { Zap, Target, TrendingUp, Bug } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Zap,
      title: "DSA & Algorithms",
      stats: "Strong",
      description: "Solid foundation in Data Structures & Algorithms. Experience solving problems with efficient time and space complexity.",
    },
    {
      icon: Target,
      title: "Dynamic Programming",
      stats: "Practiced",
      description: "Experience with recursion and DP patterns. Applying problem-solving skills to write efficient backend logic.",
    },
    {
      icon: TrendingUp,
      title: "Full Stack Dev",
      stats: "End-to-End",
      description: "Building complete web applications from frontend UI to backend APIs and database integration.",
    },
    {
      icon: Bug,
      title: "Debugging",
      stats: "Expert",
      description: "Strong debugging skills with systematic approach to identify and fix issues using Browser DevTools and logging.",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Problem Solving</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            DEVELOPMENT
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
            Experience
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-hover text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                <exp.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-2xl font-bold text-primary mb-2">
                {exp.stats}
              </div>
              
              <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
