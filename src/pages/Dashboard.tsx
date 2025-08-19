import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  History, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  User, 
  LogOut,
  BarChart3,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [recentScans] = useState([
    { id: 1, filename: "video_sample_1.mp4", result: "real", confidence: 94, date: "2024-01-15" },
    { id: 2, filename: "audio_clip_2.wav", result: "fake", confidence: 87, date: "2024-01-14" },
    { id: 3, filename: "interview_3.mp4", result: "real", confidence: 96, date: "2024-01-13" },
    { id: 4, filename: "deepfake_test.mp4", result: "fake", confidence: 91, date: "2024-01-12" },
  ]);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const stats = {
    totalScans: 127,
    realContent: 89,
    fakeContent: 38,
    avgConfidence: 92
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="glass-card border-b border-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold gradient-text">
              DEEPSAFE
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-accent"
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-foreground hover:text-accent"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-lg">Monitor your deepfake detection activity and analyze media files.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Scans</p>
                  <p className="text-3xl font-bold">{stats.totalScans}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Real Content</p>
                  <p className="text-3xl font-bold text-green-400">{stats.realContent}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fake Content</p>
                  <p className="text-3xl font-bold text-red-400">{stats.fakeContent}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Confidence</p>
                  <p className="text-3xl font-bold">{stats.avgConfidence}%</p>
                </div>
                <Shield className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/detect">
                  <Button className="w-full cyber-button text-accent-foreground font-semibold">
                    <Upload className="h-4 w-4 mr-2" />
                    New Detection
                  </Button>
                </Link>
                <Link to="/history">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <History className="h-4 w-4 mr-2" />
                    View History
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Recent Scans */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Recent Scans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentScans.map((scan) => (
                    <div key={scan.id} className="flex items-center justify-between p-4 glass-card border-accent/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${scan.result === 'real' ? 'bg-green-400/20' : 'bg-red-400/20'}`}>
                          {scan.result === 'real' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{scan.filename}</p>
                          <p className="text-sm text-muted-foreground">{scan.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={scan.result === 'real' ? 'default' : 'destructive'}>
                          {scan.result.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{scan.confidence}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/history">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      View All Scans
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;