"use client";
import { useState } from "react";

export default function ShareButton({ title }: { title: string }) {
  const [msg, setMsg] = useState("");
  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setMsg("Link copied!");
        setTimeout(() => setMsg(""), 2000);
      }
    } catch {
      /* user cancelled */
    }
  }
  return (
    <button type="button" className="sharebtn" onClick={share}>
      📤 Share {msg && <span> · {msg}</span>}
    </button>
  );
}
