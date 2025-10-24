import { Card } from "@/components/ui/card";
import { Bot, Newspaper, BarChart3, Code } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Development",
    description: "Leverage GitHub Copilot Agent to write Python scripts faster with intelligent code suggestions and completions.",
  },
  {
    icon: Newspaper,
    title: "News API Integration",
    description: "Learn to fetch real-time news data from various APIs including NewsAPI, Guardian, and more.",
  },
  {
    icon: BarChart3,
    title: "Text Analysis Tools",
    description: "Perform sentiment analysis, entity extraction, keyword analysis, and topic modeling on news articles.",
  },
  {
    icon: Code,
    title: "Production-Ready Code",
    description: "Build scalable, maintainable scripts with best practices for error handling and data processing.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to Get Started
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive guidance from setup to advanced analysis techniques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
