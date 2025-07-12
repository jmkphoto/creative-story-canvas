import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Camera, Truck, Users, Heart, Lightbulb, Target } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Jordan",
      role: "Co-Founder & Creative Director",
      bio: "With over a decade of experience in video production and brand strategy, Jordan brings the vision and artistic direction that defines Creative Story Media's unique approach to storytelling.",
      specialties: ["Video Production", "Brand Strategy", "Creative Direction", "Storytelling"]
    },
    {
      name: "Jamie", 
      role: "Co-Founder & Content Creator",
      bio: "Jamie combines technical expertise with creative passion, handling everything from web development to on-screen talent. The driving force behind our original content and digital innovations.",
      specialties: ["Web Development", "Content Creation", "Technical Production", "Digital Strategy"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "Every story we tell comes from a genuine place. We believe in the power of authentic narratives to connect people and build lasting relationships."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation", 
      description: "We push boundaries and explore new ways to blend traditional storytelling with modern technology and unconventional approaches."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Our best work comes from collaboration. We partner closely with clients and embrace the creative input of everyone involved in the process."
    },
    {
      icon: Target,
      title: "Purpose-Driven Work",
      description: "We're not just creating content for the sake of it. Every project serves a purpose and aims to make a meaningful impact on its audience."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              About Creative Story Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Where storytelling meets the open road. We're a father-son creative duo 
              building something extraordinary at the intersection of professional services 
              and original entertainment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-lg px-4 py-2">Est. 2024</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">Father & Son Team</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">Mobile Studio</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">Our Origin Story</h2>
                <p className="text-muted-foreground mb-4">
                  Creative Story Media was born from an unlikely combination: professional video production 
                  experience, a passion for storytelling, and life on the road. What started as a creative 
                  experiment has evolved into a unique studio that serves clients while creating original 
                  entertainment content.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey began with a simple idea: what if we could blend the freedom of the open road 
                  with the precision of professional creative work? Operating from our mobile studio, we've 
                  discovered that some of our best creative work happens when we're not confined to a 
                  traditional office space.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve clients across the country while developing original series like 
                  "Truckers in Paradise" and building interactive experiences that bring our stories to life.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-primary/20 rounded-lg p-8">
                  <Truck className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gradient mb-2">Mobile Creative Studio</h3>
                  <p className="text-muted-foreground">
                    Professional production capabilities, anywhere the road takes us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Meet the Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A father-son creative partnership that brings together decades of experience 
              with fresh perspectives and boundless energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gradient">{founder.name}</CardTitle>
                  <Badge variant="outline">{founder.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{founder.bio}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our creative process and shape every project we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <IconComponent className="h-8 w-8 text-primary mr-3" />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">By the Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground">Weddings Filmed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Video Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Original Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Miles Traveled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Ready to tell your story? Have questions about our process? 
                We'd love to hear from you.
              </p>
            </div>

            <Card className="hover:shadow-glow-primary transition-all duration-300">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project or ask us a question..."
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button size="lg" className="w-full shadow-glow-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span className="text-muted-foreground">Currently: Somewhere on the open road</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <a href="mailto:hello@creativestorymedia.com" className="text-primary hover:text-primary-glow transition-colors">
                  hello@creativestorymedia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;