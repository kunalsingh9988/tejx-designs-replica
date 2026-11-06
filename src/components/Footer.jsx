import { Link } from "react-router-dom";
import { Pill, Btn, Reveal, SocialIcon } from "./ui.jsx";

export function Cta() {
  return (
    <section className="section" id="connect" style={{ paddingBottom: 0 }}>
      <div className="shell">
        <Reveal className="cta-card">
          <div className="cta-left">
            <Pill>Let's Connect</Pill>
            <h2 className="h2">
              Let's Grow <span className="dim">Together</span>
            </h2>
            <Btn to="/projects">See All Projects</Btn>
          </div>
          <div className="cta-logo-card">
            <img src="/assets/cta-banner.jpg" alt="TEJ X" />
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

const socials = [
  { icon: "linkedin", href: "https://www.linkedin.com/in/mani-teja-pithani-934618225/", label: "LinkedIn" },
  { icon: "instagram", href: "https://www.instagram.com/_maniteja_pithani_/", label: "Instagram" },
  { icon: "behance", href: "https://www.behance.net/manitejapithani1", label: "Behance" },
];

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="foot-top">
          <img src="/assets/tejx-logo-footer.png" alt="TEJ X" />
          <div className="foot-socials">
            {socials.map((s) => (
              <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <SocialIcon name={s.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
        <nav className="foot-links" aria-label="Footer">
          {footLinks.map((l) => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <div className="foot-bottom">
          <span>© 2026 TEJXDESIGNS</span>
          <a href="https://tejxdesigns.com" target="_blank" rel="noreferrer">Made by Mani teja</a>
        </div>
      </div>
    </footer>
  );
}
