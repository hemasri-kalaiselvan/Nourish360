import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { ALL_ITEMS, SECTIONS } from "@/lib/data";
import { emojiFor } from "@/lib/emoji";
import { SWAPS } from "@/lib/swaps";

const BODY: { icon: string; area: string; foods: string; href: string }[] = [
  { icon: "🩸", area: "Blood", foods: "🥬 🫘 🥚 🍋", href: "/nutrients/iron/" },
  { icon: "💪", area: "Muscle", foods: "🫘 🥚 🥛 🐟", href: "/nutrients/protein/" },
  { icon: "🦠", area: "Gut", foods: "🥦 🍌 🌾 🥛", href: "/organs/gut/" },
  { icon: "❤️", area: "Heart", foods: "🫘 🥬 🐟 🥜", href: "/organs/heart/" },
  { icon: "🧠", area: "Brain", foods: "🐟 🥜 🥬 🍎", href: "/organs/brain/" },
  { icon: "🦴", area: "Bones", foods: "🥛 🌾 🥬 ☀️", href: "/organs/bones/" },
  { icon: "⚖️", area: "Liver", foods: "🥗 🚫🍬 🚫🍺 🚶", href: "/organs/liver/" },
  { icon: "🫘", area: "Kidneys", foods: "🧂↓ 🩺 💧 🍬↓", href: "/organs/kidneys/" },
];

export default function Home() {
  const labels = Object.fromEntries(Object.entries(SECTIONS).map(([k, v]) => [k, v.title]));
  const items = ALL_ITEMS.map((i) => ({ ...i, emoji: emojiFor(i.section, i.slug) }));
  return (
    <>
      <section className="hero">
        <h1>Eat Smart. Move Well. Live Better.</h1>
        <p>Quick, simple health tips with South Indian foods.</p>
        <SearchBox items={items} labels={labels} />
      </section>

      <section className="tiles">
        {Object.entries(SECTIONS).map(([key, s]) => (
          <Link key={key} href={`/${key}/`} className={"tile sec-" + key}>
            <div className="temoji">{s.icon}</div>
            <div className="ttitle">{s.title}</div>
          </Link>
        ))}
        <Link href="/swaps/" className="tile sec-swaps">
          <div className="temoji">🔄</div>
          <div className="ttitle">Easy Swaps</div>
        </Link>
      </section>

      <section>
        <h2 className="shead">🍽️ Everyday foods for every part of you</h2>
        <div className="bodymap">
          {BODY.map((b) => (
            <Link key={b.area} href={b.href} className="brow">
              <span className="bicon">{b.icon}</span>
              <span className="barea">{b.area}</span>
              <span className="bfoods">{b.foods}</span>
            </Link>
          ))}
        </div>
        <p className="muted small">A healthy overall pattern matters most. No single food protects any one organ.</p>
      </section>

      <section>
        <h2 className="shead">🔄 Swap it, don&apos;t stop it</h2>
        <div className="swaps">
          {SWAPS.slice(0, 4).map((s) => (
            <Link key={s.from} href={s.href ?? "/swaps/"} className="swap">
              <span className="sfrom">{s.fromE}<small>{s.from}</small></span>
              <span className="sarrow">➜</span>
              <span className="sto">{s.toE}<small>{s.to}</small></span>
            </Link>
          ))}
        </div>
        <p><Link href="/swaps/" className="more-link">See all swaps →</Link></p>
      </section>
    </>
  );
}
