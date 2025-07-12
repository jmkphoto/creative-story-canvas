import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Users, Mic, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Originals = () => {
  const originals = [
    {
      id: "truckers-in-paradise",
      title: "Truckers in Paradise",
      tagline: "The #1 Trucker Comedy in the Nation (Eventually)",
      status: "In Production",
      type: "Comedy Series",
      description: "Follow the hilarious adventures of Roy and his crew as they navigate life on the road, finding paradise in the most unexpected places.",
      episodes: 8,
      launched: false,
      link: "/truckersinparadise"
    },
    {
      id: "trust-no-one",
      title: "Trust No One",
      tagline: "Everyone Has Secrets",
      status: "Pre-Production",
      type: "Thriller Series",
      description: "A psychological thriller that explores the dark side of small-town America, where nothing is as it seems.",
      episodes: 6,
      launched: false,
      link: "/originals/trust-no-one"
    },
    {
      id: "road-stories",
      title: "Road Stories",
      tagline: "Real Stories from Real Drivers",
      status: "Released",
      type: "Documentary Series",
      description: "Authentic stories from truck drivers across America, showcasing the people behind the wheel.",
      episodes: 12,
      launched: true,
      link: "/originals/road-stories"
    },
    {
      id: "creative-process",
      title: "The Creative Process",
      tagline: "Behind Every Great Story",
      status: "In Development",
      type: "Educational Series",
      description: "A deep dive into how stories are crafted, from concept to completion.",
      episodes: 10,
      launched: false,
      link: "/originals/creative-process"
    }
  ];

  const miniDocs = [
    {
      title: "The Last Gas Station",
      duration: "12 min",
      description: "A family's 50-year legacy comes to an end as the interstate bypasses their town."
    },
    {
      title: "Mobile Dreams",
      duration: "15 min", 
      description: "Converting a truck into a mobile studio while chasing the American Dream."
    },
    {
      title: "Highway Angels",
      duration: "8 min",
      description: "The unsung heroes who help stranded drivers on America's highways."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Original Content</h1>
          <p className="text-xl text-muted-foreground mb-8">
            From comedy series to documentaries, we create original content that entertains, educates, and inspires.
          </p>
        </div>
      </section>

      {/* Featured Original */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Card className="card-cinematic overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center relative group cursor-pointer">
                  <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="secondary">Featured</Badge>
                  <h2 className="text-3xl font-bold mb-4 text-gradient">Truckers in Paradise</h2>
                  <p className="text-muted-foreground mb-6">
                    Our flagship comedy series follows Roy and his crew as they navigate life on the road, 
                    finding paradise in truck stops, rest areas, and the bonds of friendship.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">8 Episodes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Comedy Series</span>
                    </div>
                  </div>
                  <Button size="lg" className="btn-cinematic w-fit" asChild>
                    <Link to="/truckersinparadise">
                      Explore Series
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Originals Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">All Original Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {originals.map((show) => (
              <Card key={show.id} className="card-cinematic overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-card relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={show.launched ? "default" : "secondary"}>
                          {show.status}
                        </Badge>
                        <Badge variant="outline">{show.type}</Badge>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-1">{show.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{show.tagline}</p>
                      <p className="text-white/70 text-xs">{show.episodes} Episodes</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Play className="h-8 w-8 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{show.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={show.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Documentaries */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Mini Documentaries</h2>
              <p className="text-muted-foreground">
                Short-form documentaries that capture real stories from real people.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {miniDocs.map((doc, index) => (
                <Card key={index} className="card-cinematic p-6">
                  <div className="aspect-video bg-gradient-card rounded-lg mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                  <Badge variant="outline" className="mb-3">{doc.duration}</Badge>
                  <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                  <Button size="sm" variant="outline" className="w-full">Watch Now</Button>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link to="/csm-mini-docs">View All Mini Docs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="card-cinematic p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mic className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gradient">Creative Story Podcast</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Weekly conversations about storytelling, creativity, and life on the road. 
                  Featuring interviews with creators, entrepreneurs, and everyday heroes.
                </p>
                <div className="flex gap-4">
                  <Button className="btn-cinematic">Listen Now</Button>
                  <Button variant="outline">Subscribe</Button>
                </div>
              </div>
              <div className="aspect-square bg-gradient-card rounded-xl flex items-center justify-center">
                <Mic className="h-16 w-16 text-white/50" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Have a Story to Tell?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for compelling stories and creative collaborators. 
            Let's explore how we can bring your idea to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-cinematic">Submit Your Idea</Button>
            <Button size="lg" variant="outline">Partnership Opportunities</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Originals;