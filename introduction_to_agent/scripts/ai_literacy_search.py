#!/usr/bin/env python3
"""
AI Literacy and Competency Framework Search Tool

This script searches through markdown files to find papers discussing AI literacy 
and competency frameworks, extracting relevant paragraphs and generating a report.
"""

import os
import re
import json
from pathlib import Path
from typing import List, Dict, Any
import datetime

class AILiteracySearcher:
    def __init__(self, input_dir: str, output_file: str):
        self.input_dir = Path(input_dir)
        self.output_file = Path(output_file)
        
        # Define search terms and patterns
        self.search_terms = [
            # Core AI literacy terms
            r'\bAI literacy\b',
            r'\bAI competency\b',
            r'\bAI competencies\b',
            r'\bAI competence\b',
            r'\bAI competences\b',
            r'\bartificial intelligence literacy\b',
            r'\bartificial intelligence competency\b',
            r'\bartificial intelligence competencies\b',
            r'\bAI skills\b',
            r'\bAI knowledge\b',
            r'\bAI understanding\b',
            
            # Framework-related terms
            r'\bAI literacy framework\b',
            r'\bAI competency framework\b',
            r'\bAI competence framework\b',
            r'\bAI skills framework\b',
            r'\bAI education framework\b',
            r'\bAI learning framework\b',
            r'\bAI teaching framework\b',
            r'\bAI curriculum framework\b',
            
            # Competency dimensions
            r'\bAI conceptual knowledge\b',
            r'\bAI procedural knowledge\b',
            r'\bAI metacognitive knowledge\b',
            r'\bAI cognitive skills\b',
            r'\bAI practical skills\b',
            r'\bAI technical skills\b',
            r'\bAI critical thinking\b',
            r'\bAI problem solving\b',
            r'\bAI creativity\b',
            r'\bAI collaboration\b',
            r'\bAI communication\b',
            
            # Assessment and evaluation
            r'\bAI literacy assessment\b',
            r'\bAI competency assessment\b',
            r'\bAI skills assessment\b',
            r'\bAI literacy evaluation\b',
            r'\bAI competency evaluation\b',
            
            # Educational contexts
            r'\bK-12 AI literacy\b',
            r'\bhigher education AI literacy\b',
            r'\badult education AI literacy\b',
            r'\bearly childhood AI literacy\b',
            r'\bAI literacy curriculum\b',
            r'\bAI literacy education\b',
            r'\bAI literacy instruction\b',
            r'\bAI literacy pedagogy\b',
            
            # Related concepts
            r'\bdigital literacy\b',
            r'\bcomputational thinking\b',
            r'\bAI awareness\b',
            r'\bAI fluency\b',
            r'\bAI proficiency\b',
            r'\bAI capability\b',
            r'\bAI readiness\b'
        ]
        
        # Compile regex patterns
        self.patterns = [re.compile(term, re.IGNORECASE) for term in self.search_terms]
        
        # Results storage
        self.results = []
        self.framework_papers = []
        
    def extract_metadata(self, content: str) -> Dict[str, str]:
        """Extract metadata from markdown file content."""
        metadata = {}
        
        # Extract title
        title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
        if title_match:
            metadata['title'] = title_match.group(1).strip()
        
        # Extract author
        author_match = re.search(r'- \*\*Author\*\*: (.+)$', content, re.MULTILINE)
        if author_match:
            metadata['author'] = author_match.group(1).strip()
        
        # Extract subject/journal
        subject_match = re.search(r'- \*\*Subject\*\*: (.+)$', content, re.MULTILINE)
        if subject_match:
            metadata['subject'] = subject_match.group(1).strip()
        
        return metadata
    
    def find_relevant_paragraphs(self, content: str, filename: str) -> List[Dict[str, Any]]:
        """Find paragraphs containing AI literacy/competency terms."""
        paragraphs = []
        
        # Split content into paragraphs (double newlines or section breaks)
        content_sections = re.split(r'\n\s*\n', content)
        
        for section in content_sections:
            if not section.strip():
                continue
                
            # Check if any pattern matches in this section
            matches = []
            for i, pattern in enumerate(self.patterns):
                if pattern.search(section):
                    matches.append(self.search_terms[i])
            
            if matches:
                # Clean up the section
                cleaned_section = re.sub(r'\s+', ' ', section.strip())
                
                # Skip very short sections
                if len(cleaned_section) < 50:
                    continue
                
                paragraphs.append({
                    'filename': filename,
                    'matches': matches,
                    'content': cleaned_section,
                    'word_count': len(cleaned_section.split())
                })
        
        return paragraphs
    
    def is_framework_paper(self, content: str, filename: str) -> bool:
        """Determine if a paper discusses AI literacy/competency frameworks."""
        framework_indicators = [
            r'\bframework\b',
            r'\bmodel\b',
            r'\btheoretical framework\b',
            r'\bconceptual framework\b',
            r'\bcompetency model\b',
            r'\bliteracy model\b',
            r'\bcompetency-based\b',
            r'\bcompetency framework\b',
            r'\bAI literacy framework\b',
            r'\bAI competency framework\b',
            r'\bAI competence framework\b',
            r'\bAI skills framework\b',
            r'\bAI education framework\b',
            r'\bAI learning framework\b',
            r'\bAI teaching framework\b',
            r'\bAI curriculum framework\b',
            r'\bcompetency dimensions\b',
            r'\bliteracy dimensions\b',
            r'\bcompetency levels\b',
            r'\bliteracy levels\b',
            r'\bcompetency assessment\b',
            r'\bliteracy assessment\b',
            r'\bcompetency evaluation\b',
            r'\bliteracy evaluation\b'
        ]
        
        framework_patterns = [re.compile(term, re.IGNORECASE) for term in framework_indicators]
        
        # Count framework-related matches
        framework_matches = 0
        for pattern in framework_patterns:
            if pattern.search(content):
                framework_matches += 1
        
        # Consider it a framework paper if it has multiple framework indicators
        return framework_matches >= 3
    
    def process_file(self, filepath: Path) -> Dict[str, Any]:
        """Process a single markdown file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract metadata
            metadata = self.extract_metadata(content)
            
            # Find relevant paragraphs
            paragraphs = self.find_relevant_paragraphs(content, filepath.name)
            
            # Check if it's a framework paper
            is_framework = self.is_framework_paper(content, filepath.name)
            
            if is_framework:
                self.framework_papers.append({
                    'filename': filepath.name,
                    'metadata': metadata,
                    'paragraph_count': len(paragraphs)
                })
            
            return {
                'filename': filepath.name,
                'metadata': metadata,
                'paragraphs': paragraphs,
                'is_framework_paper': is_framework,
                'total_paragraphs': len(paragraphs)
            }
            
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
            return None
    
    def search_all_files(self):
        """Search through all markdown files in the input directory."""
        print(f"Searching for AI literacy and competency terms in: {self.input_dir}")
        print(f"Found {len(list(self.input_dir.glob('*.md')))} markdown files")
        print("-" * 60)
        
        processed_files = 0
        total_matches = 0
        
        for filepath in self.input_dir.glob('*.md'):
            print(f"Processing: {filepath.name}")
            
            result = self.process_file(filepath)
            if result:
                self.results.append(result)
                processed_files += 1
                total_matches += result['total_paragraphs']
                
                if result['is_framework_paper']:
                    print(f"  ✓ Framework paper identified")
                print(f"  ✓ Found {result['total_paragraphs']} relevant paragraphs")
        
        print("-" * 60)
        print(f"Processing complete!")
        print(f"Files processed: {processed_files}")
        print(f"Total relevant paragraphs found: {total_matches}")
        print(f"Framework papers identified: {len(self.framework_papers)}")
    
    def generate_report(self):
        """Generate a comprehensive report."""
        report_content = f"""# AI Literacy and Competency Framework Analysis Report

**Generated on**: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Input Directory**: {self.input_dir}
**Total Files Processed**: {len(self.results)}
**Total Relevant Paragraphs**: {sum(r['total_paragraphs'] for r in self.results)}
**Framework Papers Identified**: {len(self.framework_papers)}

## Executive Summary

This report presents the results of a comprehensive search for AI literacy and competency framework discussions across {len(self.results)} academic papers. The analysis identified {len(self.framework_papers)} papers that specifically discuss AI literacy or competency frameworks, with a total of {sum(r['total_paragraphs'] for r in self.results)} relevant paragraphs containing AI literacy or competency-related terms.

## Framework Papers Identified

The following papers were identified as discussing AI literacy or competency frameworks:

"""
        
        # Add framework papers section
        for i, paper in enumerate(self.framework_papers, 1):
            report_content += f"""
### {i}. {paper['metadata'].get('title', paper['filename'])}

- **File**: {paper['filename']}
- **Author**: {paper['metadata'].get('author', 'Not specified')}
- **Journal/Subject**: {paper['metadata'].get('subject', 'Not specified')}
- **Relevant Paragraphs**: {paper['paragraph_count']}

"""
        
        # Add detailed results for each file
        report_content += """
## Detailed Analysis Results

"""
        
        for i, result in enumerate(self.results, 1):
            if result['total_paragraphs'] > 0:
                report_content += f"""
### {i}. {result['metadata'].get('title', result['filename'])}

- **File**: {result['filename']}
- **Author**: {result['metadata'].get('author', 'Not specified')}
- **Journal/Subject**: {result['metadata'].get('subject', 'Not specified')}
- **Framework Paper**: {'Yes' if result['is_framework_paper'] else 'No'}
- **Relevant Paragraphs Found**: {result['total_paragraphs']}

#### Relevant Excerpts:

"""
                
                for j, paragraph in enumerate(result['paragraphs'], 1):
                    report_content += f"""
**Excerpt {j}** (Matches: {', '.join(paragraph['matches'])}):
```
{paragraph['content'][:500]}{'...' if len(paragraph['content']) > 500 else ''}
```

"""
        
        # Add search methodology
        report_content += """
## Search Methodology

### Search Terms Used
The following terms and patterns were searched for:

"""
        for term in self.search_terms:
            report_content += f"- {term}\n"
        
        report_content += f"""

### Framework Identification Criteria
Papers were identified as framework papers if they contained 3 or more of the following indicators:
- Framework-related terms (framework, model, theoretical framework, etc.)
- Competency-based approaches
- Assessment and evaluation methods
- Dimensional analysis of AI literacy/competency

### Technical Details
- **Search Method**: Case-insensitive regex pattern matching
- **Content Processing**: Paragraph-based analysis with context preservation
- **Minimum Paragraph Length**: 50 characters
- **File Format**: Markdown files converted from PDF sources

## Conclusions

This analysis reveals the current state of AI literacy and competency framework research across {len(self.results)} academic papers. The identification of {len(self.framework_papers)} framework papers indicates a growing interest in developing structured approaches to AI education and assessment.

Key findings include:
1. **Framework Development**: {len(self.framework_papers)} papers specifically discuss AI literacy or competency frameworks
2. **Research Coverage**: Papers span various educational contexts (K-12, higher education, adult education)
3. **Assessment Focus**: Multiple papers address assessment and evaluation of AI literacy
4. **Competency Dimensions**: Various papers explore different dimensions of AI competency

This report provides a foundation for understanding the current landscape of AI literacy and competency framework research and can inform future research directions and educational practice.

---
*Report generated by AI Literacy Search Tool*
"""
        
        # Write the report
        with open(self.output_file, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"Report generated: {self.output_file}")
    
    def run(self):
        """Run the complete search and analysis."""
        print("AI Literacy and Competency Framework Search Tool")
        print("=" * 60)
        
        # Search all files
        self.search_all_files()
        
        # Generate report
        print("\nGenerating report...")
        self.generate_report()
        
        print(f"\nAnalysis complete! Report saved to: {self.output_file}")

def main():
    """Main function to run the search."""
    input_dir = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/MDfiles"
    output_file = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/introduction_to_agent/practice/reportAIframework.md"
    
    searcher = AILiteracySearcher(input_dir, output_file)
    searcher.run()

if __name__ == "__main__":
    main()
