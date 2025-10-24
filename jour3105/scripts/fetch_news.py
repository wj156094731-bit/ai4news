#!/usr/bin/env python3
"""
Minimal CLI to fetch recent articles from a selected news API provider.
- Reads API keys from .env or environment variables
- Supports provider selection and simple query params
- Designed for classroom demos and CSV export

Usage examples:
  python scripts/fetch_news.py --provider newsapi --q "Hong Kong" --limit 5
  python scripts/fetch_news.py --provider thenewsapi --q "Hong Kong" --limit 5

This script is intentionally simple and avoids non-standard dependencies.
"""

import argparse
import os
import sys
import time
from typing import Dict, Any, List

try:
    from dotenv import load_dotenv  # type: ignore
except Exception:
    load_dotenv = None  # optional

import json
import requests


def load_env():
    if load_dotenv:
        load_dotenv()


def info(msg: str):
    print(f"[info] {msg}")


def warn(msg: str):
    print(f"[warn] {msg}")


def err(msg: str):
    print(f"[error] {msg}", file=sys.stderr)


def get_provider_key(provider: str) -> str:
    if provider == "newsapi":
        return os.getenv("NEWSAPI_API_KEY", "")
    if provider == "thenewsapi":
        return os.getenv("THENEWSAPI_API_KEY", "")
    if provider == "newsdata":
        return os.getenv("NEWSDATA_API_KEY", "")
    if provider == "webzio":
        return os.getenv("WEBZIO_API_KEY", "")
    return ""


def fetch_news_newsapi(q: str, limit: int, lang: str) -> List[Dict[str, Any]]:
    """Use NewsAPI.org 'everything' endpoint.
    Docs: https://newsapi.org/docs/endpoints/everything
    """
    api_key = get_provider_key("newsapi")
    if not api_key:
        warn("NEWSAPI_API_KEY not set. Create .env from .env.example and add your key.")
        return []
    url = "https://newsapi.org/v2/everything"
    params = {
        "q": q or "Hong Kong",
        "language": lang,
        "sortBy": "publishedAt",
        "pageSize": max(1, min(limit, 100)),
        "apiKey": api_key,
    }
    r = requests.get(url, params=params, timeout=30)
    r.raise_for_status()
    data = r.json()
    articles = data.get("articles", [])
    results = []
    for a in articles:
        results.append({
            "source": (a.get("source") or {}).get("name"),
            "author": a.get("author"),
            "title": a.get("title"),
            "description": a.get("description"),
            "url": a.get("url"),
            "publishedAt": a.get("publishedAt"),
        })
    return results


def fetch_news_thenewsapi(q: str, limit: int, lang: str) -> List[Dict[str, Any]]:
    """Use TheNewsAPI.com search endpoint.
    Docs: https://www.thenewsapi.com/documentation
    """
    api_key = get_provider_key("thenewsapi")
    if not api_key:
        warn("THENEWSAPI_API_KEY not set. Create .env from .env.example and add your key.")
        return []
    url = "https://api.thenewsapi.com/v1/news/all"
    params = {
        "api_token": api_key,
        "search": q or "Hong Kong",
        "language": lang,
        "limit": max(1, min(limit, 50)),
        "sort": "published_at",
    }
    r = requests.get(url, params=params, timeout=30)
    r.raise_for_status()
    data = r.json()
    articles = data.get("data", [])
    results = []
    for a in articles:
        results.append({
            "source": (a.get("source")),
            "author": a.get("author"),
            "title": a.get("title"),
            "description": a.get("description"),
            "url": a.get("url"),
            "publishedAt": a.get("published_at"),
        })
    return results


def fetch(provider: str, q: str, limit: int, lang: str) -> List[Dict[str, Any]]:
    if provider == "newsapi":
        return fetch_news_newsapi(q, limit, lang)
    if provider == "thenewsapi":
        return fetch_news_thenewsapi(q, limit, lang)
    warn(f"Unknown provider '{provider}'. Supported: newsapi, thenewsapi")
    return []


def main():
    parser = argparse.ArgumentParser(description="Fetch news articles from a provider")
    parser.add_argument("--provider", choices=["newsapi", "thenewsapi"], default="newsapi")
    parser.add_argument("--q", default="Hong Kong", help="Query/topic keyword(s)")
    parser.add_argument("--limit", type=int, default=5, help="Max articles to return")
    parser.add_argument("--lang", default="en", help="Language code (provider dependent)")
    parser.add_argument("--json", action="store_true", help="Print raw JSON")
    args = parser.parse_args()

    load_env()

    t0 = time.time()
    try:
        items = fetch(args.provider, args.q, args.limit, args.lang)
    except requests.HTTPError as e:
        err(f"HTTP error: {e}")
        sys.exit(2)
    except Exception as e:
        err(f"Unexpected error: {e}")
        sys.exit(2)

    dt = time.time() - t0
    info(f"Fetched {len(items)} articles via {args.provider} in {dt:.2f}s")

    if args.json:
        print(json.dumps(items, indent=2, ensure_ascii=False))
        return

    # Pretty print minimal table
    for i, a in enumerate(items, 1):
        title = (a.get("title") or "").strip()
        src = a.get("source") or "?"
        when = a.get("publishedAt") or "?"
        print(f"{i:2d}. [{src}] {title} ({when})")


if __name__ == "__main__":
    main()
