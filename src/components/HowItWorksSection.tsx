import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Search, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "UPLOAD FILE",
      description: "Select and upload your audio or video file to our secure platform"
    },
    {
      icon: Search,
      title: "LET DEEPSAFE CHECK IT",
      description: "Our AI analyzes the content using advanced deep learning algorithms"
    },
    {
      icon: CheckCircle,
      title: "RESULTS",
      description: "Get instant results with confidence scores and detailed analysis"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            HOW IT WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="glass-card border-accent/30 text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <step.icon className="h-16 w-16 text-accent mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-8">
          <p className="text-2xl font-semibold">
            FAST. EASY. NO TECH SKILL NEEDED
          </p>
          <Button 
            size="lg" 
            className="cyber-button text-accent-foreground font-semibold px-12 py-6 text-lg"
          >
            TRY DEEPSAFE NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;