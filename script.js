// ── Source ────────────────────────────────────────────────────────────────────
const UGS_OWNER  = "bubbls";
const UGS_REPO   = "UGS-Assets";
const UGS_BRANCH = "main";

// jsDelivr CDN – serves JS/CSS/images with correct MIME types
// HTML is served via our local /proxy endpoint with the correct text/html type
function cdnBase(folder) {
  return `https://cdn.jsdelivr.net/gh/${UGS_OWNER}/${UGS_REPO}@${UGS_BRANCH}/${encodeURIComponent(folder)}/`;
}

// ── Games list ────────────────────────────────────────────────────────────────
// Format: [folderName, file, category]
// Categories: action | horror | idle | puzzle | sports | racing | shooter | other
const games = [
  // ── HORROR ──────────────────────────────────────────────────────────────
  ["FNAW-main",                        "index.html","horror"],
  ["Five Nights at Osaka's",           "index.html","horror"],
  ["Blightborne",                      "index.html","horror"],
  ["Insomniary",                       "index.html","horror"],
  ["backrooms 2D",                     "index.html","horror"],
  ["barry has a secret",               "index.html","horror"],
  ["baldi decomp",                     "index.html","horror"],
  ["baldis-basics",                    "index.html","horror"],
  ["evil nun schools out",             "index.html","horror"],
  ["fear-assessment",                  "index.html","horror"],
  ["feed-the-void",                    "index.html","horror"],
  ["fnabr",                            "index.html","horror"],
  ["lock the door",                    "index.html","horror"],
  ["please-dont-touch",                "index.html","horror"],
  ["pom-gets-wifi",                    "index.html","horror"],
  ["scary-teacher-3D",                 "index.html","horror"],
  ["skinwalker",                       "index.html","horror"],
  ["slender multiplayer",              "index.html","horror"],
  ["slide-in-the-woods-",              "index.html","horror"],
  ["super dark deception",             "index.html","horror"],
  ["the box of secrets",               "index.html","horror"],
  ["we become what we behold",         "index.html","horror"],
  ["station 141",                      "index.html","horror"],
  ["station saturn",                   "index.html","horror"],
  ["station-meltdown",                 "index.html","horror"],
  ["self",                             "index.html","horror"],
  ["six-ways-to-suffer-lolol",         "index.html","horror"],
  ["worst-time-sim",                   "index.html","horror"],
  ["last-breath-epstein",              "index.html","horror"],
  ["masekd for",                       "index.html","horror"],
  ["examination or smth",              "index.html","horror"],
  ["exo-observation",                  "index.html","horror"],
  ["dimension-incident",               "index.html","horror"],
  ["space-funeral",                    "index.html","horror"],
  ["demon-bluff",                      "index.html","horror"],

  // ── ACTION ──────────────────────────────────────────────────────────────
  ["1-date-danger",                    "index.html","18plus"],
  ["Endacopia",                        "index.html","action"],
  ["STICKMAN GTA",                     "index.html","action"],
  ["Stickman Clash",                   "index.html","action"],
  ["amazing-strange-rope-police-vice-spider","index.html","action"],
  ["amidst the sky",                   "index.html","action"],
  ["astro survivors",                  "index.html","action"],
  ["bacon may die",                    "index.html","action"],
  ["ballistic",                        "index.html","action"],
  ["bearsus",                          "index.html","action"],
  ["ben 10 super slammer",             "index.html","action"],
  ["bounce back",                      "index.html","action"],
  ["bounty of one",                    "index.html","action"],
  ["brawl-3d",                         "index.html","action"],
  ["choppy orc",                       "index.html","action"],
  ["deepest sword",                    "index.html","18plus"],
  ["die in the dungeon",               "index.html","action"],
  ["drunken duel",                     "index.html","18plus"],
  ["elasticman",                       "index.html","action"],
  ["escalating-duel",                  "index.html","action"],
  ["evade",                            "index.html","action"],
  ["evil nun schools out",             "index.html","action"],
  ["fall-guys",                        "index.html","action"],
  ["falling-fred",                     "index.html","action"],
  ["flip master",                      "index.html","action"],
  ["flipp knife",                      "index.html","action"],
  ["lil runmo",                        "index.html","action"],
  ["mad-stick",                        "index.html","action"],
  ["mari0",                            "index.html","action"],
  ["not your pawn",                    "index.html","action"],
  ["odd bot out",                      "index.html","action"],
  ["off",                              "index.html","action"],
  ["ragdoll-drop",                     "index.html","action"],
  ["ragdoll-hit",                      "index.html","action"],
  ["ragdoll-runners",                  "index.html","action"],
  ["recoil",                           "index.html","action"],
  ["revenge of dog",                   "index.html","action"],
  ["rogue-sergeant",                   "index.html","action"],
  ["roller baller",                    "index.html","action"],
  ["running-fred",                     "index.html","action"],
  ["silohuette showdown",              "index.html","action"],
  ["slice-master",                     "index.html","action"],
  ["sm63redux",                        "index.html","action"],
  ["spelunky",                         "index.html","action"],
  ["ssf2",                             "index.html","action"],
  ["stick merge",                      "index.html","action"],
  ["stick slasher",                    "index.html","action"],
  ["stick-defenders",                  "index.html","action"],
  ["stickman hook",                    "index.html","action"],
  ["stickman parkour island",          "index.html","action"],
  ["stickman-destruction",             "index.html","action"],
  ["stickman-fighto",                  "index.html","action"],
  ["striker-dummies",                  "index.html","action"],
  ["superhot",                         "index.html","action"],
  ["switchblade",                      "index.html","action"],
  ["swordfight",                       "index.html","action"],
  ["they-are-coming",                  "index.html","action"],
  ["time warriors",                    "index.html","action"],
  ["two stunts",                       "index.html","action"],
  ["unfair undyne",                    "index.html","action"],
  ["unicycle hero",                    "index.html","action"],
  ["wacky-flip",                       "index.html","action"],
  ["wrestle bros",                     "index.html","action"],
  ["zombie-derby-gyb",                 "index.html","action"],
  ["2doom",                            "index.html","action"],
  ["bad-parenting",                    "index.html","action"],
  ["angry-bird",                       "index.html","action"],
  ["apesvshelium",                     "index.html","action"],
  ["Antimatter Dimensions",            "index.html","action"],

  // ── SHOOTER ─────────────────────────────────────────────────────────────
  ["bullet-force-multiplayer",         "index.html","shooter"],
  ["chicken-gun",                      "index.html","shooter"],
  ["csgo surf",                        "index.html","shooter"],
  ["leader strike",                    "index.html","shooter"],
  ["lolshooter2-main",                 "index.html","shooter"],
  ["mineshootmm",                      "index.html","shooter"],
  ["nzp",                              "index.html","shooter"],
  ["pixel combat 2",                   "index.html","shooter"],
  ["quake",                            "index.html","shooter"],
  ["reaticore",                        "index.html","shooter"],
  ["redvsblue",                        "index.html","shooter"],
  ["roof snipe 2",                     "index.html","shooter"],
  ["rooftop snipers 2",                "index.html","shooter"],
  ["russian-buckshot",                 "index.html","shooter"],
  ["space wars battleground",          "index.html","shooter"],
  ["steal brainrot",                   "index.html","shooter"],
  ["bfnsu",                            "index.html","shooter"],

  // ── RACING ──────────────────────────────────────────────────────────────
  ["blumgi racers",                    "index.html","racing"],
  ["blumgi-rocket",                    "index.html","racing"],
  ["crazy cars",                       "index.html","racing"],
  ["drift-hunters",                    "index.html","racing"],
  ["edys car simulator",               "index.html","racing"],
  ["escaperoad2city",                  "index.html","racing"],
  ["flight sim",                       "index.html","racing"],
  ["madalin-stunt-cars-2-main",        "index.html","racing"],
  ["madalincarmulti",                  "index.html","racing"],
  ["moto road rash",                   "index.html","racing"],
  ["moto winter",                      "index.html","racing"],
  ["moto2",                            "index.html","racing"],
  ["motocross mad skills",             "index.html","racing"],
  ["obby but your on a bike",          "index.html","racing"],
  ["obby-bike",                        "index.html","racing"],
  ["poly track",                       "index.html","racing"],
  ["rocket soccer derby",              "index.html","racing"],
  ["russian-cardriver",                "index.html","racing"],
  ["sky race",                         "index.html","racing"],
  ["speed stars",                      "index.html","racing"],
  ["speed-dash",                       "index.html","racing"],
  ["super speed racing",               "index.html","racing"],
  ["super star car",                   "index.html","racing"],
  ["top speed racing 3d",              "index.html","racing"],
  ["traffic jam 3d",                   "index.html","racing"],
  ["truck slam",                       "index.html","racing"],
  ["ultimate car driving",             "index.html","racing"],
  ["aviamaster",                       "index.html","racing"],
  ["eagle ride",                       "index.html","racing"],

  // ── SPORTS ──────────────────────────────────────────────────────────────
  ["2 minute football",                "index.html","sports"],
  ["2-3-4-player-game",                "index.html","sports"],
  ["BUMPER CARS SOCCER",               "index.html","sports"],
  ["arcade-volley",                    "index.html","sports"],
  ["baseball bros",                    "index.html","sports"],
  ["basket stars",                     "index.html","sports"],
  ["basketball-superstars",            "index.html","sports"],
  ["beach-boxing-sim",                 "index.html","sports"],
  ["bouncy basketball",                "index.html","sports"],
  ["bouncy-basketbal",                 "index.html","sports"],
  ["clashofvikings",                   "index.html","sports"],
  ["duck life battle",                 "index.html","sports"],
  ["flip master",                      "index.html","sports"],
  ["par72golf",                        "index.html","sports"],
  ["penguin diner",                    "index.html","sports"],
  ["puppet hockey",                    "index.html","sports"],
  ["rocket-goal",                      "index.html","sports"],
  ["soccer bros",                      "index.html","sports"],
  ["soccer skills euro",               "index.html","sports"],
  ["sort-court",                       "index.html","sports"],
  ["super liquid soccer",              "index.html","sports"],
  ["super-santa-kicker",               "index.html","sports"],
  ["table tanks",                      "index.html","sports"],
  ["table tennis cn",                  "index.html","sports"],
  ["table tennis world tour",          "index.html","sports"],
  ["toasterball",                      "index.html","sports"],
  ["volleyball challenge",             "index.html","sports"],
  ["wrestle bros",                     "index.html","sports"],

  // ── IDLE / CLICKER ───────────────────────────────────────────────────────
  ["Insomniary",                       "index.html","idle"],
  ["adventure-capitalist",             "index.html","idle"],
  ["airline-tycoon-idle",              "index.html","idle"],
  ["big 2048",                         "index.html","idle"],
  ["capybara clicker",                 "index.html","idle"],
  ["cookieclicker",                    "index.html","idle"],
  ["creature-card-idle",               "index.html","idle"],
  ["dandys-world-clicker",             "index.html","idle"],
  ["doge miner 2",                     "index.html","idle"],
  ["eugene-life",                      "index.html","idle"],
  ["eurovision-sim",                   "index.html","idle"],
  ["merge round racers",               "index.html","idle"],
  ["mindustry",                        "index.html","idle"],
  ["mr-mine",                          "index.html","idle"],
  ["orb farm",                         "index.html","idle"],
  ["orb of creation",                  "index.html","idle"],
  ["planet life",                      "index.html","idle"],
  ["plinko",                           "index.html","idle"],
  ["revolution idle",                  "index.html","idle"],
  ["serenitrove",                      "index.html","idle"],
  ["space company",                    "index.html","idle"],
  ["super auto pets",                  "index.html","idle"],
  ["tower-idle",                       "index.html","idle"],
  ["woodworm",                         "index.html","idle"],

  // ── PUZZLE ──────────────────────────────────────────────────────────────
  ["archesspalago",                    "index.html","puzzle"],
  ["banana poker",                     "game.html", "puzzle"],
  ["bouncy motors",                    "index.html","puzzle"],
  ["canvas",                           "index.html","puzzle"],
  ["circlo02",                         "index.html","puzzle"],
  ["dblox",                            "index.html","puzzle"],
  ["down the mountain",                "index.html","puzzle"],
  ["duck life 6",                      "game.html", "puzzle"],
  ["dungeon-degen",                    "index.html","puzzle"],
  ["dungeondeck",                      "index.html","puzzle"],
  ["fish-eat-big",                     "index.html","puzzle"],
  ["fisquarium",                       "index.html","puzzle"],
  ["linerider",                        "index.html","puzzle"],
  ["lucky ducky obby wobby",           "index.html","puzzle"],
  ["megachess",                        "index.html","puzzle"],
  ["mini-flips",                       "index.html","puzzle"],
  ["momos-crusher",                    "index.html","puzzle"],
  ["nuts and bolts",                   "index.html","puzzle"],
  ["obby robby only up",               "index.html","puzzle"],
  ["obby robob",                       "index.html","puzzle"],
  ["obby-1-jump-per-click",            "index.html","puzzle"],
  ["onebit",                           "index.html","puzzle"],
  ["opposite day",                     "index.html","puzzle"],
  ["outhold",                          "index.html","puzzle"],
  ["poor bunny",                       "index.html","puzzle"],
  ["poor eddie",                       "index.html","puzzle"],
  ["poor-bunny",                       "index.html","puzzle"],
  ["portal",                           "index.html","puzzle"],
  ["resizer",                          "index.html","puzzle"],
  ["rocketpult",                       "index.html","puzzle"],
  ["rolling-sky",                      "index.html","puzzle"],
  ["rolly vortex",                     "index.html","puzzle"],
  ["silk",                             "index.html","puzzle"],
  ["slot or not",                      "index.html","puzzle"],
  ["solar-sandbox",                    "index.html","puzzle"],
  ["stackball.io",                     "index.html","puzzle"],
  ["stacktris",                        "index.html","puzzle"],
  ["strands",                          "index.html","puzzle"],
  ["sushi unroll",                     "index.html","puzzle"],
  ["texas-hold-em",                    "index.html","puzzle"],
  ["thorns and balloons",              "index.html","puzzle"],
  ["throw-a-potato-space",             "index.html","puzzle"],
  ["todee and todpee",                 "index.html","puzzle"],
  ["trace",                            "index.html","puzzle"],
  ["trecharoustrials",                 "index.html","puzzle"],
  ["tungtung",                         "index.html","puzzle"],
  ["xor",                              "index.html","puzzle"],
  ["ztype",                            "index.html","puzzle"],

  // ── OTHER / ADVENTURE ────────────────────────────────────────────────────
  ["10minutestilldawn",                "index.html","action"],
  ["3dash",                            "index.html","other"],
  ["5b",                               "index.html","other"],
  ["664x-main",                        "index.html","other"],
  ["BurritoBison-main",                "index.html","action"],
  ["ages of conflict",                 "index.html","action"],
  ["alien sky invasion",               "index.html","shooter"],
  ["babel tower",                      "index.html","puzzle"],
  ["big flappy tower",                 "index.html","action"],
  ["block-miner",                      "index.html","other"],
  ["blockpost",                        "index.html","shooter"],
  ["cat mario",                        "index.html","action"],
  ["cats love cake 2",                 "index.html","other"],
  ["cave chaos 2",                     "index.html","action"],
  ["cheese chompers 3",                "index.html","other"],
  ["crazy chicken 3D",                 "index.html","other"],
  ["doodle jump",                      "index.html","action"],
  ["dragon",                           "index.html","action"],
  ["eggy car",                         "index.html","racing"],
  ["final earth 2",                    "index.html","idle"],
  ["flappy-tower",                     "index.html","action"],
  ["last-horizon",                     "index.html","other"],
  ["level devil",                      "index.html","action"],
  ["lunar-lander",                     "index.html","other"],
  ["mana god",                         "index.html","action"],
  ["monkey mart v6.3",                 "index.html","idle"],
  ["omega-layers",                     "index.html","idle"],
  ["ovomod",                           "index.html","other"],
  ["pico 8 games",                     "index.html","other"],
  ["puppet-master",                    "index.html","action"],
  ["rio-rex",                          "index.html","action"],
  ["rod-ha",                           "index.html","other"],
  ["rouge fable 3",                    "index.html","action"],
  ["roulette knight",                  "index.html","action"],
  ["scale-the-depths",                 "index.html","other"],
  ["scrap-metal",                      "index.html","racing"],
  ["scratch-inc",                      "index.html","idle"],
  ["sea mongrel",                      "index.html","action"],
  ["shredsauce",                       "index.html","sports"],
  ["slope 2 player",                   "index.html","racing"],
  ["slope 3",                          "index.html","racing"],
  ["space waves",                      "index.html","shooter"],
  ["sprunked",                         "index.html","other"],
  ["stone-grass-mowing-simulator",     "index.html","other"],
  ["super kid adventure",              "index.html","action"],
  ["super-onion-boy-2",                "index.html","action"],
  ["survival race v2",                 "index.html","racing"],
  ["swamp-attack",                     "index.html","action"],
  ["tag",                              "index.html","action"],
  ["telephone trouble",                "index.html","puzzle"],
  ["tempoverdose",                     "index.html","other"],
  ["tomb",                             "index.html","action"],
  ["townscraper",                      "index.html","idle"],
  ["toy-rider",                        "index.html","racing"],
  ["trash-clash",                      "index.html","action"],
  ["trials-part-2",                    "index.html","racing"],
  ["ut-last-breath",                   "index.html","action"],
  ["wheelie-bike",                     "index.html","racing"],
  ["winter falling",                   "index.html","action"],
  ["you vs 100 skibidi",               "index.html","action"],
  ["nzp",                              "index.html","shooter"],
  ["perfect-hotel",                    "index.html","idle"],

  // ── NEW HORROR ───────────────────────────────────────────────────────────
  ["fnaw",                             "index.html","horror"],
  ["fnas-hotel2",                      "index.html","horror"],
  ["granny 3",                         "index.html","horror"],
  ["haunted-school",                   "index.html","horror"],

  // ── NEW ACTION ───────────────────────────────────────────────────────────
  ["fnf0.7.5",                         "index.html","action"],
  ["fruit ninja",                      "index.html","action"],
  ["game-inside-game",                 "index.html","action"],
  ["gd-subzero",                       "index.html","action"],
  ["gdash",                            "index.html","action"],
  ["gdlite",                           "index.html","action"],
  ["gimmie the airpod",                "index.html","action"],
  ["gladihoppper",                     "index.html","action"],
  ["grand-escape-prison",              "index.html","action"],
  ["gun-knight",                       "index.html","action"],
  ["gunspin",                          "index.html","action"],
  ["hills of steel",                   "index.html","action"],
  ["hungry knight",                    "index.html","action"],
  ["hungry lamu",                      "index.html","puzzle"],
  ["ice dodo",                         "index.html","action"],
  ["icy purple head",                  "index.html","action"],
  ["ink-game",                         "index.html","puzzle"],
  ["iron snout",                       "index.html","action"],
  ["jelly-mario",                      "index.html","action"],
  ["jet rush",                         "index.html","racing"],
  ["jumbo-mario",                      "index.html","action"],
  ["jumping shell",                    "index.html","action"],
  ["jungle-deer-hunting",              "index.html","action"],
  ["karate bros",                      "index.html","action"],
  ["kraft quest",                      "index.html","action"],

  // ── NEW SHOOTER ──────────────────────────────────────────────────────────
  ["forward-assault",                  "index.html","shooter"],
  ["half life",                        "index.html","shooter"],

  // ── NEW RACING ───────────────────────────────────────────────────────────
  ["highway racer 2",                  "index.html","racing"],
  ["highway traffic",                  "index.html","racing"],
  ["indian-truck-simulator-3d-gh-pages","index.html","racing"],
  ["kart bros",                        "index.html","racing"],

  // ── NEW SPORTS ───────────────────────────────────────────────────────────
  ["football bros",                    "index.html","sports"],
  ["golf orbit",                       "index.html","sports"],
  ["golf-battle",                      "index.html","sports"],
  ["head soccer",                      "index.html","sports"],
  ["ice-fishing",                      "index.html","sports"],

  // ── NEW IDLE ─────────────────────────────────────────────────────────────
  ["gardenless",                       "index.html","idle"],
  ["grow-your-garden",                 "index.html","idle"],
  ["hardware tycoon",                  "index.html","idle"],
  ["idle bee factory",                 "index.html","idle"],
  ["idle idle game dev",               "index.html","idle"],
  ["idle-football-manager",            "index.html","idle"],
  ["industrial-basis",                 "index.html","idle"],
  ["infinite-trees",                   "index.html","idle"],
  ["konkr",                            "index.html","idle"],

  // ── NEW PUZZLE ───────────────────────────────────────────────────────────
  ["goblin-goop",                      "index.html","puzzle"],
  ["georgeandprinter",                 "index.html","puzzle"],
  ["house paint",                      "index.html","puzzle"],
  ["kanye-zone",                       "index.html","puzzle"],

  // ── 18+ ──────────────────────────────────────────────────────────────────
  ["deepest sword",                    "index.html","18plus"],
  ["happy room",                       "index.html","18plus"],
  ["get yoked",                        "index.html","18plus"],
  ["a day in the office",              "index.html","18plus"],
  ["drunken duel",                     "index.html","18plus"],
  ["1-date-danger",                    "index.html","18plus"],
];

// deduplicate by folder name
const seen = new Set();
const uniqueGames = games.filter(g => {
  const key = g[0].toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

// ── UI state ─────────────────────────────────────────────────────────────────
const CAT_LABELS = {
  all:     "🎮 All",
  horror:  "💀 Horror",
  action:  "⚡ Action",
  shooter: "🔫 Shooter",
  racing:  "🏎 Racing",
  sports:  "⚽ Sports",
  idle:    "💰 Idle",
  puzzle:  "🧩 Puzzle",
  "18plus":"🔞 18+",
  other:   "🌀 Other",
};

const CAT_COLORS = {
  horror:  "#ff3c3c",
  action:  "#ff9500",
  shooter: "#c8ff00",
  racing:  "#00e5ff",
  sports:  "#00ff88",
  idle:    "#ffcc00",
  puzzle:  "#cc88ff",
  "18plus":"#ff2d8a",
  other:   "#aaaaaa",
};

let activeCategory = "all";
let current     = null;
let currentGame = null;

// ── Build category filter bar ─────────────────────────────────────────────────
function buildCatBar() {
  const bar = document.getElementById('cat-bar');
  bar.innerHTML = Object.entries(CAT_LABELS).map(([key, label]) => {
    const count = key === "all" ? uniqueGames.length : uniqueGames.filter(g => g[2] === key).length;
    return `<button class="cat-btn${activeCategory === key ? ' cat-active' : ''}"
      data-cat="${key}"
      style="--cat-c:${CAT_COLORS[key] || '#c8ff00'}"
      onclick="setCategory('${key}')">
        ${label} <span class="cat-count">${count}</span>
    </button>`;
  }).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  buildCatBar();
  filter();
}

// ── Filter / render grid ─────────────────────────────────────────────────────
function esc(s) {
  // HTML-attribute–safe encoding (no apostrophe issues in onclick/title/data-*)
  return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function filter() {
  const q = document.getElementById('gsearch').value.toLowerCase();
  let filtered = activeCategory === "all"
    ? uniqueGames
    : uniqueGames.filter(g => g[2] === activeCategory);
  if (q) filtered = filtered.filter(g => g[0].toLowerCase().includes(q));

  document.getElementById('gcount').textContent = filtered.length + ' / ' + uniqueGames.length;

  // Use data-* attributes — avoids apostrophes/quotes breaking inline onclick
  document.getElementById('game-grid').innerHTML = filtered.map(g => {
    const cat   = g[2] || 'other';
    const color = CAT_COLORS[cat] || '#c8ff00';
    const label = cat.toUpperCase();
    return `<button class="gbtn${g[0] === current ? ' active' : ''}"
      data-name="${esc(g[0])}" data-file="${esc(g[1])}"
      title="${esc(g[0])}">
        <span class="gname">${esc(g[0])}</span>
        <span class="gsrc-badge" style="--badge-color:${color}">${label}</span>
    </button>`;
  }).join('');
}

// Single delegated click listener on the grid (set up once at init)
function initGridListener() {
  document.getElementById('game-grid').addEventListener('click', e => {
    const btn = e.target.closest('.gbtn');
    if (btn) loadGame(btn.dataset.name, btn.dataset.file);
  });
}

// ── Load game ─────────────────────────────────────────────────────────────────
let _loadTimer = null;

async function loadGame(name, file) {
  if (current === name) return;
  current     = name;
  currentGame = { name, file };

  if (_loadTimer) { clearTimeout(_loadTimer); _loadTimer = null; }

  // ── UI setup ───────────────────────────────────────────────────────────────
  const t = document.getElementById('ftitle');
  t.textContent = name;
  t.classList.add('active-title');

  document.getElementById('ph').style.display         = 'none';
  document.getElementById('game-hint').style.display  = 'none';
  const lm = document.getElementById('loading-msg');
  lm.style.display = 'flex';
  document.getElementById('loading-text').textContent = `loading ${name}…`;
  document.getElementById('btn-r').style.display      = 'inline-block';
  document.getElementById('btn-fs').style.display     = 'inline-block';

  const cdnUrl  = cdnBase(name) + file;
  const ext     = document.getElementById('btn-e');
  ext.style.display = 'inline-block';
  ext.href          = cdnUrl;

  const hintLink = document.getElementById('hint-newtab');
  if (hintLink) hintLink.href = cdnUrl;

  filter();

  const fr          = document.getElementById('game-frame');
  const loadingName = name;     // closure guard against stale loads

  function showFrame() {
    if (current !== loadingName) return;
    fr.style.display = 'block';
    lm.style.display = 'none';
    if (_loadTimer) { clearTimeout(_loadTimer); _loadTimer = null; }
    _loadTimer = setTimeout(() => {
      if (current !== loadingName) return;
      const hint = document.getElementById('game-hint');
      if (hint) hint.style.display = 'flex';
    }, 5000);
  }

  // ── Proxy strategy ────────────────────────────────────────────────────────
  // Our Python server's /proxy endpoint fetches the game HTML from GitHub,
  // injects the <base> tag, and serves it as text/html from our own origin.
  // This means document.baseURI = CDN URL (via <base>), so webpack/bundler
  // public-path auto-detection works correctly (no more "Invalid URL" errors).
  const proxyUrl = `/proxy?g=${encodeURIComponent(name)}&f=${encodeURIComponent(file)}`;

  fr.removeAttribute('srcdoc');
  fr.onload = showFrame;
  fr.src    = proxyUrl;
}

// ── Controls ──────────────────────────────────────────────────────────────────
function reloadGame() {
  if (!currentGame) return;
  current = null;
  loadGame(currentGame.name, currentGame.file);
}

function fullscreenGame() {
  const fr = document.getElementById('game-frame');
  if      (fr.requestFullscreen)            fr.requestFullscreen();
  else if (fr.webkitRequestFullscreen)      fr.webkitRequestFullscreen();
  else if (fr.mozRequestFullScreen)         fr.mozRequestFullScreen();
  else if (fr.msRequestFullscreen)          fr.msRequestFullscreen();
}

// ── Init ─────────────────────────────────────────────────────────────────────
buildCatBar();
filter();
initGridListener();

// ── Vanta background ─────────────────────────────────────────────────────────
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
})();
