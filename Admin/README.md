# Agent4HKU
**AI Agents for HKU Research Students: Comprehensive Workshop Materials**

A comprehensive collection of materials for teaching HKU research students how to use AI agents in their research workflows, organized into three main demonstration areas.

## 📅 Workshop Information

**Date**: 24 October 2025  
**Time**: 18:30 - 20:30  
**Duration**: 2 hours  
**Venue**: Meng Wah Complex 703-704  
**Format**: Interactive workshop with hands-on activities  
**Focus**: AI agents in education research  
**Host**: Prof Yongyan Li, HKU  
**Facilitator**: Dr Simon Wang, HKBU

## 📝 Workshop Abstract

**AI Agents for Research: Transforming Education Research Workflows**

This interactive workshop introduces HKU research students to the transformative potential of AI agents in education research. Unlike traditional chatbots that require constant context switching, AI agents provide seamless, integrated workflows that eliminate the need for copy-paste operations between tools and environments.

The workshop is structured around three comprehensive demonstrations:

1. **Introduction to AI Agents**: Participants will experience the fundamental differences between AI agents and chatbots, learning to leverage direct file system access, autonomous code generation, and persistent memory across sessions.

2. **Explore Litstudy**: Students will discover how AI agents integrate with litstudy, an open-source Python package for systematic literature reviews, enabling automated citation network analysis, author collaboration mapping, and topic modeling.

3. **New Use Cases**: An open-ended exploration where students brainstorm innovative applications of AI agents in their own research contexts, followed by collaborative prototyping of selected ideas.

Through hands-on activities using Jupyter notebooks, participants will practice file management, code generation, literature analysis, and research planning. The workshop emphasizes practical applications, showing how AI agents can enhance research productivity, improve literature review efficiency, and enable more sophisticated research methodologies.

By the end of the workshop, participants will have hands-on experience with AI agent capabilities, understand their integration with research tools, and be equipped to apply these technologies to their own research projects. The session includes comprehensive documentation, practice exercises, and follow-up resources for continued learning.

**Learning Outcomes**: Participants will gain proficiency in AI agent usage, enhanced literature review capabilities, improved research productivity, and practical skills for integrating AI agents into their research workflows. The open-ended "New Use Cases" section encourages creative thinking and collaborative problem-solving, enabling students to explore innovative applications and rapidly prototype solutions for their specific research needs.

## 🎯 Overview

This repository contains materials for a comprehensive workshop that introduces HKU research students to AI agents and their applications in education research. The workshop is organized into three main demonstration areas:

1. **Introduction to AI Agents**: Fundamentals and basic operations
2. **Explore Litstudy**: Systematic literature review tools
3. **New Use Cases**: Advanced applications and workflows

## 📁 Repository Structure

```
agent4hku/
├── introduction_to_agent/         # Demo 1: AI Agent Fundamentals
│   ├── data/                      # Sample data for basic operations
│   │   ├── example_peaks.bed
│   │   ├── example_peaks.csv
│   │   └── paper_analysis_report.*
│   ├── docs/                      # Documentation for AI agent basics
│   │   ├── AI_Agent_Introduction_Demo.md
│   │   ├── Hands_on_Activities_Guide.md
│   │   └── HKU_AI_Agents_Education_Workshop_Plan.md
│   ├── scripts/                    # Basic AI agent scripts
│   │   ├── demo1_extract_methods.py
│   │   └── demo2_prepare_analysis.py
│   └── practice/                  # Hands-on practice notebooks
│       └── 01_ai_agent_basics.ipynb
├── litstudy_explore/              # Demo 2: Literature Analysis
│   ├── data/                      # Literature analysis data
│   │   ├── litstudy_analysis_report.json
│   │   ├── litstudy_badia_analysis_*.json
│   │   ├── litstudy_badia_paper_*.csv
│   │   └── litstudy_paper_collection_*.csv
│   ├── docs/                      # Litstudy documentation
│   │   ├── Litstudy_Demo_Guide.md
│   │   └── Literature_Analysis_Guide.md
│   ├── scripts/                   # Literature analysis scripts
│   │   └── demo2_motif_analysis.R
│   └── practice/                  # Litstudy practice notebooks
│       └── 02_litstudy_analysis.ipynb
├── new_use_cases/                 # Demo 3: Advanced Applications
│   ├── data/                      # Advanced use case data
│   ├── docs/                      # Advanced application documentation
│   │   ├── Workshop_Materials_Checklist.md
│   │   └── Workshop_Summary_Overview.md
│   ├── scripts/                    # Advanced AI agent scripts
│   │   ├── comprehensive_citation_mapper.py
│   │   ├── enhanced_pdf_to_md.py
│   │   ├── extract_all_references.py
│   │   ├── individual_reference_search.py
│   │   ├── map_citations.py
│   │   ├── master_process.py
│   │   ├── pdf_text_extractor.py
│   │   ├── revise_metadata.py
│   │   ├── run_conversion.py
│   │   ├── simple_pdf_to_md.py
│   │   └── final_comprehensive_citation_mapper.py
│   └── practice/                  # Advanced practice notebooks
│       └── 03_advanced_applications.ipynb
├── requirements.txt               # Python dependencies
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites

1. **AI Agent Access**: GitHub Copilot, ChatGPT, or similar
2. **Python 3.7+**: For running scripts and litstudy
3. **Jupyter Notebook**: For practice exercises
4. **Text Editor**: VS Code, Sublime Text, or similar
5. **Internet Connection**: For web search and data access

### Installation

```bash
# Clone the repository
git clone https://github.com/tesolchina/agent4hku.git
cd agent4hku

# Install Python dependencies
pip install -r requirements.txt

# Install litstudy for literature analysis
pip install litstudy pandas matplotlib networkx scikit-learn

# Install Jupyter for practice notebooks
pip install jupyter notebook
```

### Running the Workshop

1. **Start with Introduction**: Begin with `introduction_to_agent/` folder
2. **Explore Litstudy**: Move to `litstudy_explore/` for literature analysis
3. **Advanced Applications**: Try `new_use_cases/` for advanced workflows
4. **Practice Exercises**: Use Jupyter notebooks in each `practice/` folder

## 🎓 Workshop Components

### Demo 1: Introduction to AI Agents
- **What are AI Agents?**: Differences from traditional chatbots
- **Live Demonstrations**: File operations, code generation, web search
- **Key Advantages**: No context switching, persistent memory, autonomous actions
- **Practice Exercises**: Hands-on activities with Jupyter notebooks

### Demo 2: Explore Litstudy
- **Literature Analysis**: Systematic literature review tools
- **Citation Networks**: Research connections and patterns
- **Collaboration Analysis**: Author networks and research communities
- **Topic Modeling**: Research themes and temporal trends
- **Practice Exercises**: Litstudy analysis with sample data

### Demo 3: New Use Cases
- **Brainstorming Session**: Students explore innovative AI agent applications
- **Collaborative Prototyping**: Rapid development of selected ideas
- **Open-ended Exploration**: Creative applications in research contexts
- **Practice Exercises**: Hands-on implementation of brainstormed concepts

## 🛠️ Key Tools and Scripts

### Python Scripts
- **`demo1_extract_methods.py`**: Extract methods from research papers
- **`demo2_prepare_analysis.py`**: Prepare data for analysis
- **`enhanced_pdf_to_md.py`**: Convert PDF documents to markdown
- **`comprehensive_citation_mapper.py`**: Map citations and references
- **`extract_all_references.py`**: Extract references from documents

### R Scripts
- **`demo2_motif_analysis.R`**: Motif analysis for bioinformatics

### Data Files
- **Sample Peaks**: Genomic data examples (`.bed`, `.csv`)
- **Literature Analysis**: JSON and CSV outputs from litstudy
- **Paper Collections**: CSV files with research paper metadata

## 📚 Documentation

### Workshop Guides
- **`Workshop_Summary_Overview.md`**: Complete workshop overview
- **`HKU_AI_Agents_Education_Workshop_Plan.md`**: Detailed 2-hour plan
- **`AI_Agent_Introduction_Demo.md`**: Live demonstration script
- **`Hands_on_Activities_Guide.md`**: Interactive exercises
- **`Literature_Analysis_Guide.md`**: Literature review workflow
- **`Litstudy_Demo_Guide.md`**: Systematic literature review
- **`Workshop_Materials_Checklist.md`**: Preparation checklist

## 🎯 Learning Outcomes

### Immediate Outcomes
- Understanding of AI agent capabilities
- Hands-on experience with AI tools
- Practical skills for research workflows
- Knowledge of systematic literature review tools

### Long-term Outcomes
- Integration of AI agents into research practices
- Enhanced literature review efficiency
- Improved research productivity
- Better collaboration and knowledge sharing

## 🔄 Workshop Flow

| Time | Activity | Duration | Materials |
|------|----------|----------|-----------|
| 0-30 min | AI Agent Introduction & Demo | 30 min | Slides, live demo |
| 30-75 min | Hands-on Operations | 45 min | Laptops, sample files |
| 75-105 min | Literature Analysis | 30 min | Review papers, AI agent |
| 105-120 min | Litstudy Demo | 15 min | Litstudy setup, sample data |

## 📊 Assessment and Evaluation

### Formative Assessment
- Quick polls and understanding checks
- Progress monitoring throughout activities
- Peer discussion and knowledge sharing
- Technical support and troubleshooting

### Summative Assessment
- Individual reflection on learning
- Action plan for research applications
- Feedback survey on workshop effectiveness
- Follow-up plan for continued learning

## 🚀 Follow-up and Support

### Immediate Support
- Technical assistance with AI agent usage
- Research guidance and methodology help
- Resource access and material availability
- Peer networking and collaboration

### Long-term Support
- Community forum for discussion and Q&A
- Resource updates and new materials
- Advanced workshops and follow-up sessions
- Research collaboration opportunities

## 📧 Contact and Support

**Workshop Host**: Prof. Yongyan Li  
**Institution**: The University of Hong Kong  
**Email**: yongyan@hku.hk  

**Workshop Facilitator**: Dr. Simon Wang  
**Institution**: Hong Kong Baptist University  
**Email**: simonwang@hkbu.edu.hk  
**GitHub**: @tesolchina

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Prof Yongyan Li** - Workshop Host, HKU
- **Dr Simon Wang** - Guest Speaker and Facilitator, HKBU
- **litstudy** team at Netherlands eScience Center
- **GitHub Copilot** for AI assistance
- **HKU Research Students** for feedback and suggestions

---

**Ready to experience the power of AI agents in education research?** 🚀

Fork this repo and let's get started!
