import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileVideo, 
  FileAudio, 
  Image as ImageIcon, 
  CheckCircle, 
  AlertTriangle,
  ArrowLeft,
  Download,
  Share
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Detect = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{
    isReal: boolean;
    confidence: number;
    analysis: {
      visualAnalysis: number;
      audioAnalysis: number;
      metadata: number;
    };
  } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setUploadedFile(file);
    startAnalysis();
  };

  const startAnalysis = () => {
    setIsProcessing(true);
    setProgress(0);
    setResult(null);

    // Simulate processing with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          
          // Generate random result for demo
          const isReal = Math.random() > 0.4;
          const confidence = Math.floor(Math.random() * 20) + (isReal ? 80 : 70);
          
          setResult({
            isReal,
            confidence,
            analysis: {
              visualAnalysis: Math.floor(Math.random() * 20) + 80,
              audioAnalysis: Math.floor(Math.random() * 20) + 75,
              metadata: Math.floor(Math.random() * 20) + 85,
            }
          });
          
          toast({
            title: "Analysis Complete",
            description: `File analyzed with ${confidence}% confidence`,
          });
          
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('video/')) return FileVideo;
    if (file.type.startsWith('audio/')) return FileAudio;
    if (file.type.startsWith('image/')) return ImageIcon;
    return Upload;
  };

  const resetDetection = () => {
    setUploadedFile(null);
    setIsProcessing(false);
    setProgress(0);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="glass-card border-b border-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="text-foreground hover:text-accent"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Link to="/" className="text-2xl font-bold gradient-text">
                DEEPSAFE
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">DEEPFAKE DETECTION</h1>
            <p className="text-lg text-muted-foreground">
              Upload your media file to analyze for deepfake content using our advanced AI technology
            </p>
          </div>

          {!uploadedFile && !isProcessing && !result && (
            <Card className="glass-card border-accent/30">
              <CardContent className="p-12">
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                    dragActive 
                      ? 'border-accent bg-accent/10' 
                      : 'border-accent/50 hover:border-accent hover:bg-accent/5'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Upload Media File</h3>
                  <p className="text-muted-foreground mb-6">
                    Drag and drop your video, audio, or image file here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Supported formats: MP4, AVI, MOV, MP3, WAV, JPG, PNG (Max 100MB)
                  </p>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*,audio/*,image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                  
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    className="cyber-button text-accent-foreground font-semibold px-8 py-3"
                  >
                    CHOOSE FILE
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {uploadedFile && (isProcessing || result) && (
            <div className="space-y-6">
              {/* File Info */}
              <Card className="glass-card border-accent/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {(() => {
                      const IconComponent = getFileIcon(uploadedFile);
                      return <IconComponent className="h-6 w-6 text-accent" />;
                    })()}
                    {uploadedFile.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</span>
                    <span>Type: {uploadedFile.type}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Processing */}
              {isProcessing && (
                <Card className="glass-card border-accent/30">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Analyzing Content...</h3>
                        <p className="text-muted-foreground">Our AI is examining your file for signs of manipulation</p>
                      </div>
                      
                      <div className="space-y-4">
                        <Progress value={progress} className="w-full h-3" />
                        <p className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
                            Visual Analysis
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
                            Audio Analysis
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
                            Metadata Check
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Results */}
              {result && (
                <div className="space-y-6">
                  <Card className="glass-card border-accent/30">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <div className="flex items-center justify-center">
                          {result.isReal ? (
                            <CheckCircle className="h-16 w-16 text-green-400" />
                          ) : (
                            <AlertTriangle className="h-16 w-16 text-red-400" />
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-3xl font-bold mb-2">
                            <span className={result.isReal ? 'text-green-400' : 'text-red-400'}>
                              {result.isReal ? 'AUTHENTIC' : 'DEEPFAKE DETECTED'}
                            </span>
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            Confidence: {result.confidence}%
                          </p>
                        </div>
                        
                        <Badge 
                          variant={result.isReal ? 'default' : 'destructive'}
                          className="text-lg px-4 py-2"
                        >
                          {result.isReal ? 'REAL CONTENT' : 'SYNTHETIC CONTENT'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Analysis */}
                  <Card className="glass-card border-accent/30">
                    <CardHeader>
                      <CardTitle>Detailed Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Visual Analysis</span>
                            <span>{result.analysis.visualAnalysis}%</span>
                          </div>
                          <Progress value={result.analysis.visualAnalysis} />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Audio Analysis</span>
                            <span>{result.analysis.audioAnalysis}%</span>
                          </div>
                          <Progress value={result.analysis.audioAnalysis} />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Metadata Check</span>
                            <span>{result.analysis.metadata}%</span>
                          </div>
                          <Progress value={result.analysis.metadata} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={resetDetection}
                      className="cyber-button text-accent-foreground font-semibold px-8"
                    >
                      ANALYZE NEW FILE
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      DOWNLOAD REPORT
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                    >
                      <Share className="h-4 w-4 mr-2" />
                      SHARE RESULTS
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detect;