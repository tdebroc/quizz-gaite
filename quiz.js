// ============================================================
// Quel type de galette es-tu ?
// 5 questions · 6 profils crêpiers
// ============================================================

const QUESTIONS = [
  {
    q: "Lundi 8h27. <span class='hi'>Denfert-Rochereau</span> t'attend. Comment tu rejoins la banque&nbsp;?",
    hint: "Épisode 1 · Le trajet du matin",
    options: [
      { txt: "Vélib arc-en-ciel jusqu'au travail, mollets en feu", tags: ["velo", "energie"] },
      { txt: "Ligne 6 aérienne, podcast crypto dans les oreilles", tags: ["classique", "banque"] },
      { txt: "À pied dans le parc Montsouris, café à emporter", tags: ["contempo", "nature"] },
      { txt: "En courant : j'ai encore optimisé mes 3 alarmes", tags: ["energie", "banque"] }
    ]
  },
  {
    q: "En réunion, un collègue lâche&nbsp;: <span class='hi'>«&nbsp;on va gravir cette montagne ensemble&nbsp;»</span>. Ta réaction&nbsp;?",
    hint: "Épisode 2 · Métaphore corporate",
    options: [
      { txt: "Je propose immédiatement le prochain 4000m des Écrins", tags: ["montagne", "energie"] },
      { txt: "Je souris, je note, je reste pro (mais j'y pense encore le soir)", tags: ["classique", "banque"] },
      { txt: "Je réponds : «&nbsp;plutôt un col en vélo, non&nbsp;?&nbsp;»", tags: ["velo", "energie"] },
      { txt: "Je visualise déjà la vue au sommet, apaisé·e", tags: ["nature", "contempo"] }
    ]
  },
  {
    q: "Vendredi soir, <span class='hi'>quizz apéro</span> entre potes. Quel est ton rôle mythique&nbsp;?",
    hint: "Épisode 3 · Le culte du quizz",
    options: [
      { txt: "Le·la capitaine stratège qui gère le buzz et la thune fictive", tags: ["banque", "sophistique"] },
      { txt: "L'encyclopédie qui sort «&nbsp;attends je crois que je sais&nbsp;»", tags: ["classique", "quizz"] },
      { txt: "Le·la spécialiste catégorie sport & géographie (obvious)", tags: ["montagne", "energie"] },
      { txt: "Celui·celle qui remotive tout le monde à la mi-temps", tags: ["gourmand", "energie"] }
    ]
  },
  {
    q: "On te donne un <span class='hi'>samedi vierge</span> et un ciel bleu. Tu fais quoi&nbsp;?",
    hint: "Épisode 4 · Le week-end parfait",
    options: [
      { txt: "Rando 1500m D+ avec la thermos et le sandwich au comté", tags: ["montagne", "nature"] },
      { txt: "Boucle vélo Vallée de Chevreuse, croissant à mi-parcours", tags: ["velo", "gourmand"] },
      { txt: "Marché Brune, brunch, expo à la Fondation Cartier", tags: ["sophistique", "classique"] },
      { txt: "Forêt de Fontainebleau, silence, appareil photo", tags: ["nature", "contempo"] }
    ]
  },
  {
    q: "Après une longue journée, ta <span class='hi'>madeleine de Proust</span> c'est&nbsp;:",
    hint: "Épisode 5 · Le grand révélateur",
    options: [
      { txt: "Le goût du caramel beurre salé qui colle un peu aux dents", tags: ["gourmand", "classique"] },
      { txt: "L'odeur du refuge après 6h de marche", tags: ["montagne", "nature"] },
      { txt: "Le clic-clac des pédales automatiques au démarrage", tags: ["velo", "energie"] },
      { txt: "Un ristretto en terrasse rue Daguerre, sans regarder l'heure", tags: ["contempo", "sophistique"] }
    ]
  }
];

const PROFILES = {
  montagne: {
    emoji: "🏔️",
    title: "La Galette Montagnarde",
    desc: "Raclette, lardons fumés, pomme de terre grenaille. Tu es la personne qui prend de la hauteur, littéralement. On te retrouve toujours au sommet — d'un col, d'un projet, ou d'une pile de galettes.",
    power: "Endurance légendaire",
    cook: "Sur la pierre, refuge d'altitude",
    pair: "Génépi maison"
  },
  velo: {
    emoji: "🚴",
    title: "La Crêpe Banane-Miel-Amande",
    desc: "Rapide, énergétique, faite pour la route. Tu carbures aux glucides lents et à la fierté des kilomètres avalés. Tu recharges à chaque virage, sourire aux lèvres.",
    power: "Cadence infatigable",
    cook: "À la poêle, bien nappée",
    pair: "Bidon d'eau fraîche"
  },
  gourmand: {
    emoji: "🧈",
    title: "La Crêpe Caramel Beurre Salé",
    desc: "Un classique breton indétrônable. Tu es le·la bon·ne vivant·e qui transforme n'importe quelle journée en petit plaisir. Chaleureux·se, réconfortant·e, absolument irrésistible.",
    power: "Réconfort instantané",
    cook: "Bilig brûlante, beurre à volonté",
    pair: "Bolée de cidre brut"
  },
  banque: {
    emoji: "🥚",
    title: "La Galette Complète",
    desc: "Jambon, œuf, fromage. La valeur sûre. Tu es structuré·e, fiable, tu tiens tes deadlines comme tu tiens tes bords bien pliés. Le classique qui rassure — et qu'on redemande.",
    power: "Fiabilité totale",
    cook: "Cuisson maîtrisée, œuf coulant",
    pair: "Cidre demi-sec bien frais"
  },
  nature: {
    emoji: "🌲",
    title: "La Galette Forestière",
    desc: "Champignons, crème, persil frais. Tu es contemplatif·ve, tu aimes les chemins qu'on n'écoute pas parler. Discret·e mais profondément riche — comme un sous-bois d'automne.",
    power: "Zenitude parfaite",
    cook: "À feu doux, avec du silence",
    pair: "Thé aux pommes séchées"
  },
  sophistique: {
    emoji: "🔥",
    title: "La Crêpe Suzette Flambée",
    desc: "Grand Marnier, orange, panache. Tu as ce petit truc en plus — le sens de la mise en scène, du timing, du bon mot. Tu quizz avec élégance et tu flambes avec style.",
    power: "Charisme flambé",
    cook: "Poêle en cuivre, briquet en main",
    pair: "Coupe de champagne millésimé"
  },
  energie: { alias: "velo" },
  classique: { alias: "banque" },
  contempo: { alias: "nature" },
  quizz: { alias: "sophistique" }
};

// ============================================================
// STATE
// ============================================================
const state = {
  index: 0,
  scores: {},
  picks: []
};

const $ = (id) => document.getElementById(id);

// ============================================================
// SCREENS
// ============================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("is-active"));
  $(id).classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// QUIZ FLOW
// ============================================================
function renderQuestion() {
  const q = QUESTIONS[state.index];
  const total = QUESTIONS.length;
  const pct = ((state.index) / total) * 100 + (100 / total) * 0.1;

  $("progress-bar").style.width = `${Math.max(8, pct)}%`;
  $("q-index").textContent = String(state.index + 1);

  const wrap = $("q-wrap");
  wrap.innerHTML = "";

  const card = document.createElement("div");
  card.className = "question-card";
  card.innerHTML = `
    <p class="hint">${q.hint}</p>
    <h2 class="question">${q.q}</h2>
    <div class="options"></div>
  `;
  const opts = card.querySelector(".options");
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.innerHTML = `
      <span class="letter">${letters[i]}</span>
      <span class="txt">${opt.txt}</span>
    `;
    btn.addEventListener("click", () => pickOption(btn, opt));
    opts.appendChild(btn);
  });
  wrap.appendChild(card);
}

function pickOption(btn, opt) {
  // prevent double click
  const card = btn.closest(".question-card");
  if (card.dataset.locked) return;
  card.dataset.locked = "1";

  btn.classList.add("is-picked");
  opt.tags.forEach((t) => {
    state.scores[t] = (state.scores[t] || 0) + 1;
  });
  state.picks.push(opt.tags);

  // finish progress bar
  const pct = ((state.index + 1) / QUESTIONS.length) * 100;
  $("progress-bar").style.width = `${pct}%`;

  setTimeout(() => {
    card.classList.add("is-out");
    setTimeout(() => {
      state.index += 1;
      if (state.index >= QUESTIONS.length) {
        revealResult();
      } else {
        renderQuestion();
      }
    }, 320);
  }, 420);
}

// ============================================================
// RESULT
// ============================================================
function resolveProfile(tag) {
  const p = PROFILES[tag];
  if (!p) return null;
  if (p.alias) return PROFILES[p.alias];
  return p;
}

function pickWinner() {
  // Aggregate with aliases
  const canonical = {};
  Object.entries(state.scores).forEach(([tag, v]) => {
    const key = PROFILES[tag]?.alias || tag;
    canonical[key] = (canonical[key] || 0) + v;
  });
  const entries = Object.entries(canonical).sort((a, b) => b[1] - a[1]);
  if (!entries.length) return PROFILES.banque;
  return resolveProfile(entries[0][0]) || PROFILES.banque;
}

function revealResult() {
  const profile = pickWinner();
  $("result-emoji").textContent = profile.emoji;
  $("result-title").textContent = profile.title;
  $("result-desc").textContent = profile.desc;
  $("result-power").textContent = profile.power;
  $("result-cook").textContent = profile.cook;
  $("result-pair").textContent = profile.pair;

  showScreen("screen-result");
  fireConfetti();
}

// ============================================================
// CONFETTI (lightweight canvas)
// ============================================================
function fireConfetti() {
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  const DPR = window.devicePixelRatio || 1;
  const resize = () => {
    c.width = innerWidth * DPR;
    c.height = innerHeight * DPR;
    c.style.width = innerWidth + "px";
    c.style.height = innerHeight + "px";
  };
  resize();
  window.addEventListener("resize", resize, { once: true });

  const colors = ["#ffb86b", "#ff5e8a", "#7c8bff", "#6bffcf", "#ffffff"];
  const N = 140;
  const parts = [];
  const startX = innerWidth / 2;
  for (let i = 0; i < N; i++) {
    parts.push({
      x: startX * DPR,
      y: (innerHeight * 0.35) * DPR,
      vx: (Math.random() - 0.5) * 14 * DPR,
      vy: (Math.random() * -12 - 4) * DPR,
      g: 0.35 * DPR,
      w: (6 + Math.random() * 6) * DPR,
      h: (10 + Math.random() * 8) * DPR,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      color: colors[(Math.random() * colors.length) | 0],
      life: 0,
      max: 160 + Math.random() * 60
    });
  }

  let raf;
  function tick() {
    ctx.clearRect(0, 0, c.width, c.height);
    let alive = 0;
    for (const p of parts) {
      p.life++;
      if (p.life > p.max) continue;
      alive++;
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, 1 - p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive > 0) raf = requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, c.width, c.height);
  }
  cancelAnimationFrame(raf);
  tick();
}

// ============================================================
// SHARE
// ============================================================
async function share() {
  const title = $("result-title").textContent;
  const url = location.href;
  const text = `Je suis « ${title} » au quizz galette 🥞 ! Fais le tien :`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "Quel type de galette es-tu ?", text, url });
      return;
    }
  } catch (_) { /* cancelled */ }
  try {
    await navigator.clipboard.writeText(`${text} ${url}`);
    const label = $("share-label");
    const prev = label.textContent;
    label.textContent = "Lien copié ✓";
    setTimeout(() => (label.textContent = prev), 1800);
  } catch (_) {
    // last resort
    prompt("Copie le lien :", url);
  }
}

// ============================================================
// INIT
// ============================================================
function restart() {
  state.index = 0;
  state.scores = {};
  state.picks = [];
  $("progress-bar").style.width = "8%";
  renderQuestion();
  showScreen("screen-quiz");
}

document.addEventListener("DOMContentLoaded", () => {
  $("start-btn").addEventListener("click", () => {
    renderQuestion();
    showScreen("screen-quiz");
  });
  $("restart-btn").addEventListener("click", restart);
  $("share-btn").addEventListener("click", share);
});
