import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { ALL_ITEMS, SECTIONS } from "@/lib/data";

export default function Home() {
  const labels = Object.fromEntries(Object.entries(SECTIONS).map(([k, v]) => [k, v.title]));
  return (
    <>
      <section className="hero">
        <h1>Eat Smart. Move Well. Live Better.</h1>
        <p>Plain-language food and wellness information, starting with South Indian foods.</p>
        <SearchBox items={ALL_ITEMS} labels={labels} />
      </section>
      <section className="grid">
        {Object.entries(SECTIONS).map(([key, s]) => (
          <Link key={key} href={`/${key}/`} className="card">
            <div className="icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.blurb}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
