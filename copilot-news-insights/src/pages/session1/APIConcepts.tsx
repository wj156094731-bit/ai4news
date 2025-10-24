import { Card } from "@/components/ui/card";
import { Monitor, Terminal, Cloud, ArrowRight } from "lucide-react";

export default function APIConcepts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Understanding APIs
          </h1>
          <p className="text-xl text-muted-foreground">
            How APIs differ from CLI and GUI - Essential concepts for news data access
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Three Ways to Interact with Software</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">GUI</h3>
                </div>
                <p className="text-sm mb-2 font-semibold">Graphical User Interface</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Visual interface with buttons, menus, and windows
                </p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">Example:</p>
                  <p>• Clicking buttons in a news website</p>
                  <p>• Using Twitter's web interface</p>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">CLI</h3>
                </div>
                <p className="text-sm mb-2 font-semibold">Command Line Interface</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Text-based commands typed into a terminal
                </p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">Example:</p>
                  <p className="font-mono">python script.py</p>
                  <p className="font-mono">git commit -m "update"</p>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/30">
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">API</h3>
                </div>
                <p className="text-sm mb-2 font-semibold">Application Programming Interface</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Programs talking to programs programmatically
                </p>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">Example:</p>
                  <p>• Your script fetching news data</p>
                  <p>• Apps accessing Twitter's data</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">What is an API?</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                An API (Application Programming Interface) is a way for programs to communicate with each other. 
                Instead of humans clicking buttons (GUI) or typing commands (CLI), APIs let software directly 
                request and receive data.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Real-World Analogy: Restaurant</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold">You:</div>
                    <div className="flex-1 text-muted-foreground">The customer (your Python script)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold">Menu:</div>
                    <div className="flex-1 text-muted-foreground">API Documentation (what you can request)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold">Waiter:</div>
                    <div className="flex-1 text-muted-foreground">The API (takes your order to the kitchen)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold">Kitchen:</div>
                    <div className="flex-1 text-muted-foreground">The server/database (prepares what you ordered)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-24 font-semibold">Food:</div>
                    <div className="flex-1 text-muted-foreground">The data (JSON response with news articles)</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Why APIs Matter for Journalism</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Collect hundreds of articles in seconds instead of manual copying
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Get breaking news as it happens, not hours later
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalability</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor thousands of sources simultaneously
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Structured Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive data in formats ready for analysis (JSON, not HTML)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Reproducibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Run the same query multiple times with identical results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Combine data from multiple sources in one workflow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">How APIs Work: The Request-Response Cycle</h2>
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 p-4 bg-primary/10 rounded-lg text-center">
                <p className="font-semibold mb-1">Your Script</p>
                <p className="text-sm text-muted-foreground">Makes a request</p>
              </div>
              <ArrowRight className="mx-4 text-primary" />
              <div className="flex-1 p-4 bg-muted/30 rounded-lg text-center">
                <p className="font-semibold mb-1">API Server</p>
                <p className="text-sm text-muted-foreground">Processes request</p>
              </div>
              <ArrowRight className="mx-4 text-primary" />
              <div className="flex-1 p-4 bg-primary/10 rounded-lg text-center">
                <p className="font-semibold mb-1">Your Script</p>
                <p className="text-sm text-muted-foreground">Receives response</p>
              </div>
            </div>

            <div className="bg-code rounded-lg p-4">
              <p className="text-sm font-semibold mb-3">Example API Request:</p>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-code-comment"># 1. Your script makes a request</p>
                <p><span className="text-code-keyword">import</span> <span className="text-code-string">requests</span></p>
                <p><span className="text-code-function">response</span> = requests.get(<span className="text-code-string">"https://newsapi.org/v2/top-headlines?country=us"</span>)</p>
                <br />
                <p className="text-code-comment"># 2. API responds with data</p>
                <p><span className="text-code-function">articles</span> = response.json()[<span className="text-code-string">"articles"</span>]</p>
                <br />
                <p className="text-code-comment"># 3. You can now use the data</p>
                <p><span className="text-code-keyword">for</span> article <span className="text-code-keyword">in</span> articles:</p>
                <p className="ml-4"><span className="text-code-function">print</span>(article[<span className="text-code-string">"title"</span>])</p>
              </div>
            </div>
          </Card>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">🔑 Key Takeaway</h3>
            <p className="text-muted-foreground">
              APIs enable programmatic access to data. Instead of manually browsing websites and copying information, 
              you write code that automatically fetches exactly what you need. This is the foundation of modern 
              data journalism and computational reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
