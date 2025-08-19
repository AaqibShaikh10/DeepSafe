import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Pro<span className="gradient-text">t</span>ect the Truth
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                De<span className="gradient-text">t</span>ect the Fake
              </h2>
            </div>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
              AI-powered Deep-fake detection that analyzes audio and video in real time. 
              Ensure authenticity, fight misinformation, and stay one step ahead of deception.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/detect">
                <Button 
                  size="lg" 
                  className="cyber-button text-accent-foreground font-semibold px-8 py-6 text-lg"
                >
                  DETECT
                </Button>
              </Link>
              <Link to="/login">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg transition-all duration-300"
                >
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroRobot} 
                alt="AI Robot for DeepFake Detection" 
                className="w-full h-auto max-w-lg mx-auto rounded-3xl shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 50px rgba(0, 255, 255, 0.3))' }}
              />
            </div>
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;