import { useState } from "react";
import { Link } from "react-router-dom";
import { Pill, Btn, Reveal, ArrowCircle, ProjectCard, SectionHead } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import {
  projects, steps, services, tagRows, whyPairs, brands, faqs, skills, xp, socials,
  svcPairs, svcPairs2,
} from "../data.js";

/* ================= HERO ================= */

function CursorGlyph({ className }) {
  return <img src="/assets/ic-cursor.svg" alt="" className={`cursor ${className}`} aria-hidden="true" />;
}

function Hero() {
  const cards = [projects[0], projects[3], projects[1], projects[2]];
  return (
    <header className="hero" id="hero-section">
      <div className="hero-media">
        <video autoPlay muted loop playsInline preload="metadata" poster="/assets/hero-poster.png">
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
        <Reveal delay={90}>
          <h1>
            Mani Teja <span className="dim">Pithani</span>
            <Link to="/projects" className="arrow-circle" aria-label="Go to projects">
              <ArrowCircle size={20} />
            </Link>
          </h1>
        </Reveal>
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
            <Reveal key={p.slug} delay={i * 90}>
              <ProjectCard p={p} ratio="538/320" eager={i < 2} />
            </Reveal>
          ))}
        </div>
        <div className="chev hero-more" aria-hidden="true">
          <img src="/assets/ic-chev.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="panel section-pad" id="profile">
      <div className="shell">
        <SectionHead
          pill="Expert Designer"
          title={<>Mani Teja Pithani, <span className="dim">Your Designer</span></>}
          sub="Brief initial presentation of myself and my previous experiences."
        />
        <div className="about-grid">
          <Reveal className="card about-photo">
            <div className="imgwrap">
              <img src="/assets/portrait.png" alt="Mani Teja Pithani at his desk" loading="lazy" />
              <span className="avail-badge"><span className="gdot" />Available for work</span>
            </div>
            <div className="about-id">
              <h4>Hello I am Mani teja Pithani</h4>
              <p>UI/UX &amp; Graphic Designer Based in Hyderabad.</p>
              <div className="about-socials">
                {socials.map((s) => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <img src={`/assets/soc-${s.icon === "x" ? "x" : s.icon === "instagram" ? "ig" : "dr"}.svg`} alt="" aria-hidden="true" />
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
              {xp.map((x) => (
                <div className="xp-row" key={x.org}>
                  <b>{x.role}</b><span>{x.org}</span><i>{x.when}</i>
                </div>
              ))}
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
    <section className="panel section-pad" id="process">
      <div className="shell">
        <SectionHead
          pill="How it works"
          title={<>Process <span className="dim">Is Everything</span></>}
          sub="Simple, streamlined process is what's get's you results"
        />
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="step-card">
              <span className="num">{i + 1}</span>
              <span className="ico"><img src={s.icon} alt="" aria-hidden="true" /></span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <span className="step-tag">Step {i + 1}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="step-banner" delay={100}>
          <div className="t">
            <b>I am with you in every step</b>
            <small>alongside you at each step for seamless experience</small>
          </div>
          <Btn to="/projects">See All Projects</Btn>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function SvcCard({ s, delay = 0 }) {
  return (
    <Reveal delay={delay} className="svc-card">
      <h4><img src={s.icon} alt="" aria-hidden="true" />{s.title}</h4>
      <p>{s.desc}</p>
      {s.img && <div className="svc-img"><img src={s.img} alt={s.title} loading="lazy" /></div>}
    </Reveal>
  );
}

function Services() {
  const S = (t) => services.find((s) => s.title === t);
  const seq = [
    <SvcCard key="w" s={S("Website Design")} />,
    <SvcCard key="g" s={S("Graphic Design")} delay={90} />,
    <Reveal key="p1" className="svc-pair">
      <img src={svcPairs[0]} alt="Brand creative work" loading="lazy" />
      <img src={svcPairs[1]} alt="Campaign creative work" loading="lazy" />
    </Reveal>,
    <SvcCard key="b" s={S("Brand Identity Design")} />,
    <SvcCard key="pk" s={S("Packaging Design")} delay={90} />,
    <SvcCard key="l" s={S("Logo Design")} />,
    <SvcCard key="f" s={S("Framer Design")} delay={90} />,
    <Reveal key="p2" className="svc-pair" delay={60}>
      <img src={svcPairs2[0]} alt="Landing page design" loading="lazy" />
      <img src={svcPairs2[1]} alt="Marketing website design" loading="lazy" />
    </Reveal>,
    <SvcCard key="sm" s={S("Social Media Design")} />,
    <SvcCard key="ux" s={S("UX Research")} delay={90} />,
  ];
  return (
    <section className="panel section-pad" id="services">
      <div className="shell">
        <SectionHead
          center={false}
          pill="Design services"
          title={<>Design <span className="dim">Services</span></>}
          sub="Explore a suite of design services to elevate your brand."
        />
        <div className="svc-grid">{seq}</div>
        <div className="tag-marq" aria-hidden="true">
          {tagRows.map((row, r) => (
            <div className={`track ${r ? "rev" : ""}`} key={r}>
              {[...row, ...row, ...row].map((chip, i) => (
                <span className="tag-chip" key={i}>
                  <img src={chip.i} alt="" aria-hidden="true" />
                  {chip.t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= RECENT DESIGNS ================= */

function Recent() {
  const cards = [projects[0], projects[3], projects[1], projects[2]];
  return (
    <section className="panel section-pad" id="recent">
      <div className="shell">
        <div className="recent-head">
          <div>
            <Reveal className="kicker"><Pill>Recent Projects</Pill></Reveal>
            <Reveal delay={80}>
              <h2 className="h2">
                Recent <span className="dim">Designs</span>
                <Link to="/projects" className="arrow-circle" aria-label="Go to projects">
                  <ArrowCircle size={20} />
                </Link>
              </h2>
            </Reveal>
            <Reveal delay={150}><p className="sub">Showcase of some of my recent sleek websites</p></Reveal>
          </div>
          <Reveal delay={180}><Btn to="/projects">See All Projects</Btn></Reveal>
        </div>
        <div className="svc-grid" style={{ marginTop: 44 }}>
          {cards.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <ProjectCard p={p} ratio="498/303" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY ME (stacked split cards) ================= */

function WhyMe() {
  return (
    <section className="panel section-pad" id="why">
      <div className="shell">
        <SectionHead
          pill="Why choose me"
          title={<>Why me as <span className="dim">Design Partner</span></>}
          sub="Why Partner with Me for the Design Excellence"
        />
        <div className="why-list">
          {whyPairs.map((pair, i) => (
            <Reveal key={pair.good.t} delay={i * 70} className="why-row">
              <div className="why-half good">
                <span className="mark"><img src="/assets/ic-check.svg" alt="" aria-hidden="true" /></span>
                <h4>{pair.good.t}</h4>
                <p>{pair.good.d}</p>
              </div>
              <div className="why-half bad">
                <span className="mark"><img src="/assets/ic-x.svg" alt="" aria-hidden="true" /></span>
                <h4>{pair.bad.t}</h4>
                <p>{pair.bad.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= TRUSTED / BRANDS ================= */

function Trusted() {
  return (
    <section className="panel section-pad" id="testimonials">
      <div className="shell trusted-grid">
        <div className="trusted-left">
          <Reveal className="kicker"><Pill>Brands I worked for</Pill></Reveal>
          <Reveal delay={80}><h2 className="h2">Trusted by <span className="dim">Leading Brands</span></h2></Reveal>
          <Reveal delay={150}>
            <p className="sub">Delivering user-focused design solutions for businesses across different industries.</p>
          </Reveal>
          <Reveal delay={200} className="stats">
            <div className="stat"><b>10+</b><span>Brands Collabrations with</span></div>
            <div className="stat"><b>20+</b><span>Projects Completed</span></div>
            <div className="stat wide"><b>1.5+ Years</b><span>Experience in Design</span></div>
          </Reveal>
          <Reveal delay={240}>
            <hr className="trusted-hr" />
            <Btn to="/projects">See All Projects</Btn>
          </Reveal>
        </div>
        <div className="brand-list">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 50} className="brand-card" style={{ "--glow": b.glow }}>
              <div className="brand-top">
                <span className="brand-logo"><img src={b.logo} alt={`${b.name} logo`} loading="lazy" /></span>
                <div><h4>{b.name}</h4><span>{b.tag}</span></div>
              </div>
              <hr />
              <p>{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="panel" id="faq">
      <div className="shell">
        <div className="faq-inner">
          <div className="faq-grid">
            <div className="faq-left">
              <SectionHead
                center={false}
                pill="FAQ Section"
                title={<>Questions, <span className="dim">Answers</span></>}
                sub="Get quick answers to your most pressing questions"
              />
              <Reveal delay={200} className="faq-profile">
                <div className="head">
                  <img src="/assets/avatar.png" alt="Mani Teja" />
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
