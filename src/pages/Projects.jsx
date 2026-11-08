import { useState } from "react";
import { Pill, Reveal, ProjectCard } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import { projects } from "../data.js";
import { clientProjects } from "../clientProjects.js";

const BATCH = 20;
const allProjects = [...projects, ...clientProjects];
const isBehance = (p) => p.link?.includes("behance.net");

const FILTERS = [
  { id: "all", label: "All", match: () => true },
  { id: "figma", label: "Figma", match: (p) => !!p.figma },
  { id: "live", label: "Live Projects", match: (p) => !!p.link && !isBehance(p) },
  { id: "pm", label: "Project Manager", match: (p) => !isBehance(p) },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(BATCH);
  const filtered = allProjects.filter(FILTERS.find((f) => f.id === filter).match);
  const remaining = filtered.length - visible;
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
            <Reveal delay={140} className="filter-row" role="tablist" aria-label="Project filters">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={filter === f.id}
                  className={`filter-btn${filter === f.id ? " active" : ""}`}
                  onClick={() => { setFilter(f.id); setVisible(BATCH); }}
                >
                  {f.label}
                </button>
              ))}
            </Reveal>
          </div>
          <div className="proj-grid">
            {filtered.slice(0, visible).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <ProjectCard p={p} ratio="548/362" eager={i < 2} />
              </Reveal>
            ))}
          </div>
          {remaining > 0 ? (
            <Reveal className="load-more">
              <button className="btn ghost" onClick={() => setVisible((v) => v + BATCH)}>Load More</button>
            </Reveal>
          ) : (
            <Reveal className="load-more end-note">
              <p>That's all {filtered.length} — every project designed, managed &amp; shipped end-to-end. The next one could be yours.</p>
            </Reveal>
          )}
        </div>
      </section>
      <Cta />
    </>
  );
}
