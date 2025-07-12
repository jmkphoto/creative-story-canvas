import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Camera, Truck, Map, Heart, Coffee, Star, Users } from "lucide-react";

const BehindTheBrand = () => {
  const documentaryClips = [
    {
      title: "The Origin Story",
      description: "How a father-son creative partnership became a mobile studio",
      duration: "8:45",
      category: "Documentary",
      thumbnail: "origin-story"
    },
    {
      title: "Life on the Road",
      description: "Day-in-the-life following our mobile studio across the country",
      duration: "12:30",
      category: "Lifestyle",
      thumbnail: "life-on-road"
    },
    {
      title: "Creating Truckers in Paradise",
      description: "Behind-the-scenes of our flagship comedy series production",
      duration: "15:20",
      category: "Production",
      thumbnail: "creating-tip"
    },
    {
      title: "The Mobile Studio Tour",
      description: "Inside look at our custom-built traveling production setup",
      duration: "6:15",
      category: "Tech",
      thumbnail: "studio-tour"
    }
  ];

  const photoSeries = [
    {
      title: "Early Days",
      count: 24,
      description: "The first equipment, early projects, and building our vision"
    },
    {
      title: "On Location", 
      count: 48,
      description: "Capturing moments from wedding shoots to commercial productions"
    },
    {
      title: "The Mobile Build",
      count: 36,
      description: "Converting our truck into a professional mobile studio"
    },
    {
      title: "Family Business",
      count: 18,
      description: "Father-son moments and the personal side of our partnership"
    },
    {
      title: "Recent Adventures",
      count: 52,
      description: "Latest travels, new projects, and expanding our creative horizons"
    },
    {
      title: "Behind the Scenes",
      count: 31,
      description: "The real work that goes into every project and production"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Jordan starts freelance video production, Jamie joins as technical support",
      icon: Star
    },
    {
      year: "2021", 
      title: "First Major Project",
      description: "Completed our first commercial brand video, establishing our signature style",
      icon: Camera
    },
    {
      year: "2022",
      title: "Mobile Studio Concept",
      description: "Decided to convert a truck into a mobile creative studio for ultimate freedom",
      icon: Truck
    },
    {
      year: "2023",
      title: "Truckers in Paradise Born",
      description: "Created our first original series, blending our production skills with storytelling",
      icon: Play
    },
    {
      year: "2024",
      title: "Creative Story Media",
      description: "Officially launched as a full-service creative agency and entertainment company",
      icon: Heart
    },
    {
      year: "2025",
      title: "National Recognition",
      description: "Featured in industry publications and expanding our original content library",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Behind the Brand
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The real story behind Creative Story Media. From humble beginnings to hitting the road 
              with a mobile studio, this is our documentary journey of building something extraordinary 
              through family, creativity, and the open road.
            </p>
            <Button size="lg" className="shadow-glow-primary">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Documentary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-glow-primary transition-all duration-300">
              <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">The Creative Story Media Documentary</h3>
                  <p className="text-muted-foreground mb-4">Coming Soon: 45-minute feature documentary</p>
                  <Badge className="text-lg px-4 py-2">Premiering Q2 2025</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  A comprehensive look at how we built a creative business on the road, the challenges 
                  of family partnerships, and the unique approach that sets us apart in the creative industry. 
                  This feature-length documentary follows our journey from concept to execution.
                </p>
                <Button className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Get Notified When Released
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentary Clips */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Documentary Clips</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Short documentary segments available now. Get a taste of our story while we finish 
              the full-length feature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {documentaryClips.map((clip, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{clip.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline">{clip.duration}</Badge>
                  </div>
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {clip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{clip.description}</p>
                  <Button className="w-full group-hover:shadow-glow-primary transition-all">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Clip
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Series */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Photo Chronicles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our evolution from freelancers to a mobile creative studio. 
              Each gallery tells part of our story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {photoSeries.map((series, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square bg-gradient-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                    <Badge variant="outline">{series.count} Photos</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {series.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{series.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Camera className="mr-2 h-4 w-4" />
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key moments that shaped Creative Story Media from an idea to a thriving creative partnership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{milestone.year}</Badge>
                            <h3 className="text-xl font-bold">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">What Drives Us</h2>
              <p className="text-muted-foreground">
                The core values and philosophy that guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Heart className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Family First</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our father-son partnership is the foundation of everything we do. We believe that 
                    strong family relationships create authentic work and genuine connections with our clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Map className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Freedom to Create</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our mobile studio isn't just about logistics—it's about creative freedom. The open road 
                    inspires our best work and allows us to find authentic stories everywhere we go.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Coffee className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Real Stories</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're not interested in creating content for content's sake. Every project, whether 
                    client work or original series, must tell a genuine story that connects with real people.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Truck className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Always Moving Forward</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Like the truckers we feature in our series, we're always moving toward the next opportunity, 
                    the next story, the next adventure. Staying still means missing out on possibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a story to tell, want to collaborate, or just want to follow 
              our journey, we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Follow Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehindTheBrand;