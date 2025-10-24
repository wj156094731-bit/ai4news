import { Card } from "@/components/ui/card";
import { Code, Database, Key, Zap } from "lucide-react";

export default function Session2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Session 2: Exploring & Using APIs
          </h1>
          <p className="text-xl text-muted-foreground">
            Fetch and process news data using Python and GitHub Copilot
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Getting Your API Key</h2>
                <p className="text-muted-foreground mb-4">
                  We'll use NewsAPI.org for this tutorial. Sign up for a free account to get your API key.
                </p>
                <div className="bg-code rounded-lg p-4 font-mono text-sm">
                  <p className="text-code-comment"># .env file</p>
                  <p className="text-code-keyword">NEWS_API_KEY</p>
                  <span className="text-code-operator">=</span>
                  <span className="text-code-string">"your_api_key_here"</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Basic API Request with Copilot</h2>
                <p className="text-muted-foreground mb-4">
                  Let Copilot help you write the API request code. Start with a comment:
                </p>
                <div className="bg-code rounded-lg p-4 font-mono text-sm space-y-2">
                  <p className="text-code-comment"># Fetch top headlines about technology</p>
                  <p className="text-code-keyword">import</p> <span className="text-code-string">requests</span>
                  <p className="text-code-keyword">import</p> <span className="text-code-string">os</span>
                  <p className="text-code-keyword">from</p> <span className="text-code-string">dotenv</span> <span className="text-code-keyword">import</span> <span className="text-code-string">load_dotenv</span>
                  <br />
                  <p className="text-code-function">load_dotenv()</p>
                  <br />
                  <p className="text-code-comment"># Let Copilot suggest the rest!</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Processing API Response</h2>
                <p className="text-muted-foreground mb-4">
                  Use Copilot to help parse and structure the JSON response:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Task 1: Extract Article Data</p>
                    <p className="text-sm text-muted-foreground">
                      Parse the response to extract titles, descriptions, and publication dates
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Task 2: Save to CSV</p>
                    <p className="text-sm text-muted-foreground">
                      Convert the data to a pandas DataFrame and save as CSV
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Task 3: Error Handling</p>
                    <p className="text-sm text-muted-foreground">
                      Add try-except blocks to handle API errors gracefully
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Copilot Tips for API Work</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Use descriptive variable names - Copilot learns from context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Write comments before code - let Copilot generate the implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Accept suggestions with Tab, cycle through options with Alt+]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Use Copilot Chat (Ctrl+I) for more complex explanations</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
