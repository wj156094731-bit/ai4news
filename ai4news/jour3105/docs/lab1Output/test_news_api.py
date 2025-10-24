#!/usr/bin/env python3
"""
News API Test Program
Tests the News API endpoints and saves results to markdown and CSV files.
"""

import requests
import json
import csv
from datetime import datetime
import os

# API Configuration
API_KEY = "e19539b616bf4697b9a02c56a620cc1a"
BASE_URL = "https://newsapi.org/v2"

def test_everything_endpoint():
    """Test the /v2/everything endpoint"""
    print("Testing /v2/everything endpoint...")
    
    url = f"{BASE_URL}/everything"
    params = {
        'apiKey': API_KEY,
        'q': 'artificial intelligence',
        'language': 'en',
        'sortBy': 'publishedAt',
        'pageSize': 5
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        print(f"✓ Everything endpoint successful - {data.get('totalResults', 0)} total results")
        return data
    except requests.exceptions.RequestException as e:
        print(f"✗ Everything endpoint failed: {e}")
        return None

def test_top_headlines_endpoint():
    """Test the /v2/top-headlines endpoint"""
    print("Testing /v2/top-headlines endpoint...")
    
    url = f"{BASE_URL}/top-headlines"
    params = {
        'apiKey': API_KEY,
        'country': 'us',
        'category': 'technology',
        'pageSize': 5
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        print(f"✓ Top headlines endpoint successful - {data.get('totalResults', 0)} total results")
        return data
    except requests.exceptions.RequestException as e:
        print(f"✗ Top headlines endpoint failed: {e}")
        return None

def test_sources_endpoint():
    """Test the /v2/top-headlines/sources endpoint"""
    print("Testing /v2/top-headlines/sources endpoint...")
    
    url = f"{BASE_URL}/top-headlines/sources"
    params = {
        'apiKey': API_KEY,
        'category': 'technology',
        'language': 'en',
        'country': 'us'
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        print(f"✓ Sources endpoint successful - {len(data.get('sources', []))} sources found")
        return data
    except requests.exceptions.RequestException as e:
        print(f"✗ Sources endpoint failed: {e}")
        return None

def save_results_to_markdown(everything_data, headlines_data, sources_data):
    """Save API test results to markdown file"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    markdown_content = f"""# News API Test Results

**Test Date**: {timestamp}

## Test Summary

### Everything Endpoint (/v2/everything)
- **Status**: {'✓ Success' if everything_data else '✗ Failed'}
- **Total Results**: {everything_data.get('totalResults', 0) if everything_data else 'N/A'}
- **Articles Retrieved**: {len(everything_data.get('articles', [])) if everything_data else 0}

### Top Headlines Endpoint (/v2/top-headlines)
- **Status**: {'✓ Success' if headlines_data else '✗ Failed'}
- **Total Results**: {headlines_data.get('totalResults', 0) if headlines_data else 'N/A'}
- **Articles Retrieved**: {len(headlines_data.get('articles', [])) if headlines_data else 0}

### Sources Endpoint (/v2/top-headlines/sources)
- **Status**: {'✓ Success' if sources_data else '✗ Failed'}
- **Sources Found**: {len(sources_data.get('sources', [])) if sources_data else 0}

## Sample Articles from Everything Endpoint
"""
    
    if everything_data and everything_data.get('articles'):
        for i, article in enumerate(everything_data['articles'][:3], 1):
            markdown_content += f"""
### Article {i}
- **Title**: {article.get('title', 'N/A')}
- **Source**: {article.get('source', {}).get('name', 'N/A')}
- **Author**: {article.get('author', 'N/A')}
- **Published**: {article.get('publishedAt', 'N/A')}
- **Description**: {(article.get('description') or 'N/A')[:100]}...
- **URL**: {article.get('url', 'N/A')}
"""
    
    markdown_content += """
## Sample Articles from Top Headlines Endpoint
"""
    
    if headlines_data and headlines_data.get('articles'):
        for i, article in enumerate(headlines_data['articles'][:3], 1):
            markdown_content += f"""
### Article {i}
- **Title**: {article.get('title', 'N/A')}
- **Source**: {article.get('source', {}).get('name', 'N/A')}
- **Author**: {article.get('author', 'N/A')}
- **Published**: {article.get('publishedAt', 'N/A')}
- **Description**: {(article.get('description') or 'N/A')[:100]}...
- **URL**: {article.get('url', 'N/A')}
"""
    
    markdown_content += """
## Available Sources
"""
    
    if sources_data and sources_data.get('sources'):
        for i, source in enumerate(sources_data['sources'][:5], 1):
            markdown_content += f"""
### Source {i}
- **Name**: {source.get('name', 'N/A')}
- **ID**: {source.get('id', 'N/A')}
- **Description**: {source.get('description', 'N/A')}
- **Category**: {source.get('category', 'N/A')}
- **Language**: {source.get('language', 'N/A')}
- **Country**: {source.get('country', 'N/A')}
- **URL**: {source.get('url', 'N/A')}
"""
    
    # Save to file
    with open('API_Test_Results.md', 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print("✓ Results saved to API_Test_Results.md")

def save_results_to_csv(everything_data, headlines_data, sources_data):
    """Save API test results to CSV files"""
    
    # Save everything articles to CSV
    if everything_data and everything_data.get('articles'):
        with open('everything_articles.csv', 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['title', 'source_name', 'author', 'publishedAt', 'description', 'url', 'urlToImage'])
            
            for article in everything_data['articles']:
                writer.writerow([
                    article.get('title', ''),
                    article.get('source', {}).get('name', ''),
                    article.get('author', ''),
                    article.get('publishedAt', ''),
                    article.get('description', ''),
                    article.get('url', ''),
                    article.get('urlToImage', '')
                ])
        print("✓ Everything articles saved to everything_articles.csv")
    
    # Save headlines articles to CSV
    if headlines_data and headlines_data.get('articles'):
        with open('headlines_articles.csv', 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['title', 'source_name', 'author', 'publishedAt', 'description', 'url', 'urlToImage'])
            
            for article in headlines_data['articles']:
                writer.writerow([
                    article.get('title', ''),
                    article.get('source', {}).get('name', ''),
                    article.get('author', ''),
                    article.get('publishedAt', ''),
                    article.get('description', ''),
                    article.get('url', ''),
                    article.get('urlToImage', '')
                ])
        print("✓ Headlines articles saved to headlines_articles.csv")
    
    # Save sources to CSV
    if sources_data and sources_data.get('sources'):
        with open('news_sources.csv', 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['id', 'name', 'description', 'url', 'category', 'language', 'country'])
            
            for source in sources_data['sources']:
                writer.writerow([
                    source.get('id', ''),
                    source.get('name', ''),
                    source.get('description', ''),
                    source.get('url', ''),
                    source.get('category', ''),
                    source.get('language', ''),
                    source.get('country', '')
                ])
        print("✓ News sources saved to news_sources.csv")

def main():
    """Main function to run all API tests"""
    print("=" * 50)
    print("News API Test Program")
    print("=" * 50)
    
    # Test all endpoints
    everything_data = test_everything_endpoint()
    headlines_data = test_top_headlines_endpoint()
    sources_data = test_sources_endpoint()
    
    print("\n" + "=" * 50)
    print("Saving Results...")
    print("=" * 50)
    
    # Save results to files
    save_results_to_markdown(everything_data, headlines_data, sources_data)
    save_results_to_csv(everything_data, headlines_data, sources_data)
    
    print("\n" + "=" * 50)
    print("Test Complete!")
    print("=" * 50)

if __name__ == "__main__":
    main()
