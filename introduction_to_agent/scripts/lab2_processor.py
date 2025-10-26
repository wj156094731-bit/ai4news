#!/usr/bin/env python3
"""
Lab 2: Process bibliographic info and categorize abstracts
Creates a CSV file listing all items in MDfiles folder with bibliographic data
"""

import os
import csv
import re
from pathlib import Path

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

def extract_abstract_from_md(content):
    """Extract abstract from markdown content"""
    # Look for abstract section
    abstract_patterns = [
        r'## Abstract\n(.*?)(?=\n##|\n---|\nKeywords|\nIntroduction|\Z)',
        r'Abstract:\s*(.*?)(?=\nKeywords|\nIntroduction|\n---|\Z)',
        r'Abstract\n(.*?)(?=\nKeywords|\nIntroduction|\n---|\Z)'
    ]
    
    for pattern in abstract_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            abstract = match.group(1).strip()
            # Clean up the abstract
            abstract = re.sub(r'\n+', ' ', abstract)
            abstract = re.sub(r'\s+', ' ', abstract)
            if len(abstract) > 50:  # Only return if it's substantial
                return abstract[:500] + "..." if len(abstract) > 500 else abstract
    
    return "Abstract not found"

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

def process_md_file(file_path):
    """Process a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        filename = os.path.basename(file_path)
        
        # Extract abstract
        abstract = extract_abstract_from_md(content)
        
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
    output_path = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/introduction_to_agent/practice/ReviewArticles.csv"
    
    print("Starting Lab 2: Processing bibliographic info and categorizing abstracts")
    print(f"Processing files from: {md_files_path}")
    print(f"Output will be saved to: {output_path}")
    
    # Get all markdown files
    md_files = [f for f in os.listdir(md_files_path) if f.endswith('.md')]
    print(f"Found {len(md_files)} markdown files")
    
    # Process each file
    results = []
    for i, filename in enumerate(md_files, 1):
        print(f"Processing {i}/{len(md_files)}: {filename}")
        file_path = os.path.join(md_files_path, filename)
        result = process_md_file(file_path)
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

if __name__ == "__main__":
    main()
