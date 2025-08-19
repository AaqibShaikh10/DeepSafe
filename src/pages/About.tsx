import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Target, Users, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced AI Detection",
      description: "Our dual detection system analyzes both visual and audio elements using state-of-the-art machine learning algorithms."
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Get instant results with our optimized processing pipeline that delivers accurate detection in seconds."
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "Achieve over 95% accuracy in deepfake detection across various media formats and manipulation techniques."
    },
    {
      icon: Users,
      title: "Accessible to Everyone",
      description: "No technical expertise required. Our intuitive interface makes deepfake detection accessible to all users."
    }
  ];

  const teamMembers = [
    {
      name: "Muhammad Aaqib Shaikh",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning"
    },
    {
      name: "Abdul Moeed Khan",
      role: "Lead AI Researcher",
      expertise: "Computer Vision"
    },
    {
      name: "Muhammad Saqib Shaikh",
      role: "Data Science Director",
      expertise: "Audio Processing"
    },
    {
      name: "Waleed Akhtar",
      role: "Product Director",
      expertise: "User Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="glass-card border-b border-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/" className="text-2xl font-bold gradient-text">
                DEEPSAFE
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/detect">
                <Button className="cyber-button text-accent-foreground font-semibold">
                  TRY DETECTION
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">DEEPSAFE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to protect digital truth and combat the rising threat of synthetic media manipulation
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="glass-card border-accent/30 mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At DEEPSAFE, we're dedicated to preserving digital integrity in an era of sophisticated synthetic media. 
              Our advanced AI-powered platform helps individuals, organizations, and institutions verify the authenticity 
              of audio and video content, protecting against misinformation and maintaining public trust in digital media.
            </p>
          </CardContent>
        </Card>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-accent/30 text-center">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Problem We Solve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="glass-card border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The rise of deepfake technology poses unprecedented threats to privacy, security, and public trust. 
                Sophisticated AI-generated content can manipulate public opinion, damage reputations, and spread misinformation at scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Without reliable detection tools, individuals and organizations remain vulnerable to these digital deceptions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DEEPSAFE provides cutting-edge AI detection technology that analyzes multiple aspects of media content 
                to identify synthetic manipulation with industry-leading accuracy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform makes advanced deepfake detection accessible to everyone, from individual users to enterprise organizations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Vision */}
        <Card className="glass-card border-accent/30 mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              We envision a future where digital media integrity is protected by intelligent technology, and every individual 
              has the power to distinguish authentic content from synthetic manipulation. Our goal is to create a safer, 
              more trustworthy digital environment for everyone.
            </p>
            <Link to="/detect">
              <Button className="cyber-button text-accent-foreground font-semibold px-8 py-3">
                JOIN OUR MISSION
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-card border-accent/30 text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="glass-card border-accent/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Digital Truth?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust DEEPSAFE to verify their media content and fight against digital deception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="cyber-button text-accent-foreground font-semibold px-8 py-3">
                  GET STARTED FREE
                </Button>
              </Link>
              <Link to="/detect">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3">
                  TRY DETECTION NOW
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
