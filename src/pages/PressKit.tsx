import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Image, Video, Users, Building, Mail, ExternalLink } from "lucide-react";

const PressKit = () => {
  const mediaAssets = [
    {
      category: "Logos & Branding",
      icon: Image,
      items: [
        { name: "Primary Logo (PNG)", size: "2048x512px", format: "PNG" },
        { name: "Logo Mark Only", size: "512x512px", format: "PNG" },
        { name: "White Logo", size: "2048x512px", format: "PNG" },
        { name: "Black Logo", size: "2048x512px", format: "PNG" },
        { name: "Vector Logos", size: "Scalable", format: "SVG" }
      ]
    },
    {
      category: "Company Photos",
      icon: Image,
      items: [
        { name: "Founder Headshots", size: "1920x1080px", format: "JPG" },
        { name: "Mobile Studio Setup", size: "1920x1080px", format: "JPG" },
        { name: "Behind the Scenes", size: "Various", format: "JPG" },
        { name: "Production Photos", size: "1920x1080px", format: "JPG" },
        { name: "Team at Work", size: "1920x1080px", format: "JPG" }
      ]
    },
    {
      category: "Show Assets",
      icon: Video,
      items: [
        { name: "Truckers in Paradise Trailer", size: "1920x1080px", format: "MP4" },
        { name: "Show Screenshots", size: "1920x1080px", format: "JPG" },
        { name: "Character Assets", size: "Various", format: "PNG" },
        { name: "Episode Thumbnails", size: "1280x720px", format: "JPG" },
        { name: "Promotional Videos", size: "1920x1080px", format: "MP4" }
      ]
    },
    {
      category: "Documents",
      icon: FileText,
      items: [
        { name: "Company Overview", size: "2 pages", format: "PDF" },
        { name: "Founder Bios", size: "1 page", format: "PDF" },
        { name: "Show One-Sheet", size: "1 page", format: "PDF" },
        { name: "Services Fact Sheet", size: "1 page", format: "PDF" },
        { name: "Press Release Template", size: "2 pages", format: "DOCX" }
      ]
    }
  ];

  const companyFacts = [
    { label: "Founded", value: "2024" },
    { label: "Founders", value: "Jordan & Jamie (Father-Son Team)" },
    { label: "Headquarters", value: "Mobile Studio (Currently on the road)" },
    { label: "Industry", value: "Creative Services & Entertainment" },
    { label: "Specialties", value: "Video Production, Branding, Original Content" },
    { label: "Notable Projects", value: "35+ Weddings, 2M+ Video Views" },
    { label: "Original Series", value: "Truckers in Paradise, Trust No One" },
    { label: "Website", value: "creativestorymedia.com" }
  ];

  const keyMessages = [
    {
      title: "Unique Mobile Studio Concept",
      content: "Creative Story Media operates from a mobile studio, bringing professional production capabilities anywhere the road leads. This innovative approach allows for authentic storytelling and unparalleled creative freedom."
    },
    {
      title: "Father-Son Creative Partnership",
      content: "Founded by Jordan and Jamie, a father-son duo combining decades of creative experience with fresh perspectives and boundless energy. Their unique family dynamic brings authenticity to every project."
    },
    {
      title: "Dual Business Model",
      content: "We're both a professional creative services agency and an entertainment company, creating original content while serving clients. This dual approach enriches both sides of our business."
    },
    {
      title: "Original Entertainment Content",
      content: "Our flagship series 'Truckers in Paradise' represents a new kind of comedy that blends professional production with authentic storytelling about life on the road."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Press Kit
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about Creative Story Media. 
              High-resolution assets, company information, and media resources for journalists, 
              partners, and collaborators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Press Kit
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Media Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Company Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {companyFacts.map((fact, index) => (
                <Card key={index} className="text-center hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">{fact.label}</h4>
                    <p className="text-sm text-muted-foreground">{fact.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Media Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaAssets.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center">
                        <IconComponent className="h-6 w-6 text-primary mr-3" />
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                            <div>
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{item.format}</Badge>
                                <Badge variant="outline" className="text-xs">{item.size}</Badge>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4">
                        <Download className="mr-2 h-4 w-4" />
                        Download All {category.category}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Messages */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Key Messages</h2>
            <div className="space-y-6">
              {keyMessages.map((message, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{message.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Founder Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Jordan</CardTitle>
                  <Badge variant="outline">Co-Founder & Creative Director</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    With over a decade of experience in video production and brand strategy, Jordan brings 
                    the vision and artistic direction that defines Creative Story Media's unique approach 
                    to storytelling. His background spans wedding videography, commercial production, and 
                    creative direction for various brands.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Background:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 10+ years in video production</li>
                      <li>• Former commercial director</li>
                      <li>• 35+ wedding films produced</li>
                      <li>• Brand strategy consultant</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Jamie</CardTitle>
                  <Badge variant="outline">Co-Founder & Content Creator</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Jamie combines technical expertise with creative passion, handling everything from 
                    web development to on-screen talent. As the driving force behind our original content 
                    and digital innovations, Jamie brings fresh energy and modern perspectives to the 
                    creative process.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Background:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Full-stack web development</li>
                      <li>• Content creation & editing</li>
                      <li>• On-screen talent and writing</li>
                      <li>• Digital strategy & innovation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    General Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:press@creativestorymedia.com" className="text-primary hover:text-primary-glow transition-colors">
                      press@creativestorymedia.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Best For</h4>
                    <p className="text-muted-foreground">General press inquiries, interview requests, feature stories</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-6 w-6 text-primary mr-3" />
                    Partnership Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:partnerships@creativestorymedia.com" className="text-primary hover:text-primary-glow transition-colors">
                      partnerships@creativestorymedia.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Within 48 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Best For</h4>
                    <p className="text-muted-foreground">Brand partnerships, collaboration opportunities, sponsorships</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                For immediate assistance or urgent inquiries, please call us directly.
              </p>
              <Button size="lg" className="shadow-glow-primary">
                <ExternalLink className="mr-2 h-5 w-5" />
                Schedule Media Interview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Rights */}
      <section className="py-8 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Usage Rights & Guidelines</h3>
            <p className="text-sm text-muted-foreground">
              All assets in this press kit are available for editorial use by media outlets covering 
              Creative Story Media. Commercial use requires prior written permission. When using our 
              materials, please credit "Creative Story Media" and include a link to our website when possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressKit;