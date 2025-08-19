import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, CheckCircle, AlertTriangle } from "lucide-react";

const DetectionSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<'real' | 'fake' | null>(null);

  const handleFileUpload = () => {
    setIsProcessing(true);
    setResult(null);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setResult('real'); // or 'fake' for demo
    }, 3000);
  };

  return (
    <section id="detection" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            DEEPSAFE
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Upload a File to Check If It's Real or Fake
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-accent/30">
            <CardContent className="p-8">
              {!isProcessing && !result && (
                <div className="text-center space-y-6">
                  <div className="border-2 border-dashed border-accent/50 rounded-lg p-12 hover:border-accent transition-colors duration-300">
                    <Upload className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground mb-4">
                      Drag and drop your file here, or click to browse
                    </p>
                    <Button 
                      onClick={handleFileUpload}
                      className="cyber-button text-accent-foreground font-semibold px-8"
                    >
                      UPLOAD A FILE
                    </Button>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-xl text-foreground">Processing...</p>
                </div>
              )}

              {result && (
                <div className="text-center space-y-6">
                  <Card className="glass-card border-accent/30 p-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">RESULTS</h3>
                      <div className="flex items-center justify-center space-x-3">
                        {result === 'real' ? (
                          <CheckCircle className="h-8 w-8 text-green-400" />
                        ) : (
                          <AlertTriangle className="h-8 w-8 text-red-400" />
                        )}
                        <span className="text-3xl font-bold gradient-text">
                          {result === 'real' ? 'REAL' : 'FAKE'}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {result === 'real' 
                          ? 'THE UPLOADED CONTENT IS REAL!' 
                          : 'THE UPLOADED CONTENT IS FAKE!'}
                      </p>
                    </div>
                  </Card>
                  
                  <Button 
                    onClick={() => {
                      setResult(null);
                      setIsProcessing(false);
                    }}
                    className="cyber-button text-accent-foreground font-semibold px-8"
                  >
                    NEW CHECK
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;