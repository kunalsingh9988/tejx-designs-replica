import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "./ui.jsx";

const links = [
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Collaborations", to: "/#testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();

  const go = (e, to) => {
    setOpen(false);
    if (!to.startsWith("/#")) return;
    e.preventDefault();
    const id = to.slice(2);
    if (loc.pathname !== "/") {
      nav("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (to) => (to === "/projects" || to === "/contact" ? loc.pathname === to : false);

  return (
    <div className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <Link to="/" className="nav-logo" aria-label="TEJ X home" onClick={() => setOpen(false)}>
          <img src="/assets/nav-logo.png" alt="TEJ X" />
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={(e) => go(e, l.to)} className={isActive(l.to) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>
        <button className="nav-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? (
            <Icon name="x" size={20} />
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
        <div className={`nav-mobile ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={(e) => go(e, l.to)} className={isActive(l.to) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
