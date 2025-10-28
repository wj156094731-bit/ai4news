#!/usr/bin/env python3
"""
process_news.py

Simple script to read .txt news articles from a `sample_news_articles/` directory,
extract Title, Date, and the top 3 keywords (simple frequency-based), and write
results to `news_data.csv`.

Behavior and assumptions:
- Each article .txt: first non-empty line = Title, second non-empty line = Date,
  remaining lines = Content.
- Keywords: top 3 most frequent words in content (lowercased, punctuation removed),
  excluding a small built-in stopword list and words shorter than 3 characters.

This is intentionally dependency-free so it runs without installing extra packages.
"""

from pathlib import Path
import csv
import string
from collections import Counter


STOPWORDS = {
    "the","and","for","that","with","are","was","from","this","have",
    "will","but","not","their","they","been","its","which","more",
    "some","into","over","after","new","major","also","than","said",
    "who","about","were","has","had","while","one","two"
}


def extract_article_parts(text: str):
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    if not lines:
        return None, None, ""
    title = lines[0]
    date = lines[1] if len(lines) >= 2 else ""
    content = "\n".join(lines[2:]) if len(lines) >= 3 else ""
    return title, date, content


def extract_keywords(content: str, top_k: int = 3):
    if not content:
        return []
    # normalize
    translator = str.maketrans(string.punctuation, " " * len(string.punctuation))
    cleaned = content.translate(translator).lower()
    tokens = [t for t in cleaned.split() if len(t) >= 3 and t not in STOPWORDS]
    counts = Counter(tokens)
    most = [w for w, _ in counts.most_common(top_k)]
    # pad if fewer
    while len(most) < top_k:
        most.append("")
    return most


def process_articles(articles_dir: Path, out_csv: Path):
    articles = sorted(articles_dir.glob("*.txt"))
    if not articles:
        print(f"No .txt articles found in {articles_dir}")
        return 1

    rows = []
    for p in articles:
        text = p.read_text(encoding="utf-8")
        title, date, content = extract_article_parts(text)
        keywords = extract_keywords(content, top_k=3)
        rows.append({
            "filename": p.name,
            "title": title or "",
            "date": date or "",
            "keyword1": keywords[0],
            "keyword2": keywords[1],
            "keyword3": keywords[2],
        })

    # write CSV
    fieldnames = ["filename", "title", "date", "keyword1", "keyword2", "keyword3"]
    with out_csv.open("w", newline='', encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in rows:
            writer.writerow(r)

    print(f"Wrote {len(rows)} rows to {out_csv}")
    return 0


def main():
    base = Path(__file__).parent
    articles_dir = base / "sample_news_articles"
    out_csv = base / "news_data.csv"
    if not articles_dir.exists():
        print(f"Articles folder not found: {articles_dir}")
        return 2
    return process_articles(articles_dir, out_csv)


if __name__ == "__main__":
    raise SystemExit(main())
