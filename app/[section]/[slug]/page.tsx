import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA, SECTIONS, getTopic } from "@/lib/data";

const DIET: Record<string, string> = { veg: "Vegetarian", egg: "Contains egg", "non-veg": "Non-vegetarian" };

export function generateStaticParams() {
  return Object.entries(DATA).flatMap(([section, topics]) => topics.map((t) => ({ section, slug: t.slug })));
}

export default function TopicPage({ params }: { params: { section: string; slug: string } }) {
  const topic = getTopic(params.section, params.slug);
  if (!topic) notFound();
  const isSymptom = params.section === "symptoms";
  return (
    <article>
      <p><Link href={`/${params.section}/`}>← {SECTIONS[params.section].title}</Link></p>
      <h1>{topic.title}</h1>
      <p>
        {topic.diet && <span className={"chip diet-" + topic.diet}>{DIET[topic.diet]}</span>}
        {topic.category && <span className="chip">{topic.category}</span>}
      </p>
      <p className="lead">{topic.summary}</p>

      {isSymptom && (
        <p className="muted">Educational information for adults, not a diagnosis. For children, ask a paediatrician.</p>
      )}

      {topic.redFlags && (
        <div className="alert alert-red">
          <strong>{isSymptom ? "Emergency: call 112 or go to hospital now if:" : "Get medical help urgently if:"}</strong>
          <ul>{topic.redFlags.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      )}

      {topic.seeDoctor && (
        <div className="alert">
          <strong>See a doctor soon if:</strong>
          <ul>{topic.seeDoctor.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      )}

      {topic.allergens && topic.allergens.length > 0 && (
        <div className="alert">
          <strong>Allergen note:</strong> contains or may contain {topic.allergens.join(", ")}.
        </div>
      )}

      {topic.sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </section>
      ))}

      {topic.related && (
        <section>
          <h2>Related</h2>
          <p>
            {topic.related.map((r) => {
              const t = getTopic(r.section, r.slug);
              return t ? <Link key={r.section + r.slug} className="chip" href={`/${r.section}/${r.slug}/`}>{t.title}</Link> : null;
            })}
          </p>
        </section>
      )}

      <section className="meta">
        <h2>Sources &amp; review</h2>
        <ul>{topic.sources.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className="muted">Review status: <strong>draft, awaiting review by a qualified professional.</strong></p>
      </section>
    </article>
  );
}
