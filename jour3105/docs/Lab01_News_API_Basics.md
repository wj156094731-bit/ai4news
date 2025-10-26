# Lab 1 — News APIs 101 and Environment Setup

## Goals
- Understand trade-offs among free news APIs (coverage, limits, languages)
- Set up a Python environment and API keys
- Fetch and inspect a small sample (5–20 articles)

## Steps
1) Compare providers using `/workspaces/ai4news/news-api/README.md` and pick one you can sign up for today.
2) In VS Code terminal:

```bash
cd /workspaces/ai4news/jour3105
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

3) Open `.env` and paste your API key. Save the file.

4) Run the starter script (replace query as needed):
```bash
python scripts/fetch_news.py --provider newsapi --q "Hong Kong" --limit 5
```

5) Export to JSON (optional):
```bash
python scripts/fetch_news.py --provider newsapi --q "Hong Kong" --limit 10 --json > sample.json
```

## Deliverable
- A short note (5–8 bullets) describing your chosen provider, limits, and first impressions
- A screenshot of terminal output OR a CSV/JSON file showing your fetched sample

## Tips
- If you see a message about missing API keys, double-check `.env` and provider selection
- Respect rate limits; keep `--limit` small during testing
- Record exact queries/filters used for transparency
