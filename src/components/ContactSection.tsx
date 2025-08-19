import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, FileText } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "support@deepsafe.ai",
      href: "mailto:support@deepsafe.ai"
    },
    {
      icon: Phone,
      label: "+1 23 456 789",
      href: "tel:+123456789"
    },
    {
      icon: FileText,
      label: "contact form",
      href: "#contact-form"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            CONTACT US
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="glass-card border-accent/30 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <method.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <a 
                  href={method.href}
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors duration-200"
                >
                  {method.label}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="glass-card border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground text-sm">©</span>
                </div>
                <span className="text-lg font-semibold">2025 DEEPSAFE. ALL RIGHT RESERVED</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;