import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nourish360 — Eat Smart. Move Well. Live Better.",
  description: "Educational information on food, nutrition and wellness, starting with South Indian foods.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="emerg">Medical emergency? Call <strong>112</strong> (India) now. This site is educational and cannot diagnose or treat.</div>
        <header className="top">
          <div className="wrap bar">
            <Link href="/" className="brand">Nourish<span>360</span></Link>
            <nav>
              <Link href="/foods/">Foods</Link>
              <Link href="/nutrients/">Nutrients</Link>
              <Link href="/habits/">Habits</Link>
              <Link href="/organs/">Organs</Link>
              <Link href="/conditions/">Conditions</Link>
              <Link href="/symptoms/">Symptoms</Link>
              <Link href="/wellness/">Wellness</Link>
            </nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="wrap foot">
          <p>
            <strong>Educational information only.</strong> Nourish360 does not provide medical advice, diagnosis or
            treatment. Content is in draft and awaiting review by qualified professionals. Always ask a doctor or
            registered dietitian about your own health. In an emergency, call your local emergency number (India: 112).
          </p>
          <p><Link href="/about/">About, safety &amp; privacy</Link></p>
        </footer>
      </body>
    </html>
  );
}
