# Lab 2: AI and Large Language Models News Analysis

## Use Case Description

This lab demonstrates how to use the News API to search for and analyze news articles related to Artificial Intelligence (AI) and Large Language Models (LLMs). The goal is to:

1. **Search Strategy**: Use the News API's `/v2/everything` endpoint to find articles about AI and LLMs
2. **Data Collection**: Retrieve 50 recent articles on these topics
3. **Data Analysis**: Analyze the collected articles for patterns, sources, and trends
4. **Visualization**: Create an interactive HTML dashboard to explore the data

## Search Parameters

### Target Keywords
- Primary: "artificial intelligence" OR "AI" OR "machine learning"
- Secondary: "large language model" OR "LLM" OR "GPT" OR "ChatGPT"
- Combined search: `(artificial intelligence OR AI OR machine learning) AND (large language model OR LLM OR GPT OR ChatGPT)`

### Search Configuration
- **Endpoint**: `/v2/everything`
- **Language**: English (en)
- **Sort By**: publishedAt (newest first)
- **Page Size**: 50 articles
- **Date Range**: Last 30 days
- **Search Fields**: title, description, content

## Expected Data Structure

Each article will contain:
- **Source Information**: Publisher name and ID
- **Article Metadata**: Title, description, author, publication date
- **Content**: URL, image URL, truncated content (200 chars max)
- **Timing**: Published date in UTC format

## Analysis Objectives

1. **Source Diversity**: Identify which news sources cover AI/LLM topics most frequently
2. **Temporal Patterns**: Analyze publication timing and trends
3. **Content Themes**: Categorize articles by sub-topics (research, business, ethics, etc.)
4. **Geographic Distribution**: Map article sources by country/region
5. **Engagement Metrics**: Analyze article descriptions for key themes

## Interactive Dashboard Features

The HTML dashboard will include:

### Data Overview
- Total articles collected
- Date range of articles
- Source distribution
- Key statistics

### Interactive Elements
- **Search and Filter**: Filter articles by source, date, or keywords
- **Sorting Options**: Sort by date, source, or relevance
- **Article Cards**: Clickable cards showing title, source, date, and description
- **Charts and Graphs**: Visual representations of data patterns
- **Export Options**: Download filtered data as CSV

### Visualization Components
- Source distribution pie chart
- Publication timeline
- Word cloud of common terms
- Article preview with full descriptions

## Technical Implementation

### Python Script Features
- API key management and secure storage
- Error handling and rate limiting
- Data validation and cleaning
- JSON output with structured data
- Progress tracking and logging

### HTML Dashboard Features
- Responsive design for different screen sizes
- Interactive JavaScript components
- Data visualization using Chart.js or similar
- Search and filter functionality
- Export capabilities

## Learning Outcomes

By completing this lab, students will:
1. Understand how to use REST APIs for data collection
2. Learn to structure and analyze news data
3. Create interactive web visualizations
4. Apply data analysis techniques to real-world news data
5. Develop skills in web scraping and data presentation

## Data Privacy and Ethics

- All data is publicly available through the News API
- No personal information is collected
- Articles are used for educational analysis only
- Respect for source attribution and copyright


