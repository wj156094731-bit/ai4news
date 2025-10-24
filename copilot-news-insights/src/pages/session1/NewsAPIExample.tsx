import { Card } from "@/components/ui/card";
import { Key, Code, Database, Zap } from "lucide-react";

export default function NewsAPIExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            News API in Action
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world example of fetching news data programmatically
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">What is NewsAPI?</h2>
                <p className="text-muted-foreground mb-4">
                  NewsAPI.org is a service that aggregates news from over 80,000 sources worldwide and makes it 
                  accessible through a simple API. Think of it as a searchable database of news articles that 
                  your code can query.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">What You Can Do:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Search articles by keyword</li>
                      <li>• Filter by source, date, language</li>
                      <li>• Get top headlines by country</li>
                      <li>• Track specific topics over time</li>
                      <li>• Access full article metadata</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">What You Get:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Article title and description</li>
                      <li>• Publication date and time</li>
                      <li>• Source name and URL</li>
                      <li>• Author information</li>
                      <li>• Article URL and image</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Step 1: Get Your API Key</h2>
                <p className="text-muted-foreground mb-4">
                  To use NewsAPI, you need an API key - a unique identifier that authenticates your requests.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">How to get your key:</p>
                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Go to <span className="font-mono text-primary">https://newsapi.org</span></li>
                      <li>Click "Get API Key" (it's free for development)</li>
                      <li>Register with your email</li>
                      <li>Copy your unique API key</li>
                      <li>Store it securely (never commit it to Git!)</li>
                    </ol>
                  </div>

                  <div className="bg-code rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">Store in .env file:</p>
                    <div className="font-mono text-sm">
                      <p className="text-code-comment"># .env (in your project root)</p>
                      <p><span className="text-code-keyword">NEWS_API_KEY</span>=<span className="text-code-string">your_actual_api_key_here</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Step 2: Make Your First API Request</h2>
                <p className="text-muted-foreground mb-4">
                  Let's fetch the top technology headlines from US sources.
                </p>
                
                <div className="bg-code rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-3">Complete Python Example:</p>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-code-comment"># fetch_news.py</p>
                    <p><span className="text-code-keyword">import</span> <span className="text-code-string">requests</span></p>
                    <p><span className="text-code-keyword">import</span> <span className="text-code-string">json</span></p>
                    <p><span className="text-code-keyword">from</span> <span className="text-code-string">dotenv</span> <span className="text-code-keyword">import</span> <span className="text-code-string">load_dotenv</span></p>
                    <p><span className="text-code-keyword">import</span> <span className="text-code-string">os</span></p>
                    <br />
                    <p className="text-code-comment"># Load environment variables</p>
                    <p><span className="text-code-function">load_dotenv</span>()</p>
                    <p><span className="text-code-function">api_key</span> = os.getenv(<span className="text-code-string">"NEWS_API_KEY"</span>)</p>
                    <br />
                    <p className="text-code-comment"># Build the API request</p>
                    <p><span className="text-code-function">url</span> = <span className="text-code-string">"https://newsapi.org/v2/top-headlines"</span></p>
                    <p><span className="text-code-function">params</span> = {'{'}</p>
                    <p className="ml-4"><span className="text-code-string">"country"</span>: <span className="text-code-string">"us"</span>,</p>
                    <p className="ml-4"><span className="text-code-string">"category"</span>: <span className="text-code-string">"technology"</span>,</p>
                    <p className="ml-4"><span className="text-code-string">"apiKey"</span>: api_key</p>
                    <p>{'}'}</p>
                    <br />
                    <p className="text-code-comment"># Make the request</p>
                    <p><span className="text-code-function">response</span> = requests.get(url, params=params)</p>
                    <p><span className="text-code-function">data</span> = response.json()</p>
                    <br />
                    <p className="text-code-comment"># Print the results</p>
                    <p><span className="text-code-keyword">for</span> article <span className="text-code-keyword">in</span> data[<span className="text-code-string">"articles"</span>]:</p>
                    <p className="ml-4"><span className="text-code-function">print</span>(f<span className="text-code-string">"Title: {'{'}article['title']{'}'}"</span>)</p>
                    <p className="ml-4"><span className="text-code-function">print</span>(f<span className="text-code-string">"Source: {'{'}article['source']['name']{'}'}"</span>)</p>
                    <p className="ml-4"><span className="text-code-function">print</span>(<span className="text-code-string">"-"</span> * 50)</p>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <p className="font-semibold mb-2">💡 Use GitHub Copilot to help!</p>
                  <p className="text-sm text-muted-foreground">
                    Instead of typing all this, try writing a comment like: "Fetch top tech headlines from NewsAPI"
                    and let Copilot generate the code for you.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Step 3: Understanding the Response</h2>
                <p className="text-muted-foreground mb-4">
                  The API returns data in JSON format - a structured way to represent information.
                </p>
                
                <div className="bg-code rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">Example JSON Response:</p>
                  <div className="font-mono text-sm">
                    <p>{'{'}</p>
                    <p className="ml-2"><span className="text-code-string">"status"</span>: <span className="text-code-string">"ok"</span>,</p>
                    <p className="ml-2"><span className="text-code-string">"totalResults"</span>: <span className="text-code-keyword">38</span>,</p>
                    <p className="ml-2"><span className="text-code-string">"articles"</span>: [</p>
                    <p className="ml-4">{'{'}</p>
                    <p className="ml-6"><span className="text-code-string">"source"</span>: {'{'} <span className="text-code-string">"name"</span>: <span className="text-code-string">"TechCrunch"</span> {'}'},</p>
                    <p className="ml-6"><span className="text-code-string">"author"</span>: <span className="text-code-string">"Jane Smith"</span>,</p>
                    <p className="ml-6"><span className="text-code-string">"title"</span>: <span className="text-code-string">"AI breakthrough announced..."</span>,</p>
                    <p className="ml-6"><span className="text-code-string">"description"</span>: <span className="text-code-string">"Researchers unveil..."</span>,</p>
                    <p className="ml-6"><span className="text-code-string">"url"</span>: <span className="text-code-string">"https://..."</span>,</p>
                    <p className="ml-6"><span className="text-code-string">"publishedAt"</span>: <span className="text-code-string">"2025-01-23T10:30:00Z"</span></p>
                    <p className="ml-4">{'}'},</p>
                    <p className="ml-4 text-code-comment">// ... more articles</p>
                    <p className="ml-2">]</p>
                    <p>{'}'}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Common API Parameters:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <span className="font-mono text-foreground">q</span> - Search keyword</li>
                      <li>• <span className="font-mono text-foreground">country</span> - Country code (us, gb)</li>
                      <li>• <span className="font-mono text-foreground">category</span> - News category</li>
                      <li>• <span className="font-mono text-foreground">from</span> / <span className="font-mono text-foreground">to</span> - Date range</li>
                      <li>• <span className="font-mono text-foreground">pageSize</span> - Results per page</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Response Fields:</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <span className="font-mono text-foreground">status</span> - Request status</li>
                      <li>• <span className="font-mono text-foreground">totalResults</span> - Total matches</li>
                      <li>• <span className="font-mono text-foreground">articles</span> - Array of articles</li>
                      <li>• <span className="font-mono text-foreground">source</span> - Publication info</li>
                      <li>• <span className="font-mono text-foreground">publishedAt</span> - Timestamp</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Practical Exercise: Try It Yourself</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Modify the category</p>
                  <p className="text-sm text-muted-foreground">
                    Try "business", "health", "science", or "sports" instead of "technology"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Search for specific topics</p>
                  <p className="text-sm text-muted-foreground">
                    Add a "q" parameter to search for keywords like "climate change" or "election"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold mb-1">Save results to a file</p>
                  <p className="text-sm text-muted-foreground">
                    Use Copilot to help you save the results to a CSV or JSON file for analysis
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
            <p className="text-muted-foreground">
              Now that you understand how APIs work and have seen NewsAPI in action, you're ready to build 
              more sophisticated news analysis workflows. In the next sessions, we'll explore how to process 
              this data, perform sentiment analysis, and extract meaningful insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
