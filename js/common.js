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

// "Explore & Play" section, styled like the exhibition board (used on index.html and play.html)
function renderPlaySection(el) {
  if (!el) return;
  const got = Passport.count(), goal = prizeGoal();
  el.innerHTML = `
    <div class="play-sign" role="heading" aria-level="2"><span>Explore</span><span>&amp; Play</span></div>
    <div class="play-grid">
      <a class="play-card" href="guess.html">
        <h3>Guess the<br>Monument</h3>
        <div class="ill ill-guess" aria-hidden="true">
          <img src="${thumbOf("konark-sun-temple")}" alt=""><img src="${thumbOf("hawa-mahal")}" alt=""><img src="${thumbOf("taj-mahal")}" alt="">
        </div>
        <p>Photo quiz · 10 questions</p>
      </a>
      <a class="play-card" href="match.html">
        <h3>Match the<br>Tradition</h3>
        <div class="ill ill-match" aria-hidden="true">
          <img src="images/traditions/thumbs/garba.jpg" alt=""><img src="images/traditions/thumbs/bhangra.jpg" alt="">
        </div>
        <p>Dances, arts &amp; festivals</p>
      </a>
      <a class="play-card" href="spin.html">
        <h3>Spin &amp;<br>Answer</h3>
        <div class="ill ill-spin" aria-hidden="true"><div class="mini-wheel"></div><i></i></div>
        <p>Spin the wheel, win points</p>
      </a>
      <a class="play-card" href="passport.html">
        <h3>Heritage<br>Passport</h3>
        <div class="ill ill-pass" aria-hidden="true">
          <div class="book"><b>Heritage<br>Passport</b><img src="images/lotus.svg" alt=""></div>
          <div class="rubber"><span></span></div>
        </div>
        <p>${got} of ${MONUMENTS.length} stamps collected</p>
      </a>
      <div class="play-card prize-card">
        <h3><span>Prizes for Winners</span></h3>
        <div class="gifts" aria-hidden="true">🎁<span>🎁</span>🎁</div>
        <p>Collect <b>${goal} passport stamps</b> by scanning our QR codes, or score <b>8+</b> in Guess the Monument — then show your screen at our stall!</p>
      </div>
    </div>`;
}

// Navigation bar shown on every page:  <nav class="mainnav" id="nav"></nav>
function renderNav(active) {
  const el = document.getElementById("nav");
  if (!el) return;
  const links = [
    ["home", "index.html", "🏛️", "Monuments"],
    ["map", "index.html#map", "🗺️", "Map"],
    ["traditions", "traditions.html", "🪔", "Traditions"],
    ["play", "play.html", "🎮", "Play"],
    ["passport", "passport.html", "📕", "Passport"]
  ];
  el.innerHTML = links.map(([key, href, icon, label]) =>
    `<a href="${href}"${key === active ? ' aria-current="page"' : ""}><span aria-hidden="true">${icon}</span>${label}</a>`).join("");
}
