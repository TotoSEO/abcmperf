#!/usr/bin/env python3
# Intègre les versions "musclées" produites par les agents (scratch_enh_*.json)
# dans content/blog/<slug>.json + content/blog/summaries.json.
# - seoTitle = title SEO, title = H1 (distinct), description, html enrichi
# - modified = aujourd'hui (article actualisé), date de publication conservée
# - nettoyage de sécurité : emojis retirés, tirets cadratins -> –, <script>/<style> retirés
import json, glob, re, sys
from bs4 import BeautifulSoup

TODAY = "2026-06-30T09:00:00+00:00"
EMOJI_RE = re.compile("[\U0001F000-\U0001FAFF\U00002600-\U000027BF\U00002B00-\U00002BFF"
    "\U0001F1E6-\U0001F1FF\U00002300-\U000023FF\U0000FE00-\U0000FE0F\U0000200D\U000020E3]")

def clean(s):
    if not s: return s
    s = s.replace("—", "–").replace("―", "–")
    s = EMOJI_RE.sub("", s)
    return re.sub(r" {2,}", " ", s).strip()

def clean_html(h):
    soup = BeautifulSoup(h, "lxml")
    # body wrapper that lxml may add
    root = soup.body or soup
    for bad in root.find_all(["script", "style", "iframe"]):
        bad.decompose()
    # retrait emojis dans les nœuds texte
    from bs4 import NavigableString
    for t in list(root.find_all(string=True)):
        n = clean(str(t))
        if n != str(t): t.replace_with(NavigableString(n))
    inner = "".join(str(c) for c in root.children).strip()
    return clean(inner)

def main():
    files = sys.argv[1:] or glob.glob("scratch_enh_*.json")
    summ_path = "content/blog/summaries.json"
    summ = json.load(open(summ_path, encoding="utf-8"))
    done = []
    for f in files:
        data = json.load(open(f, encoding="utf-8"))
        for slug, enh in data.items():
            p = f"content/blog/{slug}.json"
            try:
                base = json.load(open(p, encoding="utf-8"))
            except FileNotFoundError:
                print("  SKIP (no base):", slug); continue
            base["seoTitle"] = clean(enh["seoTitle"])
            base["title"] = clean(enh["h1"])
            base["description"] = clean(enh["description"])
            base["html"] = clean_html(enh["html"])
            base["modified"] = TODAY
            json.dump(base, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
            summ[slug] = [clean(b) for b in enh["summary"]]
            done.append(slug)
            print(f"  OK {slug}: <title>={base['seoTitle']!r} | H1={base['title']!r} | tables={base['html'].count('<table>')} | bullets={len(summ[slug])}")
    json.dump(summ, open(summ_path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"integrated {len(done)} articles")

if __name__ == "__main__":
    main()
