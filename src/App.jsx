// ---------- App.jsx (new) ----------
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  /* -- dark‑mode state -- */
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="container">
      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {/* ---------- HERO ---------- */}
<header className="hero">
  <img src="/profile.jpg" alt="Hamza Ariyan" className="hero-img" />
  <h1>Hamza Ariyan</h1>
  <p>Computer Science Student • NYC</p>
  <p>Python&nbsp;| Java&nbsp;| C++ | Regex | Data Ops</p>

  <a href="/resume.pdf" target="_blank" className="primary-link">
    Download PDF Résumé
  </a>
</header>


      {/* EXPERIENCE ---------------------------------------------- */}
      <section className="card">
        <h3>Database Automation Intern — NYC Department of Buildings</h3>
        <p className="note">Manhattan, NY | Jun – Aug 2024</p>
        <ul>
          <li>
            Parsed <strong>&gt;1 million</strong> files with Python/Regex and
            generated a filterable spreadsheet for zoning/code queries.
          </li>
          <li>
            Enabled instant look‑ups by location or file ID; reduced manual
            search time from minutes to seconds.
          </li>
          <li>Led a 2‑person task force; delivered ahead of deadline.</li>
        </ul>
      </section>

      {/* PROJECTS ------------------------------------------------- */}
      <section className="card">
        <h3>Personal Projects</h3>
        {/* <p className="note">
          *Add new projects here – recruiters love seeing your code.*
        </p> */}
        <h4>Workout Tracker (React)</h4>
        <ul>
          <li>Logs sets &amp; reps; data in localStorage (Supabase planned).</li>
          <li>
            Code:{" "}
            <a
              href="https://github.com/hamzadev3/workout-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/hamzadev3/workout-tracker
            </a>
          </li>
        </ul>
      </section>

      {/* SKILLS --------------------------------------------------- */}
      <section className="card">
        <h3>Technical Skills</h3>
        <ul>
          <li>
            <strong>Languages —</strong> Java, C++, Python, basic HTML/CSS
          </li>
          <li>
            <strong>Tools —</strong> Git &amp; GitHub, VS Code, Netlify CI
          </li>
          <li>
            <strong>Concepts —</strong> Data Structures, Regex, File IO,
            Object‑Oriented Design
          </li>
        </ul>
      </section>

      {/* EDUCATION ----------------------------------------------- */}
      <section className="card">
        <h3>B.Sc. Computer Science — King College</h3>
        <p className="note">Queens, NY | Expected Graduation: 2027</p>
        <h4 className="mt-2">Relevant Coursework</h4>
        <ul>
          <li>Data Structures · Theory of Computation · Computer Organization</li>
          <li>Discrete Structures · Linear Algebra · Calculus I‑III</li>
        </ul>
      </section>

      {/* OTHER WORK ---------------------------------------------- */}
      <section className="card">
        <h3>Additional Work History</h3>
        <ul>
          <li>Uber Eats Courier (Apr 2022 – May 2025) — 4.9★ reliability.</li>
          <li>Macy’s Receiving &amp; Floor (Jul 2024 – Jan 2025).</li>
          <li>Shake Shack Line Cook (Apr 2022 – Oct 2023).</li>
        </ul>
      </section>

      {/* CONTACT -------------------------------------------------- */}
      
      {/* <section className="card">
        <h3>Contact Me</h3>
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
        <p className="note">
          Powered by Netlify Forms — no backend maintenance.
        </p>
      </section>  */}
    </main>
  );
}
