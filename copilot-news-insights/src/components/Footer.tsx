import { Button } from "@/components/ui/button";
import { Github, BookOpen, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Begin your journey with GitHub Copilot Agent and transform how you analyze news data
          </p>
          <Button variant="hero" size="lg">
            Get Started Now
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-12 border-t border-border">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Documentation
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Community
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2025 News Analysis Tutorial. Powered by GitHub Copilot Agent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
