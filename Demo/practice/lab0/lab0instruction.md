# Lab 0: News Text Processing and Keyword Extraction

## What You'll Do
Build a Python script to automatically extract titles, dates, and keywords from existing news articles, then save results as CSV data.

## Input
- Use the 5 English news articles already provided in the workspace
- Each article has format: Title, Publication Date, Content

## Your Task
Create `process_news.py` that:
1. Finds and reads existing news files (look for .txt files in workspace)
2. Extracts 3 main keywords from each article  
3. Outputs everything to `news_data.csv`

## Expected Output
```csv
filename,title,publish_date,keyword1,keyword2,keyword3
article1.txt,Breaking News Title,2025-10-26,keyword,keyword,keyword
```