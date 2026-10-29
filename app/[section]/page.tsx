import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA, SECTIONS } from "@/lib/data";
import { CATEGORIES } from "@/lib/foods";
import { emojiFor } from "@/lib/emoji";
import FoodBrowser from "@/components/FoodBrowser";

export function generateStaticParams() {
  return Object.keys(DATA).map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const meta = SECTIONS[params.section];
  const topics = DATA[params.section];
  if (!meta || !topics) notFound();
  return (
    <div className={"sec-" + params.section}>
      <header className="phead">
        <div className="pemoji">{meta.icon}</div>
        <h1>{meta.title}</h1>
      </header>
      <p className="lead">{meta.blurb}</p>
      {params.section === "symptoms" && (
        <div className="alert alert-red">
          <strong>🚨 Emergency?</strong> Chest pain, trouble breathing, sudden weakness or confusion, severe bleeding, or
          thoughts of self-harm: call <strong>112</strong> or go to the nearest emergency department now.
        </div>
      )}
      {params.section === "foods" ? (
        <FoodBrowser
          categories={CATEGORIES}
          items={topics.map((t) => ({ slug: t.slug, title: t.title, summary: t.summary, emoji: emojiFor("foods", t.slug), category: t.category, diet: t.diet, tags: t.tags }))}
        />
      ) : (
        <div className="list">
          {topics.map((t) => (
            <Link key={t.slug} href={`/${params.section}/${t.slug}/`} className="lcard">
              <span className="lemoji">{emojiFor(params.section, t.slug)}</span>
              <span className="ltext">
                <strong>{t.title}</strong>
                <small>{t.summary}</small>
              </span>
              <span className="larrow">›</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
