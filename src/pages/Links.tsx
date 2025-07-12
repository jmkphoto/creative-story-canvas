import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Gamepad2, ShoppingBag, Download, Send, User, Instagram, Youtube, MessageCircle, Facebook } from "lucide-react";

const Links = () => {
  const mainLinks = [
    {
      title: "Watch Something",
      description: "Truckers in Paradise & Original Content",
      icon: Play,
      href: "/originals",
      color: "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-500/30"
    },
    {
      title: "Play a Game", 
      description: "Interactive Mini-Games & Experiences",
      icon: Gamepad2,
      href: "/games",
      color: "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30"
    },
    {
      title: "Shop Creative Goods",
      description: "Merchandise, Digital Products & More",
      icon: ShoppingBag,
      href: "/store", 
      color: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
    },
    {
      title: "Get Free Resources",
      description: "Templates, Guides & Creative Tools",
      icon: Download,
      href: "/freebies",
      color: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
    },
    {
      title: "Submit Your Idea",
      description: "Pitch a Project or Collaboration",
      icon: Send,
      href: "/contact",
      color: "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-purple-500/30"
    },
    {
      title: "About Us",
      description: "Meet Jordan & Jamie",
      icon: User,
      href: "/about",
      color: "bg-gradient-to-r from-gray-500/20 to-slate-500/20 border-gray-500/30"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", color: "text-pink-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "text-red-400" },
    { name: "TikTok", icon: MessageCircle, href: "#", color: "text-purple-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "text-blue-400" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-primary">CSM</span>
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">Creative Story Media</h1>
          <p className="text-muted-foreground text-sm">
            All our links in one place
          </p>
        </div>

        {/* Main Links */}
        <div className="space-y-4 mb-8">
          {mainLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className={`${link.color} hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="text-center mb-8">
          <h3 className="font-semibold mb-4 text-muted-foreground">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:scale-110 transition-transform duration-200`}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mb-8 hover:shadow-glow-primary transition-all duration-300">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new content and exclusive offers
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>&copy; 2025 Creative Story Media</p>
          <p className="mt-1">Blending storytelling, trucking, and filmmaking</p>
        </div>
      </div>
    </div>
  );
};

export default Links;