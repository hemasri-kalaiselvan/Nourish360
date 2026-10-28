import type { Metadata } from "next";

export const metadata: Metadata = { title: "About, safety & privacy — Nourish360" };

export default function About() {
  return (
    <article>
      <h1>About, safety &amp; privacy</h1>

      <h2>What Nourish360 is</h2>
      <p>Nourish360 offers plain-language information on food, nutrition, movement and wellness, starting with South Indian foods and eating habits.</p>

      <h2>What it is not</h2>
      <ul>
        <li>It is <strong>not medical advice</strong>, diagnosis or treatment, and it does not replace a doctor, dietitian or other qualified professional.</li>
        <li>Symptom pages help you decide how urgently to seek care. They do not tell you what condition you have.</li>
        <li>It is written for adults. For children, pregnancy, or any medical condition, ask your clinician.</li>
        <li>Never stop or change medicines because of anything you read here.</li>
      </ul>

      <div className="alert alert-red">
        <strong>In an emergency</strong> (chest pain, trouble breathing, sudden weakness or confusion, severe bleeding, thoughts of self-harm), call <strong>112</strong> in India or go to the nearest hospital.
      </div>

      <h2>How content is prepared</h2>
      <ul>
        <li>Pages are based on public-health guidance such as ICMR-NIN Dietary Guidelines for Indians and WHO fact sheets.</li>
        <li>Each page lists its sources and review status. Content is currently <strong>draft</strong> and has not yet been reviewed by a registered dietitian or doctor.</li>
        <li>We avoid cure claims. Food and lifestyle habits are described as influences on risk, not guarantees.</li>
      </ul>

      <h2>Privacy</h2>
      <ul>
        <li>There are no accounts, and this site does not ask for personal or health information.</li>
        <li>The site does not set cookies of its own. It is hosted on GitHub Pages, which may keep basic server logs.</li>
        <li>If visitor counting is added later, it will be a privacy-friendly tool and this page will say so.</li>
      </ul>

      <h2>Found a mistake?</h2>
      <p>Please report errors or unsafe wording so they can be fixed quickly.</p>
    </article>
  );
}
