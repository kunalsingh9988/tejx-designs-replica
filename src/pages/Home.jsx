import { useState } from "react";
import { Link } from "react-router-dom";
import { Pill, Btn, Reveal, ArrowCircle, ProjectCard, SectionHead, SocialIcon } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import {
  projects, steps, services, tagRows, whyPairs, brands, faqs, skills, xp, socials,
  svcPairs, svcPairs2, heroQuotes,
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
          {heroQuotes[0].q}
          <span className="who">{heroQuotes[0].who}</span>
        </div>
        <div className="quote-card q2">
          {heroQuotes[1].q}
          <span className="who">{heroQuotes[1].who}</span>
        </div>
        <CursorGlyph className="c1" />
        <CursorGlyph className="c2" />
      </div>
      <div className="shell hero-inner">
        <Reveal>
          <Pill>UX Designer · Project Manager</Pill>
        </Reveal>
        <Reveal delay={90}>
          <h1>
            Kunal <span className="dim">Singh</span>
            <Link to="/projects" className="arrow-circle" aria-label="Go to projects">
              <ArrowCircle size={20} />
            </Link>
          </h1>
        </Reveal>
        <Reveal delay={260}>
          <p className="hero-sub">
            I design intuitive digital products and manage them end-to-end —
            80+ projects shipped over 2.5+ years, on time and on brief.
          </p>
        </Reveal>
        <Reveal delay={340} className="hero-actions">
          <Btn to="/projects">See All Projects</Btn>
          <Btn href="/assets/resume.pdf" className="ghost">Resume ↓</Btn>
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
          pill="Designer & Project Manager"
          title={<>Kunal Singh, <span className="dim">at your service</span></>}
          sub="A quick intro to who I am and where I've been."
        />
        <div className="about-grid">
          <Reveal className="card about-photo">
            <div className="imgwrap">
              <img src="/assets/kunal-photo.jpg" alt="Kunal Singh" loading="lazy" />
              <span className="avail-badge"><span className="gdot" />Available for work</span>
            </div>
            <div className="about-id">
              <h4>Hello, I am Kunal Singh</h4>
              <p>UX Designer &amp; Project Manager based in India.</p>
              <div className="about-socials">
                {socials.map((s) => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <SocialIcon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
              <Btn to="/contact">Connect with me</Btn>
            </div>
          </Reveal>
          <Reveal className="card about-info" delay={120}>
            <p className="bio">
              I'm Kunal Singh — a UX designer and project manager with 2.5+ years and 80+
              shipped projects. I take products from brief to launch: researching users,
              mapping flows, designing interfaces, and driving delivery so nothing slips.
              Currently designing at Riverhouse Technologies and running my own studio, Phimetric.
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
          sub="A clear, milestone-driven process — the same one that's shipped 80+ projects"
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
            <small>you'll always know the status, the next step, and the timeline</small>
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
  const seq = [
    <SvcCard key="w" s={services[0]} />,
    <SvcCard key="g" s={services[1]} delay={90} />,
    <Reveal key="p1" className="svc-pair">
      <img src={svcPairs[0]} alt="Product interface design" loading="lazy" />
      <img src={svcPairs[1]} alt="Web app design" loading="lazy" />
    </Reveal>,
    <SvcCard key="b" s={services[2]} />,
    <SvcCard key="pk" s={services[3]} delay={90} />,
    <SvcCard key="l" s={services[4]} />,
    <SvcCard key="f" s={services[5]} delay={90} />,
    <Reveal key="p2" className="svc-pair" delay={60}>
      <img src={svcPairs2[0]} alt="Platform design" loading="lazy" />
      <img src={svcPairs2[1]} alt="Dashboard design" loading="lazy" />
    </Reveal>,
    <SvcCard key="sm" s={services[6]} />,
    <SvcCard key="ux" s={services[7]} delay={90} />,
  ];
  return (
    <section className="panel section-pad" id="services">
      <div className="shell">
        <SectionHead
          center={false}
          pill="What I do"
          title={<>Design <span className="dim">Services</span></>}
          sub="Design and delivery services that take products from idea to launch."
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
          title={<>Why me as <span className="dim">your next hire</span></>}
          sub="What you get with me — and what you risk without"
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
          <Reveal className="kicker"><Pill>Teams I've worked with</Pill></Reveal>
          <Reveal delay={80}><h2 className="h2">Trusted by <span className="dim">Great Teams</span></h2></Reveal>
          <Reveal delay={150}>
            <p className="sub">Designing and delivering for startups, studios, and product teams across industries.</p>
          </Reveal>
          <Reveal delay={200} className="stats">
            <div className="stat"><b>80+</b><span>Projects Completed</span></div>
            <div className="stat"><b>10+</b><span>Teams &amp; Clients</span></div>
            <div className="stat wide"><b>2.5+ Years</b><span>Designing &amp; Delivering</span></div>
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
                <span className="brand-logo"><span className="mono">{b.mono}</span></span>
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
                  <img src="/assets/kunal-avatar.jpg" alt="Kunal Singh" />
                  <div><b>Kunal Singh</b><span>UX Designer &amp; Project Manager</span></div>
                </div>
                <p>
                  Designer and project manager with 80+ shipped projects — I take products
                  from idea to launch with research-driven design and organized,
                  on-time delivery.
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
