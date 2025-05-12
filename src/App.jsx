
import { useState } from "react";
import "./App.css";

function Section({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="section">
      <button className="btn-section" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && <div className="section-content">{children}</div>}
    </section>
  );
}

export default function App() {
  return (
    <main className="container">
      {/* ------------ HERO ------------ */}
      <header className="header">
        <h1>Your Name</h1>
        <p>Aspiring Software Engineer &bull; React &bull; Java &bull; C++</p>
        <a href="/resume.pdf" target="_blank" className="primary-link">
    Download PDF
        </a>
      </header>

      {/* ------------ SECTIONS ------------ */}
      <Section title="Skills">
        <ul>
          <li>Languages — Java, C++, Python</li>
          <li>Frontend — React, HTML, CSS</li>
          <li>Tools — Git, VS Code, Netlify</li>
        </ul>
      </Section>

      <Section title="Projects">
        <h3>Workout Tracker</h3>
        <p>
          Small React app that logs sets &amp; reps; stores data in localStorage.
        </p>
        <a href="https://github.com/yourname/workout-tracker">GitHub repo</a>
      </Section>

      <Section title="Experience">
        <p><strong>Software Engineering Intern – ABC Corp (Jun 2024 – Aug 2024)</strong></p>
        <ul>
          <li>Built an internal dashboard with React &amp; Node.</li>
          <li>Cut page load time 40 % via code‑splitting.</li>
        </ul>
      </Section>

      <Section title="Education">
        <p>B.S. Computer Science – Queens College (Expected May 2026)</p>
        <p>Relevant coursework: Data Structures • Algorithms • Web Dev</p>
      </Section>

      {/* ------------ CONTACT FORM ------------ */}
      <Section title="Contact Form">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
        <p className="note">Powered by Netlify Forms – no backend required.</p>
      </Section>
    </main>
  );
}
