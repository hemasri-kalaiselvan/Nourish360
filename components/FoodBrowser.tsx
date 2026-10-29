"use client";
import Link from "next/link";
import { useState } from "react";

type Item = { slug: string; title: string; summary: string; emoji: string; category?: string; diet?: string; tags?: string[] };

const DIET: Record<string, string> = { veg: "Veg", egg: "Egg", "non-veg": "Non-veg" };

export default function FoodBrowser({ items, categories }: { items: Item[]; categories: string[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [diet, setDiet] = useState("all");
  const term = q.trim().toLowerCase();

  const shown = items.filter((i) => {
    if (cat !== "All" && i.category !== cat) return false;
    if (diet !== "all" && i.diet !== diet) return false;
    if (!term) return true;
    const hay = [i.title, i.summary, i.category ?? "", ...(i.tags ?? [])].join(" ").toLowerCase();
    return term.split(/\s+/).every((w) => hay.includes(w));
  });

  return (
    <div>
      <input className="search" type="search" placeholder="🔍 Search foods" aria-label="Search foods" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="chips scrollx">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" className={"chip-btn" + (cat === c ? " on" : "")} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="chips">
        {[["all", "Any"], ["veg", "🟢 Veg"], ["egg", "🟡 Egg"], ["non-veg", "🔴 Non-veg"]].map(([k, label]) => (
          <button key={k} type="button" className={"chip-btn" + (diet === k ? " on" : "")} onClick={() => setDiet(k)}>{label}</button>
        ))}
      </div>
      <p className="muted">{shown.length} food{shown.length === 1 ? "" : "s"}</p>
      <div className="foodgrid">
        {shown.map((t) => (
          <Link key={t.slug} href={`/foods/${t.slug}/`} className="fcard">
            <div className="femoji">{t.emoji}</div>
            <div className="ftitle">{t.title}</div>
            {t.diet && <span className={"chip diet-" + t.diet}>{DIET[t.diet]}</span>}
          </Link>
        ))}
      </div>
      {shown.length === 0 && <p className="muted">No foods match. Try clearing a filter.</p>}
    </div>
  );
}
