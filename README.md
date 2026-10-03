# Fangyanuo Zhou (Noah Zhou) — Academic Homepage

Source of my personal academic homepage: **<https://noahisarider.github.io/>**

- **Main page** — bio, academic engagement, research experience, publications, projects, portfolio.
  Trilingual: English / 简体中文 / 繁體中文 (switch in the top-right corner).
- **CV page** — **<https://noahisarider.github.io/cv/>** — English-only, minimal jemdoc-style layout,
  split into *Home* / *Research* / *Background*.

## About

Undergraduate at South China University of Technology (SCUT), in a dual degree program:
**Major in Software Engineering, Minor in Business Administration** (2023.9 – 2027.6).
Ranked **1st in grade** — weighted average 92.24/100, GPA 3.95/4.00.
IELTS 8.0/9.0, GRE Verbal 161/170, Quantitative 170/170.

**Research interests** — fake news detection, social computing, AI for Business, health and medical AI,
recommender systems, multi-agent systems, LLM value alignment, multimodal learning, sentiment analysis,
hallucination research, computer vision and target recognition.

Currently a research assistant with Prof. Quanyi Zou (interdisciplinary research on news communication
and large models) and Prof. Yuanyuan Dang (multimodal AI mental-health coaching system; AIGC medical
case generation). Co-author of *CMLE: A Collaborative LoRA-Enhanced Expert Framework for Multimodal
Fake News Detection* — **IEEE Transactions on Consumer Electronics**, doi 10.1109/TCE.2026.3677445.
One paper under review; patent pending.

[CV (English, PDF)](CV_English.pdf) · [CV (中文, PDF)](CV_Chinese.pdf) · [GitHub](https://github.com/NoahIsARider) · [Email](mailto:noahchou2005@gmail.com)

## Repository layout

```
index.html                 main page skeleton (Bootstrap shell, no build step)
static/js/scripts.js       ALL main-page content, i18n config and rendering logic (en / zh / yue)
static/css/                styles
static/assets/img/         photo.jpg (headshot), background.jpeg (hero background), logo.png
cv/                        English CV sub-site: index.html / research.html / background.html + jemdoc.css
CV_English.pdf             CV — English
CV_Chinese.pdf             CV — 中文
Portfolio.pdf / .pptx      portfolio deck
CMLE_IEEE_TCE_2026.pdf     the IEEE TCE paper (full text)
archive/                   superseded material nothing links to (old CVs, CV .txt dumps, unused vendor JS)
```

## Editing

**Main page.** There is no build step and no external content files: every section lives inline in
`static/js/scripts.js`, in the `contentByLang` object, as one Markdown template literal per section
per language. `index.html` loads `marked.js`, which renders them client-side. Edit all three language
blocks (`en` / `zh` / `yue`) when you change content. See [`AGENTS.md`](AGENTS.md) for the detailed guide.

**CV page.** Hand-written static HTML under `cv/` — English only, academic content only. The left-hand
menu is duplicated across the three pages, so keep it in sync (the current page's entry carries
`class="current"`; the others link to `#section` anchors on the sibling pages).

**Deploy.** Push to `main`; GitHub Pages serves the repository root automatically. There is no cache
busting, so hard-refresh (Ctrl+F5) after deploying.

## Credits

The main page's layout is adapted from academic-homepage templates by
[Sen Li](https://github.com/senli1073/senli1073.github.io) and
[Yixin Huang](https://github.com/Yixin0313/personal-homepage-template);
the `/cv` page follows [jemdoc](https://jemdoc.jaboc.net/), in the style of
[Wenqi Fan's homepage](https://wenqifan03.github.io/). MIT licensed — see [`LICENSE`](LICENSE).
