import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Gamepad2, Briefcase, Video, Palette, Globe, Users, ArrowRight, Star } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow fade-in-up">
            <span className="text-gradient">Stories</span> That Move
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 fade-in-up stagger-1">
            Where professional video meets original entertainment. Watch, play, or hire us to bring your story to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-2">
            <Button size="lg" className="btn-cinematic">
              <Play className="mr-2 h-5 w-5" />
              Watch Something
            </Button>
            <Button size="lg" className="btn-accent">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Play a Game
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-card">
              <Briefcase className="mr-2 h-5 w-5" />
              Hire Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">The Story Behind the Stories</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Creative Story Media was co-founded by Jordan and Jamie, a father-son creative duo who blend 
            storytelling, trucking, and filmmaking into something extraordinary. From our mobile studio 
            to the open road, we create content that moves—literally and emotionally.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-lg px-4 py-2">35+ Weddings</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-lg px-4 py-2">2M+ Video Views</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-lg px-4 py-2">12 Original Projects</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What We Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-cinematic p-6 text-center">
              <Video className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Video Production</h3>
              <p className="text-muted-foreground">Cinematic weddings, corporate content, and brand stories</p>
            </Card>
            <Card className="card-cinematic p-6 text-center">
              <Palette className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Branding & Design</h3>
              <p className="text-muted-foreground">Visual identity that tells your story authentically</p>
            </Card>
            <Card className="card-cinematic p-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web/App Creation</h3>
              <p className="text-muted-foreground">Digital experiences that engage and convert</p>
            </Card>
            <Card className="card-cinematic p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Strategy & Consulting</h3>
              <p className="text-muted-foreground">Strategic guidance to amplify your message</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Original */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Featured Original</h2>
            <Card className="card-cinematic p-8">
              <div className="aspect-video bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Truckers in Paradise</h3>
              <p className="text-xl text-muted-foreground mb-6">The #1 Trucker Comedy in the Nation (Eventually)</p>
              <Button size="lg" className="btn-cinematic">
                <Play className="mr-2 h-5 w-5" />
                Watch Trailer
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Mini Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="card-cinematic p-6 text-center">
                <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-lg font-semibold mb-2">Memory Match</h3>
                <p className="text-muted-foreground mb-4">Test your memory skills</p>
                <Button variant="outline" size="sm">Play Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-xl mb-8 opacity-90">
            Get our free launch checklist plus updates on new episodes, games, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-background/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/70"
            />
            <Button size="lg" variant="secondary">
              Get Free Checklist
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gradient">Latest Insights</h2>
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-cinematic overflow-hidden">
              <div className="aspect-video bg-gradient-card"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Future of Brand Storytelling</h3>
                <p className="text-muted-foreground">How authentic narratives are reshaping digital marketing...</p>
              </div>
            </Card>
            <Card className="card-cinematic overflow-hidden">
              <div className="aspect-video bg-gradient-card"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Behind the Scenes: Truckers in Paradise</h3>
                <p className="text-muted-foreground">Creating comedy gold on the open road...</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What People Say</h2>
          <div className="space-y-8">
            <Card className="card-cinematic p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                "Creative Story Media transformed our wedding video into a cinematic masterpiece. 
                Jordan and Jamie captured moments we didn't even know happened!"
              </p>
              <p className="text-muted-foreground">— Sarah & Mike Johnson</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Build Something Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to turn your story into something extraordinary? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="btn-cinematic">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline">
              Join Our Mailing List
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;