# PDF to Markdown Batch Converter

This directory contains scripts for converting PDF files to markdown format in batches.

## Files

- `batch_pdf_to_markdown.py` - Main conversion script with full functionality
- `run_pdf_conversion.py` - Simple runner script that handles dependencies
- `requirements_pdf_converter.txt` - Required Python packages

## Usage

### Quick Start
```bash
cd /Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/introduction_to_agent/scripts
python run_pdf_conversion.py
```

### Manual Usage
```bash
# Install dependencies
pip install -r requirements_pdf_converter.txt

# Run the converter
python batch_pdf_to_markdown.py
```

## Features

- **Batch Processing**: Converts all PDF files in the input directory and subdirectories
- **Content Preservation**: Maintains text content with minimal loss
- **Metadata Extraction**: Includes PDF metadata (author, title, creation date, etc.)
- **Page Separation**: Clearly marks page boundaries in the output
- **Error Handling**: Continues processing even if individual files fail
- **Logging**: Detailed progress and error reporting

## Input/Output

- **Input Directory**: `/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature`
- **Output Directory**: `/Users/simonwang/Documents/Usage/HKUworkshop/agent4hku/Demo on AI literacy/Literature/MDfiles`

## Results

The script successfully converted **40 PDF files** to markdown format, preserving:
- Full text content
- Document structure
- Metadata information
- Page boundaries

All converted files are saved in the MDfiles directory with `.md` extensions.
