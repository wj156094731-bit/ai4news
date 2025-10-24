import { Card } from "@/components/ui/card";
import { CheckCircle, Github, Terminal } from "lucide-react";

export default function Setup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Setup & Installation
          </h1>
          <p className="text-xl text-muted-foreground">
            Get your development environment ready for news analysis
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Install Required Tools</h2>
                <p className="text-muted-foreground mb-4">
                  You'll need Python and a few libraries to work with news APIs and perform text analysis.
                </p>
                <div className="bg-code rounded-lg p-4 font-mono text-sm space-y-2">
                  <p className="text-code-comment"># Install Python libraries</p>
                  <p><span className="text-code-keyword">pip install</span> <span className="text-code-string">requests</span></p>
                  <p className="ml-12"><span className="text-code-string">pandas</span></p>
                  <p className="ml-12"><span className="text-code-string">python-dotenv</span></p>
                  <p className="ml-12"><span className="text-code-string">textblob</span></p>
                  <p className="ml-12"><span className="text-code-string">nltk</span></p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Enable GitHub Copilot</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1. Install VS Code Extension</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Search for "GitHub Copilot" in the VS Code Extensions marketplace and install it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2. Sign In with GitHub</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Click the GitHub Copilot icon in the bottom right and sign in with your GitHub account.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3. Verify It Works</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Create a new Python file, type a comment like "# Fetch news from API", and wait for suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Create Your Project Structure</h2>
            <p className="text-muted-foreground mb-4">
              Organize your files for efficient news analysis workflow:
            </p>
            <div className="bg-code rounded-lg p-4 font-mono text-sm space-y-1">
              <p className="text-code-comment">news_analysis/</p>
              <p className="ml-4 text-code-string">├── scripts/</p>
              <p className="ml-8 text-code-comment"># Your Python scripts</p>
              <p className="ml-4 text-code-string">├── data/</p>
              <p className="ml-8 text-code-comment"># Downloaded news data</p>
              <p className="ml-4 text-code-string">├── results/</p>
              <p className="ml-8 text-code-comment"># Analysis outputs</p>
              <p className="ml-4 text-code-string">├── .env</p>
              <p className="ml-8 text-code-comment"># API keys (keep secret!)</p>
              <p className="ml-4 text-code-string">└── .gitignore</p>
              <p className="ml-8 text-code-comment"># Don't commit secrets</p>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Quick Start Checklist</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Python 3.8 or higher installed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>VS Code with GitHub Copilot extension</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Required Python libraries installed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Project folder structure created</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>NewsAPI account created (free tier)</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
