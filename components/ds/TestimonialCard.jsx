import React from "react";
import { Avatar } from "./Avatar";

const Star = () => (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z"/></svg>);

export function TestimonialCard({ quote, author, source, avatar, rating = 5, className = "", children, ...rest }) {
  return (
    <div className={["abcm-testi", className].filter(Boolean).join(" ")} {...rest}>
      {rating > 0 && <span className="abcm-testi__stars">{Array.from({ length: rating }).map((_, i) => <Star key={i} />)}</span>}
      <p className="abcm-testi__quote">{quote || children}</p>
      <div className="abcm-testi__foot">
        <Avatar name={author} src={avatar} hue />
        <span className="abcm-testi__meta">
          <span className="abcm-testi__name">{author}</span>
          {source && <span className="abcm-testi__source">{source}</span>}
        </span>
      </div>
    </div>
  );
}
