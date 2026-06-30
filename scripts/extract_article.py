#!/usr/bin/env python3
"""
Extraction VERBATIM d'un article de blog abcmperformances.com vers le nouveau site.
- Récupère le HTML brut (curl), isole .entry-content
- Retire UNIQUEMENT le chrome non rédactionnel (sommaire LuckyWP, barre de partage, boutons)
- Convertit la FAQ accordéon en <details>/<summary> natifs (texte inchangé)
- Télécharge les images (à la une + dans le contenu) dans public/blog/<slug>/
- Repointe les liens internes vers les slugs déjà migrés ; garde le reste tel quel
- Ne RÉÉCRIT jamais le texte : on sérialise l'arbre source nettoyé
- Vérifie par diff que le texte rédactionnel intégré == source (0 écart attendu)

Usage: python3 scripts/extract_article.py <slug> <url>
Sortie: content/blog/<slug>.json  + images dans public/blog/<slug>/
"""
import sys, os, re, json, subprocess, hashlib
from bs4 import BeautifulSoup, NavigableString

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_BLOG = os.path.join(ROOT, "public", "blog")
CONTENT_BLOG = os.path.join(ROOT, "content", "blog")

# Slugs déjà présents sur le nouveau site (pour repointer le maillage interne).
NEW_SITE_SLUGS = set()
def load_known_slugs():
    # services + formations + articles de blog déjà connus
    try:
        svc = open(os.path.join(ROOT, "data", "services.js")).read()
        NEW_SITE_SLUGS.update(re.findall(r'slug:\s*"([a-z0-9-]+)"', svc))
    except Exception: pass
    try:
        fm = open(os.path.join(ROOT, "data", "formations.js")).read()
        NEW_SITE_SLUGS.update(re.findall(r'slug:\s*"([a-z0-9-]+)"', fm))
    except Exception: pass
    # blog slugs déjà extraits
    if os.path.isdir(CONTENT_BLOG):
        for f in os.listdir(CONTENT_BLOG):
            if f.endswith(".json"): NEW_SITE_SLUGS.add(f[:-5])

# Liste des 28 slugs de blog ciblés (pour repointer le maillage entre articles migrés)
BLOG_TARGET_SLUGS = set()
def load_blog_targets():
    p = os.path.join(ROOT, "scripts", "blog_urls.txt")
    if os.path.exists(p):
        for line in open(p):
            line = line.strip()
            if line.startswith("http"):
                s = re.sub(r"https?://abcmperformances\.com/([^/]+)/?$", r"\1", line)
                if s and s != line: BLOG_TARGET_SLUGS.add(s)

def curl(url):
    return subprocess.run(["curl", "-s", "-L", url], capture_output=True).stdout

def curl_to(url, path):
    subprocess.run(["curl", "-s", "-L", url, "-o", path], check=False)

def meta(soup, **kw):
    if "name" in kw:
        el = soup.find("meta", attrs={"name": kw["name"]})
    else:
        el = soup.find("meta", attrs={"property": kw["prop"]})
    return el.get("content").strip() if el and el.get("content") else None

WIDGET_SELECTORS = [
    ".lwptoc", ".blog-share", ".social-icons", ".share-icons", ".sharedaddy",
    ".jp-relatedposts", ".post-nav", ".author-bio", ".author-box", ".yarpp-related",
    "script", "style", "noscript", "ins",
]

def strip_widgets(node):
    for sel in WIDGET_SELECTORS:
        for el in node.select(sel):
            el.decompose()
    for b in node.find_all("button"):
        b.decompose()

def convert_accordions(node, soup):
    for acc in node.select(".accordion"):
        details_wrap = soup.new_tag("div")
        details_wrap["class"] = ["blog-faq"]
        for item in acc.select(".accordion-item"):
            title_el = item.select_one(".accordion-title")
            inner_el = item.select_one(".accordion-inner")
            q = title_el.get_text(" ", strip=True) if title_el else ""
            det = soup.new_tag("details")
            summ = soup.new_tag("summary")
            summ.string = q
            det.append(summ)
            if inner_el:
                # garder le contenu rédactionnel de la réponse tel quel
                ans = soup.new_tag("div")
                for child in list(inner_el.children):
                    ans.append(child.extract())
                det.append(ans)
            details_wrap.append(det)
        acc.replace_with(details_wrap)

def remap_href(href):
    if not href: return href
    m = re.match(r"https?://abcmperformances\.com/([a-z0-9-]+)/?$", href)
    if m:
        slug = m.group(1)
        if slug in NEW_SITE_SLUGS or slug in BLOG_TARGET_SLUGS:
            return f"/{slug}/"
        return href  # page pas encore migrée : on garde le lien live
    return href

KEEP_ATTRS = {"href", "src", "alt", "datetime", "colspan", "rowspan", "open"}

def clean_attrs(node):
    for el in node.find_all(True):
        for attr in list(el.attrs.keys()):
            if attr not in KEEP_ATTRS:
                del el[attr]

def is_decorative(src):
    if not src: return True
    s = src.lower()
    return ("logo-abcm" in s or "/cropped-" in s or s.startswith("data:")
            or "spacer" in s or "blank.gif" in s)

def handle_images(node, slug, cover_src):
    os.makedirs(os.path.join(PUBLIC_BLOG, slug), exist_ok=True)
    downloaded = []
    seen = {}
    def localize(src):
        if src in seen: return seen[src]
        fn = os.path.basename(src.split("?")[0])
        fn = re.sub(r"[^A-Za-z0-9._-]", "_", fn) or "img"
        # éviter collisions
        if fn in [d[1] for d in downloaded]:
            fn = hashlib.md5(src.encode()).hexdigest()[:8] + "-" + fn
        dest = os.path.join(PUBLIC_BLOG, slug, fn)
        curl_to(src, dest)
        ok = os.path.exists(dest) and os.path.getsize(dest) > 0
        rel = f"%ASSET%/blog/{slug}/{fn}"
        if ok:
            downloaded.append((src, fn))
            seen[src] = rel
            return rel
        return src
    # cover
    cover = None
    if cover_src and not is_decorative(cover_src):
        cover = {"src": localize(cover_src), "alt": ""}
    # in-content imgs
    for img in node.find_all("img"):
        src = img.get("src") or img.get("data-src") or img.get("data-lazy-src") or img.get("data-original")
        if is_decorative(src):
            # image décorative/logo -> on retire l'img du flux
            img.decompose(); continue
        img["src"] = localize(src)
    return cover, downloaded

def normalize_dashes(s):
    # Tirets cadratins/barres interdits sur le site -> tiret demi-cadratin (–).
    if not s: return s
    return s.replace("—", "–").replace("―", "–")

def normalize_text(t):
    t = t.replace("\xa0", " ")
    # pour le diff verbatim, on ignore la normalisation des tirets (— – -)
    t = re.sub(r"[—―–]", "-", t)
    return re.sub(r"\s+", " ", t).strip()

def main():
    slug, url = sys.argv[1], sys.argv[2]
    load_known_slugs(); load_blog_targets()
    html = curl(url)
    soup = BeautifulSoup(html, "lxml")

    seo_title = (soup.title.get_text(strip=True) if soup.title else None)
    description = meta(soup, name="description")
    published = meta(soup, prop="article:published_time")
    modified = meta(soup, prop="article:modified_time")
    og_image = meta(soup, prop="og:image")
    h1 = soup.select_one("h1.entry-title") or soup.find("h1")
    title = h1.get_text(" ", strip=True) if h1 else (meta(soup, prop="og:title") or seo_title)

    content = soup.select_one(".entry-content")
    if content is None:
        print("ERROR: .entry-content introuvable"); sys.exit(2)

    # --- texte source de référence (chrome retiré) pour le diff verbatim ---
    ref = BeautifulSoup(str(content), "lxml")
    strip_widgets(ref)
    ref_text = normalize_text(ref.get_text(" "))

    # --- nettoyage de l'arbre qu'on va rendre ---
    strip_widgets(content)
    convert_accordions(content, soup)
    cover, downloaded = handle_images(content, slug, og_image)
    for a in content.find_all("a"):
        a["href"] = remap_href(a.get("href"))
    clean_attrs(content)

    # sérialisation du contenu interne (verbatim, jamais retapé)
    inner = "".join(str(c) for c in content.children).strip()
    inner = re.sub(r"\n{3,}", "\n\n", inner)
    em_count = inner.count("—") + inner.count("―")
    inner = normalize_dashes(inner)  # retrait des tirets cadratins (demande client)
    title = normalize_dashes(title)
    seo_title = normalize_dashes(seo_title)
    description = normalize_dashes(description)

    out_text = normalize_text(BeautifulSoup(inner, "lxml").get_text(" "))

    # --- vérif verbatim ---
    match = (ref_text == out_text)
    diff_info = ""
    if not match:
        # localiser la première divergence
        a, b = ref_text, out_text
        i = 0
        while i < min(len(a), len(b)) and a[i] == b[i]: i += 1
        diff_info = (f"\n  source[..{i}]: ...{a[max(0,i-40):i+40]!r}"
                     f"\n  sortie[..{i}]: ...{b[max(0,i-40):i+40]!r}"
                     f"\n  len source={len(a)} len sortie={len(b)}")

    os.makedirs(CONTENT_BLOG, exist_ok=True)
    data = {
        "slug": slug, "url": url,
        "title": title, "seoTitle": seo_title, "description": description,
        "date": published, "modified": modified,
        "cover": cover, "html": inner,
    }
    with open(os.path.join(CONTENT_BLOG, slug + ".json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"=== {slug} ===")
    print(f"  title      : {title}")
    print(f"  seoTitle   : {seo_title}")
    print(f"  date pub   : {published}  (modif {modified})")
    print(f"  cover      : {cover['src'] if cover else None}")
    print(f"  images dl  : {len(downloaded)}")
    print(f"  html bytes : {len(inner)}")
    print(f"  tirets —    : {em_count} retiré(s) -> –")
    print(f"  VERBATIM   : {'OK (0 ecart de mots)' if match else 'DIFF !!!' + diff_info}")

if __name__ == "__main__":
    main()
