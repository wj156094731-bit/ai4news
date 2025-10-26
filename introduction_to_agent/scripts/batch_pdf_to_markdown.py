#!/usr/bin/env python3
"""
Batch PDF to Markdown Converter
Converts all PDF files in a directory to markdown format with content preservation.
"""

import os
import sys
import fitz  # PyMuPDF
import re
from pathlib import Path
from datetime import datetime
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PDFToMarkdownConverter:
    def __init__(self, input_dir, output_dir):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
    def clean_text(self, text):
        """Clean and format text for markdown conversion."""
        # Remove excessive whitespace
        text = re.sub(r'\n\s*\n\s*\n', '\n\n', text)
        # Fix common PDF extraction issues
        text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)  # Add space between camelCase
        # Remove page numbers and headers/footers (basic cleanup)
        text = re.sub(r'^\s*\d+\s*$', '', text, flags=re.MULTILINE)
        return text.strip()
    
    def extract_metadata(self, pdf_doc):
        """Extract metadata from PDF."""
        metadata = pdf_doc.metadata
        return {
            'title': metadata.get('title', ''),
            'author': metadata.get('author', ''),
            'subject': metadata.get('subject', ''),
            'creator': metadata.get('creator', ''),
            'producer': metadata.get('producer', ''),
            'creation_date': metadata.get('creationDate', ''),
            'modification_date': metadata.get('modDate', '')
        }
    
    def convert_pdf_to_markdown(self, pdf_path):
        """Convert a single PDF file to markdown."""
        try:
            logger.info(f"Processing: {pdf_path.name}")
            
            # Open PDF
            pdf_doc = fitz.open(pdf_path)
            
            # Extract metadata
            metadata = self.extract_metadata(pdf_doc)
            
            # Extract text from all pages
            full_text = ""
            for page_num in range(len(pdf_doc)):
                page = pdf_doc[page_num]
                text = page.get_text()
                full_text += f"\n\n--- Page {page_num + 1} ---\n\n{text}"
            
            # Clean the text
            cleaned_text = self.clean_text(full_text)
            
            # Create markdown content
            markdown_content = f"""# {metadata['title'] or pdf_path.stem}

## Metadata
- **Author**: {metadata['author'] or 'Unknown'}
- **Subject**: {metadata['subject'] or 'N/A'}
- **Creator**: {metadata['creator'] or 'N/A'}
- **Producer**: {metadata['producer'] or 'N/A'}
- **Creation Date**: {metadata['creation_date'] or 'N/A'}
- **Modification Date**: {metadata['modification_date'] or 'N/A'}
- **Source File**: {pdf_path.name}
- **Converted**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

---

## Content

{cleaned_text}
"""
            
            # Save markdown file
            output_path = self.output_dir / f"{pdf_path.stem}.md"
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            pdf_doc.close()
            logger.info(f"Successfully converted: {output_path}")
            return True
            
        except Exception as e:
            logger.error(f"Error converting {pdf_path.name}: {str(e)}")
            return False
    
    def batch_convert(self):
        """Convert all PDF files in the input directory."""
        pdf_files = list(self.input_dir.rglob("*.pdf"))
        
        if not pdf_files:
            logger.warning(f"No PDF files found in {self.input_dir}")
            return
        
        logger.info(f"Found {len(pdf_files)} PDF files to convert")
        
        successful_conversions = 0
        failed_conversions = 0
        
        for pdf_file in pdf_files:
            if self.convert_pdf_to_markdown(pdf_file):
                successful_conversions += 1
            else:
                failed_conversions += 1
        
        logger.info(f"Conversion complete: {successful_conversions} successful, {failed_conversions} failed")

def main():
    """Main function to run the batch conversion."""
    # Define paths
    input_directory = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature"
    output_directory = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/MDfiles"
    
    logger.info("Starting batch PDF to Markdown conversion")
    logger.info(f"Input directory: {input_directory}")
    logger.info(f"Output directory: {output_directory}")
    
    # Create converter and run batch conversion
    converter = PDFToMarkdownConverter(input_directory, output_directory)
    converter.batch_convert()
    
    logger.info("Batch conversion completed!")

if __name__ == "__main__":
    main()
