#!/usr/bin/env python3
"""
Lab 2: AI and Large Language Models News Fetcher

This script uses the News API to fetch 50 articles about AI and Large Language Models,
then saves the data in JSON format for analysis and visualization.

Author: JOUR3105 Lab 2
Date: 2024
"""

import requests
import json
import datetime
from typing import Dict, List, Any
import time
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class NewsAPIFetcher:
    """Class to handle News API requests and data processing."""
    
    def __init__(self, api_key: str):
        """Initialize the fetcher with API key."""
        self.api_key = api_key
        self.base_url = "https://newsapi.org/v2"
        self.headers = {
            'X-Api-Key': api_key,
            'User-Agent': 'JOUR3105-Lab2/1.0'
        }
    
    def search_articles(self, query: str, page_size: int = 50, days_back: int = 30) -> Dict[str, Any]:
        """
        Search for articles using the News API everything endpoint.
        
        Args:
            query: Search query string
            page_size: Number of articles to fetch (max 100)
            days_back: How many days back to search
            
        Returns:
            Dictionary containing API response
        """
        # Calculate date range
        end_date = datetime.datetime.now()
        start_date = end_date - datetime.timedelta(days=days_back)
        
        params = {
            'q': query,
            'apiKey': self.api_key,
            'language': 'en',
            'sortBy': 'publishedAt',
            'pageSize': min(page_size, 100),  # API max is 100
            'from': start_date.strftime('%Y-%m-%d'),
            'to': end_date.strftime('%Y-%m-%d'),
            'searchIn': 'title,description,content'
        }
        
        url = f"{self.base_url}/everything"
        
        try:
            logger.info(f"Searching for articles with query: '{query}'")
            logger.info(f"Date range: {start_date.date()} to {end_date.date()}")
            
            response = requests.get(url, headers=self.headers, params=params, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            
            if data.get('status') == 'ok':
                logger.info(f"Successfully fetched {len(data.get('articles', []))} articles")
                logger.info(f"Total results available: {data.get('totalResults', 0)}")
                return data
            else:
                logger.error(f"API returned error: {data.get('message', 'Unknown error')}")
                return {'status': 'error', 'message': data.get('message', 'Unknown error')}
                
        except requests.exceptions.RequestException as e:
            logger.error(f"Request failed: {e}")
            return {'status': 'error', 'message': str(e)}
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return {'status': 'error', 'message': str(e)}
    
    def process_articles(self, articles: List[Dict]) -> List[Dict]:
        """
        Process and clean article data.
        
        Args:
            articles: List of article dictionaries from API
            
        Returns:
            List of processed article dictionaries
        """
        processed = []
        
        for article in articles:
            try:
                # Parse publication date
                published_at = article.get('publishedAt', '')
                if published_at:
                    try:
                        # Convert ISO format to readable date
                        pub_date = datetime.datetime.fromisoformat(published_at.replace('Z', '+00:00'))
                        article['publishedAtFormatted'] = pub_date.strftime('%Y-%m-%d %H:%M:%S UTC')
                        article['publishedDate'] = pub_date.strftime('%Y-%m-%d')
                    except:
                        article['publishedAtFormatted'] = published_at
                        article['publishedDate'] = published_at[:10] if len(published_at) >= 10 else published_at
                
                # Clean and validate data
                processed_article = {
                    'title': article.get('title', '').strip(),
                    'description': article.get('description', '').strip(),
                    'author': article.get('author', '').strip() or 'Unknown',
                    'source': {
                        'id': article.get('source', {}).get('id', ''),
                        'name': article.get('source', {}).get('name', 'Unknown Source')
                    },
                    'url': article.get('url', ''),
                    'urlToImage': article.get('urlToImage', ''),
                    'publishedAt': article.get('publishedAt', ''),
                    'publishedAtFormatted': article.get('publishedAtFormatted', ''),
                    'publishedDate': article.get('publishedDate', ''),
                    'content': article.get('content', '').strip(),
                    'wordCount': len(article.get('content', '').split()) if article.get('content') else 0
                }
                
                # Only include articles with valid titles
                if processed_article['title']:
                    processed.append(processed_article)
                    
            except Exception as e:
                logger.warning(f"Error processing article: {e}")
                continue
        
        return processed
    
    def get_source_statistics(self, articles: List[Dict]) -> Dict[str, Any]:
        """Calculate statistics about the collected articles."""
        if not articles:
            return {}
        
        # Source distribution
        sources = {}
        dates = []
        word_counts = []
        
        for article in articles:
            # Count sources
            source_name = article.get('source', {}).get('name', 'Unknown')
            sources[source_name] = sources.get(source_name, 0) + 1
            
            # Collect dates
            pub_date = article.get('publishedDate', '')
            if pub_date:
                dates.append(pub_date)
            
            # Collect word counts
            word_count = article.get('wordCount', 0)
            if word_count > 0:
                word_counts.append(word_count)
        
        # Calculate statistics
        stats = {
            'total_articles': len(articles),
            'unique_sources': len(sources),
            'source_distribution': sources,
            'date_range': {
                'earliest': min(dates) if dates else None,
                'latest': max(dates) if dates else None
            },
            'word_count_stats': {
                'average': sum(word_counts) / len(word_counts) if word_counts else 0,
                'min': min(word_counts) if word_counts else 0,
                'max': max(word_counts) if word_counts else 0
            }
        }
        
        return stats

def main():
    """Main function to fetch and process AI/LLM news articles."""
    
    # Load API key
    try:
        with open('/Users/simonwang/Documents/Usage/AI4news/ai4news/jour3105/docs/apikey.md', 'r') as f:
            api_key = f.read().strip()
    except FileNotFoundError:
        logger.error("API key file not found. Please ensure apikey.md exists.")
        return
    except Exception as e:
        logger.error(f"Error reading API key: {e}")
        return
    
    if not api_key:
        logger.error("API key is empty. Please check apikey.md file.")
        return
    
    # Initialize fetcher
    fetcher = NewsAPIFetcher(api_key)
    
    # Define search queries for AI and LLM topics
    queries = [
        "(artificial intelligence OR AI OR machine learning) AND (large language model OR LLM OR GPT OR ChatGPT)",
        "artificial intelligence AND (ChatGPT OR OpenAI OR Google Bard)",
        "machine learning AND (transformer OR neural network OR deep learning)"
    ]
    
    all_articles = []
    all_stats = []
    
    # Search for articles with different queries
    for i, query in enumerate(queries, 1):
        logger.info(f"\n=== Search Query {i}: {query} ===")
        
        # Fetch articles
        result = fetcher.search_articles(query, page_size=20)  # 20 per query to get variety
        
        if result.get('status') == 'ok':
            articles = result.get('articles', [])
            processed_articles = fetcher.process_articles(articles)
            stats = fetcher.get_source_statistics(processed_articles)
            
            all_articles.extend(processed_articles)
            all_stats.append({
                'query': query,
                'articles_found': len(processed_articles),
                'stats': stats
            })
            
            logger.info(f"Found {len(processed_articles)} articles for query {i}")
        else:
            logger.error(f"Failed to fetch articles for query {i}: {result.get('message', 'Unknown error')}")
        
        # Rate limiting - be respectful to the API
        if i < len(queries):
            logger.info("Waiting 2 seconds before next request...")
            time.sleep(2)
    
    # Remove duplicates based on URL
    seen_urls = set()
    unique_articles = []
    for article in all_articles:
        url = article.get('url', '')
        if url and url not in seen_urls:
            seen_urls.add(url)
            unique_articles.append(article)
    
    # Limit to 50 articles if we have more
    if len(unique_articles) > 50:
        unique_articles = unique_articles[:50]
        logger.info(f"Limited to 50 articles (had {len(unique_articles)} unique articles)")
    
    # Calculate final statistics
    final_stats = fetcher.get_source_statistics(unique_articles)
    
    # Prepare output data
    output_data = {
        'metadata': {
            'fetch_date': datetime.datetime.now().isoformat(),
            'total_articles': len(unique_articles),
            'search_queries': queries,
            'api_endpoint': 'https://newsapi.org/v2/everything'
        },
        'statistics': final_stats,
        'query_results': all_stats,
        'articles': unique_articles
    }
    
    # Save to JSON file
    output_file = '/Users/simonwang/Documents/Usage/AI4news/ai4news/jour3105/docs/lab2Output/ai_news_articles.json'
    
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"\n=== SUCCESS ===")
        logger.info(f"Fetched {len(unique_articles)} unique articles")
        logger.info(f"Data saved to: {output_file}")
        logger.info(f"Top sources: {list(final_stats.get('source_distribution', {}).keys())[:5]}")
        
        # Print summary
        print(f"\n{'='*50}")
        print(f"AI/LLM NEWS ANALYSIS SUMMARY")
        print(f"{'='*50}")
        print(f"Total Articles: {len(unique_articles)}")
        print(f"Unique Sources: {final_stats.get('unique_sources', 0)}")
        print(f"Date Range: {final_stats.get('date_range', {}).get('earliest', 'N/A')} to {final_stats.get('date_range', {}).get('latest', 'N/A')}")
        print(f"Average Word Count: {final_stats.get('word_count_stats', {}).get('average', 0):.1f}")
        print(f"\nTop 5 Sources:")
        for source, count in sorted(final_stats.get('source_distribution', {}).items(), key=lambda x: x[1], reverse=True)[:5]:
            print(f"  {source}: {count} articles")
        print(f"{'='*50}")
        
    except Exception as e:
        logger.error(f"Error saving data: {e}")
        return

if __name__ == "__main__":
    main()


