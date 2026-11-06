import { useState } from "react";
import { Pill, Reveal, ProjectCard } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import { projects, extraProjects } from "../data.js";

export default function Projects() {
  const [more, setMore] = useState(false);
  return (
    <>
      <section className="panel section-pad" style={{ marginTop: 0 }}>
        <div className="shell">
          <div className="page-hero" style={{ paddingTop: 90 }}>
            <Reveal className="kicker"><Pill>Selected Work</Pill></Reveal>
            <Reveal delay={80}>
              <h1>
                Products I've Designed <span className="dim">&amp; Shipped<br />End-to-End</span>
              </h1>
            </Reveal>
          </div>
          <div className="proj-grid">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <ProjectCard p={p} ratio="548/362" eager={i < 2} />
              </Reveal>
            ))}
            {more &&
              extraProjects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 90}>
                  <ProjectCard p={p} ratio="548/362" />
                </Reveal>
              ))}
          </div>
          {!more && (
            <Reveal className="load-more">
              <button className="btn ghost" onClick={() => setMore(true)}>Load More</button>
            </Reveal>
          )}
          <div className="chev" aria-hidden="true"><img src="/assets/ic-chev.svg" alt="" /></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
