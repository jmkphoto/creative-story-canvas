import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Lock, Mail, FileText, Image, Video, Palette, CheckCircle } from "lucide-react";
import { useState } from "react";

const Freebies = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const freeResources = [
    {
      title: "Brand Launch Checklist",
      description: "Complete 50-point checklist to ensure your brand launch covers all the essentials",
      type: "PDF Guide",
      icon: CheckCircle,
      downloads: "2,847",
      locked: false
    },
    {
      title: "Social Media Template Pack",
      description: "30 professional templates for Instagram, Facebook, and LinkedIn posts",
      type: "Design Files",
      icon: Image,
      downloads: "1,934",
      locked: true
    },
    {
      title: "Video Production Workflow",
      description: "Step-by-step workflow from concept to final delivery used by our team",
      type: "PDF Guide", 
      icon: Video,
      downloads: "1,567",
      locked: true
    },
    {
      title: "Color Palette Generator",
      description: "Curated color combinations perfect for creative brands and content creators",
      type: "Design Resource",
      icon: Palette,
      downloads: "3,128",
      locked: true
    },
    {
      title: "Content Calendar Template",
      description: "12-month planning template with content ideas and posting schedule",
      type: "Spreadsheet",
      icon: FileText,
      downloads: "2,456",
      locked: true
    },
    {
      title: "Client Onboarding Kit",
      description: "Professional forms and templates to streamline your client intake process",
      type: "Document Pack",
      icon: FileText,
      downloads: "1,789",
      locked: true
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Free Creative Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium templates, guides, and tools to help you build your creative business. 
              No strings attached—just quality resources from our team to yours.
            </p>
            <div className="flex justify-center">
              <Badge className="text-lg px-6 py-2">
                6 Premium Resources • 100% Free
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Email Gate Section */}
      {!emailSubmitted && (
        <section className="py-8 bg-primary/10 border-y border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gradient mb-2">
                  Unlock All Resources
                </h2>
                <p className="text-muted-foreground">
                  Enter your email to instantly access our complete library of free creative resources
                </p>
              </div>
              
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        className="px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <Button size="lg" className="w-full shadow-glow-primary" type="submit">
                      <Download className="mr-2 h-5 w-5" />
                      Get Free Access
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Success Message */}
      {emailSubmitted && (
        <section className="py-8 bg-green-500/10 border-y border-green-500/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-400 mb-2">
                Welcome to the Creative Community!
              </h2>
              <p className="text-muted-foreground">
                Check your email for download links to all resources. All content is now unlocked below.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Available Resources</h2>
            <p className="text-muted-foreground">
              Professional-grade templates and guides used by our own creative team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {freeResources.map((resource, index) => {
              const IconComponent = resource.icon;
              const isLocked = resource.locked && !emailSubmitted;
              
              return (
                <Card key={index} className={`group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 ${isLocked ? 'opacity-75' : ''}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{resource.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Download className="mr-1 h-3 w-3" />
                        {resource.downloads}
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-6 w-6 text-primary mr-3" />
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      {isLocked && <Lock className="h-4 w-4 text-muted-foreground ml-2" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant={isLocked ? "outline" : "default"}
                      className={`w-full ${!isLocked ? 'group-hover:shadow-glow-primary' : ''} transition-all`}
                      disabled={isLocked}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Email Required
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Value Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Why We Share These Free
                </h2>
                <p className="text-muted-foreground mb-4">
                  We believe in supporting the creative community. These are the same templates 
                  and processes we use in our own client work and original content creation.
                </p>
                <p className="text-muted-foreground mb-4">
                  Every resource has been tested in real projects and refined based on what 
                  actually works in the field. No fluff, just practical tools you can use today.
                </p>
                <Button className="shadow-glow-primary">
                  Learn About Our Services
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span>Used in 100+ real client projects</span>
                </div>
                <div className="flex items-center p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span>Updated quarterly with new insights</span>
                </div>
                <div className="flex items-center p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span>Professional-grade quality</span>
                </div>
                <div className="flex items-center p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span>No hidden costs or upsells</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Need Something Custom?
            </h2>
            <p className="text-muted-foreground mb-8">
              These resources not quite what you're looking for? We create custom templates, 
              guides, and creative solutions tailored to your specific needs.
            </p>
            <Button size="lg" className="shadow-glow-primary">
              Request Custom Resource
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Freebies;