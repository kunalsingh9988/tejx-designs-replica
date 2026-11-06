import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ---------- icons (stroke style, lucide-like) ---------- */

const P = {
  cursor: (
    <path d="M5 3l7 17 2.2-6.8L21 11 5 3z" fill="currentColor" stroke="none" />
  ),
  list: (
    <>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6h.01M3 12h.01M3 18h.01" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  pen: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </>
  ),
  framer: (
    <path d="M5 3h14v6h-7l7 6v6h-7v-6H5V9h7L5 3z" fill="currentColor" stroke="none" />
  ),
  megaphone: (
    <>
      <path d="M3 11l18-7-4 14-6-3" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  box: (
    <>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.3 7 12 12l8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  research: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="2" />
      <path d="M9 18h.01" />
      <circle cx="17.5" cy="17.5" r="3.5" />
      <path d="M21 21l-1.5-1.5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  video: (
    <>
      <rect x="2" y="6" width="13" height="12" rx="2" />
      <path d="M15 10.5 22 7v10l-7-3.5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m5 19 5.5-5.5a1.5 1.5 0 0 1 2 0L21 21" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
};

export function Icon({ name, size = 20, sw = 1.8, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}

/* ---------- social icons (filled brand glyphs) ---------- */

export function SocialIcon({ name, size = 18 }) {
  const d = {
    x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    instagram:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
    dribbble:
      "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.94 5.53a10.2 10.2 0 0 1 2.3 6.36c-.34-.07-3.7-.8-7.09-.34-.07-.17-.15-.35-.23-.53-.22-.51-.46-1.02-.73-1.51 3.76-1.54 5.46-3.75 5.75-3.98zM12 1.78c2.6 0 4.99.98 6.8 2.57-.24.29-1.75 2.33-5.4 3.65a51.3 51.3 0 0 0-3.8-4.99A10.3 10.3 0 0 1 12 1.78zm-8.5 3.1A10.16 10.16 0 0 1 7.9 3.26a62.6 62.6 0 0 1 3.78 4.92c-4.76 1.27-9 1.25-9.44 1.25.11-1.87.8-3.55 1.26-4.55zM1.76 12v-.31c.4.01 4.66.07 9.85-1.32.27.54.54 1.09.79 1.65l-.37.11c-4.95 1.6-7.6 5.97-7.82 6.35A10.19 10.19 0 0 1 1.76 12zM12 22.24a10.2 10.2 0 0 1-6.28-2.15c.16-.33 1.94-4.1 7.45-5.9.02 0 .05-.01.07-.02a43.5 43.5 0 0 1 2.24 7.95 10.22 10.22 0 0 1-3.48.12zm5.03-1.43a45 45 0 0 0-2.07-7.37c3.16-.5 5.94.32 6.28.43a10.26 10.26 0 0 1-4.21 6.94z",
    linkedin:
      "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z",
    behance:
      "M22 7h-7V5h7v2zm1.73 10c-.89 1.89-2.55 2.92-4.87 2.92-4.2 0-5.86-3.08-5.86-6.91 0-3.88 1.97-7.01 5.97-7.01 2.04 0 3.53.87 4.6 2.38.96 1.35 1.35 3.12 1.28 4.77h-8.9c.08 2.42 1.28 4.19 3.9 4.19 1.53 0 2.52-.75 3.17-2.34h2.71zM14.95 11.5h6.01c-.11-2.18-1.34-3.5-2.99-3.5-1.76 0-2.95 1.42-3.02 3.5zM0 20h8.1c1.61 0 2.83-.37 3.72-1.07.85-.67 1.29-1.68 1.29-2.91 0-1.86-1.03-3.09-2.87-3.61 1.45-.59 2.31-1.7 2.31-3.26 0-1.13-.35-2.06-1.03-2.74C10.68 5.56 9.52 5.24 7.6 5.24H0V20zm6.63-7.52c1.06 0 2.05-.4 2.05-1.46 0-.99-.84-1.5-1.92-1.5H2.95v2.96h3.68zm.24 5.05H2.96v-3.27h3.91c1.16 0 2.16.51 2.16 1.7 0 1.15-.9 1.57-2.16 1.57z",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d[name]} />
    </svg>
  );
}

/* ---------- pill / button / reveal ---------- */

export function Pill({ children }) {
  return (
    <span className="pill">
      <span className="dot" />
      {children}
    </span>
  );
}

export function Btn({ children, to, href, className = "", style }) {
  const cls = `btn ${className}`;
  if (to) return <Link to={to} className={cls} style={style}>{children}</Link>;
  return (
    <a href={href || "#"} className={cls} style={style} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export function ArrowCircle({ size = 20 }) {
  return <img src="/assets/ic-arrow.svg" alt="" width={size} height={size} aria-hidden="true" />;
}

export function ProjectCard({ p, ratio = "548/362", eager = false }) {
  return (
    <Link to={`/projects/${p.slug}`} className="pcard">
      <div className="pcard-img" style={{ aspectRatio: ratio }}>
        <img src={p.img} alt={p.title} loading={eager ? "eager" : "lazy"} />
      </div>
      <span className="go"><ArrowCircle size={20} /></span>
    </Link>
  );
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", style, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight - 40) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

/* section header with pill + title + subtitle */
export function SectionHead({ pill, title, sub, center = true }) {
  return (
    <div className={center ? "head-center" : ""}>
      <Reveal className={`kicker ${center ? "center" : ""}`}>
        <Pill>{pill}</Pill>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="h2">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={160}>
          <p className="sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
