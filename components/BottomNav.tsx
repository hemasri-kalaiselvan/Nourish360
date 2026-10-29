"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", icon: "🏠", label: "Home" },
  { href: "/foods/", icon: "🍛", label: "Foods" },
  { href: "/organs/", icon: "🫀", label: "Body" },
  { href: "/symptoms/", icon: "🩺", label: "Symptoms" },
  { href: "/wellness/", icon: "🧘", label: "Move" },
];

export default function BottomNav() {
  const path = usePathname() || "/";
  return (
    <nav className="bottomnav" aria-label="Main">
      {ITEMS.map((i) => {
        const on = i.href === "/" ? path === "/" : path.startsWith(i.href);
        return (
          <Link key={i.href} href={i.href} className={on ? "on" : ""}>
            <span className="bi">{i.icon}</span>
            <span>{i.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
