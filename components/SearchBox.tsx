"use client";
import Link from "next/link";
import { useState } from "react";

type Item = { section: string; slug: string; title: string; summary: string; haystack: string; emoji?: string };

export default function SearchBox({ items, labels }: { items: Item[]; labels: Record<string, string> }) {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const results = term ? items.filter((i) => term.split(/\s+/).every((w) => i.haystack.includes(w))).slice(0, 12) : [];

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="🔍 Search: ragi, liver, salt, fever…"
        aria-label="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {term && (
        <ul className="results">
          {results.length === 0 && <li className="muted">No matches yet. More content is coming.</li>}
          {results.map((r) => (
            <li key={r.section + r.slug}>
              <Link href={`/${r.section}/${r.slug}/`}>
                <span className="remoji">{r.emoji ?? "🥗"}</span>
                <span>
                  <strong>{r.title}</strong> <span className="chip">{labels[r.section]}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
