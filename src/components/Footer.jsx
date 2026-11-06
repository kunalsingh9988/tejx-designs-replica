import { Link } from "react-router-dom";
import { Pill, Btn, Reveal, SocialIcon } from "./ui.jsx";
import { footSocials } from "../data.js";

export function Cta() {
  return (
    <section className="panel section-pad" id="connect">
      <div className="shell">
        <Reveal className="cta-card">
          <div className="cta-left">
            <Pill>Let's Connect</Pill>
            <h2 className="h2" style={{ marginTop: 22 }}>
              Let's Grow <span className="dim">Together</span>
            </h2>
            <Btn to="/projects" style={{ marginTop: 34 }}>See All Projects</Btn>
          </div>
          <div className="cta-logo-card">
            <img src="/assets/cta-logo.png" alt="TEJ X" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const footLinks = [
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Profile", to: "/#profile" },
  { label: "Collaborations", to: "/#testimonials" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <Link to="/" className="foot-logo" aria-label="TEJ X home">
          <img src="/assets/nav-logo.png" alt="TEJ X" />
        </Link>
        <nav className="foot-links" aria-label="Footer">
          {footLinks.map((l) => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <div className="foot-socials">
          {footSocials.map((s) => (
            <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <SocialIcon name={s.icon} size={18} />
            </a>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 TEJXDESIGNS</span>
          <a className="made" href="https://tejxdesigns.com" target="_blank" rel="noreferrer">Made by Mani teja</a>
        </div>
      </div>
    </footer>
  );
}
