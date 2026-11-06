import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Btn, Reveal, ProjectCard } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";
import { projects, extraProjects } from "../data.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = useMemo(() => [...projects, ...extraProjects].find((p) => p.slug === slug), [slug]);
  if (!project) return <Navigate to="/projects" replace />;

  const recent = projects.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="panel section-pad" style={{ marginTop: 0 }}>
        <div className="shell">
          <div className="detail-grid">
            <div className="detail-left">
              <Reveal><h1>{project.detailTitle}</h1></Reveal>
              {project.detail.map((para, i) => (
                <Reveal key={i} delay={100 + i * 70}>
                  <p className="dsub">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={240}>
                <Btn href="#" className="ghost">Open Project</Btn>
              </Reveal>
              <Reveal delay={300} className="detail-meta">
                <div className="m"><b>Company</b><span>{project.company}</span></div>
                <div className="m"><b>Service Provided</b><span>{project.service}</span></div>
              </Reveal>
            </div>
            <Reveal delay={140} className="card detail-img-card">
              <div className="im"><img src={project.hero} alt={project.title} /></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="panel section-pad detail-recent" style={{ marginTop: 8 }}>
        <div className="shell">
          <div className="recent-head">
            <Reveal>
              <h2 className="h2">
                Recent <span className="dim">Designs</span>
                <span className="detail-glow" aria-hidden="true" />
              </h2>
            </Reveal>
            <Reveal delay={120}><Btn to="/projects">See All Projects</Btn></Reveal>
          </div>
          <div className="svc-grid" style={{ marginTop: 40 }}>
            {recent.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <ProjectCard p={p} ratio="548/362" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
