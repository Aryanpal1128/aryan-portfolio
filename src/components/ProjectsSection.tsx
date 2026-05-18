import { Github, ArrowUpRight, Folder, Sparkles, ExternalLink } from "lucide-react";
import { FloatingAsterisk, ArrowDecor } from "./DecorativeElements";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Food Delivery App (Foodie)",
      category: "Full Stack",
      description: "Developed a full-stack food delivery application with secure authentication and real-world ordering workflows. Implemented JWT-based authentication using cookies and refresh tokens. Built REST APIs for products, orders, and payments. Designed a responsive UI with search, filters, cart, and order tracking. Integrated real-time current location service for improved delivery efficiency.",
      features: ["JWT Authentication", "REST APIs", "Real-time Location", "Order Tracking"],
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Cloudinary"],
      github: "https://github.com/Aryanpal1128/fooddelivery",
      demo: "https://forfoodiee.netlify.app",
      featured: true,
    },
    {
      title: "Job Portal Web Application",
      category: "Full Stack",
      description: "Built a full-stack job portal application enabling users to search and apply for jobs. Implemented role-based authentication for job seekers, recruiters, and admins. Developed RESTful APIs for job postings, applications, and user management. Created an admin dashboard to manage users, job listings, and application statuses.",
      features: ["Role-Based Auth", "Admin Dashboard", "Job Search", "User Management"],
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/Aryanpal1128/GetJob-main",
      featured: true,
    },
    {
      title: "AI Voice Assistant Mobile App",
      category: "Mobile App",
      description: "Developed a cross-platform AI-powered voice assistant mobile application for voice-based interaction. Integrated GPT API for real-time intelligent responses. Implemented speech-to-text and text-to-speech features with a smooth and intuitive, voice-focused user experience.",
      features: ["GPT Integration", "Speech-to-Text", "Text-to-Speech", "Cross-Platform"],
      tags: ["React Native", "GPT API", "Speech Recognition"],
      github: "https://github.com/Aryanpal1128",
      featured: true,
    },
    {
      title: "Weather Application",
      category: "Frontend",
      description: "Built a responsive weather application that fetches and displays real-time weather data using external APIs. Shows current temperature, weather conditions, and location-based updates with a clean and user-friendly interface.",
      features: ["Real-time Data", "API Integration", "Location-based", "Responsive UI"],
      tags: ["JavaScript", "React", "Weather API", "HTML", "CSS"],
      github: "https://github.com/Aryanpal1128/Projects/tree/main/Weatherapp",
      demo: "https://weatherdek.netlify.app",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/50 relative">
      {/* Decorative */}
      <FloatingAsterisk className="absolute bottom-40 right-10 hidden lg:block" />
      <ArrowDecor className="absolute top-20 left-10 hidden lg:block" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label justify-center">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            FEATURED
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
            Projects
          </h3>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing my full-stack development skills, 
            from authentication systems to interactive dashboards.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border card-hover overflow-hidden"
            >
              {/* Category badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                {project.featured && (
                  <span className="p-1.5 rounded-full bg-primary/20">
                    <Sparkles className="w-3 h-3 text-primary" />
                  </span>
                )}
                <span className="code-tag text-xs">{project.category}</span>
              </div>

              <div className="mb-6">
                <Folder className="w-12 h-12 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs text-primary/80 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-secondary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Aryanpal1128" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
