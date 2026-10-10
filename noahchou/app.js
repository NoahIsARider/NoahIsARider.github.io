/* Click a self, get its doors. No framework, no build step, no tracker —
   a static page that behaves like a small Notion doc.
   Icons are symbol ids from the sprite in index.html. */

const SELVES = {
  code: {
    img: "assets/01-chibi-coding-laptop.png",
    title: "Code",
    desc: "Where the repositories live — code, notebooks, agents and the occasional weird machine.",
    links: [
      { icon: "i-git", label: "GitHub — @NoahIsARider", desc: "the main workshop, 60+ repositories", href: "https://github.com/NoahIsARider" },
      { icon: "i-mountain", label: "Codeberg — @NoahIsARider", desc: "where Noah's Room actually lives", href: "https://codeberg.org/NoahIsARider" },
      { icon: "i-face", label: "Hugging Face — @NoahIsARider", desc: "models, datasets and spaces", href: "https://huggingface.co/NoahIsARider" },
      { icon: "i-waves", label: "LANDSLIDE — the org", desc: "weird ideas about agents and human-AI work, made real", href: "https://github.com/LandslideLab" }
    ]
  },
  research: {
    img: "assets/02-chibi-tech-wizard.png",
    title: "Research",
    desc: "Questions I keep asking: how machines and people should share the work, and what the data says about it.",
    links: [
      { icon: "i-cap", label: "Google Scholar", desc: "publications and citations", href: "https://scholar.google.cz/citations?user=CLf-BNAAAAAJ" },
      { icon: "i-doc", label: "Publications & research", desc: "papers, drafts and the research page", href: "https://noahisarider.codeberg.page/cv/research.html" },
      { icon: "i-id", label: "Curriculum vitae", desc: "the full CV, with the PDF downloads", href: "https://noahisarider.codeberg.page/cv/" },
      { icon: "i-compass", label: "Background", desc: "the dual degree, the scores, the road here", href: "https://noahisarider.codeberg.page/cv/background.html" }
    ]
  },
  writing: {
    img: "assets/01-chibi-online-folk-electronic-art.png",
    title: "Writing",
    desc: "Notes, essays and the room — the internet as a place you can still build things in.",
    links: [
      { icon: "i-notebook", label: "Noah's Blog", desc: "research notes, engineering, passing thoughts", href: "https://noahsblog.pages.dev" },
      { icon: "i-lamp", label: "Noah's Room", desc: "a hand-assembled room on the personal web", href: "https://noahisarider.codeberg.page/" },
      { icon: "i-moon", label: "The tale — three odd friends", desc: "the room's own dark fairy tale", href: "https://noahisarider.codeberg.page/logs.html" },
      { icon: "i-rss", label: "RSS — the room index", desc: "every page, account and repository of mine", href: "https://noahisarider.codeberg.page/feed.xml" },
      { icon: "i-rss", label: "RSS — the blog", desc: "subscribe in any reader, no account needed", href: "https://noahsblog.pages.dev/feed.xml" },
      { icon: "i-book", label: "Goodreads — Rat King Syndrome", desc: "what I read: American literature, social science, neuroscience", href: "https://www.goodreads.com/ratkingsyndrome" }
    ]
  },
  music: {
    img: "assets/05-chibi-playing-piano.png",
    title: "Music",
    desc: "On repeat for years at a time.",
    links: [
      { icon: "i-disc", label: "Record Club — NoahIsARider", desc: "the shelf: Charli XCX, Sufjan Stevens, Bon Iver", href: "https://record.club/NoahIsARider" },
      { icon: "i-rss", label: "RSS — the room index", desc: "it lists the music shelf too", href: "https://noahisarider.codeberg.page/feed.xml" }
    ]
  },
  film: {
    img: "assets/06-chibi-watching-movie.png",
    title: "Film",
    desc: "A24, Neon, and the occasional Marvel night.",
    links: [
      { icon: "i-film", label: "Letterboxd — NoahIsARider", desc: "everything I watch, rated and argued about", href: "https://letterboxd.com/NoahIsARider" }
    ]
  },
  games: {
    img: "assets/05-chibi-handheld-gaming.png",
    title: "Games",
    desc: "Played, and occasionally built — Disco Elysium changed how I think about interfaces.",
    links: [
      { icon: "i-dice", label: "itch.io — noahisarider", desc: "the small playable things I make", href: "https://noahisarider.itch.io" }
    ]
  },
  contact: {
    img: "assets/01-chibi-coffee.png",
    title: "Contact",
    desc: "I answer slowly, but I answer. Say hello about research, code, or anything on this page.",
    links: [
      { icon: "i-mail", label: "noahchou2005@gmail.com", desc: "the reliable one", href: "mailto:noahchou2005@gmail.com" },
      { icon: "i-case", label: "LinkedIn — in/noahzhou2005", desc: "the professional door", href: "https://www.linkedin.com/in/noahzhou2005" },
      { icon: "i-x", label: "X — @NoahIsARider", desc: "short, unfinished, usually after midnight", href: "https://x.com/NoahIsARider" },
      { icon: "i-hash", label: "Mastodon — @noahisarider@mastodon.social", desc: "the federated one", href: "https://mastodon.social/@noahisarider" },
      { icon: "i-cloud", label: "Bluesky — @noahisarider.bsky.social", desc: "short posts, blue skies", href: "https://bsky.app/profile/noahisarider.bsky.social" }
    ]
  }
};

const door = document.getElementById("door");
const doorImg = document.getElementById("door-img");
const doorTitle = document.getElementById("door-title");
const doorDesc = document.getElementById("door-desc");
const doorLinks = document.getElementById("door-links");
const hint = document.getElementById("hint");
const buttons = Array.from(document.querySelectorAll(".self"));

function render(key) {
  const s = SELVES[key];
  if (!s) return;
  doorImg.src = s.img;
  doorImg.alt = s.title;
  doorTitle.textContent = s.title;
  doorDesc.textContent = s.desc;
  doorLinks.innerHTML = s.links.map(l => `
    <li><a href="${l.href}" ${l.href.startsWith("mailto:") ? "" : 'target="_blank" rel="me noreferrer"'}>
      <span class="li-icon"><svg class="ic"><use href="#${l.icon}"/></svg></span>
      <span class="li-body"><b>${l.label}</b><small>${l.desc}</small></span>
      <span class="arrow"><svg class="ic ic-sm"><use href="#i-arrow"/></svg></span>
    </a></li>`).join("");
}

function open(key, { scroll = true } = {}) {
  render(key);
  door.hidden = false;
  hint.hidden = true;
  buttons.forEach(b => b.setAttribute("aria-expanded", String(b.dataset.self === key)));
  if (location.hash.slice(1) !== key) history.replaceState(null, "", "#" + key);
  if (scroll && window.innerWidth < 900) door.scrollIntoView({ behavior: "smooth", block: "start" });
}

function close() {
  door.hidden = true;
  hint.hidden = false;
  buttons.forEach(b => b.setAttribute("aria-expanded", "false"));
  history.replaceState(null, "", location.pathname);
}

buttons.forEach(b => b.addEventListener("click", () => {
  const already = b.getAttribute("aria-expanded") === "true";
  already ? close() : open(b.dataset.self);
}));

document.getElementById("door-close").addEventListener("click", close);
document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

// a shared link opens the right door
const initial = location.hash.slice(1);
if (SELVES[initial]) open(initial, { scroll: false });

// paper by default, night if asked for (remembered) — the sun/moon swap is done in CSS
const root = document.documentElement;
const themeBtn = document.getElementById("theme");
function paintTheme() {
  const dark = root.getAttribute("data-theme") === "dark";
  themeBtn.title = dark ? "Back to paper" : "Switch to night";
}
themeBtn.addEventListener("click", () => {
  const dark = root.getAttribute("data-theme") === "dark";
  dark ? root.removeAttribute("data-theme") : root.setAttribute("data-theme", "dark");
  try { localStorage.setItem("nc-theme", dark ? "light" : "dark"); } catch (e) {}
  paintTheme();
});
paintTheme();
