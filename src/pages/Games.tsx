import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, Star, Clock, Users } from "lucide-react";

const Games = () => {
  const games = [
    {
      title: "Trucker Memory Match",
      category: "Truckers in Paradise",
      description: "Match highway signs and truck parts in this classic memory game",
      difficulty: "Easy",
      playTime: "5 min",
      players: "1,247"
    },
    {
      title: "Route Puzzle",
      category: "Truckers in Paradise", 
      description: "Help Roy plan the perfect cross-country delivery route",
      difficulty: "Medium",
      playTime: "10 min",
      players: "892"
    },
    {
      title: "Diner Dash",
      category: "Truckers in Paradise",
      description: "Serve hungry truckers at the Paradise Truck Stop",
      difficulty: "Hard", 
      playTime: "15 min",
      players: "1,456"
    },
    {
      title: "Brand Builder",
      category: "CSM Originals",
      description: "Create the perfect logo and brand identity in this puzzle game",
      difficulty: "Medium",
      playTime: "8 min", 
      players: "634"
    },
    {
      title: "Story Spinner",
      category: "CSM Originals",
      description: "Craft compelling narratives by connecting story elements",
      difficulty: "Easy",
      playTime: "6 min",
      players: "789"
    },
    {
      title: "Color Harmony",
      category: "CSM Originals", 
      description: "Match colors and create beautiful palettes in this relaxing game",
      difficulty: "Easy",
      playTime: "4 min",
      players: "1,123"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500/20 text-green-400";
      case "Medium": return "bg-yellow-500/20 text-yellow-400";
      case "Hard": return "bg-red-500/20 text-red-400";
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
              Play & Explore
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Interactive games inspired by our original stories and creative process. 
              Challenge yourself, compete with friends, and dive deeper into our worlds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Play Random Game
              </Button>
              <Button variant="outline" size="lg">
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game of the Month Banner */}
      <section className="py-8 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gradient mb-2">Game of the Month</h3>
              <p className="text-muted-foreground">Featured: <span className="text-primary font-semibold">Trucker Memory Match</span></p>
            </div>
            <Button size="lg" className="shadow-glow-primary">
              <Star className="mr-2 h-5 w-5" />
              Play Featured Game
            </Button>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">All Games</h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">All Games</Badge>
              <Badge variant="outline">Truckers in Paradise</Badge>
              <Badge variant="outline">CSM Originals</Badge>
              <Badge variant="outline">Puzzles</Badge>
              <Badge variant="outline">Strategy</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {games.map((game, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{game.category}</Badge>
                    <Badge className={getDifficultyColor(game.difficulty)}>
                      {game.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {game.playTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {game.players} played
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group-hover:shadow-glow-primary transition-all">
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Create Your Own Game
            </h2>
            <p className="text-muted-foreground mb-8">
              Have an idea for a game? We love collaborating with creators and fans 
              to bring new interactive experiences to life.
            </p>
            <Button size="lg" className="shadow-glow-primary">
              Submit Game Idea
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;