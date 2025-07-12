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

            {/* Centered Logo - Clickable Home Button */}
            <Link to="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
              Creative Story Media
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'text-primary' : ''}`}>
                Blog
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
          {/* Newsletter Signup */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gradient mb-4">Subscribe for Creative Drops</h3>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gradient">Creative Story Media</h3>
              <p className="text-muted-foreground mb-4">
                Blending storytelling, trucking, and filmmaking into something extraordinary.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TikTok</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">Services</Link>
                <Link to="/originals" className="block text-muted-foreground hover:text-primary transition-colors">Originals</Link>
                <Link to="/games" className="block text-muted-foreground hover:text-primary transition-colors">Games</Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link to="/store" className="block text-muted-foreground hover:text-primary transition-colors">Store</Link>
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
              </div>
            </div>

            {/* Originals */}
            <div>
              <h4 className="font-semibold mb-4">Originals</h4>
              <div className="space-y-2">
                <Link to="/truckersinparadise" className="block text-muted-foreground hover:text-primary transition-colors">Truckers in Paradise</Link>
                <Link to="/originals" className="block text-muted-foreground hover:text-primary transition-colors">Trust No One</Link>
                <Link to="/csm-mini-docs" className="block text-muted-foreground hover:text-primary transition-colors">Mini Docs</Link>
                <Link to="/behind-the-brand" className="block text-muted-foreground hover:text-primary transition-colors">Behind the Brand</Link>
              </div>
            </div>

            {/* Resources & Legal */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 mb-4">
                <Link to="/freebies" className="block text-muted-foreground hover:text-primary transition-colors">Freebies</Link>
                <Link to="/roadmap" className="block text-muted-foreground hover:text-primary transition-colors">Roadmap</Link>
                <Link to="/press-kit" className="block text-muted-foreground hover:text-primary transition-colors">Press Kit</Link>
                <Link to="/style-guide" className="block text-muted-foreground hover:text-primary transition-colors">Style Guide</Link>
              </div>
              <div className="space-y-1 text-sm">
                <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="block text-muted-foreground hover:text-primary transition-colors">Cookie Notice</Link>
                <Link to="/affiliate" className="block text-muted-foreground hover:text-primary transition-colors">Affiliate Disclosure</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">&copy; 2025 Creative Story Media. All Rights Reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Contact:</span>
              <a href="mailto:hello@creativestorymedia.com" className="text-primary hover:text-primary-glow transition-colors">
                hello@creativestorymedia.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;