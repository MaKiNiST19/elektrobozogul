"use client";
import { useState, useEffect } from "react";
import { LEISTUNGEN } from "@/lib/leistungen";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close menu on page change
  useEffect(() => {
    const handleClose = () => setOpen(false);
    window.addEventListener("popstate", handleClose);
    return () => window.removeEventListener("popstate", handleClose);
  }, []);

  return (
    <div className="mobile-only" style={{ alignItems: "center" }}>
      {/* Hamburger Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        style={{
          background: open ? "var(--primary)" : "none",
          border: "1.5px solid var(--border)",
          borderRadius: "10px",
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "0",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 1001,
        }}
      >
        <span style={{
          display: "block", width: "18px", height: "2px",
          background: open ? "white" : "var(--dark)", borderRadius: "2px",
          transition: "transform 0.3s, opacity 0.3s",
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
        }} />
        <span style={{
          display: "block", width: "18px", height: "2px",
          background: open ? "white" : "var(--dark)", borderRadius: "2px",
          transition: "opacity 0.3s",
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: "block", width: "18px", height: "2px",
          background: open ? "white" : "var(--dark)", borderRadius: "2px",
          transition: "transform 0.3s, opacity 0.3s",
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }} />
      </button>

      {/* Overlay - simplified */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(15, 78, 57, 0.1)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
          }}
        />
      )}

      {/* Dropdown Menu - "Pill" style dropdown */}
      <div style={{
        position: "absolute",
        top: "100%",
        right: "0",
        marginTop: "12px",
        width: "min(320px, 94vw)",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        zIndex: 1000,
        overflow: "hidden",
        transform: open ? "translateY(0)" : "translateY(-20px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: "24px",
        border: "1px solid rgba(0,0,0,0.05)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {[
            { label: "Startseite", href: "/" },
            { label: "Leistungen", href: "/leistungen" },
            { label: "Bezirke", href: "/bezirke" },
            { label: "Ratgeber", href: "/ratgeber" },
            { label: "Über uns", href: "/ueber-uns" },
            { label: "Galerie", href: "/unsere-arbeiten" },
            { label: "Kontakt", href: "/kontakt" },
          ].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              padding: "12px 14px",
              fontSize: "15px", fontWeight: 700,
              color: "var(--dark)",
              textDecoration: "none",
              borderRadius: "12px",
              transition: "background 0.2s",
              background: "transparent",
            }} onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              {item.label}
            </a>
          ))}

          <div style={{ margin: "16px 0 12px", height: "1px", background: "var(--border)" }} />
          
          <div style={{ padding: "0 14px" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "12px" }}>
              Top Leistungen
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
              {LEISTUNGEN.slice(0, 4).map((l) => (
                <a key={l.slug} href={`/leistungen/${l.slug}`} onClick={() => setOpen(false)} style={{
                  fontSize: "13px", fontWeight: 600, color: "var(--mid)", textDecoration: "none"
                }}>
                  ⚡ {l.shortTitle}
                </a>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "24px" }}>
            <a href="tel:+436601230073" className="btn-sparkle" style={{ width: "100%", justifyContent: "center" }}>
              <span className="text_button" style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "14px" }}>
                📞 +43 660 1230073
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
