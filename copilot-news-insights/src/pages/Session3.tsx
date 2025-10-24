import { Card } from "@/components/ui/card";
import { BarChart3, Brain, LineChart, PieChart } from "lucide-react";

export default function Session3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Session 3: Advanced News Analysis
          </h1>
          <p className="text-xl text-muted-foreground">
            Perform sophisticated text analysis with AI-powered assistance
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Sentiment Analysis</h2>
                <p className="text-muted-foreground mb-4">
                  Use natural language processing to determine the sentiment of news articles.
                </p>
                <div className="bg-code rounded-lg p-4 font-mono text-sm space-y-2">
                  <p className="text-code-comment"># Install required libraries</p>
                  <p><span className="text-code-keyword">pip install</span> <span className="text-code-string">textblob nltk</span></p>
                  <br />
                  <p className="text-code-comment"># Let Copilot help you implement sentiment analysis</p>
                  <p className="text-code-comment"># Try: "Analyze sentiment of article text using TextBlob"</p>
                </div>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold mb-2">Exercise:</p>
                  <p className="text-sm text-muted-foreground">
                    Create a function that takes article text and returns sentiment scores (polarity and subjectivity)
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Keyword Extraction & Frequency</h2>
                <p className="text-muted-foreground mb-4">
                  Identify important terms and track their frequency across articles.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Step 1: Text Preprocessing</p>
                    <p className="text-sm text-muted-foreground">
                      Remove stopwords, punctuation, and normalize text
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Step 2: Extract Keywords</p>
                    <p className="text-sm text-muted-foreground">
                      Use TF-IDF or keyword extraction libraries to find important terms
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Step 3: Visualize Results</p>
                    <p className="text-sm text-muted-foreground">
                      Create word clouds or bar charts of top keywords
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Trend Analysis Over Time</h2>
                <p className="text-muted-foreground mb-4">
                  Track how topics and sentiment evolve across different time periods.
                </p>
                <div className="bg-code rounded-lg p-4 font-mono text-sm space-y-2">
                  <p className="text-code-comment"># Group articles by date and analyze trends</p>
                  <p className="text-code-keyword">import</p> <span className="text-code-string">matplotlib.pyplot</span> <span className="text-code-keyword">as</span> <span className="text-code-string">plt</span>
                  <br />
                  <p className="text-code-comment"># Ask Copilot: "Create a time series plot of sentiment"</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">Topic Clustering</h2>
                <p className="text-muted-foreground mb-4">
                  Group similar articles together using machine learning techniques.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Technique 1: K-Means Clustering</p>
                    <p className="text-sm text-muted-foreground">
                      Use scikit-learn to cluster articles based on TF-IDF vectors
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="font-semibold mb-2">Technique 2: Topic Modeling</p>
                    <p className="text-sm text-muted-foreground">
                      Apply LDA (Latent Dirichlet Allocation) to discover hidden topics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">Advanced Copilot Techniques</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold">Multi-line Comments</p>
                  <p className="text-sm text-muted-foreground">
                    Write detailed docstrings to get more accurate function implementations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold">Context Files</p>
                  <p className="text-sm text-muted-foreground">
                    Keep related files open - Copilot uses context from your workspace
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold">Copilot Chat</p>
                  <p className="text-sm text-muted-foreground">
                    Use /explain, /fix, or /tests commands for specialized assistance
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
