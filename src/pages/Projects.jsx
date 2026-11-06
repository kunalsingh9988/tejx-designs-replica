import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Pill, Reveal } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import { projects } from "../data.js";

export default function Projects() {
  const [more, setMore] = useState(false);
  const shown = more ? projects : projects.slice(0, 8);
  return (
    <>
      <section className="page-hero shell" id="projects">
        <Reveal><Pill>Recent Projects</Pill></Reveal>
        <Reveal delay={90}>
          <h1>
            Elevating <span className="dim">Brands to Drive Success</span>
            <br />
            <span className="dim">and Impact</span>
          </h1>
        </Reveal>
        <div className="proj-grid" style={{ textAlign: "left" }}>
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <Link to="/contact" className="pcard">
                <div className="pcard-img"><img src={p.img} alt={p.title} loading={i < 4 ? "eager" : "lazy"} /></div>
                <span className="go"><Icon name="arrow" size={22} sw={1.7} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="load-more">
          <button className="btn" onClick={() => setMore((m) => !m)}>
            {more ? "Show Less" : "Load More"}
          </button>
        </div>
      </section>
      <Cta />
    </>
  );
}
