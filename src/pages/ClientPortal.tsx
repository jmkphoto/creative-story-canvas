import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User, Mail, Key, ArrowRight } from "lucide-react";

const ClientPortal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gradient mb-2">Client Portal</h1>
            <p className="text-muted-foreground">
              Welcome back. Access your project files, review progress, and communicate with our team.
            </p>
          </div>

          <Card className="hover:shadow-glow-primary transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Sign In to Your Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:text-primary-glow transition-colors">
                  Forgot password?
                </a>
              </div>
              <Button size="lg" className="w-full shadow-glow-primary">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't have an account yet?
            </p>
            <Button variant="outline">
              Request Access
            </Button>
          </div>

          <div className="text-center mt-8 p-4 bg-card/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Client tools coming soon!</strong><br />
              We're building an amazing portal where you'll be able to:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• View project progress and timelines</li>
              <li>• Download completed files and assets</li>
              <li>• Communicate directly with our team</li>
              <li>• Access exclusive content and updates</li>
            </ul>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Need immediate assistance?{" "}
              <a 
                href="mailto:hello@creativestorymedia.com" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Contact us directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;