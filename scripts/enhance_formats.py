#!/usr/bin/env python3
# Version "musclée" (SEO + tableaux) de l'article formats-reseaux-sociaux-2025.
# Title/H1 repris de l'exemple client. Slug d'URL INCHANGÉ (2025) pour éviter le 404.
import json, os

slug = "formats-reseaux-sociaux-2025"
p = f"content/blog/{slug}.json"
d = json.load(open(p, encoding="utf-8"))

d["seoTitle"] = "Formats posts réseaux sociaux 2026 : 16:9, 4:3, 9:16…"
d["title"] = "Les formats des posts sur les réseaux sociaux en 2026"
d["description"] = ("Tailles et ratios des formats sur les réseaux sociaux en 2026 : Instagram, "
                    "LinkedIn, Facebook, TikTok, YouTube, Pinterest, X. Dimensions exactes en pixels, "
                    "à jour et prêtes à l'emploi.")
d["modified"] = "2026-06-30T09:00:00+00:00"

def table(headers, rows):
    th = "".join(f"<th>{h}</th>" for h in headers)
    body = "".join("<tr>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>" for r in rows)
    return f"<table><thead><tr>{th}</tr></thead><tbody>{body}</tbody></table>"

def faq(items):
    out = ['<div class="blog-faq">']
    for q, a in items:
        out.append(f"<details><summary>{q}</summary><div><p>{a}</p></div></details>")
    out.append("</div>")
    return "".join(out)

html = []
html.append("<p>Un visuel coupé, flou ou mal cadré, et l'engagement s'effondre. Les formats d'images "
    "évoluent vite sur les réseaux sociaux, et 2026 ne fait pas exception : Instagram a encore revu "
    "ses recommandations, le plein écran 9:16 s'impose, et chaque plateforme a ses tailles idéales. "
    "Voici le guide à jour des bons formats à utiliser sur chaque réseau, avec les dimensions exactes "
    "en pixels et les ratios à retenir.</p>")

html.append("<h2>Pourquoi les formats sont décisifs en 2026</h2>")
html.append("<ul>"
    "<li><strong>L'algorithme favorise les visuels natifs</strong> : un format respecté occupe plus "
    "d'espace à l'écran et capte davantage l'attention.</li>"
    "<li><strong>Le mobile domine</strong> : les formats verticaux (4:5, 3:4, 9:16) prennent plus de "
    "hauteur dans le fil et performent mieux que le paysage.</li>"
    "<li><strong>La qualité perçue compte</strong> : un visuel recadré ou pixellisé nuit directement "
    "à votre image de marque.</li></ul>")

html.append("<h2>Instagram : le format 3:4 devient la norme</h2>")
html.append("<p>Après le carré (1:1) puis le portrait 4:5, Instagram recommande depuis mi-2025 le "
    "format <strong>3:4 (1080×1440 px)</strong> pour le feed. C'est désormais le format à adopter par "
    "défaut ; gardez le 1080×1350 px sous la main pour certains carrousels ou la republication "
    "d'anciens visuels.</p>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Feed (recommandé)", "1080×1440 px", "3:4"],
    ["Feed (portrait)", "1080×1350 px", "4:5"],
    ["Feed (carré)", "1080×1080 px", "1:1"],
    ["Reels &amp; Stories", "1080×1920 px", "9:16"],
    ["Photo de profil", "320×320 px", "1:1"],
]))

html.append("<h2>LinkedIn : sobriété et qualité visuelle</h2>")
html.append("<p>Réseau professionnel oblige, LinkedIn mise sur la lisibilité. Le format carré passe "
    "très bien sur desktop comme sur mobile, et les carrousels PDF sont d'excellents formats "
    "d'engagement.</p>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Post image (carré)", "1080×1080 px", "1:1"],
    ["Post image (paysage)", "1200×627 px", "1,91:1"],
    ["Document / carrousel PDF", "1080×1080 px", "1:1"],
    ["Image de lien partagé", "1200×627 px", "1,91:1"],
    ["Photo de profil", "400×400 px", "1:1"],
    ["Bannière de profil", "1584×396 px", "4:1"],
    ["Bannière page entreprise", "1128×191 px", "5,9:1"],
]))

html.append("<h2>Facebook : les formats classiques restent solides</h2>")
html.append("<p>Pas de révolution côté Facebook : restez carré (ou presque) et prévoyez une zone "
    "« safe » au centre, car la plateforme recadre souvent les visuels.</p>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Post image (carré)", "1200×1200 px", "1:1"],
    ["Post image (paysage)", "1200×628 px", "1,91:1"],
    ["Stories &amp; Reels", "1080×1920 px", "9:16"],
    ["Photo de profil", "170×170 px", "1:1"],
    ["Photo de couverture", "820×312 px", "2,63:1"],
]))

html.append("<h2>X (Twitter) : clair et bien cadré</h2>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Image dans un post", "1600×900 px", "16:9"],
    ["Photo de profil", "400×400 px", "1:1"],
    ["Bannière", "1500×500 px", "3:1"],
]))
html.append("<p><strong>À éviter</strong> : les formats trop hauts, vite coupés dans le fil.</p>")

html.append("<h2>Pinterest : le vertical est roi</h2>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Épingle (pin)", "1000×1500 px", "2:3"],
    ["Photo de profil", "280×280 px", "1:1"],
    ["Bannière", "800×450 px", "16:9"],
]))

html.append("<h2>TikTok &amp; Snapchat : plein écran 9:16</h2>")
html.append("<p>Sur ces plateformes mobiles, le format <strong>9:16</strong> règne : occupez 100 % de "
    "l'écran pour maximiser l'impact.</p>")
html.append(table(["Plateforme / emplacement", "Dimensions", "Ratio"], [
    ["TikTok (vidéo &amp; photo)", "1080×1920 px", "9:16"],
    ["Snapchat (vidéo)", "1080×1920 px", "9:16"],
    ["Snapchat (profil)", "320×320 px", "1:1"],
    ["Snapchat (bannière)", "375×278 px", "4:3"],
]))

html.append("<h2>YouTube : soigner la vitrine</h2>")
html.append(table(["Emplacement", "Dimensions", "Ratio"], [
    ["Miniature de vidéo", "1280×720 px", "16:9"],
    ["Bannière de chaîne", "2560×1440 px", "16:9"],
    ["Photo de profil", "800×800 px", "1:1"],
]))
html.append("<p><strong>Tip de pro</strong> : la miniature est votre meilleur déclencheur de clics. "
    "Pensez contraste fort et gros texte lisible même en tout petit.</p>")

html.append("<h2>Comprendre les ratios : 1:1, 4:5, 3:4, 9:16, 16:9</h2>")
html.append("<p>Au-delà des pixels, c'est le ratio qui détermine si votre visuel s'affiche en entier. "
    "Voici les ratios à connaître et leur usage.</p>")
html.append(table(["Ratio", "Orientation", "Usage idéal"], [
    ["1:1", "Carré", "Feed polyvalent (LinkedIn, Facebook), profils"],
    ["4:5", "Portrait", "Feed mobile : occupe plus de hauteur que le carré"],
    ["3:4", "Portrait", "Nouveau standard du feed Instagram"],
    ["9:16", "Vertical plein écran", "Reels, Stories, TikTok, Snapchat"],
    ["16:9", "Paysage", "YouTube, miniatures, bannières, images X"],
    ["2:3", "Vertical", "Épingles Pinterest"],
]))

html.append("<h2>Le tableau récapitulatif des formats 2026</h2>")
html.append(table(["Réseau", "Format clé", "Dimensions", "Ratio"], [
    ["Instagram", "Feed 3:4 (nouveau)", "1080×1440 px", "3:4"],
    ["Instagram", "Reels / Stories", "1080×1920 px", "9:16"],
    ["LinkedIn", "Post carré", "1080×1080 px", "1:1"],
    ["LinkedIn", "Lien / paysage", "1200×627 px", "1,91:1"],
    ["Facebook", "Post carré", "1200×1200 px", "1:1"],
    ["Facebook", "Stories / Reels", "1080×1920 px", "9:16"],
    ["X (Twitter)", "Image de post", "1600×900 px", "16:9"],
    ["Pinterest", "Épingle", "1000×1500 px", "2:3"],
    ["TikTok", "Vidéo / photo", "1080×1920 px", "9:16"],
    ["YouTube", "Miniature", "1280×720 px", "16:9"],
]))

html.append("<h2>3 réflexes pour ne jamais rater un visuel</h2>")
html.append("<ol>"
    "<li>Partez du <strong>format vertical</strong> (4:5 ou 3:4) pour le feed : il prend plus de place "
    "sur mobile et capte mieux l'attention.</li>"
    "<li>Gardez une <strong>zone « safe »</strong> au centre de vos visuels pour absorber les "
    "recadrages automatiques.</li>"
    "<li>Exportez en <strong>haute résolution</strong> et au bon ratio : un visuel net et bien cadré "
    "renforce immédiatement votre crédibilité.</li></ol>")

html.append(faq([
    ("Quel est le meilleur format pour un post Instagram en 2026 ?",
     "Le format portrait 3:4 (1080×1440 px) est désormais recommandé pour le feed. Le 4:5 "
     "(1080×1350 px) reste une bonne alternative, notamment pour les carrousels."),
    ("Quel format pour les Reels, Stories et TikTok ?",
     "Le 9:16 plein écran (1080×1920 px) sur toutes ces plateformes : il occupe 100 % de l'écran "
     "du smartphone."),
    ("Quelle taille d'image pour un post LinkedIn ?",
     "Le carré 1080×1080 px fonctionne très bien sur desktop et mobile ; le paysage 1200×627 px "
     "convient pour les liens partagés."),
    ("Pourquoi mes visuels sont-ils coupés sur les réseaux sociaux ?",
     "Le plus souvent parce que le ratio ne correspond pas à l'emplacement. Respectez les ratios "
     "(1:1, 4:5, 9:16, 16:9) et prévoyez une marge de sécurité autour des éléments importants."),
]))

d["html"] = "".join(html)
json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print("enhanced", slug)
print("seoTitle:", d["seoTitle"])
print("H1     :", d["title"])
print("html bytes:", len(d["html"]))
