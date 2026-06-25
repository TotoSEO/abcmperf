import {
  ArrowRight, ArrowLeft, Menu, X, Monitor, Megaphone, Search, Sparkles,
  Target, UserRound, LineChart, GraduationCap, Phone, Mail, MapPin, Send,
  Check, ChevronDown, Clock, ShieldCheck, Users, Sparkle, Star,
} from "lucide-react";

/* lucide-react 1.x removed brand glyphs — inline the social ones we need. */
function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function Youtube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const MAP = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  menu: Menu,
  x: X,
  monitor: Monitor,
  megaphone: Megaphone,
  search: Search,
  sparkles: Sparkles,
  sparkle: Sparkle,
  target: Target,
  "user-round": UserRound,
  "line-chart": LineChart,
  "graduation-cap": GraduationCap,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  send: Send,
  check: Check,
  "chevron-down": ChevronDown,
  clock: Clock,
  "shield-check": ShieldCheck,
  users: Users,
  star: Star,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Icon({ name, size = 20, strokeWidth = 2, className = "", style }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return (
    <span className={"abcm-ic " + className} style={{ display: "inline-flex", lineHeight: 0, ...style }}>
      <Cmp width={size} height={size} strokeWidth={strokeWidth} />
    </span>
  );
}
