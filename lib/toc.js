// Sommaire (table des matières) des articles de blog.
// À partir du HTML verbatim d'un article, on :
//   1. injecte un id stable sur chaque <h2>/<h3> non vide (slug du titre) ;
//   2. renvoie la liste plate des titres pour la sidebar sticky (scrollspy).
// Exécuté au build (export statique), sans DOM : parsing par regex.

// Couleurs ABCM attribuées section par section (une par H2, héritée par ses
// H3). Le jaune est écarté (lisibilité du texte actif sur fond clair).
const HUES = ["magenta", "blue", "green", "orange"];

// Table d'aplatissement des accents (français) -> ASCII, pour des id propres.
const ACCENTS = {
  "à": "a", "â": "a", "ä": "a", "á": "a", "ã": "a", "å": "a",
  "ç": "c", "é": "e", "è": "e", "ê": "e", "ë": "e",
  "î": "i", "ï": "i", "í": "i", "ì": "i",
  "ô": "o", "ö": "o", "ó": "o", "õ": "o", "ò": "o",
  "ù": "u", "û": "u", "ü": "u", "ú": "u",
  "ÿ": "y", "ñ": "n", "œ": "oe", "æ": "ae",
};

function stripTags(s) {
  return String(s || "").replace(/<[^>]+>/g, "");
}

function decodeEntities(s) {
  return String(s || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&#x27;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&#34;|&ldquo;|&rdquo;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function slugify(text) {
  const lowered = decodeEntities(stripTags(text)).toLowerCase();
  let s = "";
  for (const ch of lowered) s += ch in ACCENTS ? ACCENTS[ch] : ch;
  s = s
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/g, "");
  return s || "section";
}

// Renvoie { html, toc }.
//   html : identique en entrée, mais chaque H2/H3 non vide porte un id.
//   toc  : [{ id, text, level (2|3), hue }] dans l'ordre du document.
export function buildToc(html) {
  const src = String(html || "");
  const used = new Set();
  const toc = [];
  let hueIdx = -1;

  const out = src.replace(/<(h[23])((?:\s[^>]*)?)>([\s\S]*?)<\/\1>/gi, (m, tag, attrs, inner) => {
    const level = tag.toLowerCase() === "h2" ? 2 : 3;
    const text = decodeEntities(stripTags(inner)).replace(/\s+/g, " ").trim();
    if (!text) return m; // titre vide : ni id ni entrée de sommaire

    const existing = attrs.match(/\sid=["']([^"']+)["']/i);
    let id;
    if (existing) {
      id = existing[1];
    } else {
      id = slugify(text);
      const base = id;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
    }
    used.add(id);

    if (level === 2) hueIdx++;
    const hue = HUES[Math.max(0, hueIdx) % HUES.length];
    toc.push({ id, text, level, hue });

    if (existing) return m; // id déjà présent : HTML inchangé
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });

  return { html: out, toc };
}
