#!/usr/bin/env python3
"""
Simple runner script for PDF to Markdown conversion.
This script can be run directly to convert all PDFs in the specified directory.
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required packages."""
    try:
        print("Installing required packages...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "PyMuPDF"])
        print("Requirements installed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error installing requirements: {e}")
        return False
    return True

def main():
    """Main function to run the conversion."""
    print("PDF to Markdown Batch Converter")
    print("=" * 40)
    
    # Check if PyMuPDF is installed
    try:
        import fitz
        print("PyMuPDF is already installed.")
    except ImportError:
        print("PyMuPDF not found. Installing...")
        if not install_requirements():
            print("Failed to install requirements. Please install PyMuPDF manually:")
            print("pip install PyMuPDF")
            return
    
    # Import and run the converter
    try:
        from batch_pdf_to_markdown import PDFToMarkdownConverter
        
        input_dir = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature"
        output_dir = "/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/MDfiles"
        
        print(f"Input directory: {input_dir}")
        print(f"Output directory: {output_dir}")
        print("\nStarting conversion...")
        
        converter = PDFToMarkdownConverter(input_dir, output_dir)
        converter.batch_convert()
        
        print("\nConversion completed!")
        
    except Exception as e:
        print(f"Error during conversion: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())
