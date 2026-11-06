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
            <div className="cta-wordmark">
              <span className="k"><img src="/assets/logo-k.png" alt="" /></span>
              <b>KUNAL</b>
            </div>
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
  { label: "Resume", href: "/assets/resume.pdf" },
];

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <Link to="/" className="foot-logo" aria-label="Kunal Singh home">
          <span className="k"><img src="/assets/logo-k.png" alt="" /></span>
          <span className="wordmark">KUNAL</span>
        </Link>
        <nav className="foot-links" aria-label="Footer">
          {footLinks.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ) : (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            )
          )}
        </nav>
        <div className="foot-socials">
          {footSocials.map((s) => (
            <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <SocialIcon name={s.icon} size={18} />
            </a>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2025 Kunal Singh</span>
          <a className="made" href="https://www.linkedin.com/in/kunal-singh-2724571b2/" target="_blank" rel="noreferrer">Made by Kunal</a>
        </div>
      </div>
    </footer>
  );
}
