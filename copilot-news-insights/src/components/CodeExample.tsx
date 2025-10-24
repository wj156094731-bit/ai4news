import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeExample = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Code Examples
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real Python examples built with GitHub Copilot Agent
          </p>
        </div>
        
        <Tabs defaultValue="fetch" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fetch">Fetch News</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="keywords">Extract Keywords</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fetch">
            <Card className="bg-code-bg border-code-border p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">{`import requests
from datetime import datetime

def fetch_news(api_key, query, page_size=10):
    """
    Fetch news articles using NewsAPI
    Copilot helps with error handling and API structure
    """
    url = "https://newsapi.org/v2/everything"
    params = {
        "q": query,
        "apiKey": api_key,
        "pageSize": page_size,
        "sortBy": "publishedAt"
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        articles = data.get('articles', [])
        print(f"Fetched {len(articles)} articles")
        return articles
        
    except requests.exceptions.RequestException as e:
        print(f"Error fetching news: {e}")
        return []

# Usage with Copilot suggestions
news = fetch_news("YOUR_API_KEY", "artificial intelligence")`}</code>
              </pre>
            </Card>
          </TabsContent>
          
          <TabsContent value="sentiment">
            <Card className="bg-code-bg border-code-border p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">{`from textblob import TextBlob
import pandas as pd

def analyze_sentiment(articles):
    """
    Perform sentiment analysis on news articles
    Copilot assists with TextBlob methods and data structuring
    """
    results = []
    
    for article in articles:
        title = article.get('title', '')
        description = article.get('description', '')
        
        # Combine title and description
        text = f"{title}. {description}"
        
        # Analyze sentiment
        blob = TextBlob(text)
        sentiment = blob.sentiment
        
        results.append({
            'title': title,
            'polarity': sentiment.polarity,
            'subjectivity': sentiment.subjectivity,
            'sentiment': 'positive' if sentiment.polarity > 0 
                        else 'negative' if sentiment.polarity < 0 
                        else 'neutral'
        })
    
    return pd.DataFrame(results)

# Get sentiment analysis
df = analyze_sentiment(articles)
print(df[['title', 'sentiment', 'polarity']].head())`}</code>
              </pre>
            </Card>
          </TabsContent>
          
          <TabsContent value="keywords">
            <Card className="bg-code-bg border-code-border p-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground">{`from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

def extract_keywords(articles, top_n=10):
    """
    Extract keywords using TF-IDF
    Copilot helps optimize sklearn parameters
    """
    # Combine all article texts
    texts = [
        f"{a.get('title', '')} {a.get('description', '')}"
        for a in articles
    ]
    
    # Initialize TF-IDF vectorizer
    vectorizer = TfidfVectorizer(
        max_features=100,
        stop_words='english',
        ngram_range=(1, 2)
    )
    
    # Fit and transform
    tfidf_matrix = vectorizer.fit_transform(texts)
    
    # Get feature names and scores
    feature_names = vectorizer.get_feature_names_out()
    scores = np.asarray(tfidf_matrix.mean(axis=0)).ravel()
    
    # Get top keywords
    top_indices = scores.argsort()[-top_n:][::-1]
    keywords = [(feature_names[i], scores[i]) 
                for i in top_indices]
    
    return keywords

# Extract and display keywords
keywords = extract_keywords(articles)
for keyword, score in keywords:
    print(f"{keyword}: {score:.4f}")`}</code>
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CodeExample;
