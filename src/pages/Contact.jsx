import { useState } from "react";
import { Pill, Btn, Reveal } from "../components/ui.jsx";
import { Cta } from "../components/Footer.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
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
                Let's Collaborate <span className="dim">and Begin the work</span>
              </h1>
            </Reveal>
            <hr className="hr" />
            <Reveal delay={140} className="contact-stats">
              <div className="stat"><b>10+</b><span>Collabrated Brands</span></div>
              <div className="stat"><b>20+</b><span>Projects done</span></div>
              <div className="stat"><b>1.5+ Years</b><span>Experince</span></div>
            </Reveal>
            <Reveal delay={200} className="contact-testi">
              <div className="head">
                <span className="ava" aria-hidden="true" />
                <div><b>Naveen</b><span>Sirimillets</span></div>
              </div>
              <p>
                Using this analytics tool has been a game-changer for our team. The
                seamless interface and actionable insights make every decision smarter.
              </p>
            </Reveal>
            <Reveal delay={250} className="book-bar">
              <b>Prefer to book a call ?</b>
              <Btn href="https://cal.com/maniteja/30min">Let's Book A Call</Btn>
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
            {sent && <p className="form-ok" role="status">Thanks — your message was noted. I'll get back to you soon.</p>}
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}
