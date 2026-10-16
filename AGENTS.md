# AGENTS.md — noahisarider.github.io

> 中文摘要：主页现在是**一个自包含的静态 `index.html`**（内容 + 样式 + JSON-LD 全在一个文件里）。
> 旧的 `static/js/scripts.js`（contentByLang 三语渲染那套）**已经不再被任何页面加载**，改它不会影响线上。
> **改内容只改 `index.html`，推 `main` 即自动部署。**
> 根目录的 `google4201cda6dfa1a0ac.html` 和 `BingSiteAuth.xml` 是搜索平台验证文件，**永远不要删**。

## What this site is

<https://noahisarider.codeberg.page/> — a single-page personal index served as a static site from this
repository by GitHub Pages. **No build step, no framework, no external requests, and one four-line inline script — the day / night switch.**
The entire page is `index.html`: markup, one inline `<style>` block and the JSON-LD graph together.

Served from branch `main`, repository root (`Settings → Pages`).

## Architecture — everything is in `index.html`

| Part | What |
|---|---|
| `<head>` | title / meta / OpenGraph / Twitter, canonical, inline SVG favicon, JSON-LD `@graph` (Person, WebSite, two ScholarlyArticle) |
| `<style>` | the whole design system — CSS custom properties plus ~60 lines of rules |
| `.mast` | lockup left, section nav right (Research / Projects / Sites / Writing / CV) |
| `.main` | intro paragraphs, the CV call-out, the facts `<dl>`, then `#research`, `#projects`, `#sites`, `#writing`, `#now` |
| `aside.now` | the fixed right-hand panel: the quote, its attribution, the contact list |
| `.foot` | last-updated, email, GitHub |

### The design system is the page's identity — keep it in sync

- Solarized palette: paper `#fdf6e3` (base3), secondary text `#657b83` (base00), rules and the hover
  highlight `#eee8d5` (base2), body text `#111`
- Helvetica Neue stack, 17px, line-height 1.06, letter-spacing −0.012em
- `.main` sits at a 17% left indent with a 33em measure — 218px and 561px at a 1280px viewport
- Section heads are uppercase, with an 80px gap above each one
- List markers are **hanging em dashes**: `:before{content:"\2014";position:absolute;left:-1.3em}`
  with `position:relative` on the item, which keeps the text's left edge flush with the paragraphs
  above and below. The one exception is inside `aside.now`, where the dashes are inline.
- `aside.now` is fixed, vertically centred, `right:26px` and `width:314px`. Those numbers are the
  top nav's own measured box, which is what makes the panel's edges line up with "Research" and "CV".
  A media query below 1200px turns it into a normal in-flow card instead.
- The tab icon is `static/assets/logo.png` — the original file, untouched. The CV repo deliberately
  uses a blank icon instead.
- **Day / night.** Paper is the default. The moon button at the end of the top nav flips
  `html[data-theme=dark]`, which swaps the whole variable set for Solarized base03 — `#002b36` paper,
  `#073642` cards and hover, `#93a1a1` ink, `#839496` secondary (measured contrast 5.61 / 4.86 / 4.75).
  The reader's choice is kept under `nc-theme`, the key `/noahchou/` already uses, so it follows them
  from page to page and from language to language. Nothing is saved yet, nothing changes: with
  JavaScript off every page stays on paper, exactly as before.

## Editing

1. Edit `index.html` directly — content and style are the same file. There is no content array, no
   Markdown, no `fetch()`.
2. Check the change in a browser first (`python -m http.server` in the repo root is enough).
3. Push to `main`. Pages redeploys in about a minute. Hard-refresh (Ctrl+F5) — there is no cache
   busting, and browsers cache the tab icon especially hard.

**Never re-introduce** `static/js/scripts.js`, `static/css/*`, Bootstrap or marked.js. They are the
old architecture's leftovers: no page loads them any more, so editing them changes nothing.

## Files that must not be touched

| Path | Why |
|---|---|
| `google4201cda6dfa1a0ac.html` | Google Search Console verification. Content is the single line `google-site-verification: google4201cda6dfa1a0ac.html`. Deleting it un-verifies the property. |
| `BingSiteAuth.xml` | Bing Webmaster verification (`<users><user>9D5E7318B9C383CEE47476B1DA55A80D</user></users>`). Same rule. |
| `.nojekyll` | Stops Jekyll from touching the tree. |
| `404.html` | Forwards retired CV paths (`/FangyanuoZhou/`, any case) to `/cv/`. Pages serves it for unknown paths. |
| `fangyanuo-zhou/`, `fangyanuozhou/` | Meta-refresh stubs keeping retired CV paths alive. Windows checkouts are case-insensitive while Pages is case-sensitive — hence both spellings plus the `404.html` net. |
| `noahchou/` | The `/noahchou/` landing page, and one half of a **hand-mirrored pair**: the same files live in the Codeberg `pages` repo. Edit both and keep them byte-identical. |

### Two files are deliberately absent

`Portfolio.pptx` (36 MB) and `archive/Portfolio-old.pptx` (34 MB) are **not** in these trees.
Cloudflare Pages caps a single asset at **25 MiB** and fails the whole deployment when one file is
over it, and nothing links to either deck — `Portfolio.pdf` is the published form of the same one.
The two masters live outside the web trees, in `D:/Projects/个人主页/noahchou-unused-assets/portfolio-deck/`,
with a `.from-<tree>` suffix where the copies differed. `git log -- Portfolio.pptx` still has them.

### The sub-site links are absolute, on purpose

This repo is deployed twice, and the two copies are not the same shape. GitHub Pages
(`noahisarider.github.io`, live again since the account came back on 2026-10-15) serves it next to
the sub-sites, so `/cv/` resolves there. The Cloudflare Pages project
`noahisarider-github-io.pages.dev` builds **this repo alone**, where every sub-site path 404s.

So every link that leaves this repo is written out absolutely as `https://noahisarider.github.io/…`
(`/cv/`, `/oblivio/`, `/oblivio/portfolio/`, `/noahsroom/`, `/noahsblog/`, `/ICONS/`, `/Platonia/`
and the rest). Links inside the repo (`/research.html`, `/zh/`, `/static/…`, `/noahchou/`,
`Portfolio.pdf`) stay root-relative, and they resolve on both copies.

Do not tidy those absolute URLs back into root-relative paths: that is exactly what broke the
Cloudflare build. The **assembled** copies of the same pages (Codeberg `pages`,
`noahisarider.gitlab.io`, `noahisarider.pages.dev`) keep their own root-relative links, because
those hosts serve the whole site. The rule for this repo: every `href="/…"` must resolve inside
this repo.

## Related repositories

- **CV** — `NoahIsARider/cv`, served at <https://noahisarider.codeberg.page/cv/> in English / 简体 / 繁體.
  That repo is self-contained: it carries its own copies of the PDFs, the photo and the stylesheet.
  Local checkout is `D:/Projects/个人主页/fangyanuo-zhou`.
- **Sub-sites** — oblivio, Noah's Room, Platonia, GeekRSS, BookClub-2000, Clube, noahsblog and the
  rest are **separate repositories**, each a Pages project served under this domain (`/oblivio/`,
  `/Platonia/`, …). They are not in this repository, so editing here does nothing to them.
- **Cloudflare Pages mirrors** — two CF projects. `noahisarider-github-io.pages.dev` builds **this
  repo alone**, so only the homepage and its own pages exist there, which is why the sub-site links
  above are absolute. `noahisarider.pages.dev` builds the assembled site from GitLab
  `NoahIsARider/noahisarider`. Neither follows pushes predictably: retry the deployment from the CF
  dashboard after a change.

## Conventions and history

- Commit identity for this repository: `noahisarider <noahchou2005@gmail.com>`.
- Every filename in the repository is ASCII. Keep it that way.
- `archive/` holds superseded material that nothing links to. The root stays clean.
- **2026-10-08 — the main page was rebuilt.** The old Bootstrap page whose content lived in
  `scripts.js`'s `contentByLang` and was rendered client-side by marked.js was replaced by the
  current single static file. The real name and all grade and award wording were dropped, the page
  is English-only, and the language switcher is gone. The retired assets were left on disk but are
  no longer loaded by anything.
- **2026-08-31, still true:** `contents/*.md` and `contents/config.yml` were deleted — leftover
  template files that nothing ever fetched. Do not recreate them.
- **Paper citation format:** no comma before the closing quote in a paper title.
- The old note about the layout being adapted from Sen Li's and Yixin Huang's templates now applies
  only to the leftover `static/` assets — the current page is hand-written. MIT licence.
