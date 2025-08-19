import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to DeepSafe!",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen hero-section flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
          DEEPSAFE
        </Link>
      </div>
      
      <div className="w-full max-w-md">
        <Card className="glass-card border-accent/30">
          <CardHeader className="text-center pb-2">
            <div className="mb-4">
              <h1 className="text-2xl font-bold gradient-text mb-2">DEEPSAFE</h1>
              <p className="text-sm text-muted-foreground">See Beyond the Fake</p>
            </div>
            <h2 className="text-3xl font-bold mb-2">LOGIN TO YOUR ACCOUNT</h2>
            <p className="text-muted-foreground">ENTER YOUR CREDENTIALS TO ACCESS YOUR ACCOUNT</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-card border-accent/30 focus:border-accent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4 text-accent" />
                  PASSWORD
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="glass-card border-accent/30 focus:border-accent pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  FORGOT YOUR PASSWORD?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full cyber-button text-accent-foreground font-semibold py-3"
                disabled={isLoading}
              >
                {isLoading ? "LOGGING IN..." : "LOGIN"}
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-accent/20">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;