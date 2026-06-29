import React from "react";

// Rendu du contenu sémantique éditorial des fiches formation.
// Le contenu est structuré en blocs (data/formationContent.js) pour garder
// une hiérarchie Hn propre, varier les formats (listes, tableaux, colonnes)
// et rester pleine largeur, indépendamment de la grille de la fiche.

// Gras en ligne via **texte**.
function renderInline(text) {
  const parts = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<strong key={i}>{m[1]}</strong>);
    last = m.index + m[0].length;
    i += 1;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Block({ b }) {
  switch (b.type) {
    case "p":
      return <p className="rich__p">{renderInline(b.text)}</p>;
    case "h3":
      return <h3 className="rich__h3">{b.text}</h3>;
    case "ul":
      return (
        <ul className="rich__ul">
          {b.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className="rich__ol">
          {b.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
        </ol>
      );
    case "table":
      return (
        <div className="rich__table-wrap">
          <table className="rich__table">
            {b.caption ? <caption>{b.caption}</caption> : null}
            <thead>
              <tr>{b.headers.map((h, i) => <th key={i}>{renderInline(h)}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci}>{renderInline(c)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "columns":
      return (
        <div className="rich__cols">
          {b.cols.map((c, ci) => (
            <div className="rich__col" key={ci}>
              {c.title ? <h4 className="rich__col-title">{c.title}</h4> : null}
              <ul className="rich__ul">
                {c.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <div className="rich__callout">
          {b.title ? <p className="rich__callout-title">{b.title}</p> : null}
          <p className="rich__callout-text">{renderInline(b.text)}</p>
        </div>
      );
    default:
      return null;
  }
}

export function RichContent({ content }) {
  if (!content || !Array.isArray(content.sections) || content.sections.length === 0) {
    return null;
  }
  return (
    <div className="rich">
      {content.sections.map((s, si) => (
        <section className="rich__section" data-reveal key={si}>
          <h2 className="rich__h2">{s.h2}</h2>
          {(s.blocks || []).map((b, bi) => <Block b={b} key={bi} />)}
        </section>
      ))}
    </div>
  );
}
