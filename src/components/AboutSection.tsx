import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* What Makes Us Different */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              What Makes Us Different
            </h2>
          </div>
          
          <Card className="glass-card border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike most tools, DEEPSAFE uses a dual detection system that analyzes both visuals and sound. 
                With real-time results, a clean interface, and AI accuracy, we make deepfake detection fast, 
                easy, and accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              WHO WE ARE
            </h2>
          </div>
          
          <Card className="glass-card border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center">
                  At DEEPSAFE, we're on a mission to protect{" "}
                  <span className="gradient-text">DIGITAL TRUTH</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Our platform uses advanced AI to detect fake audio and video content — known as Deep-fakes — in real time. 
                  In a world where misinformation spreads quickly, we help individuals, journalists, businesses, and institutions 
                  verify the authenticity of media before it causes harm.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why We Exist */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Why We Exist
            </h2>
          </div>
          
          <Card className="glass-card border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The rise of Deep-fakes poses a serious threat to privacy, reputation, and public trust.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fake videos can mislead viewers, manipulate opinions, and damage credibility. 
                We built DEEPSAFE to counter this — by making AI-driven verification fast, accessible, and reliable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Vision */}
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Our Vision
            </h2>
          </div>
          
          <Card className="glass-card border-accent/30 max-w-4xl mx-auto mb-12">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To build a future where media integrity is protected by intelligent technology — and every individual 
                has the power to tell real from fake.
              </p>
            </CardContent>
          </Card>

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

export default AboutSection;