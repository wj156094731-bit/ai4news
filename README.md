# AI4News - AI for News Analysis and Journalism

A comprehensive project for AI-powered news analysis, journalism education, and news API integration with full text extraction capabilities.

## 🚀 Project Overview

This repository contains multiple components for AI-driven news analysis and journalism education:

- **News API Integration**: Complete implementation with full text extraction
- **Journalism Education**: Lab materials and exercises for JOUR3105
- **AI Agent Capabilities**: Introduction to AI agents for news analysis
- **Web Application**: React-based news insights platform

## 📁 Project Structure

```
AI4news/
├── ai4news/                          # Core AI4News project
│   ├── Admin/                        # Administrative materials
│   ├── introduction_to_agent/        # AI agent education materials
│   └── jour3105/                     # Journalism course materials
│       ├── docs/                     # Documentation and labs
│       │   └── lab1Output/           # Lab 1: News API with full text extraction
│       ├── scripts/                  # Python scripts for news processing
│       └── newsAPI.md               # News API documentation
├── copilot-news-insights/            # React web application
└── README.md                         # This file
```

## 🔧 Lab 1: News API with Full Text Extraction

### Features
- **Complete News API Integration**: All three endpoints (everything, top-headlines, sources)
- **Full Text Content Extraction**: Web scraping to get complete articles
- **Comprehensive Documentation**: API explanations and usage examples
- **Data Export**: CSV and Markdown output formats

### Files Generated
- `API_Services_Explanation.md` - Complete API documentation
- `Enhanced_API_Test_Results.md` - Test results with full text articles
- `test_news_api_enhanced.py` - Python program with full text extraction
- Multiple CSV files with structured data

### Key Achievements
✅ **Full Text Extraction**: Successfully extracted complete articles from URLs  
✅ **Smart Content Detection**: Handles various website structures  
✅ **Error Handling**: Robust retry logic and error management  
✅ **Data Export**: Multiple output formats (CSV, Markdown)  
✅ **Documentation**: Comprehensive API usage guide  

## 🛠️ Technical Implementation

### News API Integration
- **Endpoints**: `/v2/everything`, `/v2/top-headlines`, `/v2/top-headlines/sources`
- **Full Text Extraction**: BeautifulSoup-based web scraping
- **Content Cleaning**: Removes ads, navigation, and scripts
- **Error Handling**: Retry logic and graceful failure handling

### Python Dependencies
```bash
pip install requests beautifulsoup4
```

### Usage Example
```python
# Run the enhanced News API test
python3 test_news_api_enhanced.py
```

## 📊 Sample Results

### Full Text Articles Retrieved
1. **"Anthropic inks multibillion-dollar deal with Google for AI chips"** (1,274 characters)
2. **"Microsoft AI chief says company won't build chatbots for erotica"** (275 characters)

### API Test Results
- **Everything Endpoint**: 15,275 total results
- **Top Headlines**: 43 total results  
- **Sources**: 10 technology sources found

## 🎯 Use Cases

1. **Content Discovery**: Find articles on specific topics
2. **Trend Analysis**: Track mentions over time
3. **News Aggregation**: Build news tickers and feeds
4. **Brand Monitoring**: Track company/product mentions
5. **Research**: Analyze news patterns and sources
6. **Full Text Analysis**: Extract complete articles for detailed analysis

## 🔒 Important Notes

### API Limitations
- News API only provides truncated content (200 characters max)
- Full text requires web scraping from article URLs
- Respect website terms of service and robots.txt
- Implement proper rate limiting

### Legal Considerations
- Check website terms of service before scraping
- Implement respectful scraping practices
- Use proper User-Agent headers
- Respect robots.txt files

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd AI4news
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the News API lab**:
   ```bash
   cd ai4news/jour3105/docs/lab1Output
   python3 test_news_api_enhanced.py
   ```

4. **View results**:
   - Check `Enhanced_API_Test_Results.md` for full text articles
   - Review CSV files for structured data
   - Read `API_Services_Explanation.md` for documentation

## 📚 Educational Materials

### JOUR3105 - Journalism Course
- **Lab 1**: News API basics and full text extraction
- **Documentation**: Comprehensive API usage guides
- **Examples**: Working code samples and test results

### AI Agent Introduction
- **Capabilities Demo**: AI agent features and applications
- **Lab Materials**: Step-by-step exercises
- **Documentation**: Learning resources and guides

## 🤝 Contributing

This project is designed for educational purposes. Contributions are welcome for:
- Additional API integrations
- Enhanced web scraping techniques
- Documentation improvements
- Educational material additions

## 📄 License

This project is for educational use. Please respect the terms of service of all APIs and websites used.

## 🔗 Related Resources

- [News API Documentation](https://newsapi.org/docs)
- [BeautifulSoup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- [Requests Library](https://docs.python-requests.org/)

---

**Note**: This project demonstrates advanced news API integration with full text extraction capabilities, suitable for journalism education and news analysis applications.
