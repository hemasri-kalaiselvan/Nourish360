import Link from "next/link";
import { SWAPS } from "@/lib/swaps";
import ShareButton from "@/components/ShareButton";

export default function SwapsPage() {
  return (
    <div className="sec-swaps">
      <header className="phead">
        <div className="pemoji">🔄</div>
        <h1>Easy swaps</h1>
      </header>
      <p className="lead">Small changes, big difference. Pick one swap this week.</p>
      <ShareButton title="Easy food swaps — Nourish360" />
      <div className="swaps big">
        {SWAPS.map((s) => (
          <Link key={s.from} href={s.href ?? "/swaps/"} className="swap">
            <span className="sfrom">{s.fromE}<small>{s.from}</small></span>
            <span className="sarrow">➜</span>
            <span className="sto">{s.toE}<small>{s.to}</small></span>
            <span className="swhy">{s.why}</span>
          </Link>
        ))}
      </div>
      <p className="muted small">General tips, not personal advice. If you have a medical condition, ask your doctor or dietitian.</p>
    </div>
  );
}
