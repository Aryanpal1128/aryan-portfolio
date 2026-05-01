import { Code, Database, Layers, Cpu, Braces, GitBranch } from "lucide-react";

const JavaSkillsSection = () => {
  const javaSkills = [
    {
      icon: Braces,
      title: "Core Java (OOP)",
      items: [
        "Classes & Objects",
        "Inheritance & Polymorphism",
        "Abstraction & Encapsulation",
        "Interfaces & Abstract Classes",
      ],
    },
    {
      icon: Database,
      title: "Collections Framework",
      items: [
        "ArrayList & LinkedList",
        "HashMap & HashSet",
        "TreeMap & TreeSet",
        "Queue & Stack",
      ],
    },
    {
      icon: Cpu,
      title: "Advanced Concepts",
      items: [
        "Exception Handling",
        "Multithreading Basics",
        "Java Memory Concepts",
        "File I/O Operations",
      ],
    },
    {
      icon: Layers,
      title: "DSA with Java",
      items: [
        "Arrays & Strings",
        "Recursion & Backtracking",
        "Dynamic Programming",
        "Greedy Algorithms",
      ],
    },
  ];

  return (
    <section id="java-skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Backend Fundamentals</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            JAVA
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
            Expertise
          </h3>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Strong foundation in Core Java and Object-Oriented Programming with hands-on experience 
            solving DSA problems and implementing optimized solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {javaSkills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DSA Focus Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-xl bg-primary/20">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-xl font-bold mb-2">Problem Solving & Competitive Coding</h4>
              <p className="text-muted-foreground">
                Regular practice solving Data Structures & Algorithms problems with focus on 
                time complexity optimization and clean code implementation.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">DSA</div>
                <div className="text-xs text-muted-foreground">Focused</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">DP</div>
                <div className="text-xs text-muted-foreground">Strong</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavaSkillsSection;
