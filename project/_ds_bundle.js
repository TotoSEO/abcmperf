/* @ds-bundle: {"format":3,"namespace":"ABCMPerformancesDesignSystem_d992a8","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Switch","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"CircleMotif","sourcePath":"components/marketing/CircleMotif.jsx"},{"name":"LogoMark","sourcePath":"components/marketing/LogoMark.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/marketing/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"378434bd2def","components/core/Badge.jsx":"1c91e49fb5a8","components/core/Button.jsx":"1dc93a60587e","components/core/Card.jsx":"6a3873c67b1d","components/core/IconButton.jsx":"a7e48882ab83","components/core/Tag.jsx":"4cb88c18d094","components/feedback/Accordion.jsx":"73c280f5c718","components/feedback/Alert.jsx":"f11c4da3c2f6","components/feedback/Tabs.jsx":"3ad05dd011ff","components/forms/Checkbox.jsx":"8c300992a9cb","components/forms/Input.jsx":"15510bde6b33","components/forms/Select.jsx":"07159ff54d26","components/marketing/CircleMotif.jsx":"47776f6293b5","components/marketing/LogoMark.jsx":"4a0d4df081d7","components/marketing/SectionHeading.jsx":"2ae043d68188","components/marketing/ServiceCard.jsx":"084f607ed5d2","components/marketing/StatCard.jsx":"547b42edc97c","components/marketing/TestimonialCard.jsx":"a29eb5672daf","ui_kits/blog/blog.jsx":"2b855678d473","ui_kits/marketing/app.jsx":"459baefe8b96","ui_kits/marketing/icons.jsx":"9b044f3b8984","ui_kits/marketing/sections-bottom.jsx":"7f8c767c83fe","ui_kits/marketing/sections-top.jsx":"a2dae3226127","ui_kits/marketing/servicedetail.jsx":"524de5db0ed4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ABCMPerformancesDesignSystem_d992a8 = window.ABCMPerformancesDesignSystem_d992a8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-avatar-styles";
const CSS = `
.abcm-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex: none; position: relative;
  font-family: var(--font-display); font-weight: 700; color: #fff;
  background: var(--night); user-select: none;
}
.abcm-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.abcm-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
.abcm-avatar--md { width: 44px; height: 44px; font-size: 16px; }
.abcm-avatar--lg { width: 64px; height: 64px; font-size: 22px; }
.abcm-avatar--xl { width: 96px; height: 96px; font-size: 32px; }
.abcm-avatar__ring { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--accent-400); }
`;
const HUES = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  hue,
  className = "",
  style,
  ...rest
}) {
  useStyles();
  const cls = ["abcm-avatar", `abcm-avatar--${size}`, ring && "abcm-avatar__ring", className].filter(Boolean).join(" ");
  const bg = hue ? HUES[name.charCodeAt(0) % HUES.length] && hue : undefined;
  const tint = hue ? HUES[(name.charCodeAt(0) || 0) % HUES.length] : undefined;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      background: tint,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-badge-styles";
const CSS = `
.abcm-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: 700;
  letter-spacing: 0.04em; line-height: 1; text-transform: uppercase;
  padding: 0.45em 0.7em; border-radius: var(--radius-pill);
  border: 1px solid transparent; white-space: nowrap;
}
.abcm-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }
.abcm-badge--neutral { background: var(--surface-inset); color: var(--text-muted); }
.abcm-badge--accent  { background: var(--accent-100); color: var(--accent-700); }
.abcm-badge--success { background: var(--success-soft); color: var(--success); }
.abcm-badge--info    { background: var(--info-soft); color: var(--info); }
.abcm-badge--warning { background: var(--warning-soft); color: var(--warning); }
.abcm-badge--danger  { background: var(--danger-soft); color: var(--danger); }
.abcm-badge--solid.abcm-badge--neutral { background: var(--night); color: #fff; }
.abcm-badge--solid.abcm-badge--accent  { background: var(--accent-400); color: var(--night); }
.abcm-badge--solid.abcm-badge--success { background: var(--success); color: #fff; }
.abcm-badge--solid.abcm-badge--info    { background: var(--info); color: #fff; }
.abcm-badge--solid.abcm-badge--warning { background: var(--warning); color: #fff; }
.abcm-badge--solid.abcm-badge--danger  { background: var(--danger); color: #fff; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Badge({
  variant = "neutral",
  solid = false,
  dot = false,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = ["abcm-badge", `abcm-badge--${variant}`, solid && "abcm-badge--solid", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "abcm-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-button-styles";
const CSS = `
.abcm-btn {
  --_pad-y: 0.7em; --_pad-x: 1.25em; --_fs: var(--text-sm);
  display: inline-flex; align-items: center; justify-content: center; gap: 0.6em;
  font-family: var(--font-display); font-weight: var(--weight-semibold);
  font-size: var(--_fs); line-height: 1; letter-spacing: var(--tracking-snug);
  padding: var(--_pad-y) var(--_pad-x);
  border-radius: var(--radius-pill); border: var(--border-width-thick) solid transparent;
  cursor: pointer; white-space: nowrap; text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              color var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.abcm-btn:active { transform: translateY(1px) scale(0.985); }
.abcm-btn:disabled, .abcm-btn[aria-disabled="true"] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
.abcm-btn__icon { display: inline-flex; flex: none; }
.abcm-btn__icon svg { width: 1.15em; height: 1.15em; display: block; }

.abcm-btn--sm { --_pad-y: 0.55em; --_pad-x: 1em; --_fs: var(--text-xs); }
.abcm-btn--lg { --_pad-y: 0.85em; --_pad-x: 1.6em; --_fs: var(--text-md); }
.abcm-btn--block { display: flex; width: 100%; }

.abcm-btn--primary { background: var(--accent-400); color: var(--accent-contrast); }
.abcm-btn--primary:hover { background: var(--accent-300); box-shadow: var(--shadow-accent); transform: translateY(-1px); }
.abcm-btn--primary:active { background: var(--accent-500); }

.abcm-btn--secondary { background: var(--night); color: #fff; }
.abcm-btn--secondary:hover { background: var(--neutral-800); transform: translateY(-1px); box-shadow: var(--shadow-md); }

.abcm-btn--outline { background: transparent; color: var(--text); border-color: var(--border-strong); }
.abcm-btn--outline:hover { border-color: var(--night); background: var(--surface-2); }

.abcm-btn--ghost { background: transparent; color: var(--text); }
.abcm-btn--ghost:hover { background: var(--surface-inset); }

.abcm-btn--link { background: transparent; color: var(--link); padding-left: 0; padding-right: 0; border-radius: 0; }
.abcm-btn--link:hover { color: var(--accent-600); }
.on-dark .abcm-btn--outline, [data-theme="dark"] .abcm-btn--outline { color: #fff; border-color: var(--border-strong); }
.on-dark .abcm-btn--ghost, [data-theme="dark"] .abcm-btn--ghost { color: #fff; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block = false,
  as,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as || (rest.href ? "a" : "button");
  const cls = ["abcm-btn", `abcm-btn--${variant}`, size !== "md" && `abcm-btn--${size}`, block && "abcm-btn--block", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "abcm-btn__icon"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "abcm-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-card-styles";
const CSS = `
.abcm-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
  padding: var(--space-6); color: var(--text);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.abcm-card--pad-none { padding: 0; }
.abcm-card--pad-sm { padding: var(--space-4); }
.abcm-card--pad-lg { padding: var(--space-8); }
.abcm-card--flat { box-shadow: none; }
.abcm-card--elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.abcm-card--interactive { cursor: pointer; }
.abcm-card--interactive:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: transparent; }
.abcm-card--accent { border-top: 4px solid var(--accent-400); }
.abcm-card--center { text-align: center; display: flex; flex-direction: column; align-items: center; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Card({
  padding = "md",
  elevated = false,
  flat = false,
  interactive = false,
  accent = false,
  center = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = ["abcm-card", padding !== "md" && `abcm-card--pad-${padding}`, elevated && "abcm-card--elevated", flat && "abcm-card--flat", interactive && "abcm-card--interactive", accent && "abcm-card--accent", center && "abcm-card--center", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-iconbtn-styles";
const CSS = `
.abcm-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.75em; height: 2.75em; font-size: var(--text-sm);
  border-radius: var(--radius-pill); border: var(--border-width-thick) solid transparent;
  cursor: pointer; padding: 0; flex: none;
  transition: transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.abcm-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }
.abcm-iconbtn:active { transform: scale(0.92); }
.abcm-iconbtn:disabled { opacity: 0.45; cursor: not-allowed; }
.abcm-iconbtn--sm { width: 2.2em; height: 2.2em; }
.abcm-iconbtn--lg { width: 3.25em; height: 3.25em; font-size: var(--text-md); }
.abcm-iconbtn--square { border-radius: var(--radius-md); }
.abcm-iconbtn--primary { background: var(--accent-400); color: var(--night); }
.abcm-iconbtn--primary:hover { background: var(--accent-300); box-shadow: var(--shadow-accent); }
.abcm-iconbtn--secondary { background: var(--night); color: #fff; }
.abcm-iconbtn--secondary:hover { background: var(--neutral-800); }
.abcm-iconbtn--outline { background: transparent; color: var(--text); border-color: var(--border-strong); }
.abcm-iconbtn--outline:hover { border-color: var(--night); background: var(--surface-2); }
.abcm-iconbtn--ghost { background: transparent; color: var(--text); }
.abcm-iconbtn--ghost:hover { background: var(--surface-inset); }
.on-dark .abcm-iconbtn--ghost, [data-theme="dark"] .abcm-iconbtn--ghost { color: #fff; }
.on-dark .abcm-iconbtn--outline, [data-theme="dark"] .abcm-iconbtn--outline { color: #fff; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function IconButton({
  variant = "ghost",
  size = "md",
  square = false,
  label,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = ["abcm-iconbtn", `abcm-iconbtn--${variant}`, size !== "md" && `abcm-iconbtn--${size}`, square && "abcm-iconbtn--square", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-tag-styles";
const CSS = `
.abcm-tag {
  display: inline-flex; align-items: center; gap: 0.5em;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600;
  line-height: 1; padding: 0.5em 0.85em; border-radius: var(--radius-pill);
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border-strong);
  transition: border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
  cursor: default;
}
.abcm-tag--clickable { cursor: pointer; }
.abcm-tag--clickable:hover { border-color: var(--night); background: var(--surface-2); }
.abcm-tag__hue { width: 0.6em; height: 0.6em; border-radius: 50%; flex: none; }
.abcm-tag__x {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.1em; height: 1.1em; border-radius: 50%; border: none; background: transparent;
  color: var(--text-muted); cursor: pointer; font-size: 1.1em; line-height: 1; padding: 0;
}
.abcm-tag__x:hover { background: var(--surface-inset); color: var(--text); }
.abcm-tag--active { background: var(--night); color: #fff; border-color: var(--night); }
`;
const HUES = {
  yellow: "var(--logo-yellow)",
  orange: "var(--logo-orange)",
  magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)",
  green: "var(--logo-green)"
};
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Tag({
  hue,
  active = false,
  onRemove,
  onClick,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const clickable = !!onClick;
  const cls = ["abcm-tag", clickable && "abcm-tag--clickable", active && "abcm-tag--active", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), hue && /*#__PURE__*/React.createElement("span", {
    className: "abcm-tag__hue",
    style: {
      background: HUES[hue] || hue
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "abcm-tag__x",
    "aria-label": "Retirer",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
const STYLE_ID = "abcm-accordion-styles";
const CSS = `
.abcm-accordion { font-family: var(--font-sans); display: flex; flex-direction: column; gap: var(--space-3); }
.abcm-accordion__item { border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); overflow: hidden; transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.abcm-accordion__item:hover { border-color: var(--border-strong); }
.abcm-accordion__item--open { border-color: transparent; box-shadow: var(--shadow-md); }
.abcm-accordion__head {
  appearance: none; width: 100%; background: transparent; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  padding: var(--space-5); text-align: left;
  font-family: var(--font-display); font-weight: 600; font-size: var(--text-md); color: var(--text);
  transition: color var(--dur-base) var(--ease-out);
}
.abcm-accordion__head:hover { color: var(--accent-700); }
.abcm-accordion__item--open .abcm-accordion__head { color: var(--text); }
.abcm-accordion__icon { flex: none; width: 1.75em; height: 1.75em; border-radius: 50%; background: var(--surface-inset);
  display: inline-flex; align-items: center; justify-content: center; color: var(--text); transition: transform var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out); }
.abcm-accordion__icon svg { width: 0.9em; height: 0.9em; }
.abcm-accordion__item--open .abcm-accordion__icon { transform: rotate(135deg); background: var(--accent-400); color: var(--night); }
.abcm-accordion__panel { overflow: hidden; display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-slow) var(--ease-out); }
.abcm-accordion__item--open .abcm-accordion__panel { grid-template-rows: 1fr; }
.abcm-accordion__inner { overflow: hidden; }
.abcm-accordion__body { padding: 0 var(--space-5) var(--space-5); color: var(--text-muted); line-height: var(--leading-relaxed); border-top: 1px solid var(--border); padding-top: var(--space-4); margin-top: 2px; }
`;
const Plus = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.6",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
}));
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = ""
}) {
  useStyles();
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["abcm-accordion", className].filter(Boolean).join(" ")
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: ["abcm-accordion__item", isOpen && "abcm-accordion__item--open"].filter(Boolean).join(" ")
    }, /*#__PURE__*/React.createElement("button", {
      className: "abcm-accordion__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      className: "abcm-accordion__icon"
    }, /*#__PURE__*/React.createElement(Plus, null))), /*#__PURE__*/React.createElement("div", {
      className: "abcm-accordion__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "abcm-accordion__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "abcm-accordion__body"
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-alert-styles";
const CSS = `
.abcm-alert {
  display: flex; gap: var(--space-4); align-items: flex-start;
  font-family: var(--font-sans); font-size: var(--text-sm); line-height: 1.5;
  padding: var(--space-5); border-radius: var(--radius-lg);
  background: var(--surface); border: 1px solid var(--border);
  box-shadow: var(--shadow-sm); position: relative; overflow: hidden;
}
.abcm-alert::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--_c, var(--accent-400)); }
.abcm-alert__icon {
  flex: none; width: 2.5em; height: 2.5em; border-radius: var(--radius-md);
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--_c, var(--accent-400)); color: #fff;
  box-shadow: 0 8px 18px color-mix(in oklch, var(--_c, var(--accent-400)) 38%, transparent);
}
.abcm-alert__icon svg { width: 1.3em; height: 1.3em; }
.abcm-alert__body { flex: 1; padding-top: 0.1em; }
.abcm-alert__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-md); margin-bottom: 0.1em; color: var(--text); }
.abcm-alert__body p { color: var(--text-muted); margin: 0; }
.abcm-alert--info    { --_c: var(--info); }
.abcm-alert--success { --_c: var(--success); }
.abcm-alert--warning { --_c: var(--warning); }
.abcm-alert--danger  { --_c: var(--danger); }
`;
const ICONS = {
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.5h.01"
  })),
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.5l2.5 2.5L16 9"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 16H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 16.5h.01"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9l-6 6M9 9l6 6"
  }))
};
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Alert({
  variant = "info",
  title,
  icon,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: ["abcm-alert", `abcm-alert--${variant}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "abcm-alert__icon"
  }, icon || ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    className: "abcm-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "abcm-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
const STYLE_ID = "abcm-tabs-styles";
const CSS = `
.abcm-tabs { font-family: var(--font-sans); }
.abcm-tabs__list { display: inline-flex; gap: 4px; padding: 5px; background: var(--surface-inset); border-radius: var(--radius-pill); }
.abcm-tabs__list--line { background: transparent; padding: 0; gap: 8px; border-bottom: 1px solid var(--border); border-radius: 0; width: 100%; }
.abcm-tab {
  appearance: none; border: none; background: transparent; cursor: pointer;
  font-family: var(--font-display); font-weight: 600; font-size: var(--text-sm); color: var(--text-muted);
  padding: 0.6em 1.1em; border-radius: var(--radius-pill); white-space: nowrap;
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out);
}
.abcm-tab:hover { color: var(--text); }
.abcm-tab--active { background: var(--surface); color: var(--text); box-shadow: var(--shadow-sm); }
.abcm-tabs__list--line .abcm-tab { border-radius: 0; padding: 0.7em 0.4em; position: relative; }
.abcm-tabs__list--line .abcm-tab--active { background: transparent; box-shadow: none; color: var(--text); }
.abcm-tabs__list--line .abcm-tab--active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 3px; background: var(--accent-400); border-radius: 3px 3px 0 0; }
.abcm-tabs__panel { padding-top: var(--space-5); }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "pill",
  className = ""
}) {
  useStyles();
  const ids = tabs.map(t => typeof t === "string" ? t : t.id);
  const [internal, setInternal] = React.useState(defaultValue ?? ids[0]);
  const active = value ?? internal;
  const select = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  const current = tabs.find(t => (typeof t === "string" ? t : t.id) === active);
  return /*#__PURE__*/React.createElement("div", {
    className: ["abcm-tabs", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: ["abcm-tabs__list", variant === "line" && "abcm-tabs__list--line"].filter(Boolean).join(" "),
    role: "tablist"
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      id: t,
      label: t
    } : t;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      role: "tab",
      "aria-selected": active === tab.id,
      className: ["abcm-tab", active === tab.id && "abcm-tab--active"].filter(Boolean).join(" "),
      onClick: () => select(tab.id)
    }, tab.label);
  })), current && typeof current !== "string" && current.content != null && /*#__PURE__*/React.createElement("div", {
    className: "abcm-tabs__panel",
    role: "tabpanel"
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-choice-styles";
const CSS = `
.abcm-choice { display: inline-flex; align-items: flex-start; gap: 0.65em; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text); cursor: pointer; line-height: 1.4; }
.abcm-choice input { position: absolute; opacity: 0; width: 0; height: 0; }
.abcm-choice__box {
  flex: none; width: 1.35em; height: 1.35em; border-radius: var(--radius-xs);
  border: var(--border-width-thick) solid var(--border-strong); background: var(--surface);
  display: inline-flex; align-items: center; justify-content: center; color: #fff;
  transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out); margin-top: 0.05em;
}
.abcm-choice__box--radio { border-radius: 50%; }
.abcm-choice__box svg { width: 0.9em; height: 0.9em; opacity: 0; transform: scale(0.6); transition: all var(--dur-base) var(--ease-spring); }
.abcm-choice__dot { width: 0.55em; height: 0.55em; border-radius: 50%; background: var(--night); opacity: 0; transform: scale(0.4); transition: all var(--dur-base) var(--ease-spring); }
.abcm-choice:hover .abcm-choice__box { border-color: var(--neutral-400); }
.abcm-choice input:focus-visible + .abcm-choice__box { box-shadow: 0 0 0 4px var(--ring); }
.abcm-choice input:checked + .abcm-choice__box { background: var(--accent-400); border-color: var(--accent-400); }
.abcm-choice input:checked + .abcm-choice__box svg { opacity: 1; transform: scale(1); }
.abcm-choice input:checked + .abcm-choice__box--radio { background: var(--accent-400); }
.abcm-choice input:checked + .abcm-choice__box--radio .abcm-choice__dot { opacity: 1; transform: scale(1); }
.abcm-choice input:disabled ~ * { opacity: 0.5; }

/* Switch */
.abcm-switch { display: inline-flex; align-items: center; gap: 0.65em; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text); cursor: pointer; }
.abcm-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.abcm-switch__track {
  width: 2.6em; height: 1.5em; border-radius: var(--radius-pill); background: var(--neutral-300);
  position: relative; transition: background var(--dur-base) var(--ease-out); flex: none;
}
.abcm-switch__thumb {
  position: absolute; top: 0.15em; left: 0.15em; width: 1.2em; height: 1.2em; border-radius: 50%;
  background: #fff; box-shadow: var(--shadow-sm); transition: transform var(--dur-base) var(--ease-spring);
}
.abcm-switch input:checked + .abcm-switch__track { background: var(--accent-400); }
.abcm-switch input:checked + .abcm-switch__track .abcm-switch__thumb { transform: translateX(1.1em); }
.abcm-switch input:focus-visible + .abcm-switch__track { box-shadow: 0 0 0 4px var(--ring); }
.abcm-switch input:disabled + .abcm-switch__track { opacity: 0.5; }
`;
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 6"
}));
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Checkbox({
  label,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["abcm-choice", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "abcm-choice__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
function Radio({
  label,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["abcm-choice", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "abcm-choice__box abcm-choice__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abcm-choice__dot"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
function Switch({
  label,
  className = "",
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["abcm-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "abcm-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abcm-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox, Radio, Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-input-styles";
const CSS = `
.abcm-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.abcm-field__label { font-size: var(--text-sm); font-weight: 600; color: var(--text); display: flex; gap: 0.35em; }
.abcm-field__req { color: var(--danger); }
.abcm-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.abcm-field__error { font-size: var(--text-xs); color: var(--danger); font-weight: 600; }
.abcm-input-wrap { position: relative; display: flex; align-items: center; }
.abcm-input-wrap__icon { position: absolute; left: 0.9em; color: var(--text-subtle); display: inline-flex; pointer-events: none; }
.abcm-input-wrap__icon svg { width: 1.15em; height: 1.15em; }
.abcm-input {
  width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text); background: var(--surface);
  border: var(--border-width-thick) solid var(--border-strong);
  border-radius: var(--radius-md); padding: 0.7em 0.9em; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.abcm-input::placeholder { color: var(--text-subtle); }
.abcm-input:hover { border-color: var(--neutral-400); }
.abcm-input:focus { outline: none; border-color: var(--accent-400); box-shadow: 0 0 0 4px var(--ring); }
.abcm-input:disabled { opacity: 0.55; cursor: not-allowed; background: var(--surface-inset); }
.abcm-input--has-icon { padding-left: 2.6em; }
.abcm-input--error { border-color: var(--danger); }
.abcm-input--error:focus { box-shadow: 0 0 0 4px var(--danger-soft); }
textarea.abcm-input { resize: vertical; min-height: 6em; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "abcm-field",
    htmlFor: htmlFor
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "abcm-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "abcm-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "abcm-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "abcm-field__hint"
  }, hint));
}
function Input({
  label,
  hint,
  error,
  required,
  icon,
  className = "",
  id,
  ...rest
}) {
  useStyles();
  const cls = ["abcm-input", icon && "abcm-input--has-icon", error && "abcm-input--error", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "abcm-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "abcm-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: cls,
    "aria-invalid": !!error
  }, rest))));
}
function Textarea({
  label,
  hint,
  error,
  required,
  className = "",
  id,
  ...rest
}) {
  useStyles();
  const cls = ["abcm-input", error && "abcm-input--error", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: cls,
    "aria-invalid": !!error
  }, rest)));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-select-styles";
const CSS = `
.abcm-select-field { display: flex; flex-direction: column; gap: var(--space-2); font-family: var(--font-sans); }
.abcm-select-field__label { font-size: var(--text-sm); font-weight: 600; color: var(--text); }
.abcm-select-wrap { position: relative; display: flex; align-items: center; }
.abcm-select {
  appearance: none; width: 100%; font-family: var(--font-sans); font-size: var(--text-base);
  color: var(--text); background: var(--surface); cursor: pointer;
  border: var(--border-width-thick) solid var(--border-strong);
  border-radius: var(--radius-md); padding: 0.7em 2.4em 0.7em 0.9em; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.abcm-select:hover { border-color: var(--neutral-400); }
.abcm-select:focus { outline: none; border-color: var(--accent-400); box-shadow: 0 0 0 4px var(--ring); }
.abcm-select:disabled { opacity: 0.55; cursor: not-allowed; background: var(--surface-inset); }
.abcm-select-wrap__chev { position: absolute; right: 0.9em; pointer-events: none; color: var(--text-muted); }
.abcm-select-wrap__chev svg { width: 1.1em; height: 1.1em; display: block; }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function Select({
  label,
  id,
  options,
  placeholder,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: "abcm-select-field",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "abcm-select-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "abcm-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: ["abcm-select", className].filter(Boolean).join(" ")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "abcm-select-wrap__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CircleMotif.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-motif-styles";
const CSS = `
.abcm-motif { display: inline-flex; align-items: center; pointer-events: none; }
.abcm-motif__c { border-radius: 50%; mix-blend-mode: screen; }
.abcm-motif--multiply .abcm-motif__c { mix-blend-mode: multiply; }
`;
const COLORS = ["var(--logo-yellow)", "var(--logo-orange)", "var(--logo-magenta)", "var(--logo-blue)", "var(--logo-green)"];
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

/** The signature 5-circle motif. `blend` defaults to "screen" (use on dark
 *  backgrounds); use "multiply" on light backgrounds. `size` is the circle
 *  diameter in px; `overlap` is the fraction circles overlap (0–0.6). */
function CircleMotif({
  size = 120,
  overlap = 0.28,
  blend = "screen",
  opacity = 0.92,
  count = 5,
  className = "",
  style,
  ...rest
}) {
  useStyles();
  const colors = COLORS.slice(0, Math.max(1, Math.min(count, 5)));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["abcm-motif", blend === "multiply" && "abcm-motif--multiply", className].filter(Boolean).join(" "),
    style: style,
    "aria-hidden": "true"
  }, rest), colors.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "abcm-motif__c",
    style: {
      width: size,
      height: size,
      background: c,
      opacity,
      marginLeft: i === 0 ? 0 : -(size * overlap)
    }
  })));
}
Object.assign(__ds_scope, { CircleMotif });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CircleMotif.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-logomark-styles";
const CSS = `
.abcm-logomark { display: inline-flex; align-items: center; gap: 0.6em; text-decoration: none; }
.abcm-logomark__mark { height: 1.9em; width: auto; display: block; flex: none; }
.abcm-logomark__word { display: flex; flex-direction: column; line-height: 1; }
.abcm-logomark__name { font-family: var(--font-display); font-weight: 700; font-size: 1.25em; letter-spacing: -0.02em; color: var(--text); }
.abcm-logomark__sub { font-family: var(--font-mono); font-size: 0.55em; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.35em; }
.on-dark .abcm-logomark__name, [data-theme="dark"] .abcm-logomark__name { color: #fff; }
.on-dark .abcm-logomark__sub, [data-theme="dark"] .abcm-logomark__sub { color: var(--accent-400); }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}

/** ABCM lockup: the 5-circle mark + wordmark. Pass `src` pointing at the
 *  logo asset (relative to the page). `markOnly` hides the wordmark. */
function LogoMark({
  src = "assets/logo-abcm-circles.png",
  markOnly = false,
  href,
  className = "",
  style,
  ...rest
}) {
  useStyles();
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: ["abcm-logomark", className].filter(Boolean).join(" "),
    style: {
      fontSize: "1rem",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    className: "abcm-logomark__mark",
    src: src,
    alt: "ABCM Performances"
  }), !markOnly && /*#__PURE__*/React.createElement("span", {
    className: "abcm-logomark__word"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abcm-logomark__name"
  }, "ABCM"), /*#__PURE__*/React.createElement("span", {
    className: "abcm-logomark__sub"
  }, "Performances")));
}
Object.assign(__ds_scope, { LogoMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoMark.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-sectionheading-styles";
const CSS = `
.abcm-sh { display: flex; flex-direction: column; gap: var(--space-3); max-width: 56ch; }
.abcm-sh--center { align-items: center; text-align: center; margin-inline: auto; }
.abcm-sh__eyebrow { display: inline-flex; align-items: center; gap: 0.65em; font-family: var(--font-mono); font-size: var(--text-2xs); letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--accent-700); font-weight: 700; }
.abcm-sh__eyebrow::before { content: ""; width: 1.9em; height: 0.42em; flex: none; border-radius: var(--radius-pill); background: linear-gradient(90deg, var(--logo-yellow), var(--logo-orange), var(--logo-magenta), var(--logo-blue)); }
.abcm-sh--center .abcm-sh__eyebrow { flex-direction: column; gap: 0.7em; }
.abcm-sh__title { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking-tight); line-height: 1.08; color: var(--text); margin: 0; font-size: var(--text-2xl); }
.abcm-sh--lg .abcm-sh__title { font-size: var(--text-3xl); }
.abcm-sh__desc { font-size: var(--text-md); line-height: var(--leading-relaxed); color: var(--text-muted); margin: 0; }
.on-dark .abcm-sh__eyebrow, [data-theme="dark"] .abcm-sh__eyebrow { color: var(--accent-400); }
`;
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  as = "h2",
  className = "",
  ...rest
}) {
  useStyles();
  const Title = as;
  const cls = ["abcm-sh", align === "center" && "abcm-sh--center", size === "lg" && "abcm-sh--lg", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "abcm-sh__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement(Title, {
    className: "abcm-sh__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "abcm-sh__desc"
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-servicecard-styles";
const CSS = `
.abcm-service {
  display: flex; flex-direction: column; gap: var(--space-4); align-items: center; text-align: center;
  background: color-mix(in oklch, var(--_hue, var(--accent-400)) 7%, var(--surface));
  border: 1.5px solid color-mix(in oklch, var(--_hue, var(--accent-400)) 16%, transparent);
  border-radius: var(--radius-2xl);
  padding: var(--space-8) var(--space-6) var(--space-6); position: relative; overflow: hidden; height: 100%;
  text-decoration: none; color: var(--text);
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.abcm-service::before { content: ""; position: absolute; top: -40%; left: 50%; transform: translateX(-50%); width: 150%; aspect-ratio: 1;
  background: radial-gradient(circle, color-mix(in oklch, var(--_hue, var(--accent-400)) 20%, transparent), transparent 62%);
  opacity: 0; transition: opacity var(--dur-slow) var(--ease-out); pointer-events: none; }
.abcm-service:hover { transform: translateY(-8px); box-shadow: 0 24px 50px color-mix(in oklch, var(--_hue, var(--accent-400)) 24%, transparent); }
.abcm-service:hover::before { opacity: 1; }
.abcm-service__icon {
  width: 4em; height: 4em; border-radius: var(--radius-xl); flex: none; position: relative;
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--surface); color: var(--_hue, var(--accent-600));
  box-shadow: var(--shadow-sm), inset 0 0 0 1.5px color-mix(in oklch, var(--_hue, var(--accent-400)) 22%, transparent);
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-spring);
}
.abcm-service:hover .abcm-service__icon { background: var(--_hue, var(--accent-400)); color: #fff; transform: rotate(-6deg) scale(1.08); }
.abcm-service__icon svg { width: 1.7em; height: 1.7em; }
.abcm-service__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); margin: 0; color: var(--text); position: relative; }
.abcm-service__desc { font-size: var(--text-sm); line-height: var(--leading-normal); color: var(--text-muted); margin: 0; flex: 1; position: relative; }
.abcm-service__link { display: inline-flex; align-items: center; gap: 0.4em; font-family: var(--font-display); font-weight: 600; font-size: var(--text-sm); color: var(--_hue, var(--accent-700)); margin-top: var(--space-1); position: relative; }
.abcm-service__link svg { width: 1.1em; height: 1.1em; transition: transform var(--dur-base) var(--ease-out); }
.abcm-service:hover .abcm-service__link svg { transform: translateX(4px); }
`;
const HUES = {
  yellow: "var(--logo-yellow)",
  orange: "var(--logo-orange)",
  magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)",
  green: "var(--logo-green)",
  accent: "var(--accent-500)"
};
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function ServiceCard({
  icon,
  title,
  description,
  href,
  linkLabel = "En savoir plus",
  hue = "accent",
  className = "",
  style,
  ...rest
}) {
  useStyles();
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: ["abcm-service", className].filter(Boolean).join(" "),
    style: {
      "--_hue": HUES[hue] || hue,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "abcm-service__icon"
  }, icon), /*#__PURE__*/React.createElement("h3", {
    className: "abcm-service__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "abcm-service__desc"
  }, description), href && /*#__PURE__*/React.createElement("span", {
    className: "abcm-service__link"
  }, linkLabel, " ", /*#__PURE__*/React.createElement(Arrow, null)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = "abcm-statcard-styles";
const CSS = `
.abcm-stat { display: flex; flex-direction: column; gap: var(--space-1); }
.abcm-stat__value { font-family: var(--font-display); font-weight: 700; letter-spacing: var(--tracking-tight); line-height: 1; font-size: var(--text-3xl); color: var(--text); display: flex; align-items: baseline; gap: 0.08em; }
.abcm-stat__suffix { color: var(--accent-500); }
.abcm-stat__label { font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-muted); }
.on-dark .abcm-stat__value, [data-theme="dark"] .abcm-stat__value { color: #fff; }
.on-dark .abcm-stat__suffix, [data-theme="dark"] .abcm-stat__suffix { color: var(--accent-400); }
`;
const HUES = {
  yellow: "var(--logo-yellow)",
  orange: "var(--logo-orange)",
  magenta: "var(--logo-magenta)",
  blue: "var(--logo-blue)",
  green: "var(--logo-green)",
  accent: "var(--accent-500)"
};
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function StatCard({
  value,
  prefix,
  suffix,
  label,
  hue,
  className = "",
  style,
  ...rest
}) {
  useStyles();
  const tint = hue ? HUES[hue] || hue : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["abcm-stat", className].filter(Boolean).join(" "),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "abcm-stat__value",
    style: tint ? {
      color: tint
    } : undefined
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "abcm-stat__suffix",
    style: tint ? {
      color: tint
    } : undefined
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "abcm-stat__suffix",
    style: tint ? {
      color: tint
    } : undefined
  }, suffix)), label && /*#__PURE__*/React.createElement("span", {
    className: "abcm-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const Star = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.8 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z"
}));
function useStyles() {
  React.useEffect(() => {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    const el = document.createElement("style");
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
}
function TestimonialCard({
  quote,
  author,
  source,
  avatar,
  rating = 5,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const NS = typeof window !== "undefined" && window.ABCMPerformancesDesignSystem_d992a8 || {};
  const Avatar = NS.Avatar;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["abcm-testi", className].filter(Boolean).join(" ")
  }, rest), rating > 0 && /*#__PURE__*/React.createElement("span", {
    className: "abcm-testi__stars"
  }, Array.from({
    length: rating
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i
  }))), /*#__PURE__*/React.createElement("p", {
    className: "abcm-testi__quote"
  }, quote || children), /*#__PURE__*/React.createElement("div", {
    className: "abcm-testi__foot"
  }, Avatar ? /*#__PURE__*/React.createElement(Avatar, {
    name: author,
    src: avatar,
    hue: true
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "abcm-testi__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abcm-testi__name"
  }, author), source && /*#__PURE__*/React.createElement("span", {
    className: "abcm-testi__source"
  }, source))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/blog.jsx
try { (() => {
// ABCM blog — list + article views.
const B = window.ABCMPerformancesDesignSystem_d992a8;
const POSTS = [{
  id: "marketing-2026",
  cat: "Stratégie",
  hue: "magenta",
  icon: "trending-up",
  date: "11 Mai 2026",
  read: 7,
  title: "Marketing digital : ce qui va vraiment compter pour le reste de 2026",
  excerpt: "Le marketing de 2026 ressemble à une course où les règles changent en pleine ligne droite. Tour d'horizon des leviers qui font la différence.",
  featured: true
}, {
  id: "no-code",
  cat: "No Code",
  hue: "blue",
  icon: "blocks",
  date: "11 Mai 2026",
  read: 6,
  title: "Le No Code en 2026",
  excerpt: "Créer sans coder, une révolution accessible à tous. Le No Code a profondément transformé la manière de lancer un produit."
}, {
  id: "woocommerce",
  cat: "E-commerce",
  hue: "green",
  icon: "shopping-cart",
  date: "11 Mai 2026",
  read: 9,
  title: "WooCommerce en 2026",
  excerpt: "Flexible, open-source et puissant : WooCommerce reste l'une des solutions e-commerce les plus utilisées au monde."
}, {
  id: "claude-ai",
  cat: "IA",
  hue: "orange",
  icon: "sparkles",
  date: "11 Mai 2026",
  read: 12,
  title: "Claude.ai en 2026 : le guide complet de l'IA qui redéfinit le travail",
  excerpt: "D'un simple chatbot à un véritable collaborateur, Claude a transformé notre rapport au travail. Décryptage."
}, {
  id: "formation-marketing",
  cat: "Formation",
  hue: "yellow",
  icon: "graduation-cap",
  date: "25 Mar 2026",
  read: 5,
  title: "Former vos équipes aux enjeux marketing de demain",
  excerpt: "IA, automatisation, explosion des canaux : le marketing évolue à une vitesse sans précédent. La formation devient stratégique."
}, {
  id: "overdose-ia",
  cat: "IA",
  hue: "orange",
  icon: "brain",
  date: "09 Fév 2026",
  read: 8,
  title: "Une overdose des consommateurs face à l'IA ?",
  excerpt: "L'IA utile… mais sous tension. Entre fascination et fatigue, comment garder une communication authentique."
}];
function BlogHeader({
  onNav
}) {
  const {
    LogoMark,
    Button
  } = B;
  return /*#__PURE__*/React.createElement("header", {
    className: "blog-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container blog-header__inner"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    src: "../../assets/logo-abcm-circles.png",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("list");
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "blog-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Expertises"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("list");
    },
    className: "is-active"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Contact")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "D\xE9marrer un projet")));
}
function Thumb({
  post,
  big
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "thumb thumb--" + post.hue + (big ? " thumb--big" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "thumb__motif"
  }, /*#__PURE__*/React.createElement(B.CircleMotif, {
    size: big ? 180 : 120,
    opacity: 0.9
  })), /*#__PURE__*/React.createElement(Icon, {
    name: post.icon,
    size: big ? 48 : 34
  }));
}
function BlogList({
  onNav
}) {
  const {
    SectionHeading,
    Tag,
    Badge
  } = B;
  const cats = ["Tous", "Stratégie", "IA", "E-commerce", "No Code", "Formation"];
  const [cat, setCat] = React.useState("Tous");
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured && (cat === "Tous" || p.cat === cat));
  return /*#__PURE__*/React.createElement("main", {
    className: "blog-scroll"
  }, /*#__PURE__*/React.createElement(BlogHeader, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("section", {
    className: "blog-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Le blog ABCM",
    size: "lg",
    title: "Tendances, guides & coulisses du digital",
    description: "Nos analyses sur le marketing, le web, le SEO et l'intelligence artificielle."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, featured && cat === "Tous" && /*#__PURE__*/React.createElement("article", {
    className: "feature",
    onClick: () => onNav("article", featured)
  }, /*#__PURE__*/React.createElement(Thumb, {
    post: featured,
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "feature__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature__meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    solid: true
  }, "\xC0 la une"), /*#__PURE__*/React.createElement(Tag, {
    hue: featured.hue
  }, featured.cat)), /*#__PURE__*/React.createElement("h2", null, featured.title), /*#__PURE__*/React.createElement("p", null, featured.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "feature__date"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 15
  }), " ", featured.date, " \xB7 ", featured.read, " min de lecture"))), /*#__PURE__*/React.createElement("div", {
    className: "blog-filters"
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "post-grid"
  }, rest.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.id,
    className: "post-card",
    onClick: () => onNav("article", p)
  }, /*#__PURE__*/React.createElement(Thumb, {
    post: p
  }), /*#__PURE__*/React.createElement("div", {
    className: "post-card__body"
  }, /*#__PURE__*/React.createElement(Tag, {
    hue: p.hue
  }, p.cat), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.excerpt), /*#__PURE__*/React.createElement("span", {
    className: "post-card__date"
  }, p.date, " \xB7 ", p.read, " min")))))), /*#__PURE__*/React.createElement(BlogFooter, null));
}
function Article({
  post,
  onNav
}) {
  const {
    Tag,
    Badge,
    Button,
    Avatar
  } = B;
  const p = post || POSTS[0];
  return /*#__PURE__*/React.createElement("main", {
    className: "blog-scroll"
  }, /*#__PURE__*/React.createElement(BlogHeader, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("article", {
    className: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container article__head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "svc__back",
    onClick: () => onNav("list")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Tous les articles"), /*#__PURE__*/React.createElement("div", {
    className: "article__tags"
  }, /*#__PURE__*/React.createElement(Tag, {
    hue: p.hue
  }, p.cat)), /*#__PURE__*/React.createElement("h1", null, p.title), /*#__PURE__*/React.createElement("div", {
    className: "article__byline"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "ABCM Performances",
    hue: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "\xC9quipe ABCM"), /*#__PURE__*/React.createElement("span", null, p.date, " \xB7 ", p.read, " min de lecture")))), /*#__PURE__*/React.createElement("div", {
    className: "container article__hero"
  }, /*#__PURE__*/React.createElement(Thumb, {
    post: p,
    big: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "article__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "article__lead"
  }, p.excerpt), /*#__PURE__*/React.createElement("h2", null, "Introduction"), /*#__PURE__*/React.createElement("p", null, "Le digital ne cesse d'acc\xE9l\xE9rer. Entre l'essor de l'intelligence artificielle, l'automatisation des process et la multiplication des canaux, les entreprises doivent sans cesse r\xE9ajuster leur strat\xE9gie pour rester visibles et pertinentes."), /*#__PURE__*/React.createElement("p", null, "Chez ABCM, nous accompagnons nos clients depuis 2015 avec une conviction simple : une bonne strat\xE9gie digitale n'est pas une affaire de mode, mais de coh\xE9rence. Voici notre lecture des tendances et, surtout, des actions concr\xE8tes \xE0 mettre en place."), /*#__PURE__*/React.createElement("h2", null, "Ce qui change vraiment"), /*#__PURE__*/React.createElement("p", null, "Les fondamentaux restent : un site rapide, un contenu utile et une pr\xE9sence r\xE9guli\xE8re sur les bons r\xE9seaux. Ce qui \xE9volue, c'est la mani\xE8re de les orchestrer, et le r\xF4le croissant de l'IA dans la production et la diffusion de contenu."), /*#__PURE__*/React.createElement("blockquote", null, "\xAB La technologie change vite ; l'attention de votre audience, elle, se m\xE9rite toujours de la m\xEAme fa\xE7on : avec de la valeur. \xBB"), /*#__PURE__*/React.createElement("h2", null, "Notre recommandation"), /*#__PURE__*/React.createElement("p", null, "Commencez par auditer l'existant, fixez deux ou trois objectifs mesurables, puis d\xE9ployez par it\xE9rations. C'est exactement la m\xE9thode que nous appliquons sur chaque projet, sans jargon, avec des r\xE9sultats.")), /*#__PURE__*/React.createElement("div", {
    className: "container article__cta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    solid: true
  }, "Un projet en t\xEAte ?"), /*#__PURE__*/React.createElement("h3", null, "Parlons-en autour d'un caf\xE9."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Contacter l'\xE9quipe"))), /*#__PURE__*/React.createElement(BlogFooter, null));
}
function BlogFooter() {
  const {
    LogoMark
  } = B;
  return /*#__PURE__*/React.createElement("footer", {
    className: "blog-footer on-dark",
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container blog-footer__inner"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    src: "../../assets/logo-abcm-circles.png"
  }), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ABCM Performances \xB7 Strasbourg")));
}
function BlogApp() {
  const [route, setRoute] = React.useState({
    name: "list",
    data: null
  });
  const ref = React.useRef(null);
  const onNav = (name, data) => {
    setRoute({
      name,
      data
    });
    setTimeout(() => ref.current && ref.current.scrollTo({
      top: 0
    }), 10);
  };
  React.useEffect(() => {
    ref.current = document.querySelector(".blog-scroll");
  }, [route]);
  return route.name === "article" ? /*#__PURE__*/React.createElement(Article, {
    post: route.data,
    onNav: onNav
  }) : /*#__PURE__*/React.createElement(BlogList, {
    onNav: onNav
  });
}

// Exposed for the inline bootstrap in index.html (this file is bundled, so it
// must NOT call render() at module level).
window.BlogApp = BlogApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.jsx
try { (() => {
// App shell — routes between the homepage, a service detail page and contact.
function App() {
  const [route, setRoute] = React.useState({
    name: "home",
    data: null
  });
  const scrollRef = React.useRef(null);
  const onNav = (name, data) => {
    if (name === "home" && typeof data === "string") {
      // anchor scroll within the homepage
      if (route.name !== "home") setRoute({
        name: "home",
        data: null
      });
      setTimeout(() => {
        const el = document.querySelector(data);
        const sc = scrollRef.current;
        if (el && sc) sc.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth"
        });
      }, route.name !== "home" ? 60 : 0);
      return;
    }
    if (name === "service") {
      setRoute({
        name: "service",
        data
      });
      scrollTop();
      return;
    }
    if (name === "contact") {
      if (route.name !== "home") {
        setRoute({
          name: "home",
          data: null
        });
      }
      setTimeout(() => {
        const el = document.querySelector("#contact");
        const sc = scrollRef.current;
        if (el && sc) sc.scrollTo({
          top: el.offsetTop - 60,
          behavior: "smooth"
        });
      }, route.name !== "home" ? 80 : 0);
      return;
    }
    setRoute({
      name: "home",
      data: null
    });
    scrollTop();
  };
  const scrollTop = () => setTimeout(() => scrollRef.current && scrollRef.current.scrollTo({
    top: 0
  }), 10);
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll",
    ref: scrollRef
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: onNav
  }), route.name === "service" ? /*#__PURE__*/React.createElement(ServiceDetail, {
    service: route.data,
    onNav: onNav
  }) : /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(Services, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Contact, {
    onNav: onNav
  })), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}

// Exposed for the inline bootstrap in index.html (this file is bundled, so it
// must NOT call render() at module level).
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/icons.jsx
try { (() => {
// Shared icon wrapper for the ABCM UI kits — renders Lucide stroke icons.
// Lucide is loaded via CDN in index.html (window.lucide).
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  className = "",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth
      },
      nameAttr: "data-lucide"
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "abcm-ic " + className,
    style: {
      display: "inline-flex",
      lineHeight: 0,
      ...style
    }
  });
}

// Service data shared across screens (mirrors abcmperformances.com offering).
const ABCM_SERVICES = [{
  hue: "blue",
  icon: "monitor",
  title: "Création de site web",
  desc: "Sites vitrines, e-commerce et one-page, pensés pour convertir.",
  slug: "site-web"
}, {
  hue: "magenta",
  icon: "megaphone",
  title: "Community Management",
  desc: "Ligne éditoriale, contenus et gestion de vos réseaux sociaux.",
  slug: "community"
}, {
  hue: "green",
  icon: "search",
  title: "Référencement SEO",
  desc: "Remontez sur Google grâce à une stratégie SEO durable.",
  slug: "seo"
}, {
  hue: "orange",
  icon: "sparkles",
  title: "Référencement GEO (IA)",
  desc: "Soyez visible sur les moteurs d'IA. Prenez une longueur d'avance.",
  slug: "geo"
}, {
  hue: "yellow",
  icon: "target",
  title: "Google Ads",
  desc: "Campagnes SEA, Display & Shopping qui boostent votre visibilité.",
  slug: "ads"
}, {
  hue: "blue",
  icon: "user-round",
  title: "Personal Branding",
  desc: "Positionnement, ciblage et diffusion de contenus sur-mesure.",
  slug: "branding"
}, {
  hue: "magenta",
  icon: "line-chart",
  title: "Stratégie digitale",
  desc: "Audit, accompagnement et suivi de votre stratégie en ligne.",
  slug: "strategie"
}, {
  hue: "green",
  icon: "graduation-cap",
  title: "Formations",
  desc: "Montez en compétences sur le digital et l'IA avec nos experts.",
  slug: "formations"
}];
const ABCM_NAV = [{
  label: "Expertises",
  href: "#services"
}, {
  label: "Consulting",
  href: "#strategie"
}, {
  label: "Références",
  href: "#references"
}, {
  label: "Blog",
  href: "#blog"
}, {
  label: "Contact",
  href: "#contact"
}];
Object.assign(window, {
  Icon,
  ABCM_SERVICES,
  ABCM_NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections-bottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Clients, Testimonials, FAQ, Contact, Footer — ABCM marketing kit.
const DS = window.ABCMPerformancesDesignSystem_d992a8;
function Clients() {
  const names = ["Würth", "bioMérieux", "Caisse d'Épargne", "AFI", "CRCC", "Welch & Kessler", "Fortal", "Adis"];
  return /*#__PURE__*/React.createElement("section", {
    className: "clients"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "clients__label"
  }, "Ils nous font confiance"), /*#__PURE__*/React.createElement("div", {
    className: "clients__row"
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "clients__logo"
  }, n)))));
}
function Testimonials() {
  const {
    SectionHeading,
    TestimonialCard
  } = DS;
  const items = [{
    author: "Kevin Kanel",
    source: "Google · Avis vérifié",
    quote: "Professionnalisme & réactivité. Nous avons fait appel à ABCM pour notre site internet et nous sommes extrêmement satisfaits du résultat."
  }, {
    author: "Yann Vignaud",
    source: "Google · Avis vérifié",
    quote: "Superbe prestation. ABCM a su m'accompagner pour la création du site web, et il y avait beaucoup à faire…"
  }, {
    author: "Hélène Voisin",
    source: "Google · Avis vérifié",
    quote: "Créativité & efficacité. Totale satisfaction pour la réalisation de notre site, de notre logo et de nos cartes de visite."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "references"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Avis clients",
    title: "On prend soin de vous",
    description: "Une attention de tous les instants : chez nous, vous \xEAtes chouchout\xE9."
  }), /*#__PURE__*/React.createElement("div", {
    className: "testi__grid"
  }, items.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.author
  }, t))))));
}
function FAQ() {
  const {
    SectionHeading,
    Accordion
  } = DS;
  const items = [{
    title: "Combien coûte la création d'un site internet ?",
    content: "Chaque projet est sur-mesure. Après un échange (autour d'un café !), nous établissons un devis clair selon vos besoins — du site vitrine au e-commerce."
  }, {
    title: "Quels sont les délais de réalisation ?",
    content: "Comptez en général 4 à 8 semaines entre le lancement et la mise en ligne, selon l'ampleur du projet et la réactivité des échanges."
  }, {
    title: "Proposez-vous un suivi après la livraison ?",
    content: "Oui. Maintenance, mises à jour, hébergement dédié et accompagnement marketing : nous restons votre partenaire sur la durée."
  }, {
    title: "Travaillez-vous avec des clients hors de Strasbourg ?",
    content: "Bien sûr. Nous sommes ancrés à Strasbourg mais accompagnons des clients partout en France, en présentiel comme à distance."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container faq"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Questions fr\xE9quentes",
    title: "Tout ce que vous vous demandez"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: items
  })));
}
function Contact({
  onNav
}) {
  const {
    SectionHeading,
    Input,
    Textarea,
    Select,
    Checkbox,
    Button,
    Alert
  } = DS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--contact on-dark",
    "data-theme": "dark",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__info"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    size: "lg",
    title: "Vous avez un projet ?",
    description: "Notre \xE9quipe vous r\xE9pond rapidement avec une offre adapt\xE9e. Passez nous voir autour d'un caf\xE9."
  }), /*#__PURE__*/React.createElement("ul", {
    className: "contact__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), " 06 33 07 28 53"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " info@abcmperformances.com"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  }), " Strasbourg, France")), /*#__PURE__*/React.createElement("div", {
    className: "contact__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "youtube",
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    className: "contact__form"
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    title: "Message envoy\xE9 !"
  }, "Merci, notre \xE9quipe vous recontacte sous 24h ouvr\xE9es.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Pr\xE9nom",
    placeholder: "Caroline",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nom",
    placeholder: "Meyer",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "vous@entreprise.fr",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Votre besoin",
    placeholder: "Choisir un service\u2026",
    options: window.ABCM_SERVICES.map(s => s.title)
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Votre projet",
    rows: 3,
    placeholder: "D\xE9crivez vos besoins en quelques lignes\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "J'accepte d'\xEAtre recontact\xE9 au sujet de ma demande.",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, "Envoyer ma demande")))));
}
function Footer({
  onNav
}) {
  const {
    LogoMark
  } = DS;
  const cols = [{
    h: "Expertises",
    links: ["Site internet", "Stratégie digitale", "Community Management", "Référencement SEO", "Google Ads"]
  }, {
    h: "Consulting",
    links: ["Marketing digital", "Marketing externalisé", "Marque employeur", "Formations"]
  }, {
    h: "Agence",
    links: ["Références", "Blog", "Contact", "Mentions légales"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer on-dark",
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container site-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__brand"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    src: "../../assets/logo-abcm-circles.png"
  }), /*#__PURE__*/React.createElement("p", null, "Agence de communication & marketing digital \xE0 Strasbourg. Depuis 2015."), /*#__PURE__*/React.createElement("div", {
    className: "contact__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "youtube",
    size: 20
  })))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "site-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault()
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "container site-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ABCM Performances"), /*#__PURE__*/React.createElement("span", null, "Strasbourg \xB7 France")));
}
Object.assign(window, {
  Clients,
  Testimonials,
  FAQ,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections-top.jsx
try { (() => {
// Header, Hero, Services, Stats — ABCM marketing kit.
const {
  Button,
  LogoMark,
  ServiceCard,
  StatCard,
  SectionHeading,
  Badge,
  CircleMotif,
  Tag
} = window.ABCMPerformancesDesignSystem_d992a8;
function Header({
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector(".kit-scroll");
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    (el || window).addEventListener("scroll", onScroll);
    return () => (el || window).removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header" + (scrolled ? " is-stuck" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "container site-header__inner"
  }, /*#__PURE__*/React.createElement(LogoMark, {
    src: "../../assets/logo-abcm-circles.png",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav"
  }, window.ABCM_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    className: "site-nav__link",
    onClick: e => {
      e.preventDefault();
      onNav(n.label === "Contact" ? "contact" : "home", n.href);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "site-header__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onNav("contact")
  }, "D\xE9marrer un projet")), /*#__PURE__*/React.createElement("button", {
    className: "site-header__burger",
    "aria-label": "Menu",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 24
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "site-menu"
  }, window.ABCM_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    onClick: () => {
      setOpen(false);
      onNav(n.label === "Contact" ? "contact" : "home");
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: () => {
      setOpen(false);
      onNav("contact");
    }
  }, "D\xE9marrer un projet")));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero on-dark",
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__motif"
  }, /*#__PURE__*/React.createElement(CircleMotif, {
    size: 260,
    overlap: 0.3,
    opacity: 0.85
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    solid: true,
    dot: true
  }, "Agence \xE0 Strasbourg \xB7 depuis 2015"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Boostez votre ", /*#__PURE__*/React.createElement("span", {
    className: "hero__hl text-gradient"
  }, "visibilit\xE9"), " sur le web & les r\xE9seaux"), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "Agence de communication & marketing digital. Une \xE9quipe \xE0 taille humaine qui con\xE7oit, d\xE9ploie et pilote votre pr\xE9sence en ligne, du site web au r\xE9f\xE9rencement."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav("contact")
  }, "Parler de mon projet"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav("home", "#services")
  }, "Voir nos expertises")), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, /*#__PURE__*/React.createElement(StatCard, {
    prefix: "+",
    value: "150",
    label: "projets livr\xE9s",
    hue: "yellow"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "9",
    label: "experts d\xE9di\xE9s",
    hue: "magenta"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "4,9",
    suffix: "/5",
    label: "avis Google",
    hue: "green"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "360\xB0",
    label: "accompagnement",
    hue: "blue"
  }))));
}
function Services({
  onNav
}) {
  const cats = ["Tout", "Web", "Réseaux", "Référencement", "Conseil"];
  const [active, setActive] = React.useState("Tout");
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    size: "lg",
    eyebrow: "Nos expertises",
    title: "Une approche 360\xB0 de votre communication",
    description: "Nos services couvrent tous les aspects de la communication digitale. Choisissez votre terrain de jeu."
  }), /*#__PURE__*/React.createElement("div", {
    className: "services__filters"
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    active: active === c,
    onClick: () => setActive(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "services__grid"
  }, window.ABCM_SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.slug,
    hue: s.hue,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 26
    }),
    title: s.title,
    description: s.desc,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("service", s);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "svc-banner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Un besoin sur-mesure\xA0?"), /*#__PURE__*/React.createElement("p", null, "On construit l'accompagnement qui colle \xE0 vos objectifs.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav("contact")
  }, "Parler \xE0 un expert"))));
}
Object.assign(window, {
  Header,
  Hero,
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections-top.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/servicedetail.jsx
try { (() => {
// Service detail screen — shown when a service card is opened.
const SD = window.ABCMPerformancesDesignSystem_d992a8;
function ServiceDetail({
  service,
  onNav
}) {
  const {
    Button,
    Badge,
    SectionHeading,
    Card,
    Tag,
    CircleMotif
  } = SD;
  const s = service || window.ABCM_SERVICES[0];
  const points = {
    "site-web": ["Audit & cahier des charges", "Design sur-mesure", "Développement responsive", "SEO technique intégré", "Formation à l'autonomie"],
    "community": ["Ligne éditoriale", "Calendrier de publication", "Création de contenus", "Community management", "Reporting mensuel"],
    "seo": ["Audit SEO complet", "Recherche de mots-clés", "Optimisation on-page", "Netlinking", "Suivi de positions"]
  }[s.slug] || ["Audit de l'existant", "Stratégie sur-mesure", "Déploiement opérationnel", "Suivi & reporting", "Optimisation continue"];
  return /*#__PURE__*/React.createElement("div", {
    className: "svc"
  }, /*#__PURE__*/React.createElement("section", {
    className: "svc__hero on-dark",
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__motif"
  }, /*#__PURE__*/React.createElement(CircleMotif, {
    size: 220,
    opacity: 0.8
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "svc__back",
    onClick: () => onNav("home", "#services")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Toutes les expertises"), /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    solid: true
  }, s.title), /*#__PURE__*/React.createElement("h1", {
    className: "svc__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, s.desc, " Une prestation pilot\xE9e par nos experts, du premier \xE9change jusqu'aux r\xE9sultats."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav("contact")
  }, "Demander un devis"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container svc__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notre m\xE9thode",
    title: "Comment on proc\xE8de"
  }), /*#__PURE__*/React.createElement("ol", {
    className: "svc__steps"
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, p))))), /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    accent: true,
    padding: "lg",
    className: "svc__aside"
  }, /*#__PURE__*/React.createElement("h3", null, "Pourquoi ABCM ?"), /*#__PURE__*/React.createElement("ul", {
    className: "svc__checks"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  }), " \xC9quipe \xE0 taille humaine"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  }), " R\xE9activit\xE9 & efficacit\xE9"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  }), " Approche 360\xB0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  }), " Accompagnement depuis 2015")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    onClick: () => onNav("contact")
  }, "Parler \xE0 un expert"), /*#__PURE__*/React.createElement("p", {
    className: "svc__related"
  }, "Autres expertises\xA0:"), /*#__PURE__*/React.createElement("div", {
    className: "svc__tags"
  }, window.ABCM_SERVICES.filter(x => x.slug !== s.slug).slice(0, 4).map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x.slug,
    hue: x.hue,
    onClick: () => onNav("service", x)
  }, x.title)))))));
}
window.ServiceDetail = ServiceDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/servicedetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.CircleMotif = __ds_scope.CircleMotif;

__ds_ns.LogoMark = __ds_scope.LogoMark;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
