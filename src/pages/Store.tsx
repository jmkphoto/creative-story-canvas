import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, Download, Shirt, Book, Coffee } from "lucide-react";

const Store = () => {
  const featuredProducts = [
    {
      title: "Creator's Bundle",
      price: "$49.99",
      originalPrice: "$75.00",
      category: "Bundle",
      description: "Everything you need to start your creative journey: brand guide, video templates, and exclusive content.",
      icon: Package,
      badge: "Best Value"
    },
    {
      title: "CSM Brand T-Shirt",
      price: "$24.99", 
      category: "Apparel",
      description: "Premium cotton tee with our signature logo. Comfortable and stylish for creators on the go.",
      icon: Shirt,
      badge: "Popular"
    },
    {
      title: "The Creative's Handbook",
      price: "$19.99",
      category: "Digital",
      description: "Our comprehensive guide to building a creative business from the ground up. 150+ pages of insights.",
      icon: Book,
      badge: "New"
    }
  ];

  const products = [
    {
      title: "Truckers in Paradise Mug",
      price: "$16.99",
      category: "Merchandise",
      description: "Start your day with Roy's favorite coffee mug from the show.",
      icon: Coffee,
      rating: 4.8
    },
    {
      title: "Brand Identity Kit",
      price: "$34.99",
      category: "Digital", 
      description: "Professional templates and guidelines for creating your brand identity.",
      icon: Download,
      rating: 4.9
    },
    {
      title: "Video Production Checklist",
      price: "$9.99",
      category: "Digital",
      description: "Never miss a step with our complete video production workflow checklist.",
      icon: Download,
      rating: 4.7
    },
    {
      title: "CSM Poster Pack",
      price: "$29.99",
      category: "Merchandise",
      description: "Set of 3 premium posters featuring artwork from our original series.",
      icon: Package,
      rating: 4.6
    },
    {
      title: "Social Media Templates",
      price: "$14.99",
      category: "Digital",
      description: "50+ professional social media templates for Instagram, Facebook, and LinkedIn.",
      icon: Download,
      rating: 4.8
    },
    {
      title: "Behind the Scenes eBook",
      price: "$12.99",
      category: "Digital",
      description: "Exclusive photos and stories from the making of Truckers in Paradise.",
      icon: Book,
      rating: 4.9
    }
  ];

  const categories = ["All", "Bundles", "Digital", "Apparel", "Merchandise"];

  const getIconComponent = (icon: any) => {
    const IconComponent = icon;
    return <IconComponent className="h-8 w-8 text-primary" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Creative Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium products, digital resources, and exclusive merchandise 
              to fuel your creative journey and support our original content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop All Products
              </Button>
              <Button variant="outline" size="lg">
                <Package className="mr-2 h-5 w-5" />
                View Bundles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold">
            🎉 Limited Time: Use code <span className="bg-white/20 px-2 py-1 rounded">CREATOR25</span> for 25% off all digital products
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Featured Products</h2>
            <p className="text-muted-foreground">Our most popular items and best value bundles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 relative">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10">{product.badge}</Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    {getIconComponent(product.icon)}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <Badge variant="secondary">{product.category}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group-hover:shadow-glow-primary transition-all">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">All Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {getIconComponent(product.icon)}
                    <CardTitle className="text-lg ml-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always adding new products and taking custom requests. 
              Let us know what you need and we'll create it for you.
            </p>
            <Button size="lg" className="shadow-glow-primary">
              Request Custom Product
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;