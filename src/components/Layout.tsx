import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/services" className={`nav-link ${isActive('/services') ? 'text-primary' : ''}`}>
                Services
              </Link>
              <Link to="/originals" className={`nav-link ${isActive('/originals') ? 'text-primary' : ''}`}>
                Originals
              </Link>
              <Link to="/games" className={`nav-link ${isActive('/games') ? 'text-primary' : ''}`}>
                Games
              </Link>
            </div>

            {/* Centered Logo */}
            <Link to="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
              Creative Story Media
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'text-primary' : ''}`}>
                Articles
              </Link>
              <Link to="/store" className={`nav-link ${isActive('/store') ? 'text-primary' : ''}`}>
                Store
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-primary' : ''}`}>
                About
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link to="/client-portal">Client Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Floating AI Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full h-14 w-14 shadow-glow-primary hover:shadow-glow-accent transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gradient">Creative Story Media</h3>
              <p className="text-muted-foreground">
                Blending storytelling, trucking, and filmmaking into something extraordinary.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-muted-foreground hover:text-primary">Video Production</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary">Branding & Design</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary">Web/App Creation</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Originals</h4>
              <div className="space-y-2">
                <Link to="/truckersinparadise" className="block text-muted-foreground hover:text-primary">Truckers in Paradise</Link>
                <Link to="/originals" className="block text-muted-foreground hover:text-primary">Trust No One</Link>
                <Link to="/csm-mini-docs" className="block text-muted-foreground hover:text-primary">Mini Docs</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <Link to="/freebies" className="block text-muted-foreground hover:text-primary">Freebies</Link>
                <Link to="/roadmap" className="block text-muted-foreground hover:text-primary">Roadmap</Link>
                <Link to="/press-kit" className="block text-muted-foreground hover:text-primary">Press Kit</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Creative Story Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;