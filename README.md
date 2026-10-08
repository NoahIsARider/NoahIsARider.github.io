# noahisarider — personal index

Source of **<https://noahisarider.github.io/>** — one self-contained static page.

No build step, no framework, no JavaScript, no external requests. The whole page is a single
hand-written `index.html` with an inline stylesheet.

**The design is not original: the page follows [noah.is-a.dev](https://noah.is-a.dev/)** — the same
paper palette, 17% left indent, 33em measure, uppercase section heads, hanging em-dash markers and
fixed side panel. See [Credits](#credits).

## The page

Intro (education, IELTS, GPA and class rank) → **CV** link → **Research** (five projects with their
supervisors, each project's papers nested underneath) → **Projects** → **Sites** → **Writing** →
**Now** (books, films, music, games) → footer. A fixed panel on the right carries a quote and the
contact list, its edges aligned to the top navigation. Below 1200px it stops floating and falls into
the document flow.

## Layout

```
index.html                  the page — markup, inline CSS and JSON-LD in one file
404.html                    forwards retired CV paths to /cv/
noahchou/                   the /noahchou/ landing page (hand-mirrored to the Codeberg pages repo — edit both)
static/assets/              logo.png (tab icon) and img/photo.jpg (referenced by the JSON-LD)
static/js, static/css       superseded assets — nothing loads them any more
fangyanuo-zhou/, fangyanuozhou/    meta-refresh stubs for the retired CV paths
CV_*.pdf, Portfolio.*, CMLE_IEEE_TCE_2026.pdf    documents the CV page links to
archive/                    superseded material nothing links to
sitemap.xml, robots.txt     crawler files
google4201cda6dfa1a0ac.html, BingSiteAuth.xml    search-console verification — never delete
LICENSE, AGENTS.md
```

## Editing

Everything lives in `index.html` — content and styling in the same file. There is no external
content file, no content array and no render step. Open it in a browser before pushing. See
[`AGENTS.md`](AGENTS.md) for the conventions: the parts of the design system that carry the page's
identity, the files that must not be touched, and how the sub-sites relate to this repo.

## Deploy

Push to `main`. GitHub Pages serves the repository root — the site is live about a minute later.
There is no cache busting, so hard-refresh (Ctrl+F5) to see a change. Browsers cache the tab icon
especially hard.

## Related

- **CV** — its own repository, [`NoahIsARider/cv`](https://github.com/NoahIsARider/cv), served at
  <https://noahisarider.github.io/cv/> in English, 简体中文 and 繁體中文
- **Sub-sites** — oblivio, Noah's Room, Platonia, GeekRSS, BookClub-2000, Clube and the rest are
  separate repositories, each served as a Pages project under this domain
- The stubs listed above keep the retired `/fangyanuo-zhou/` paths answering

## Credits

**Design inspiration: [noah.is-a.dev](https://noah.is-a.dev/).** The markup is hand-written for this
site, but the visual system is a deliberate imitation of that page: Solarized `base3` paper, the
Helvetica setting, the 17% indent with a 33em measure, uppercase section labels, the "— " row
markers set to hang outside the text column, and the fixed panel whose two edges line up with the
top navigation.

The repository also still carries, now unused, the assets of the academic-homepage templates it
originally started from — [Sen Li](https://github.com/senli1073/senli1073.github.io) and
[Yixin Huang](https://github.com/Yixin0313/personal-homepage-template) — under the MIT licence in
[`LICENSE`](LICENSE).
