import { useState } from "react";
import { Pill, Btn, Reveal } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";

const TO_EMAIL = "kusing51@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = `Portfolio enquiry — ${f.get("name")}`;
    const lines = [`Name: ${f.get("name")}`, `Email: ${f.get("email")}`];
    if (f.get("number")) lines.push(`Number: ${f.get("number")}`);
    if (f.get("website")) lines.push(`Website: ${f.get("website")}`);
    if (f.get("budget")) lines.push(`Budget: ${f.get("budget")}`);
    lines.push("", f.get("message"));
    const body = lines.join("\n");
    window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.target.reset();
  };
  return (
    <>
      <section className="panel page-hero" style={{ marginTop: 0, paddingBottom: 0 }}>
        <div className="shell contact-grid" style={{ marginTop: 0, paddingBottom: 80 }}>
          <div className="contact-left">
            <Reveal><Pill>Let's Connect</Pill></Reveal>
            <Reveal delay={90}>
              <h1 className="h2" style={{ fontSize: "clamp(38px, 5vw, 56px)" }}>
                Let's Build Something <span className="dim">Great Together</span>
              </h1>
            </Reveal>
            <hr className="hr" />
            <Reveal delay={140} className="contact-stats">
              <div className="stat"><b>10+</b><span>Teams &amp; Clients</span></div>
              <div className="stat"><b>80+</b><span>Projects Shipped</span></div>
              <div className="stat"><b>2.5+ Years</b><span>Experience</span></div>
            </Reveal>
            <Reveal delay={200} className="contact-testi">
              <div className="head">
                <span className="ava" aria-hidden="true" />
                <div><b>Rohan Malhotra</b><span>Founder, AdagioVR</span></div>
              </div>
              <p>
                "The team delivered a clean, modern website with an impressively smooth
                process. Communication was clear throughout, and the final outcome
                exceeded our expectations."
              </p>
            </Reveal>
            <Reveal delay={250} className="book-bar">
              <b>Prefer to talk directly?</b>
              <Btn href="https://wa.me/916266750520">Chat on WhatsApp</Btn>
            </Reveal>
          </div>
          <Reveal delay={140} className="form-card" as="form" onSubmit={submit}>
            <div className="f-row">
              <div className="f-field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" placeholder="Your Name" required />
              </div>
              <div className="f-field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="f-field">
              <label htmlFor="cf-num" className="plain">Number</label>
              <input id="cf-num" name="number" type="tel" placeholder="Your Number" />
            </div>
            <div className="f-field">
              <label htmlFor="cf-web">Website <i>(optional)</i></label>
              <input id="cf-web" name="website" type="url" placeholder="Company Website" />
            </div>
            <div className="f-field">
              <label htmlFor="cf-budget" className="plain">Budget</label>
              <input id="cf-budget" name="budget" placeholder="Your Budget" />
            </div>
            <div className="f-field">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" name="message" placeholder="Your Message" required />
            </div>
            <button type="submit" className="send">Send Message</button>
            {sent && <p className="form-ok" role="status">Thanks — your mail app should have opened with the details filled in. If it didn't, email me directly at {TO_EMAIL}.</p>}
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}
