import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Palette, Globe, Users, Heart, Building, Camera, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Videography",
      description: "Cinematic wedding films that capture your love story",
      features: ["4K filming", "Drone footage", "Same-day highlights", "Full ceremony edit"]
    },
    {
      icon: Building,
      title: "Real Estate Media",
      description: "Property showcases that sell homes faster",
      features: ["Virtual tours", "Aerial photography", "Lifestyle videos", "Social media content"]
    },
    {
      icon: Video,
      title: "Brand Videos",
      description: "Corporate content that tells your story",
      features: ["Brand documentaries", "Product launches", "Team profiles", "Testimonials"]
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Visual identity that resonates with your audience",
      features: ["Logo design", "Brand guidelines", "Marketing materials", "Social media assets"]
    },
    {
      icon: Globe,
      title: "Web/App Development",
      description: "Digital experiences that convert visitors to customers",
      features: ["Custom websites", "E-commerce", "Mobile apps", "SEO optimization"]
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description: "Data-driven campaigns that grow your business",
      features: ["Content strategy", "Social media", "Email marketing", "Analytics tracking"]
    }
  ];

  const portfolioItems = [
    { category: "Wedding", title: "Sarah & Mike's Big Day", image: "wedding-1" },
    { category: "Real Estate", title: "Luxury Home Tour", image: "realestate-1" },
    { category: "Brand", title: "Local Business Story", image: "brand-1" },
    { category: "Wedding", title: "Beach Ceremony", image: "wedding-2" },
    { category: "Brand", title: "Restaurant Promo", image: "brand-2" },
    { category: "Real Estate", title: "Modern Condo", image: "realestate-2" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-gradient">Services & Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-8">
            From intimate weddings to major brand campaigns, we bring stories to life through video, design, and digital experiences.
          </p>
          <Button size="lg" className="btn-cinematic">
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-cinematic p-6">
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Recent Work</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="ghost" size="sm">Weddings</Button>
            <Button variant="ghost" size="sm">Real Estate</Button>
            <Button variant="ghost" size="sm">Branding</Button>
            <Button variant="ghost" size="sm">Corporate</Button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="card-cinematic overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-card relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="card-cinematic p-8">
            <p className="text-xl italic mb-6">
              "Working with Creative Story Media was incredible. They didn't just film our wedding—they captured the essence of who we are as a couple. The final video had us in tears."
            </p>
            <p className="text-muted-foreground">— Jennifer & David Martinez</p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="card-cinematic p-6">
              <h3 className="text-lg font-semibold mb-2">What's your typical turnaround time?</h3>
              <p className="text-muted-foreground">Wedding films are delivered within 8-12 weeks. Corporate projects typically take 2-4 weeks depending on complexity.</p>
            </Card>
            <Card className="card-cinematic p-6">
              <h3 className="text-lg font-semibold mb-2">Do you travel for projects?</h3>
              <p className="text-muted-foreground">Absolutely! We love destination weddings and remote shoots. Travel fees may apply for locations over 50 miles from our base.</p>
            </Card>
            <Card className="card-cinematic p-6">
              <h3 className="text-lg font-semibold mb-2">What's included in your packages?</h3>
              <p className="text-muted-foreground">Each package is customized to your needs, but typically includes pre-production planning, filming, editing, and delivery of final files.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="card-cinematic p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Let's Discuss Your Project</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary">
                <option>Select Service Type</option>
                <option>Wedding Videography</option>
                <option>Real Estate Media</option>
                <option>Brand Video</option>
                <option>Web Development</option>
                <option>Other</option>
              </select>
              <textarea 
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary"
              ></textarea>
              <Button type="submit" size="lg" className="w-full btn-cinematic">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;