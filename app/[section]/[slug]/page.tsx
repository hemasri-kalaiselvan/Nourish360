import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA, SECTIONS, getTopic } from "@/lib/data";
import { emojiFor } from "@/lib/emoji";
import { quickCards } from "@/lib/quick";
import ShareButton from "@/components/ShareButton";

const DIET: Record<string, string> = { veg: "🟢 Vegetarian", egg: "🟡 Contains egg", "non-veg": "🔴 Non-vegetarian" };

export function generateStaticParams() {
  return Object.entries(DATA).flatMap(([section, topics]) => topics.map((t) => ({ section, slug: t.slug })));
}

export default function TopicPage({ params }: { params: { section: string; slug: string } }) {
  const topic = getTopic(params.section, params.slug);
  if (!topic) notFound();
  const isSymptom = params.section === "symptoms";
  const cards = quickCards(topic);
  return (
    <article className={"sec-" + params.section}>
      <p><Link href={`/${params.section}/`}>‹ {SECTIONS[params.section].title}</Link></p>

      <header className="phead">
        <div className="pemoji">{emojiFor(params.section, params.slug)}</div>
        <div>
          <h1>{topic.title}</h1>
          <p className="badges">
            {topic.diet && <span className={"chip diet-" + topic.diet}>{DIET[topic.diet]}</span>}
            {topic.category && <span className="chip">{topic.category}</span>}
          </p>
        </div>
      </header>

      <p className="lead">{topic.summary}</p>
      <ShareButton title={topic.title + " — Nourish360"} />

      {isSymptom && <p className="muted small">Educational information for adults, not a diagnosis. For children, ask a paediatrician.</p>}

      {topic.redFlags && (
        <div className="alert alert-red">
          <strong>🚨 {isSymptom ? "Emergency: call 112 or go to hospital now if:" : params.section === "wellness" ? "Stop and get medical help if:" : "Get medical help urgently if:"}</strong>
          <ul>{topic.redFlags.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      )}

      {topic.allergens && topic.allergens.length > 0 && (
        <div className="alert">
          <strong>⚠️ Allergen note:</strong> contains or may contain {topic.allergens.join(", ")}.
        </div>
      )}

      <div className="qcards">
        {cards.map((c) => (
          <div key={c.label} className={"qcard tone-" + c.tone}>
            <div className="qh"><span>{c.icon}</span> {c.label}</div>
            <p>{c.text}</p>
          </div>
        ))}
      </div>

      {topic.seeDoctor && topic.seeDoctor.length > 1 && (
        <details className="acc warn">
          <summary>🩺 See a doctor soon if…</summary>
          <ul>{topic.seeDoctor.map((r) => <li key={r}>{r}</li>)}</ul>
        </details>
      )}
      {topic.checkFirst && topic.checkFirst.length > 1 && (
        <details className="acc warn">
          <summary>⚠️ Check with your doctor first if…</summary>
          <ul>{topic.checkFirst.map((r) => <li key={r}>{r}</li>)}</ul>
        </details>
      )}

      <h2 className="shead">Tap to read more</h2>
      {topic.sections.map((s, i) => (
        <details key={s.heading} className="acc" open={i === 0 && params.section === "wellness"}>
          <summary>{s.heading}</summary>
          <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </details>
      ))}

      {topic.related && (
        <section>
          <h2 className="shead">🔗 Related</h2>
          <p className="chips">
            {topic.related.map((r) => {
              const t = getTopic(r.section, r.slug);
              return t ? (
                <Link key={r.section + r.slug} className="chip big" href={`/${r.section}/${r.slug}/`}>
                  {emojiFor(r.section, r.slug)} {t.title}
                </Link>
              ) : null;
            })}
          </p>
        </section>
      )}

      <details className="acc meta">
        <summary>📚 Sources &amp; review status</summary>
        <ul>{topic.sources.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className="muted">Review status: <strong>draft, awaiting review by a qualified professional.</strong></p>
      </details>
    </article>
  );
}
