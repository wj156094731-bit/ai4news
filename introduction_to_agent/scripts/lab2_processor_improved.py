#!/usr/bin/env python3
"""
Lab 2: Process bibliographic info and categorize abstracts (IMPROVED VERSION)
Creates a CSV file listing all items in MDfiles folder with bibliographic data
Now properly matches abstracts from AI_literacy_review_articles.txt
"""

import os
import csv
import re
from pathlib import Path

def parse_bibliographic_file(file_path):
    """Parse the AI_literacy_review_articles.txt file to extract bibliographic data"""
    print("Parsing bibliographic file...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by double newlines to separate entries
    entries = content.split('\n\n')
    
    bibliographic_data = {}
    
    for entry in entries:
        if 'Abstract:' in entry and 'Keywords:' in entry:
            # Extract title (usually the line before the journal name)
            lines = entry.strip().split('\n')
            title = None
            abstract = None
            keywords = None
            
            for i, line in enumerate(lines):
                if line.startswith('Abstract:'):
                    abstract = line.replace('Abstract:', '').strip()
                elif line.startswith('Keywords:'):
                    keywords = line.replace('Keywords:', '').strip()
                elif not title and line and not line.startswith('Volume') and not line.startswith('ISSN') and not line.startswith('https://'):
                    # This is likely the title
                    if i > 0 and not any(x in line for x in ['Volume', 'ISSN', 'https://', 'Abstract:', 'Keywords:']):
                        title = line.strip()
            
            if title and abstract:
                # Clean title for matching
                clean_title = re.sub(r'[^\w\s]', '', title.lower())
                clean_title = re.sub(r'\s+', ' ', clean_title).strip()
                bibliographic_data[clean_title] = {
                    'title': title,
                    'abstract': abstract,
                    'keywords': keywords
                }
    
    print(f"Parsed {len(bibliographic_data)} bibliographic entries")
    return bibliographic_data

def extract_title_from_filename(filename):
    """Extract title from markdown filename"""
    # Remove .md extension and replace hyphens with spaces
    title = filename.replace('.md', '').replace('-', ' ')
    # Remove year and journal info (usually at the end)
    title = re.sub(r'\s+\d{4}.*$', '', title)
    return title.strip()

def find_matching_abstract(filename, bibliographic_data):
    """Find matching abstract for a markdown file"""
    # Extract title from filename
    title_from_filename = extract_title_from_filename(filename)
    clean_filename_title = re.sub(r'[^\w\s]', '', title_from_filename.lower())
    clean_filename_title = re.sub(r'\s+', ' ', clean_filename_title).strip()
    
    # Try exact match first
    if clean_filename_title in bibliographic_data:
        return bibliographic_data[clean_filename_title]['abstract']
    
    # Try partial matching
    for bib_title, data in bibliographic_data.items():
        # Check if key words match
        filename_words = set(clean_filename_title.split())
        bib_words = set(bib_title.split())
        
        # Calculate overlap
        overlap = len(filename_words.intersection(bib_words))
        if overlap >= 3:  # At least 3 words in common
            return data['abstract']
    
    return "No matching abstract found"

def extract_studies_reviewed(text):
    """Extract number of studies reviewed from text"""
    # Look for patterns like "reviewed X studies", "analyzed X papers", etc.
    patterns = [
        r'reviewed\s+(\d+)\s+studies?',
        r'analyzed\s+(\d+)\s+papers?',
        r'(\d+)\s+studies?',
        r'(\d+)\s+papers?',
        r'corpus\s+of\s+(\d+)\s+studies?',
        r'(\d+)\s+articles?',
        r'(\d+)\s+publications?'
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            return matches[0]
    return "N/A"

def extract_main_focus(content):
    """Extract main focus or research question from content"""
    # Look for research questions, objectives, or main focus
    focus_patterns = [
        r'research question[s]?[:\s]*(.*?)(?=\n\n|\nKeywords|\nAbstract|\Z)',
        r'objective[s]?[:\s]*(.*?)(?=\n\n|\nKeywords|\nAbstract|\Z)',
        r'aim[s]?[:\s]*(.*?)(?=\n\n|\nKeywords|\nAbstract|\Z)',
        r'focus[:\s]*(.*?)(?=\n\n|\nKeywords|\nAbstract|\Z)',
        r'purpose[:\s]*(.*?)(?=\n\n|\nKeywords|\nAbstract|\Z)'
    ]
    
    for pattern in focus_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            focus = match.group(1).strip()
            focus = re.sub(r'\n+', ' ', focus)
            focus = re.sub(r'\s+', ' ', focus)
            if len(focus) > 20:
                return focus[:200] + "..." if len(focus) > 200 else focus
    
    return "Focus not explicitly stated"

def process_md_file(file_path, bibliographic_data):
    """Process a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        filename = os.path.basename(file_path)
        
        # Find matching abstract from bibliographic data
        abstract = find_matching_abstract(filename, bibliographic_data)
        
        # Extract main focus
        main_focus = extract_main_focus(content)
        
        # Extract number of studies reviewed
        studies_reviewed = extract_studies_reviewed(content)
        
        return {
            'filename': filename,
            'studies_reviewed': studies_reviewed,
            'abstract': abstract,
            'main_focus': main_focus
        }
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return {
            'filename': os.path.basename(file_path),
            'studies_reviewed': 'Error',
            'abstract': 'Error reading file',
            'main_focus': 'Error reading file'
        }

def main():
    # Define paths
    md_files_path = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/MDfiles"
    bibliographic_file = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/AI_literacy_review_articles.txt"
    output_path = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/introduction_to_agent/practice/ReviewArticles.csv"
    
    print("Starting Lab 2 (IMPROVED): Processing bibliographic info and categorizing abstracts")
    print(f"Processing files from: {md_files_path}")
    print(f"Using bibliographic data from: {bibliographic_file}")
    print(f"Output will be saved to: {output_path}")
    
    # Parse bibliographic data
    bibliographic_data = parse_bibliographic_file(bibliographic_file)
    
    # Get all markdown files
    md_files = [f for f in os.listdir(md_files_path) if f.endswith('.md')]
    print(f"Found {len(md_files)} markdown files")
    
    # Process each file
    results = []
    for i, filename in enumerate(md_files, 1):
        print(f"Processing {i}/{len(md_files)}: {filename}")
        file_path = os.path.join(md_files_path, filename)
        result = process_md_file(file_path, bibliographic_data)
        results.append(result)
    
    # Write to CSV
    with open(output_path, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['filename', 'studies_reviewed', 'abstract', 'main_focus']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for result in results:
            writer.writerow(result)
    
    print(f"\n✅ Completed! CSV file created at: {output_path}")
    print(f"Processed {len(results)} files")
    
    # Show some statistics
    abstracts_found = sum(1 for r in results if r['abstract'] != "No matching abstract found" and r['abstract'] != "Error reading file")
    print(f"Successfully matched {abstracts_found}/{len(results)} abstracts")

if __name__ == "__main__":
    main()
