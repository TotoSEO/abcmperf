import React from "react";

const STYLE_ID = "abcm-testimonial-styles";
const CSS = `
.abcm-testi {
  display: flex; flex-direction: column; gap: var(--space-5);
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: var(--space-6); height: 100%; box-shadow: var(--shadow-sm);
}
.abcm-testi__stars { display: inline-flex; gap: 2px; color: var(--accent-500); }
.abcm-testi__stars svg { width: 1.1em; height: 1.1em; }
.abcm-testi__quote { font-family: var(--font-sans); font-size: var(--text-md); line-height: var(--leading-relaxed); color: var(--text); margin: 0; flex: 1; }
.abcm-testi__quote::before { content: "“"; font-family: var(--font-display); font-weight: 700; }
.abcm-testi__quote::after { content: "”"; font-family: var(--font-display); font-weight: 700; }
.abcm-testi__foot { display: flex; align-items: center; gap: var(--space-3); }
.abcm-testi__meta { display: flex; flex-direction: column; line-height: 1.3; }
.abcm-testi__name { font-family: var(--font-display); font-weight: 700; font-size: var(--text-sm); color: var(--text); }
.abcm-testi__source { font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--text-muted); letter-spacing: 0.04em; }
`;

const Star = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z"/></svg>);

function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

export function TestimonialCard({ quote, author, source, avatar, rating = 5, className = "", children, ...rest }) {
  useStyles();
  const NS = (typeof window !== "undefined" && window.ABCMPerformancesDesignSystem_d992a8) || {};
  const Avatar = NS.Avatar;
  return (
    <div className={["abcm-testi", className].filter(Boolean).join(" ")} {...rest}>
      {rating > 0 && <span className="abcm-testi__stars">{Array.from({ length: rating }).map((_, i) => <Star key={i} />)}</span>}
      <p className="abcm-testi__quote">{quote || children}</p>
      <div className="abcm-testi__foot">
        {Avatar ? <Avatar name={author} src={avatar} hue /> : null}
        <span className="abcm-testi__meta">
          <span className="abcm-testi__name">{author}</span>
          {source && <span className="abcm-testi__source">{source}</span>}
        </span>
      </div>
    </div>
  );
}
