import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Icon, SocialIcon, Pill, Btn, Reveal } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import {
  projects, steps, services, tagRows, whyPairs, brands, faqs, skills, marqueeImages,
} from "../data.js";

/* ================= HERO ================= */

function CursorGlyph({ className }) {
  return (
    <svg className={`cursor ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 2l8.4 18.4 2.1-7.9L21 10.4 3 2z" fill="#0a0a0a" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

function Hero() {
  const cards = [projects[0], projects[3], projects[1], projects[2]];
  return (
    <header className="hero" id="hero-section">
      <div className="hero-media">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-quotes" aria-hidden="true">
        <div className="quote-card q1">
          " Working with him was a game changer! "
          <span className="who">-Senthil</span>
        </div>
        <div className="quote-card q2">
          " We Increased our conversions by 200%"
          <span className="who">-vijaynb</span>
        </div>
        <CursorGlyph className="c1" />
        <CursorGlyph className="c2" />
      </div>
      <div className="shell hero-inner">
        <Reveal>
          <Pill>UI/UX &amp; Graphic Designer</Pill>
        </Reveal>
        <div className="hero-title-row">
          <Reveal delay={90}>
            <h1>
              Mani Teja <span className="dim">Pithani</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/projects" className="hero-arrow" aria-label="Go to projects">
              <Icon name="arrow" size={26} sw={1.6} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={260}>
          <p className="hero-sub">
            A designer who blends creativity with strategy to craft intuitive
            user experiences and compelling brand visuals.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <Btn to="/projects">See All Projects</Btn>
        </Reveal>
        <div className="hero-grid">
          {cards.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Link to="/projects" className="pcard" style={{ display: "block" }}>
                <div className="pcard-img" style={{ aspectRatio: i < 2 ? "564/283" : "562/345" }}>
                  <img src={p.img} alt={p.title} loading={i < 2 ? "eager" : "lazy"} />
                </div>
                <span className="go"><Icon name="arrow" size={22} sw={1.7} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ================= ABOUT ================= */

const aboutSocials = [
  { icon: "x", href: "https://x.com/home", label: "X" },
  { icon: "instagram", href: "https://www.instagram.com/", label: "Instagram" },
  { icon: "dribbble", href: "https://dribbble.com/", label: "Dribbble" },
];

function About() {
  return (
    <section className="section" id="profile" style={{ background: "var(--bg-2)" }}>
      <div className="shell">
        <Reveal className="kicker"><Pill>Expert Designer</Pill></Reveal>
        <Reveal delay={80}><h2 className="h2">Mani Teja Pithani, <span className="dim">Your Designer</span></h2></Reveal>
        <Reveal delay={150}><p className="sub">Brief initial presentation of myself and my previous experiences.</p></Reveal>
        <div className="about-grid">
          <Reveal className="card about-photo">
            <div className="img"><img src="/assets/portrait.jpg" alt="Mani Teja Pithani" loading="lazy" /></div>
            <div className="about-id">
              <span className="avail"><span className="gdot" />Available for work</span>
              <h4 style={{ marginTop: 12 }}>Hello I am Mani teja Pithani</h4>
              <p>UI/UX &amp; Graphic Designer Based in Hyderabad.</p>
              <div className="about-socials">
                {aboutSocials.map((s) => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <SocialIcon name={s.icon} size={17} />
                  </a>
                ))}
              </div>
              <Btn to="/contact">Connect with me</Btn>
            </div>
          </Reveal>
          <Reveal className="card about-info" delay={120}>
            <p className="bio">
              I'm Mani Teja Pithani, a dedicated Web Designer &amp; Graphic Designer based in the
              vibrant city of Hyderabad, India. I specialize in creative design with seamless
              technical execution to craft exceptional digital experiences.
            </p>
            <div className="chips">
              {skills.map((s) => <span key={s}>{s}</span>)}
            </div>
            <div className="xp">
              <div className="xp-row">
                <b>Ui/UX Designer</b><span>CarieerPedia</span><i>09-24 to 03-25</i>
              </div>
              <div className="xp-row">
                <b>Ui/UX Designer</b><span>CustomFurnish</span><i>05-2025-Present</i>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESS ================= */

function Process() {
  return (
    <section className="section" id="process">
      <div className="shell">
        <Reveal className="kicker"><Pill>How it works</Pill></Reveal>
        <Reveal delay={80}><h2 className="h2">Process <span className="dim">Is Everything</span></h2></Reveal>
        <Reveal delay={150}><p className="sub">Simple, streamlined process is what get's you results</p></Reveal>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="step-card">
              <span className="num">{i + 1}</span>
              <span className="ico"><Icon name={s.icon} size={20} /></span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <span className="step-tag">Step {i + 1}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="step-banner" delay={100}>
          <div className="t">
            <Pill>I am with you in every step</Pill>
            <small>alongside you at each step for seamless experience</small>
          </div>
          <Btn to="/projects">See All Projects</Btn>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <section className="section" id="services" style={{ background: "var(--bg-2)" }}>
      <div className="shell">
        <Reveal className="kicker"><Pill>Design services</Pill></Reveal>
        <Reveal delay={80}><h2 className="h2">Design <span className="dim">Services</span></h2></Reveal>
        <Reveal delay={150}><p className="sub">Explore a suite of design services to elevate your brand.</p></Reveal>
        <div className="svc-grid">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90} className="svc-card">
              <h4><Icon name={s.icon} size={20} />{s.title}</h4>
              <p>{s.desc}</p>
              {s.img && <div className="svc-img"><img src={s.img} alt={s.title} loading="lazy" /></div>}
            </Reveal>
          ))}
        </div>
        <Reveal className="img-marquee" delay={60}>
          <div className="track">
            {[...marqueeImages, ...marqueeImages].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </Reveal>
        <div className="svc-grid" style={{ marginTop: 22 }}>
          {services.slice(4).map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90} className="svc-card">
              <h4><Icon name={s.icon} size={20} />{s.title}</h4>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="tag-marq" aria-hidden="true">
        {tagRows.map((row, r) => (
          <div className={`track ${r ? "rev" : ""}`} key={r}>
            {[...row, ...row].map((t, i) => (
              <span className="tag-chip" key={i}>
                <Icon name={i % 3 === 0 ? "monitor" : i % 3 === 1 ? "pen" : "image"} size={16} />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= RECENT DESIGNS ================= */

function Recent() {
  const cards = [projects[0], projects[3], projects[1], projects[2]];
  return (
    <section className="section" id="recent">
      <div className="shell">
        <div className="recent-head">
          <div>
            <Reveal className="kicker" style={{ justifyContent: "flex-start" }}><Pill>Recent Projects</Pill></Reveal>
            <Reveal delay={80}><h2 className="h2">Recent <span className="dim">Designs</span></h2></Reveal>
            <Reveal delay={150}><p className="sub">Showcase of some of my recent sleek websites</p></Reveal>
          </div>
          <Reveal delay={180}><Btn to="/projects">See All Projects</Btn></Reveal>
        </div>
        <div className="svc-grid">
          {cards.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <Link to="/projects" className="pcard" style={{ aspectRatio: "498/303" }}>
                <div className="pcard-img"><img src={p.img} alt={p.title} loading="lazy" /></div>
                <span className="go"><Icon name="arrow" size={22} sw={1.7} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY ME (scroll-driven pair swap) ================= */

function WhyMe() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(whyPairs.length - 1, Math.max(0, Math.floor(v * whyPairs.length)));
    setActive(i);
  });
  return (
    <section id="why" ref={ref} style={{ height: `${whyPairs.length * 90 + 60}vh`, position: "relative", background: "var(--bg-2)" }}>
      <div className="why-pin shell">
        <div className="whyme-head">
          <Reveal className="kicker"><Pill>Why choose me</Pill></Reveal>
          <Reveal delay={80}><h2 className="h2">Why me as <span className="dim">Design Partner</span></h2></Reveal>
          <Reveal delay={150}><p className="sub">Why Partner with Me for the Design Excellence</p></Reveal>
        </div>
        <div className="why-pair" style={{ minHeight: 200 }}>
          {whyPairs.map((pair, i) => (
            <motion.div
              key={pair.good.t}
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : i < active ? -26 : 26,
              }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              style={{ gridColumn: "1 / -1", gridRow: "1 / 2", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, pointerEvents: i === active ? "auto" : "none" }}
            >
              <div className="why-card good">
                <span className="mark"><Icon name="check" size={16} sw={2.2} /></span>
                <h4>{pair.good.t}</h4>
                <p>{pair.good.d}</p>
              </div>
              <div className="why-card bad">
                <span className="mark"><Icon name="x" size={15} sw={2.2} /></span>
                <h4>{pair.bad.t}</h4>
                <p>{pair.bad.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TRUSTED / BRANDS ================= */

function Trusted() {
  const list = [...brands, ...brands];
  return (
    <section className="section" id="testimonials">
      <div className="shell trusted">
        <div className="trusted-left">
          <Reveal className="kicker" style={{ justifyContent: "flex-start" }}><Pill>Brands I worked for</Pill></Reveal>
          <Reveal delay={80}><h2 className="h2">Trusted by <span className="dim">Leading Brands</span></h2></Reveal>
          <Reveal delay={150}>
            <p className="sub">Delivering user-focused design solutions for businesses across different industries.</p>
          </Reveal>
          <Reveal delay={200} className="stats">
            <div className="stat"><b>10+</b><span>Brands Collabrations with</span></div>
            <div className="stat"><b>20+</b><span>Projects Completed</span></div>
            <div className="stat wide"><b>1.5+ Years</b><span>Experience in Design</span></div>
          </Reveal>
          <Reveal delay={240}><Btn to="/projects">See All Projects</Btn></Reveal>
        </div>
        <div className="brands-scroll">
          <div className="brands-track">
            {list.map((b, i) => (
              <div className="brand-card" key={i}>
                <div className="brand-top">
                  <span className="brand-logo"><img src={b.logo} alt={`${b.name} logo`} loading="lazy" /></span>
                  <div><h4>{b.name}</h4><span>{b.tag}</span></div>
                </div>
                <hr />
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq" style={{ background: "var(--bg-2)" }}>
      <div className="shell">
        <div className="card" style={{ padding: "60px 56px" }}>
          <div className="faq-grid">
            <div className="faq-left">
              <Reveal className="kicker"><Pill>FAQ Section</Pill></Reveal>
              <Reveal delay={80}><h2 className="h2">Questions, <span className="dim">Answers</span></h2></Reveal>
              <Reveal delay={150}><p className="sub">Get quick answers to your most pressing questions</p></Reveal>
              <Reveal delay={200} className="faq-profile">
                <div className="head">
                  <img src="/assets/avatar.jpg" alt="Mani Teja" />
                  <div><b>Mani Teja</b><span>UI/UX &amp; Graphic Designer</span></div>
                </div>
                <p>
                  Creative and detail-oriented designer focused on crafting modern digital
                  experiences, branding, and visually engaging designs that help businesses
                  stand out and connect with their audience.
                </p>
                <Btn to="/projects">View My Work</Btn>
              </Reveal>
            </div>
            <div className="acc">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 50} className={`acc-item ${open === i ? "open" : ""}`}>
                  <button className="acc-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    {f.q}
                    <span className="pm" aria-hidden="true" />
                  </button>
                  <div className="acc-a"><div><p>{f.a}</p></div></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Services />
      <Recent />
      <WhyMe />
      <Trusted />
      <Faq />
      <Cta />
    </>
  );
}
