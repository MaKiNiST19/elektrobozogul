"use client";
import { useState } from "react";
import { LEISTUNGEN } from "@/lib/leistungen";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    /* mobile-only: display:none on desktop, block on mobile via globals.css */
    <div className="mobile-only" style={{ alignItems: 'center' }}>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        style={{
          background: "none",
          border: "1.5px solid var(--border)",
          borderRadius: "8px",
          cursor: "pointer",
          width: "38px",
          height: "38px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "0",
        }}
      >
        <span style={{
          display: "block", width: "16px", height: "1.5px",
          background: "var(--dark)", borderRadius: "2px",
          transition: "transform 0.25s, opacity 0.25s",
          transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
        }} />
        <span style={{
          display: "block", width: "16px", height: "1.5px",
          background: "var(--dark)", borderRadius: "2px",
          transition: "opacity 0.25s",
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: "block", width: "16px", height: "1.5px",
          background: "var(--dark)", borderRadius: "2px",
          transition: "transform 0.25s, opacity 0.25s",
          transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
        }} />
      </button>

      {/* Dark overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 998,
          }}
        />
      )}

      {/* Slide-in Drawer */}
      <nav style={{
        position: "fixed",
        top: 0, right: 0,
        width: "min(300px, 88vw)",
        height: "100dvh",
        background: "white",
        zIndex: 999,
        padding: "72px 20px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: "-4px 0 32px rgba(0,0,0,0.14)",
        overflowY: "auto",
      }}>
        {/* Close button */}
        <button onClick={() => setOpen(false)} style={{
          position: "absolute", top: "16px", right: "16px",
          background: "var(--bg)", border: "none", cursor: "pointer",
          width: "32px", height: "32px", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "14px", color: "var(--dark)", fontWeight: 700,
        }}>✕</button>

        {[
          { label: "Startseite", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: "Bezirke", href: "/bezirke" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Kontakt", href: "/kontakt" },
        ].map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
            padding: "12px 14px",
            fontSize: "15px", fontWeight: 700,
            color: "var(--dark)",
            textDecoration: "none",
            borderRadius: "9px",
            background: "transparent",
          }}>
            {item.label}
          </a>
        ))}

        <div style={{ margin: "12px 0 8px", height: "1px", background: "var(--border)" }} />

        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", padding: "0 14px 6px" }}>
          Leistungen
        </p>
        {LEISTUNGEN.slice(0, 6).map((l) => (
          <a key={l.slug} href={`/leistungen/${l.slug}`} onClick={() => setOpen(false)} style={{
            padding: "9px 14px",
            fontSize: "13px", fontWeight: 600,
            color: "var(--mid)",
            textDecoration: "none",
            borderRadius: "8px",
          }}>
            {l.shortTitle}
          </a>
        ))}

        <div style={{ marginTop: "auto", paddingTop: "20px" }}>
          <a href="tel:+436601230073" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            background: "var(--primary)", color: "white",
            padding: "13px", borderRadius: "11px",
            fontWeight: 700, fontSize: "14px", textDecoration: "none",
          }}>
            📞 +43 660 1230073
          </a>
        </div>
      </nav>
    </div>
  );
}
