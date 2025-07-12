import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Storytelling: Why Every Brand Needs a Narrative",
    excerpt: "In an increasingly digital world, the brands that thrive are those that can tell compelling stories. We explore how narrative-driven marketing is reshaping the creative industry.",
    category: "Insights",
    date: "Dec 15, 2024",
    author: "Jordan & Jamie",
    readTime: "8 min read",
    image: "/placeholder-blog-featured.jpg"
  };

  const posts = [
    {
      title: "Behind the Scenes: Creating Truckers in Paradise",
      excerpt: "From concept to screen, discover how we brought our flagship comedy series to life through guerrilla filmmaking and family collaboration.",
      category: "Behind the Scenes",
      date: "Dec 10, 2024",
      author: "Jamie",
      readTime: "6 min read"
    },
    {
      title: "5 Essential Elements of Cinematic Brand Videos",
      excerpt: "Learn the key components that separate amateur brand videos from professional, cinematic content that drives engagement.",
      category: "Video Production",
      date: "Dec 5, 2024", 
      author: "Jordan",
      readTime: "5 min read"
    },
    {
      title: "The Art of Mobile-First Web Design",
      excerpt: "Why starting with mobile constraints leads to better user experiences and stronger creative solutions across all devices.",
      category: "Web Design",
      date: "Nov 28, 2024",
      author: "CSM Team", 
      readTime: "7 min read"
    },
    {
      title: "Building an Entertainment Brand in 2024",
      excerpt: "The lessons we've learned building Creative Story Media into both a service business and entertainment company.",
      category: "Business",
      date: "Nov 20, 2024",
      author: "Jordan & Jamie",
      readTime: "9 min read"
    },
    {
      title: "Color Psychology in Brand Identity",
      excerpt: "How the right color palette can communicate your brand's personality and connect with your target audience on a deeper level.",
      category: "Branding",
      date: "Nov 15, 2024",
      author: "Jordan",
      readTime: "4 min read"
    },
    {
      title: "From Truck Cab to Production Studio",
      excerpt: "The unconventional journey of creating a mobile production setup and how constraints can fuel creativity.",
      category: "Behind the Scenes", 
      date: "Nov 8, 2024",
      author: "Jamie",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Insights", "Behind the Scenes", "Video Production", "Web Design", "Branding", "Business"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Articles & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stories from the road, creative insights, and behind-the-scenes looks 
              at building something extraordinary in the modern creative landscape.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-glow-primary transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-primary/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">FEATURED</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Never Miss a Story
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest articles, behind-the-scenes content, and creative insights 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="shadow-glow-primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;