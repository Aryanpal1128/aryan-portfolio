import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FloatingAsterisk, ArrowDecor } from "./DecorativeElements";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        "service_vx7uygw",
        "template_pbgtits",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aryan Pal",
        },
        "BRY6uivCM-9qMoXTo"
      );
      
      toast({
        title: "Message Sent Successfully! ✉️",
        description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Decorative */}
      <FloatingAsterisk className="absolute top-20 left-10 hidden lg:block" />
      <ArrowDecor className="absolute bottom-40 right-20 hidden lg:block" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact info */}
          <div className="space-y-8">
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                LET'S WORK
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-stroke mt-2">
                Together
              </h3>
            </div>

            <p className="text-muted-foreground text-lg">
              Ready to discuss opportunities or collaborate on a project? 
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+919873299512"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call</div>
                  <div className="font-medium group-hover:text-primary transition-colors">+91 98732 99512</div>
                </div>
              </a>

              <a
                href="mailto:aryanpal1128@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium group-hover:text-primary transition-colors">aryanpal1128@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">India</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Aryanpal1128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-pal-5a824a338/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-muted-foreground mb-8">
              I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${
                    errors.name ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${
                    errors.email ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-background border ${
                    errors.message ? "border-destructive" : "border-border"
                  } focus:border-primary focus:outline-none transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
