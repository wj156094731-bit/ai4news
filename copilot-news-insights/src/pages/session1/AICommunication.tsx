import { Card } from "@/components/ui/card";
import { MessageSquare, Terminal, Sparkles, FileCode } from "lucide-react";

export default function AICommunication() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Two Ways to Communicate with AI
          </h1>
          <p className="text-xl text-muted-foreground">
            Understanding different AI interaction paradigms for journalism
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Method 1: Browser-Based Chatbots</h2>
                <p className="text-muted-foreground mb-4">
                  The conventional approach - conversational AI interfaces accessed through web browsers.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Key Characteristics
                    </h3>
                    <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
                      <li>• Accessed through web browsers (ChatGPT, Claude, Gemini)</li>
                      <li>• Conversational interface with text input/output</li>
                      <li>• Supports multimodal responses (text, images, code)</li>
                      <li>• Limited to the browser environment</li>
                      <li>• No direct file system access</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Use Cases for Journalists</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Quick research and fact-checking</li>
                      <li>✓ Brainstorming story ideas</li>
                      <li>✓ Drafting and editing text</li>
                      <li>✓ Analyzing uploaded documents</li>
                      <li>✓ Creating simple visualizations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-code rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">Example Interaction:</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-code-comment">You: "Summarize the key points from this news article"</div>
                    <div className="text-code-string">AI: [Provides bullet-point summary]</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <FileCode className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Method 2: AI Agents with Real-World Access</h2>
                <p className="text-muted-foreground mb-4">
                  The modern approach - AI that can interact with your local files, run code, and take actions.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-accent" />
                      Key Characteristics
                    </h3>
                    <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
                      <li>• Integrated into development environments (VS Code, IDEs)</li>
                      <li>• Direct access to project files and folders</li>
                      <li>• Can execute code and scripts</li>
                      <li>• Understands project context</li>
                      <li>• Can make real changes to your system</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">GitHub Copilot Agent Example</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Copilot Agent lives inside VS Code and can:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Read and write files in your project</li>
                      <li>✓ Run Python scripts to fetch news data</li>
                      <li>✓ Create new analysis scripts</li>
                      <li>✓ Debug and fix code errors</li>
                      <li>✓ Install required libraries</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-code rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">Example Interaction:</p>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-code-comment">You: "@workspace create a script to fetch tech news from the API"</div>
                    <div className="text-code-string">Agent: [Creates fetch_news.py, installs dependencies, runs it]</div>
                    <div className="text-code-keyword">Result: data/tech_news.json created with 50 articles</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Comparison: Which Should You Use?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Browser Chatbots Best For:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quick one-off questions</li>
                  <li>• Brainstorming sessions</li>
                  <li>• Content drafting</li>
                  <li>• When you don't need file access</li>
                  <li>• Learning and exploration</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">AI Agents Best For:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data collection workflows</li>
                  <li>• Automated analysis pipelines</li>
                  <li>• Working with local datasets</li>
                  <li>• Multi-step data processing</li>
                  <li>• Project-based journalism work</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">💡 Why This Matters for Journalists</h3>
            <p className="text-muted-foreground">
              Understanding these two approaches helps you choose the right tool for your task. For simple questions, 
              use browser chatbots. For data-driven journalism requiring news APIs, data analysis, and automated workflows, 
              AI agents like GitHub Copilot provide powerful capabilities that can transform your newsroom productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
