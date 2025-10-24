import { Button } from "@/components/ui/button";
import { Code2, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/30 backdrop-blur-sm mb-6">
          <Code2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">GitHub Copilot Agent Tutorial</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Master News Analysis with
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GitHub Copilot Agent
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Learn to harness the power of AI-assisted coding to fetch news via APIs and perform 
          sophisticated text analysis using Python—all within your IDE.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="group">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
