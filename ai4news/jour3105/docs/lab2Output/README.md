# Lab 2: AI & LLM News Analysis Dashboard

## Overview
This lab demonstrates how to use the News API to collect, analyze, and visualize news articles about Artificial Intelligence and Large Language Models. The project includes a Python script for data collection and an interactive HTML dashboard for data exploration.

## Files Generated

### Core Files
- **`fetch_ai_news.py`** - Python script to fetch articles from News API
- **`ai_news_dashboard.html`** - Interactive HTML dashboard for data visualization
- **`ai_news_articles.json`** - Collected articles data (generated after running script)
- **`Lab2_Description.md`** - Detailed description of the use case and methodology

### Supporting Files
- **`requirements.txt`** - Python dependencies
- **`README.md`** - This documentation file

## Quick Start

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Data Collection Script
```bash
python3 fetch_ai_news.py
```

This will:
- Fetch 50 articles about AI and LLMs from the News API
- Save the data to `ai_news_articles.json`
- Display summary statistics

### 3. Open the Dashboard
Open `ai_news_dashboard.html` in a web browser to explore the data interactively.

## Features

### Data Collection (`fetch_ai_news.py`)
- **Multi-query Search**: Uses 3 different search strategies to find diverse articles
- **Smart Filtering**: Removes duplicates and validates article data
- **Rate Limiting**: Respects API limits with delays between requests
- **Error Handling**: Robust error handling and logging
- **Statistics**: Calculates source distribution, date ranges, and word counts

### Interactive Dashboard (`ai_news_dashboard.html`)
- **Real-time Search**: Filter articles by title, description, or content
- **Source Filtering**: Filter by specific news sources
- **Date Filtering**: Filter by publication date
- **Sorting Options**: Sort by date, source, or title
- **Visual Charts**: Interactive pie chart showing source distribution
- **Export Functionality**: Download filtered data as CSV
- **Responsive Design**: Works on desktop and mobile devices

## Dashboard Features

### Overview Statistics
- Total articles collected
- Number of unique sources
- Date range of articles
- Average word count

### Interactive Elements
- **Search Bar**: Real-time search across article content
- **Source Dropdown**: Filter by specific news sources
- **Date Picker**: Filter by publication date
- **Sort Controls**: Multiple sorting options
- **Export Button**: Download data as CSV

### Article Cards
Each article displays:
- Title and description
- Source and publication date
- Author information
- Direct link to full article

## Data Structure

The JSON file contains:
```json
{
  "metadata": {
    "fetch_date": "2024-10-25T07:23:41.846000",
    "total_articles": 43,
    "search_queries": [...],
    "api_endpoint": "https://newsapi.org/v2/everything"
  },
  "statistics": {
    "total_articles": 43,
    "unique_sources": 36,
    "source_distribution": {...},
    "date_range": {...},
    "word_count_stats": {...}
  },
  "articles": [...]
}
```

## Search Strategy

The script uses three complementary search queries:

1. **Broad AI/LLM Search**: `(artificial intelligence OR AI OR machine learning) AND (large language model OR LLM OR GPT OR ChatGPT)`
2. **Company-focused Search**: `artificial intelligence AND (ChatGPT OR OpenAI OR Google Bard)`
3. **Technical Search**: `machine learning AND (transformer OR neural network OR deep learning)`

## API Configuration

- **Endpoint**: `/v2/everything`
- **Language**: English only
- **Sort Order**: Published date (newest first)
- **Date Range**: Last 30 days
- **Page Size**: 20 articles per query (max 100 per API call)

## Technical Details

### Python Script Features
- Object-oriented design with `NewsAPIFetcher` class
- Comprehensive error handling and logging
- Data validation and cleaning
- Duplicate removal based on URL
- Progress tracking and status updates

### Dashboard Features
- Pure HTML/CSS/JavaScript (no external dependencies except Chart.js)
- Responsive design with CSS Grid and Flexbox
- Interactive charts using Chart.js
- Real-time filtering and search
- CSV export functionality

## Usage Examples

### Running the Script
```bash
# Basic execution
python3 fetch_ai_news.py

# With verbose logging
python3 -u fetch_ai_news.py | tee output.log
```

### Dashboard Usage
1. Open `ai_news_dashboard.html` in a web browser
2. Use the search bar to find specific articles
3. Filter by source or date using the dropdown controls
4. Sort articles using the sort dropdown
5. Click "Export CSV" to download filtered data

## Troubleshooting

### Common Issues

1. **API Key Error**: Ensure `apikey.md` exists and contains a valid News API key
2. **No Articles Found**: Check internet connection and API key validity
3. **Dashboard Not Loading**: Ensure `ai_news_articles.json` exists in the same directory
4. **Permission Errors**: Check file permissions for the output directory

### Debug Mode
Add logging to see detailed execution:
```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

## Learning Outcomes

By completing this lab, students will:
1. Understand REST API usage and data collection
2. Learn data processing and cleaning techniques
3. Create interactive web visualizations
4. Apply filtering and search algorithms
5. Develop skills in data export and presentation

## Data Privacy

- All data is publicly available through the News API
- No personal information is collected
- Articles are used for educational analysis only
- Respects source attribution and copyright

## Future Enhancements

Potential improvements:
- Add sentiment analysis of articles
- Implement topic modeling and clustering
- Add geographic analysis of sources
- Create time-series visualizations
- Add article content summarization

## Support

For issues or questions:
1. Check the console output for error messages
2. Verify API key and internet connection
3. Ensure all files are in the correct directory
4. Check browser console for JavaScript errors (for dashboard issues)


