import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DetectionSection from "@/components/DetectionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DetectionSection />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
