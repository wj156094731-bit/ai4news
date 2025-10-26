# AI4News - AI for News Analysis and Journalism

A comprehensive project for AI-powered news analysis, journalism education, and news API integration with full text extraction capabilities.

## 🚀 Project Overview

This workspace aggregates references and teaching materials for AI and news workflows, containing multiple components for AI-driven news analysis and journalism education:

- **News API Integration**: Complete implementation with full text extraction
- **Journalism Education**: Lab materials and exercises for JOUR3105
- **AI Agent Capabilities**: Introduction to AI agents for news analysis
- **Web Application**: React-based news insights platform

## 📁 Project Structure

```
AI4news/
├── ai4news/                          # Core AI4News project
│   ├── Admin/                        # Administrative materials and slides
│   ├── introduction_to_agent/        # AI agent education materials (from Agent4HKU)
│   └── jour3105/                     # Journalism course materials
│       ├── docs/                     # Documentation and labs
│       │   ├── lab1Output/           # Lab 1: News API with full text extraction
│       │   └── lab2Output/           # Lab 2: AI & LLM News Analysis Dashboard
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

## 🤖 Lab 2: AI & LLM News Analysis Dashboard

### Features
- **Multi-query Search**: 3 different search strategies for diverse AI/LLM articles
- **Interactive Dashboard**: Real-time search, filtering, and visualization
- **Data Collection**: Python script that fetched 43 unique articles
- **Visualization**: Interactive charts and article cards

### Files Generated
- `fetch_ai_news.py` - Python script for data collection
- `ai_news_dashboard.html` - Interactive HTML dashboard
- `ai_news_articles.json` - Generated data with 43 articles
- `Lab2_Description.md` - Detailed use case documentation

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

### Usage Examples
```python
# Run Lab 1: Enhanced News API test
cd ai4news/jour3105/docs/lab1Output
python3 test_news_api_enhanced.py

# Run Lab 2: AI/LLM news analysis
cd ai4news/jour3105/docs/lab2Output
python3 fetch_ai_news.py
```

## 📊 Sample Results

### Lab 1: Full Text Articles Retrieved
1. **"Anthropic inks multibillion-dollar deal with Google for AI chips"** (1,274 characters)
2. **"Microsoft AI chief says company won't build chatbots for erotica"** (275 characters)

### Lab 2: AI/LLM News Analysis
- **43 unique articles** about AI and Large Language Models
- **36 unique sources** from diverse news outlets
- **Interactive dashboard** with search, filtering, and visualization

## 🎯 Use Cases

1. **Content Discovery**: Find articles on specific topics
2. **Trend Analysis**: Track mentions over time
3. **News Aggregation**: Build news tickers and feeds
4. **Brand Monitoring**: Track company/product mentions
5. **Research**: Analyze news patterns and sources
6. **Full Text Analysis**: Extract complete articles for detailed analysis
7. **AI/LLM Research**: Specialized analysis of artificial intelligence news

## 📚 Educational Materials

### JOUR3105 - Journalism Course
- **Lab 1**: News API basics and full text extraction
- **Lab 2**: AI & LLM news analysis with interactive dashboard
- **Documentation**: Comprehensive API usage guides
- **Examples**: Working code samples and test results

### AI Agent Introduction
- **Capabilities Demo**: AI agent features and applications
- **Lab Materials**: Step-by-step exercises
- **Documentation**: Learning resources and guides

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tesolchina/ai4news.git
   cd ai4news
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the labs**:
   ```bash
   # Lab 1: News API with full text extraction
   cd ai4news/jour3105/docs/lab1Output
   python3 test_news_api_enhanced.py
   
   # Lab 2: AI/LLM news analysis
   cd ai4news/jour3105/docs/lab2Output
   python3 fetch_ai_news.py
   # Then open ai_news_dashboard.html in your browser
   ```

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

**Note**: This project demonstrates advanced news API integration with full text extraction capabilities and AI/LLM news analysis, suitable for journalism education and news analysis applications.
