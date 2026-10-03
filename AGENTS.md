# AGENTS.md — Noah's Academic Homepage (noahisarider.github.io)

> 中文摘要：本站所有页面内容（主页/荣誉/经历/论文/作品集/课外活动）**全部内联在
> `static/js/scripts.js` 的 `contentByLang` 对象里**，分 en / zh / yue（英/简中/繁中）
> 三种语言。`contents/*.md` 已于 2026-08-31 删除——它们是模板残留的死文件，
> 从未被加载，改它们不会影响线上。**改内容只改 scripts.js，改完推 main 即自动部署。**

## What this site is

A single-page academic homepage (Bootstrap-based) served as a static site from this
repo via GitHub Pages (https://noahisarider.github.io/). No build step — the browser
loads `index.html` + `static/js/scripts.js` and renders everything client-side
(marked.js converts embedded Markdown to HTML).

## Architecture (single source of truth: `static/js/scripts.js`)

```
index.html                 — page skeleton, loads bootstrap/marked/mathjax/scripts.js
static/js/scripts.js       — ⭐ ALL content, config, and rendering logic (895 lines)
static/css/                — styles (main.css, styles.css)
static/assets/img/         — photo.jpg (square headshot), background.jpeg (hero bg), logo.png
cv/                        — separate English academic CV sub-site (jemdoc template), served at /cv/
<repo root>                — CV_English.pdf / CV_Chinese.pdf, Portfolio.pdf / Portfolio.pptx (linked from the site)
archive/                   — superseded files nothing links to (legacy CV PDFs, CV .txt dumps, Portfolio-old.pptx)
```

### scripts.js layout (line numbers as of 2026-08-31)

| Lines | What |
|-------|------|
| 1–127 | i18n config: `supportedLangs`, nav labels, section subtitles, theme-button text, resume links, copyright (per language) |
| 129–697 | `contentByLang` — the actual page content, one block per language |
| 697–895 | rendering logic: language switching, theme toggle, markdown render, section injection |

### contentByLang structure

```js
const contentByLang = {
  en:  { home: `...`, awards: `...`, experience: `...`, publications: `...`, extracurricular: `...`, portfolio: `...` },
  zh:  { home: `...`, ... },   // 简体中文
  yue: { home: `...`, ... }    // 繁體中文 (fallback chain: yue → zh → en)
};
```

Each value is a Markdown template literal (HTML is allowed inside, e.g. the
`<ul class="pub-list">` in publications, `<span class="highlight-blue">` in awards).

**Language fallback:** if a language lacks a section, it falls back
`yue → zh → en` (lines 802–804). Keep all three in sync when you change content.

## How to edit content

### 1. Find the right spot

| Section you want to change | Key in contentByLang | Subtitle (i18n) |
|---|---|---|
| 首页/Home | `home` | `home-subtitle` |
| 奖励荣誉/Awards | `awards` | `awards-subtitle` |
| 项目经历/Experience | `experience` | `experience-subtitle` |
| 论文与成果/Publications | `publications` | `publications-subtitle` |
| 课外活动/Extracurricular | `extracurricular` | `extracurricular-subtitle` |
| 作品集/Portfolio | `portfolio` | `portfolio-subtitle` |

Every change must be made **in all three language blocks** (en ≈ line 130, zh ≈ line 319, yue ≈ line 508).
Search for the section key, e.g. `experience: \``, and edit the template literal for each language.

### 2. Common operations

- **Edit text:** modify the Markdown inside the backticks. Keep the backtick-quote
  structure intact (`` key: `...` `` — don't break the template literal).
- **Add an experience/project entry:** copy an existing `### Title, *Role* (dates)` block
  (including the `---` separator) and paste it inside the same template literal.
- **Add a publication:** in the `publications` block, copy an existing
  `<li>...</li>` entry inside `<ul class="pub-list">`. The CMLE entry is the reference format:
  authors, `"Title"` (no comma before the closing quote), `<em>Journal</em>`, doi + DOI link.
- **Add a whole new section:** add a key to `contentByLang` for all three languages,
  add a nav label + subtitle in the i18n config, and (if needed) a section entry in the
  `sections` array (near line 18).
- **Rename / add links:** e.g. resume PDFs are referenced in the i18n `resume-links`
  entries and from `home`/CV buttons.

### 3. Things that are NOT in scripts.js

- `static/assets/img/` — replace `photo.jpg` / `background.jpeg` to change portrait/hero.
- Repo-root PDFs (`CV_English.pdf`, `CV_Chinese.pdf`, `Portfolio.pdf`, `Portfolio.pptx`) —
  referenced by filename; upload new versions by replacing the file. **Every repo filename is
  English/ASCII** — keep it that way (the old Chinese names needed percent-encoding in URLs).
- `archive/` — superseded material nothing links to: `CV_{English,Chinese}_legacy.pdf`,
  `CV_{English,Chinese}.txt` (flattened dumps), `Portfolio-old.pptx`. Roots stay clean.
- `index.html` — only touches site chrome (title, meta, script tags).

## The `/cv` sub-site (`https://noahisarider.github.io/cv/`)

A second, **English-only academic CV** built on the **jemdoc** template copied from
<https://wenqifan03.github.io/>. Deliberately *outside* `scripts.js` — hand-written HTML:

```
cv/index.html       — Home: headshot, affiliation, Short Bio, research interests, news
cv/research.html    — Publications (+ Patents) / Research Experience / Projects
cv/background.html  — Education (+ Academic Engagement) / Awards & Honors / Technical Skills
cv/jemdoc.css       — the template stylesheet (minus its emoji-decorated infoblock rules)
```

- The left-hand menu is duplicated in all three files: when you add a page or section, edit it in
  every file; the current page's entry carries `class="current"`, the others anchor with `#id`.
- Owner's conventions here: layout stays **full-bleed** (never cap `#layout-content` with
  `max-width` — the template runs to the viewport edge: 1280px table at a 1280px viewport),
  **no favicon `<link>`** (browser default), English only, academic content only.
- Display name is `Fangyanuo Zhou` with a `Preferred name: Noah Zhou` subtitle; the degree is
  always spelled out as *Major in Software Engineering, Minor in Business Administration*.

## Deployment

- Branch `main` → GitHub Pages deploys automatically (repo settings: Pages → main / root).
- Push via HTTPS (token) or SSH; commit identity must be `NoahIsARider`
  (`noahisarider@users.noreply.github.com`), never a bot identity.
- After pushing, hard-refresh (Ctrl+F5) — the site is pure static, no cache busting.
- To verify: open the page, check the section you edited in all three languages
  (top-right language switcher: English / 简中 / 繁中).

## History / pitfalls

- **2026-08-31:** `contents/*.md` + `contents/config.yml` were **deleted** — they were
  leftover template files that nothing ever fetched (scripts.js has zero `fetch()` calls;
  all content is inline). Editing them silently does nothing. Do not recreate them.
- **CMLE citation:** the paper title must NOT have a comma before the closing quote:
  `"CMLE: ... Fake News Detection"` (no trailing comma inside the quotes).
- **Lianshan field research** (2026-08-31): the entry stays in extracurricular but
  the "社团活动：/社團活動：/Extracurricular:" prefix was removed — it is research,
  not a club activity. Keep the entry, never re-add the club label. (CC Film Club
  keeps its label — that one IS a club activity.)
- Keep three languages in sync; the site is Noah's public academic face — verify all
  three versions after any content change.
