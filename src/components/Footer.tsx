import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        {/* Newsletter section */}
        <div className="text-center mb-12 pb-12 border-b border-border">
          <span className="section-label justify-center">Subscribe Newsletter</span>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            STAY UP TO DATE WITH
          </h3>
          <h4 className="text-2xl md:text-3xl font-display italic text-stroke mb-8">
            Newsletter
          </h4>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-full bg-card border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg">
              DEV<span className="text-primary">.</span>
            </span>
          </a>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Aryanpal1128"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-pal-5a824a338/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aryanpal1128@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Built with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>and algorithms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
