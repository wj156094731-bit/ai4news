# JOUR3105 Current Issues in Journalism — Lab Series

A hands-on lab sequence designed for JOUR3105 students to explore current issues in journalism through practical data sourcing, analysis, ethics, and newsroom tooling. Labs use free/low-cost news APIs and simple Python workflows in VS Code.

## Logistics
- Venue: CVA 202
- Medium: English
- Format: Weekly 90–120 min labs with short demos + guided exercises + reflection
- Prerequisites: Laptop, VS Code, basic Python familiarity (we provide templates), ability to sign up for at least one free news API key

## Learning outcomes
By the end of the series, students will be able to:
- Compare free news APIs and responsibly retrieve articles for analysis and reporting
- Evaluate coverage, sourcing, and framing across outlets on a current issue
- Apply basic verification, transparency, and attribution practices
- Visualize coverage timelines and headlines to support editorial decisions
- Discuss ethical/legal considerations (TOS, rate limits, privacy, copyright)
- Prototype a minimal "newsroom dashboard" to track an issue over time

## Quick start (local)
1) Create and activate a Python virtual environment (optional but recommended)
2) Install dependencies and set API keys

```bash
# from the repository root
cd jour3105
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# copy and edit env keys
cp .env.example .env
# open .env and paste your key(s)
```

3) Try the starter script (gracefully prints instructions if keys are missing):
```bash
python scripts/fetch_news.py --provider newsapi --q "Hong Kong" --limit 5
```

## Session plan (8 labs)
See detailed schedule in `docs/Labs_Schedule.md`. High-level outline:

1. News APIs 101 + environment setup: pick a provider, fetch first articles
2. Comparing sources on a current HK issue: map outlets, dates, angles
3. Framing and bias basics: headlines, keywords, and sentiment caveats
4. Verification and misinformation: corroboration and source transparency
5. Visualizing coverage: timelines, outlet breakdowns, and sampling bias
6. Ethics and legal: TOS, rate limits, privacy, attribution, fair use
7. Build a simple newsroom dashboard (CLI/CSV/HTML)
8. Capstone mini-pitch: a short story or annotated dataset with methods

## Assessment ideas (adaptable)
- Lab participation and short reflections (weekly)
- Two short lab submissions (data + 1–2 page memo)
- Final mini-project (team or solo): story plan or dashboard prototype

## Repository structure (this folder)
- `docs/` — schedules, guides, rubrics
- `scripts/` — runnable starters (fetch/clean/export)
- `practice/` — optional worksheets or notebook versions (instructor’s choice)

## Support
If something breaks in setup, open an issue or leave a note during class; the labs are designed to run offline with cached CSVs when needed.
