import { Card } from "@/components/ui/card";
import { Settings, Download, Code2, Play } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Setup Your Environment",
    description: "Install Python, configure your IDE, and set up GitHub Copilot Agent. Get your API keys ready for news sources.",
  },
  {
    icon: Download,
    number: "02",
    title: "Fetch News Data",
    description: "Use Copilot to help write Python scripts that connect to news APIs. Learn request handling, authentication, and pagination.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Process & Analyze",
    description: "Apply NLP techniques with libraries like NLTK, spaCy, or transformers. Extract insights from news content with AI assistance.",
  },
  {
    icon: Play,
    number: "04",
    title: "Run & Visualize",
    description: "Execute your analysis scripts and create visualizations. Generate reports and dashboards from your findings.",
  },
];

const StepsGuide = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your Journey in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow this structured approach to master news analysis with AI assistance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsGuide;
