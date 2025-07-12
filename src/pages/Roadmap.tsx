import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Clock, 
  Play, 
  Gamepad2, 
  Video, 
  Smartphone, 
  Users, 
  Calendar,
  Zap,
  Star
} from "lucide-react";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Live",
      status: "completed",
      title: "Core Website Launch",
      description: "Full website with services, originals hub, and basic game framework",
      icon: CheckCircle,
      date: "Q1 2025",
      items: [
        "Responsive website design",
        "Services portfolio showcase", 
        "Originals content hub",
        "Basic games section",
        "Client portal foundation"
      ]
    },
    {
      phase: "In Progress",
      status: "active",
      title: "Truckers in Paradise S1",
      description: "Complete first season with 8 episodes, games, and interactive features",
      icon: Play,
      date: "Q1-Q2 2025",
      items: [
        "Episodes 1-3: Production complete",
        "Episodes 4-6: In post-production",
        "Episodes 7-8: Pre-production", 
        "Interactive episode map",
        "Character profile pages",
        "Behind-the-scenes content"
      ]
    },
    {
      phase: "In Progress", 
      status: "active",
      title: "Interactive Game Suite",
      description: "Launch 9 mini-games tied to our original content with leaderboards",
      icon: Gamepad2,
      date: "Q2 2025",
      items: [
        "Trucker Memory Match: Testing",
        "Route Puzzle: In development",
        "Diner Dash: Concept phase",
        "Brand Builder: Planning",
        "User accounts & scoring",
        "Cross-device sync"
      ]
    },
    {
      phase: "Planned",
      status: "planned", 
      title: "Mobile App Launch",
      description: "Native mobile app with offline viewing, exclusive content, and notifications",
      icon: Smartphone,
      date: "Q3 2025",
      items: [
        "iOS and Android apps",
        "Offline episode downloads",
        "Push notifications for new content",
        "Mobile-exclusive mini-games",
        "Augmented reality features",
        "Location-based content"
      ]
    },
    {
      phase: "Planned",
      status: "planned",
      title: "Community Platform", 
      description: "Fan forums, user-generated content, and creator collaboration tools",
      icon: Users,
      date: "Q3-Q4 2025",
      items: [
        "Fan discussion forums",
        "Fan art showcase",
        "User-generated content contests",
        "Creator collaboration portal",
        "Live streaming integration",
        "Community challenges"
      ]
    },
    {
      phase: "Planned",
      status: "planned",
      title: "Advanced Video Features",
      description: "Interactive video elements, choose-your-own-adventure episodes, and VR content",
      icon: Video,
      date: "Q4 2025",
      items: [
        "Interactive decision points in episodes",
        "Choose-your-own-adventure specials",
        "360° behind-the-scenes content",
        "VR experience prototypes",
        "Live interactive streams",
        "Branching storylines"
      ]
    },
    {
      phase: "Future",
      status: "future",
      title: "AI-Powered Features",
      description: "Smart content recommendations, AI assistants, and personalized experiences",
      icon: Zap,
      date: "2026",
      items: [
        "Personalized content recommendations",
        "AI-powered Roy chatbot",
        "Smart editing tools for creators",
        "Automated content tagging",
        "Predictive analytics dashboard",
        "Voice-activated navigation"
      ]
    },
    {
      phase: "Future",
      status: "future", 
      title: "Premium Platform",
      description: "Subscription tiers, exclusive content, and advanced creator tools",
      icon: Star,
      date: "2026+",
      items: [
        "Premium subscription tiers",
        "Exclusive premium content",
        "Advanced creator analytics",
        "Priority customer support",
        "Early access to new features",
        "Revenue sharing for creators"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "active": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "planned": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "future": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPhaseDescription = (status: string) => {
    switch (status) {
      case "completed": return "Features that are live and available now";
      case "active": return "Currently in development with active progress";
      case "planned": return "Confirmed features with planned development timeline";
      case "future": return "Ideas in research phase, timeline may shift";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Development Roadmap
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Track our progress as we build the future of Creative Story Media. 
              From new episodes and games to cutting-edge features and community tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-lg px-4 py-2 bg-green-500/20 text-green-400">
                <CheckCircle className="mr-2 h-4 w-4" />
                Live Features
              </Badge>
              <Badge className="text-lg px-4 py-2 bg-blue-500/20 text-blue-400">
                <Clock className="mr-2 h-4 w-4" />
                In Development
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                Planned Features
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className={`hover:shadow-glow-primary transition-all duration-300 border-l-4 ${getStatusColor(item.status).split(' ')[2]}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-4 ${getStatusColor(item.status)}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getStatusColor(item.status)}>
                                {item.phase}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{item.date}</span>
                            </div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground ml-14">{item.description}</p>
                    </CardHeader>
                    <CardContent className="ml-14">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.items.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className={`w-2 h-2 rounded-full mr-3 ${item.status === 'completed' ? 'bg-green-400' : item.status === 'active' ? 'bg-blue-400' : 'bg-gray-400'}`}></div>
                            <span className={item.status === 'completed' ? 'text-green-400' : 'text-muted-foreground'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6">Status Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { status: "completed", phase: "Live", desc: getPhaseDescription("completed") },
                { status: "active", phase: "In Progress", desc: getPhaseDescription("active") },
                { status: "planned", phase: "Planned", desc: getPhaseDescription("planned") },
                { status: "future", phase: "Future", desc: getPhaseDescription("future") }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <Badge className={`${getStatusColor(item.status)} mb-2`}>
                      {item.phase}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Have Ideas for Our Roadmap?
            </h2>
            <p className="text-muted-foreground mb-8">
              We love hearing from our community! If you have suggestions for features, 
              content, or improvements, we want to know about them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                Submit Feature Request
              </Button>
              <Button variant="outline" size="lg">
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Update Frequency Note */}
      <section className="py-8 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            This roadmap is updated monthly. Last updated: <span className="text-primary">January 15, 2025</span>
            <br />
            Features and timelines may shift based on development priorities and community feedback.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;