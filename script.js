const games = [
  ["1-date-danger", "index.html"], ["10minutestilldawn", "index.html"], ["2 minute football", "index.html"],
  ["2-3-4-player-game", "index.html"], ["2doom", "index.html"], ["3dash", "index.html"], ["5b", "index.html"],
  ["664x-main", "index.html"], ["Antimatter Dimensions", "index.html"], ["BUMPER CARS SOCCER", "index.html"],
  ["Blightborne", "index.html"], ["BurritoBison-main", "index.html"], ["Endacopia", "index.html"],
  ["FNAW-main", "index.html"], ["Five Nights at Osaka's", "index.html"], ["Insomniary", "index.html"],
  ["STICKMAN GTA", "index.html"], ["Stickman Clash", "index.html"], ["UCDS other version", "index.html"],
  ["a day in the office", "index.html"], ["adventure-capitalist", "index.html"], ["ages of conflict", "index.html"],
  ["airline-tycoon-idle", "index.html"], ["alien sky invasion", "index.html"],
  ["amazing-strange-rope-police-vice-spider", "index.html"], ["amidst the sky", "index.html"],
  ["angry-bird", "index.html"], ["apesvshelium", "index.html"], ["arcade-volley", "index.html"],
  ["archesspalago", "index.html"], ["astro survivors", "index.html"], ["babel tower", "index.html"],
  ["backrooms 2D", "index.html"], ["bacon may die", "index.html"], ["bad-parenting", "index.html"],
  ["baldi decomp", "index.html"], ["baldis-basics", "index.html"], ["ballistic", "index.html"],
  ["banana poker", "game.html"], ["barry has a secret", "index.html"], ["baseball bros", "index.html"],
  ["basket stars", "index.html"], ["basketball-superstars", "index.html"], ["beach-boxing-sim", "index.html"],
  ["bearsus", "index.html"], ["ben 10 super slammer", "index.html"], ["bfnsu", "index.html"],
  ["big 2048", "index.html"], ["big flappy tower", "index.html"], ["block-miner", "index.html"],
  ["blumgi racers", "index.html"], ["blumgi-rocket", "index.html"], ["bounce back", "index.html"],
  ["bouncy basketball", "index.html"], ["bouncy motors", "index.html"], ["bouncy-basketbal", "index.html"],
  ["bounty of one", "index.html"], ["brawl-3d", "index.html"], ["bullet-force-multiplayer", "index.html"],
  ["canvas", "index.html"], ["capybara clicker", "index.html"], ["cat mario", "index.html"],
  ["cats love cake 2", "index.html"], ["cave chaos 2", "index.html"], ["cheese chompers 3", "index.html"],
  ["chicken-gun", "index.html"], ["circlo02", "index.html"], ["clashofvikings", "index.html"],
  ["cookieclicker", "index.html"], ["crazy cars", "index.html"], ["crazy chicken 3D", "index.html"],
  ["creature-card-idle", "index.html"], ["csgo surf", "index.html"], ["dandys-world-clicker", "index.html"],
  ["dblox", "index.html"], ["deepest sword", "index.html"], ["demon-bluff", "index.html"],
  ["die in the dungeon", "index.html"], ["dimension-incident", "index.html"], ["doge miner 2", "index.html"],
  ["doodle jump", "index.html"], ["down the mountain", "index.html"], ["dragon", "index.html"],
  ["drift-hunters", "index.html"], ["drunken duel", "index.html"], ["duck life 6", "game.html"],
  ["duck life battle", "index.html"], ["dungeon-degen", "index.html"], ["dungeondeck", "index.html"],
  ["eagle ride", "index.html"], ["edys car simulator", "index.html"], ["eggy car", "index.html"],
  ["escalating-duel", "index.html"], ["level devil", "index.html"]
];

let current = null;
let currentGameData = null;

function rawUrl(name, file) {
  return `https://raw.githubusercontent.com/bubbls/UGS-Assets/main/${encodeURIComponent(name)}/${file}`;
}
function cdnBase(name) {
  return `https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/${encodeURIComponent(name)}/`;
}

function filter() {
  const q = document.getElementById('gsearch').value.toLowerCase();
  const filtered = q ? games.filter(g => g[0].toLowerCase().includes(q)) : games;
  document.getElementById('gcount').textContent = filtered.length + ' / ' + games.length;
  document.getElementById('game-grid').innerHTML = filtered.map(g =>
    `<button class="gbtn${g[0] === current ? ' active' : ''}" onclick='loadGame(${JSON.stringify(g[0])},${JSON.stringify(g[1])})' title="${g[0]}">${g[0]}</button>`
  ).join('');
}

async function loadGame(name, file) {
  if (current === name) return;
  current = name;
  currentGameData = [name, file];

  const t = document.getElementById('ftitle');
  t.textContent = name;
  t.classList.add('active-title');
  document.getElementById('ph').style.display = 'none';
  document.getElementById('game-frame').style.display = 'none';
  const lm = document.getElementById('loading-msg');
  lm.style.display = 'flex';
  document.getElementById('loading-text').textContent = `loading ${name}...`;
  document.getElementById('btn-r').style.display = 'inline-block';
  const ext = document.getElementById('btn-e');
  ext.style.display = 'inline-block';
  ext.href = cdnBase(name) + file;
  filter();

  try {
    const res = await fetch(rawUrl(name, file));
    if (!res.ok) throw new Error('fetch failed');
    let html = await res.text();

    const base = `<base href="${cdnBase(name)}">`;
    html = html.replace(/(<head[^>]*>)/i, `$1${base}`);
    if (!html.includes('<base href')) html = base + html;

    const fr = document.getElementById('game-frame');
    fr.srcdoc = html;
    fr.style.display = 'block';
    lm.style.display = 'none';

  } catch (e) {
    const fr = document.getElementById('game-frame');
    fr.srcdoc = '';
    fr.src = cdnBase(name) + file;
    fr.style.display = 'block';
    lm.style.display = 'none';
  }
}

function reloadGame() {
  if (!currentGameData) return;
  current = null;
  loadGame(currentGameData[0], currentGameData[1]);
}

filter();

// Vanta clouds
(function () {
  function initVanta() {
    VANTA.CLOUDS({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      skyColor: 0x000000,
      cloudColor: 0x3b3b3b,
      cloudShadowColor: 0x183550,
      sunColor: 0x050505,
      speed: 1.8,
      zoom: 2
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVanta);
  } else {
    initVanta();
  }
})()