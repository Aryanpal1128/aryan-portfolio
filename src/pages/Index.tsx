import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JavaSkillsSection from "@/components/JavaSkillsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import LearningSection from "@/components/LearningSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <JavaSkillsSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
