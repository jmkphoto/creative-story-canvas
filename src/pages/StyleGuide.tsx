import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Copy, Palette, Type, Layout, Sparkles } from "lucide-react";

const StyleGuide = () => {
  const colorPalette = [
    { name: "Primary", value: "hsl(210, 100%, 60%)", bg: "bg-primary" },
    { name: "Primary Glow", value: "hsl(210, 100%, 70%)", bg: "bg-primary-glow" },
    { name: "Secondary", value: "hsl(280, 80%, 65%)", bg: "bg-secondary" },
    { name: "Accent", value: "hsl(320, 100%, 70%)", bg: "bg-accent" },
    { name: "Background", value: "hsl(220, 15%, 8%)", bg: "bg-background" },
    { name: "Card", value: "hsl(220, 15%, 12%)", bg: "bg-card" },
    { name: "Foreground", value: "hsl(210, 40%, 98%)", bg: "bg-foreground" },
    { name: "Muted", value: "hsl(215, 13%, 65%)", bg: "bg-muted-foreground" }
  ];

  const typography = [
    { name: "Display", class: "text-6xl font-bold", sample: "Creative Story Media" },
    { name: "Heading 1", class: "text-4xl font-bold", sample: "Section Heading" },
    { name: "Heading 2", class: "text-3xl font-bold", sample: "Subsection Title" },
    { name: "Heading 3", class: "text-2xl font-semibold", sample: "Card Title" },
    { name: "Body Large", class: "text-lg", sample: "Large body text for emphasis and readability" },
    { name: "Body", class: "text-base", sample: "Standard body text for paragraphs and content" },
    { name: "Small", class: "text-sm", sample: "Small text for captions and metadata" },
    { name: "Gradient Text", class: "text-3xl font-bold text-gradient", sample: "Gradient Headline" }
  ];

  const buttonVariants = [
    { name: "Default", variant: "default" as const, sample: "Primary Action" },
    { name: "Secondary", variant: "secondary" as const, sample: "Secondary Action" },
    { name: "Outline", variant: "outline" as const, sample: "Outline Button" },
    { name: "Ghost", variant: "ghost" as const, sample: "Ghost Button" },
    { name: "Destructive", variant: "destructive" as const, sample: "Delete Action" }
  ];

  const spacing = [
    { name: "xs", value: "0.25rem", class: "p-1" },
    { name: "sm", value: "0.5rem", class: "p-2" },
    { name: "md", value: "1rem", class: "p-4" },
    { name: "lg", value: "1.5rem", class: "p-6" },
    { name: "xl", value: "2rem", class: "p-8" },
    { name: "2xl", value: "3rem", class: "p-12" }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Brand Style Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our visual identity system, design tokens, and brand guidelines. 
              Use these elements to maintain consistency across all creative work.
            </p>
            <Button size="lg" className="shadow-glow-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Brand Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Palette className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Color Palette</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {colorPalette.map((color, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-4">
                    <div className={`${color.bg} h-20 rounded-lg mb-3 border border-border`}></div>
                    <h4 className="font-semibold mb-1">{color.name}</h4>
                    <div className="flex items-center justify-between">
                      <code className="text-xs text-muted-foreground">{color.value}</code>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(color.value)}
                        className="h-6 w-6 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-primary/10">
              <h3 className="text-xl font-semibold mb-4">Gradient Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Primary Gradient</span>
                </div>
                <div className="h-16 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Hero Gradient</span>
                </div>
                <div className="h-16 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">Accent Gradient</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Type className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Typography</h2>
            </div>

            <div className="space-y-6">
              {typography.map((type, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="outline">{type.name}</Badge>
                          <code className="text-xs text-muted-foreground">{type.class}</code>
                        </div>
                        <div className={type.class}>
                          {type.sample}
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => copyToClipboard(type.class)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Class
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Sparkles className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Button Styles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buttonVariants.map((button, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{button.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <Button variant={button.variant} size="sm">
                        {button.sample} (Small)
                      </Button>
                      <Button variant={button.variant}>
                        {button.sample} (Default)
                      </Button>
                      <Button variant={button.variant} size="lg">
                        {button.sample} (Large)
                      </Button>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => copyToClipboard(`variant="${button.variant}"`)}
                      className="w-full"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Variant
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Layout className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Spacing System</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {spacing.map((space, index) => (
                <Card key={index} className="hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="mb-3">
                      <div className="bg-primary/20 border border-primary rounded">
                        <div className={`bg-primary ${space.class} rounded`}></div>
                      </div>
                    </div>
                    <h4 className="font-semibold">{space.name}</h4>
                    <p className="text-xs text-muted-foreground">{space.value}</p>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => copyToClipboard(space.class)}
                      className="mt-2 h-6 w-full"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Usage Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Do's</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Use semantic color tokens instead of direct colors</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Maintain consistent spacing using our system</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Use gradients sparingly for key visual elements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Apply hover effects consistently across interactive elements</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-primary transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Don'ts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Don't use hardcoded color values like #ffffff</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Don't mix fonts outside of our typography system</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Don't overuse gradients or glow effects</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Don't ignore the mobile-first responsive approach</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Download Brand Assets
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the complete brand kit including logos, color swatches, fonts, 
              and template files for your design software.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="shadow-glow-primary">
                <Download className="mr-2 h-5 w-5" />
                Complete Brand Kit (.zip)
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Logo Package Only
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;