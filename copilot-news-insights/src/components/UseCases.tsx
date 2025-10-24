import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, AlertCircle, Users } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Market Trend Analysis",
    description: "Monitor financial news to identify market trends, track stock mentions, and analyze sentiment around companies or sectors.",
    tags: ["Finance", "Trading", "Analytics"],
  },
  {
    icon: Globe,
    title: "Media Monitoring",
    description: "Track brand mentions, competitor activities, and industry developments across multiple news sources in real-time.",
    tags: ["PR", "Brand", "Monitoring"],
  },
  {
    icon: AlertCircle,
    title: "Crisis Detection",
    description: "Detect emerging crises, negative sentiment spikes, and urgent situations that require immediate attention or response.",
    tags: ["Risk", "Security", "Alerts"],
  },
  {
    icon: Users,
    title: "Content Curation",
    description: "Aggregate and filter relevant news for newsletters, reports, or content platforms based on topics and sentiment.",
    tags: ["Content", "Publishing", "Curation"],
  },
];

const UseCases = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how news analysis powers different industries and applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
