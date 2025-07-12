import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, Users, Star, Camera, Filter, Search } from "lucide-react";

const CSMMiniDocs = () => {
  const miniDocs = [
    {
      title: "The Last Diner",
      description: "A 24-hour truck stop diner fights to stay open as the highway bypasses their town",
      duration: "18:45",
      views: "45.2K",
      rating: 4.8,
      category: "Human Interest",
      status: "Featured",
      releaseDate: "Dec 2024"
    },
    {
      title: "Small Town Mechanics",
      description: "Three generations of a family-run auto shop adapt to changing times and technology",
      duration: "22:30",
      views: "38.7K", 
      rating: 4.9,
      category: "Business",
      status: "Popular",
      releaseDate: "Nov 2024"
    },
    {
      title: "The Radio DJ",
      description: "Late-night radio host connects truckers across the country with music and conversation",
      duration: "15:20",
      views: "52.1K",
      rating: 4.7,
      category: "Culture",
      status: "Trending",
      releaseDate: "Oct 2024"
    },
    {
      title: "Ghost Towns of Route 66",
      description: "Exploring abandoned towns and the stories they left behind along America's most famous highway",
      duration: "25:15",
      views: "67.3K",
      rating: 4.9,
      category: "History",
      status: "Popular",
      releaseDate: "Sep 2024"
    },
    {
      title: "Truck Stop Artists",
      description: "Discovering unexpected creativity in the most unlikely places along America's highways",
      duration: "19:45",
      views: "41.8K",
      rating: 4.6,
      category: "Art & Culture",
      status: "New",
      releaseDate: "Aug 2024"
    },
    {
      title: "The Night Shift",
      description: "Following the overnight workers who keep America's supply chain moving while most people sleep",
      duration: "21:30",
      views: "35.9K",
      rating: 4.8,
      category: "Lifestyle",
      status: "Popular",
      releaseDate: "Jul 2024"
    },
    {
      title: "Highway Legends",
      description: "Veteran truckers share their most memorable stories from decades on the road",
      duration: "28:00",
      views: "78.4K",
      rating: 5.0,
      category: "Documentary",
      status: "Fan Favorite",
      releaseDate: "Jun 2024"
    },
    {
      title: "Roadside Restaurants",
      description: "The family-owned restaurants that have fed travelers for generations",
      duration: "17:20",
      views: "44.6K",
      rating: 4.7,
      category: "Food & Travel",
      status: "Popular",
      releaseDate: "May 2024"
    },
    {
      title: "CB Radio Culture",
      description: "The unique communication culture that connects drivers across the nation",
      duration: "16:45",
      views: "33.2K",
      rating: 4.5,
      category: "Technology",
      status: "Educational",
      releaseDate: "Apr 2024"
    }
  ];

  const categories = ["All", "Human Interest", "Business", "Culture", "History", "Art & Culture", "Lifestyle", "Documentary", "Food & Travel", "Technology"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-yellow-500/20 text-yellow-400";
      case "Popular": return "bg-green-500/20 text-green-400";
      case "Trending": return "bg-red-500/20 text-red-400";
      case "New": return "bg-blue-500/20 text-blue-400";
      case "Fan Favorite": return "bg-purple-500/20 text-purple-400";
      case "Educational": return "bg-orange-500/20 text-orange-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              CSM Mini Documentaries
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Short-form documentary films exploring the authentic stories and hidden cultures 
              along America's highways. Real people, real stories, captured with cinematic quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="text-lg px-4 py-2">15-30 Minute Films</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">Real Stories</Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">Cinematic Quality</Badge>
            </div>
            <Button size="lg" className="shadow-glow-primary">
              <Play className="mr-2 h-5 w-5" />
              Watch Latest Documentary
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Documentary */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-glow-primary transition-all duration-300">
              <div className="aspect-video bg-gradient-primary/20 flex items-center justify-center relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500/20 text-yellow-400">Featured</Badge>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Badge variant="outline">18:45</Badge>
                  <Badge variant="outline">45.2K views</Badge>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">The Last Diner</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">Human Interest</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      4.8 Rating
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">Released Dec 2024</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A 24-hour truck stop diner fights to stay open as the highway bypasses their town. 
                  Follow the owner's emotional journey as she decides whether to close the family business 
                  that has served travelers for over 40 years.
                </p>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Full Documentary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search documentaries..." 
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Complete Collection</h2>
              <p className="text-muted-foreground">
                9 mini documentaries exploring the real stories behind America's highway culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniDocs.map((doc, index) => (
                <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center relative">
                    <div className="absolute top-2 left-2">
                      <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 flex gap-1">
                      <Badge variant="outline" className="text-xs">{doc.duration}</Badge>
                    </div>
                    <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                      <Play className="h-6 w-6 text-primary ml-1" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{doc.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        {doc.rating}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {doc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {doc.views} views
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {doc.releaseDate}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Notes */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-4">Our Documentary Approach</h2>
              <p className="text-muted-foreground">
                Every mini documentary is crafted with the same attention to storytelling and 
                cinematic quality as feature-length films.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Camera className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Authentic Stories</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't script our documentaries. Instead, we spend time getting to know our 
                    subjects and let their authentic stories emerge naturally through patient observation 
                    and genuine conversation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <CardTitle className="text-xl">Community Focus</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each documentary explores not just individual stories, but the broader communities 
                    and cultures that shape life along America's highways. We're documenting a way of 
                    life that's often overlooked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Never Miss a New Documentary
            </h2>
            <p className="text-muted-foreground mb-8">
              We release new mini documentaries monthly. Subscribe to get notified when 
              new stories are available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <Play className="mr-2 h-5 w-5" />
                Subscribe to Series
              </Button>
              <Button variant="outline" size="lg">
                <Camera className="mr-2 h-5 w-5" />
                Submit a Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">9</div>
                <div className="text-sm text-muted-foreground">Documentaries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">387K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4.8</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">24</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSMMiniDocs;