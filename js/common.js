// Shared helpers used by every page.

// Make text safe to put inside HTML
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Random order / random picks
function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const sample = (list, n) => shuffle(list).slice(0, n);

// Saved on this phone only (private window or blocked storage = nothing saved, page still works)
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
  }
};

// Heritage Passport: one stamp per monument page visited
const Passport = {
  key: "ilm-passport",
  all() { return store.get(this.key, {}); },
  has(id) { return Boolean(this.all()[id]); },
  stamp(id) {
    const s = this.all();
    if (s[id]) return false;
    s[id] = new Date().toISOString().slice(0, 10);
    store.set(this.key, s);
    return true;
  },
  count() { const s = this.all(); return MONUMENTS.filter(m => s[m.id]).length; },
  reset() { store.set(this.key, {}); }
};

// How many stamps win a prize (can be changed in js/config.js)
const prizeGoal = () => (typeof PRIZE_STAMPS === "number" ? PRIZE_STAMPS : 5);

// Photo for a monument
const photoOf = id => (typeof IMAGE_CREDITS !== "undefined" && IMAGE_CREDITS[id]) ? IMAGE_CREDITS[id].file : `images/${id}.jpg`;
const thumbOf = id => `images/thumbs/${id}.jpg`;

// Navigation bar shown on every page:  <nav class="mainnav" id="nav"></nav>
function renderNav(active) {
  const el = document.getElementById("nav");
  if (!el) return;
  const links = [
    ["home", "index.html", "🏛️", "Monuments"],
    ["map", "index.html#map", "🗺️", "Map"],
    ["play", "play.html", "🎮", "Play"],
    ["passport", "passport.html", "📕", "Passport"]
  ];
  el.innerHTML = links.map(([key, href, icon, label]) =>
    `<a href="${href}"${key === active ? ' aria-current="page"' : ""}><span aria-hidden="true">${icon}</span>${label}</a>`).join("");
}
