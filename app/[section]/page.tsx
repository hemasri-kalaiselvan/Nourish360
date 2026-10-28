import Link from "next/link";
import { notFound } from "next/navigation";
import { DATA, SECTIONS } from "@/lib/data";
import { CATEGORIES } from "@/lib/foods";
import FoodBrowser from "@/components/FoodBrowser";

export function generateStaticParams() {
  return Object.keys(DATA).map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const meta = SECTIONS[params.section];
  const topics = DATA[params.section];
  if (!meta || !topics) notFound();
  return (
    <>
      <h1>{meta.icon} {meta.title}</h1>
      <p className="muted">{meta.blurb}</p>
      {params.section === "symptoms" && (
        <div className="alert">
          <strong>Emergency?</strong> Chest pain, trouble breathing, sudden weakness or confusion, severe bleeding, or
          thoughts of self-harm: call 112 (India) or go to the nearest emergency department now.
        </div>
      )}
      {params.section === "foods" ? (
        <FoodBrowser
          categories={CATEGORIES}
          items={topics.map((t) => ({ slug: t.slug, title: t.title, summary: t.summary, category: t.category, diet: t.diet, tags: t.tags }))}
        />
      ) : (
        <div className="grid">
          {topics.map((t) => (
            <Link key={t.slug} href={`/${params.section}/${t.slug}/`} className="card">
              <h2>{t.title}</h2>
              <p>{t.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
