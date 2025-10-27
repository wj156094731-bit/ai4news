#!/usr/bin/env python3
"""
News Processing Script for Lab 1
Extracts titles, dates, and keywords from news articles and saves to CSV
"""

import os
import csv
import re
from collections import Counter
from pathlib import Path

def extract_keywords(text, num_keywords=3):
    """
    Extract keywords from text using simple frequency analysis
    Args:
        text (str): Input text to analyze
        num_keywords (int): Number of top keywords to return
    Returns:
        list: Top keywords
    """
    # Convert to lowercase and remove punctuation
    text = re.sub(r'[^\w\s]', ' ', text.lower())
    
    # Common stop words to exclude
    stop_words = {
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
        'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does',
        'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that',
        'these', 'those', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves',
        'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself',
        'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their',
        'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'whose', 'this', 'that',
        'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
        'having', 'do', 'does', 'did', 'doing', 'will', 'would', 'should', 'could',
        'ought', 'i\'m', 'you\'re', 'he\'s', 'she\'s', 'it\'s', 'we\'re', 'they\'re',
        'i\'ve', 'you\'ve', 'we\'ve', 'they\'ve', 'i\'d', 'you\'d', 'he\'d', 'she\'d',
        'we\'d', 'they\'d', 'i\'ll', 'you\'ll', 'he\'ll', 'she\'ll', 'we\'ll',
        'they\'ll', 'isn\'t', 'aren\'t', 'wasn\'t', 'weren\'t', 'haven\'t', 'hasn\'t',
        'hadn\'t', 'won\'t', 'wouldn\'t', 'don\'t', 'doesn\'t', 'didn\'t', 'can\'t',
        'couldn\'t', 'shouldn\'t', 'mustn\'t', 'needn\'t', 'daren\'t', 'mayn\'t',
        'oughtn\'t', 'from', 'up', 'about', 'into', 'over', 'after'
    }
    
    # Split into words and filter
    words = text.split()
    filtered_words = [word for word in words 
                     if len(word) > 3 and word not in stop_words]
    
    # Count frequency and return top keywords
    word_freq = Counter(filtered_words)
    top_keywords = [word for word, count in word_freq.most_common(num_keywords)]
    
    # Ensure we have exactly num_keywords items (pad with empty strings if needed)
    while len(top_keywords) < num_keywords:
        top_keywords.append('')
    
    return top_keywords[:num_keywords]

def parse_article(file_path):
    """
    Parse a news article file and extract title, date, and content
    Args:
        file_path (str): Path to the article file
    Returns:
        dict: Dictionary containing parsed article data
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read().strip()
        
        lines = content.split('\n')
        
        # Extract title (first line after "Title:")
        title = ""
        published_date = ""
        article_content = ""
        
        for i, line in enumerate(lines):
            if line.startswith('Title:'):
                title = line.replace('Title:', '').strip()
            elif line.startswith('Published:'):
                published_date = line.replace('Published:', '').strip()
            elif line.startswith('Content:'):
                # Join all remaining lines as content
                article_content = '\n'.join(lines[i+1:]).strip()
                break
        
        return {
            'filename': os.path.basename(file_path),
            'title': title,
            'publish_date': published_date,
            'content': article_content
        }
    
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None

def find_news_files(directory):
    """
    Find all .txt files in the specified directory
    Args:
        directory (str): Directory path to search
    Returns:
        list: List of file paths
    """
    news_files = []
    try:
        for file_name in os.listdir(directory):
            if file_name.endswith('.txt'):
                file_path = os.path.join(directory, file_name)
                news_files.append(file_path)
    except FileNotFoundError:
        print(f"Directory not found: {directory}")
    
    return sorted(news_files)

def process_news_articles():
    """
    Main function to process all news articles and generate CSV output
    """
    # Define paths
    current_dir = Path(__file__).parent
    articles_dir = current_dir.parent / 'sample_news_articles'
    output_file = current_dir / 'news_data.csv'
    
    print(f"Looking for news articles in: {articles_dir}")
    print(f"Output will be saved to: {output_file}")
    
    # Find all news files
    news_files = find_news_files(str(articles_dir))
    
    if not news_files:
        print("No .txt files found in the articles directory!")
        return
    
    print(f"Found {len(news_files)} news articles:")
    for file_path in news_files:
        print(f"  - {os.path.basename(file_path)}")
    
    # Process each article
    processed_articles = []
    
    for file_path in news_files:
        print(f"\nProcessing: {os.path.basename(file_path)}")
        
        article_data = parse_article(file_path)
        if article_data:
            # Extract keywords
            keywords = extract_keywords(article_data['content'], 3)
            
            # Add keywords to article data
            article_data['keyword1'] = keywords[0] if len(keywords) > 0 else ''
            article_data['keyword2'] = keywords[1] if len(keywords) > 1 else ''
            article_data['keyword3'] = keywords[2] if len(keywords) > 2 else ''
            
            processed_articles.append(article_data)
            
            print(f"  Title: {article_data['title']}")
            print(f"  Date: {article_data['publish_date']}")
            print(f"  Keywords: {keywords}")
    
    # Save to CSV
    if processed_articles:
        fieldnames = ['filename', 'title', 'publish_date', 'keyword1', 'keyword2', 'keyword3']
        
        try:
            with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                
                for article in processed_articles:
                    # Only write the fields we want in the CSV
                    csv_row = {field: article.get(field, '') for field in fieldnames}
                    writer.writerow(csv_row)
            
            print(f"\n✅ Successfully processed {len(processed_articles)} articles!")
            print(f"📄 Results saved to: {output_file}")
            
            # Display CSV content
            print("\n📊 Generated CSV content:")
            print("-" * 80)
            with open(output_file, 'r', encoding='utf-8') as f:
                print(f.read())
                
        except Exception as e:
            print(f"❌ Error saving CSV file: {e}")
    else:
        print("❌ No articles were successfully processed!")

if __name__ == "__main__":
    print("🔍 News Article Processing Script")
    print("=" * 50)
    process_news_articles()