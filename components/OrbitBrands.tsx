"use client";
import React from "react";
import Image from "next/image";

interface OrbitItemProps {
  children: React.ReactNode;
  radius: number;
  duration: number;
  delay?: number;
  reverse?: boolean;
  size?: number;
}

/**
 * Wrapper rotates around center; inner counter-rotates so logo stays upright.
 * Logo CENTER is placed exactly on the orbit circle (at `radius` from center).
 */
const OrbitItem = ({ children, radius, duration, delay = 0, reverse = false, size = 48 }: OrbitItemProps) => {
  const wrapDir  = reverse ? "reverse" : "normal";
  const innerDir = reverse ? "normal"  : "reverse"; // opposite → logo stays upright

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
      {/* Pivot at center; top offset = radius + half-size so logo center lands on circle */}
      <div style={{
        position: "absolute",
        width:  `${size}px`,
        height: `${size}px`,
        top:  `-${radius + size / 2}px`,   // ← centre of logo ON the dashed path
        left: `-${size / 2}px`,
        animation: `orbit-spin ${duration}s linear ${delay}s infinite ${wrapDir}`,
        transformOrigin: `${size / 2}px ${radius + size / 2}px`, // ← pivot stays at (0,0)
      }}>
        {/* Counter-rotate so logo stays upright */}
        <div style={{
          width: "100%", height: "100%",
          animation: `orbit-spin ${duration}s linear ${delay}s infinite ${innerDir}`,
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

const brands = [
  { src: "/images/brands/siemens-logo-wien.png", alt: "Siemens" },
  { src: "/images/brands/legrand-logo-wien.png", alt: "Legrand" },
  { src: "/images/brands/eaton-logo-wien.png",   alt: "Eaton"   },
  { src: "/images/brands/jung-logo-wien.png",    alt: "Jung"    },
  { src: "/images/brands/berker-logo-wien.png",  alt: "Berker"  },
  { src: "/images/brands/schneider-electric-logo-wien-elektriker.png", alt: "Schneider Electric" },
  { src: "/images/brands/schrack-technik-logo-wien-elektriker.png", alt: "Schrack Technik" },
  { src: "/images/brands/viko-logo-wien-elektriker.png", alt: "Viko" },
  { src: "/images/brands/fermax-logo-wien-elektriker.png", alt: "Fermax" },
  { src: "/images/brands/mersen-logo-wien-elektriker.png", alt: "Mersen" },
  { src: "/images/brands/obo-betterman-logo-wien-elektriker.png", alt: "OBO Bettermann" },
];

export default function OrbitBrands() {
  return (
    <section style={{ background: "white", padding: "100px 0", overflow: "hidden" }}>
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", width: "calc(100% - 48px)", position: "relative" }}>
        <div className="orbit-layout" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "80px", flexWrap: "wrap", position: "relative" }}>

          {/* ── Text ── */}
          <div className="orbit-text" style={{ flex: "1", minWidth: "320px", maxWidth: "600px", zIndex: 5 }}>
            <p style={{ color: "var(--primary)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Vertrauen durch Erfahrung
            </p>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "var(--dark)", lineHeight: 1.1, marginBottom: "28px" }}>
              Unternehmen, Hausverwaltungen und Kunden setzen auf Elektro-Bozogul
            </h2>
            <p style={{ fontSize: "18px", color: "var(--mid)", lineHeight: 1.7, marginBottom: "40px" }}>
              In Wien zählt nicht nur saubere Elektroarbeit, sondern auch Verlässlichkeit im Alltag.
              Elektro-Bozogul begleitet Privatwohnungen, Betriebe und Hausverwaltungen mit klarer
              Kommunikation und fachgerechter Ausführung.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Verlässlicher Partner für laufende Elektroarbeiten",
                "Saubere Ausführung für Wohn- und Gewerbeobjekte",
                "Vertrauen durch nachvollziehbare Kommunikation",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "17px", fontWeight: 600, color: "var(--dark)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/leistungen" className="btn-sparkle" style={{ display: "inline-flex" }}>
              <span className="text_button" style={{ padding: "16px 40px", fontSize: "16px", fontWeight: 800 }}>
                Leistungen ansehen
              </span>
            </a>
          </div>

          {/* ── Orbit Visual ── */}
          <div className="orbit-visual" style={{ flex: "1", display: "flex", justifyContent: "flex-end", minWidth: "540px", position: "relative" }}>
            <div style={{ position: "relative", width: "540px", height: "540px", flexShrink: 0 }}>

              {/* Dashed rings */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 540 540">
                <circle cx="270" cy="270" r="130" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 6" />
                <circle cx="270" cy="270" r="230" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="8 6" />
              </svg>

              {/* Centre logo */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "96px", height: "96px", borderRadius: "50%",
                background: "white", border: "2px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 12px 36px rgba(15, 78, 57, 0.12)",
                zIndex: 10, padding: "10px",
              }}>
                <Image src="/images/logo.png" alt="Elektro-Bozogul" fill style={{ objectFit: "contain", padding: "10px" }} />
              </div>

              {/* Inner orbit – 4 brands CCW – r=130 */}
              {brands.slice(0, 4).map((b, i) => (
                <OrbitItem key={b.alt} radius={130} duration={25} delay={-(i * 25 / 4)} reverse size={80}>
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "white", border: "1.5px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.08)", padding: "7px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Image src={b.src} alt={b.alt} fill style={{ objectFit: "contain", padding: "7px" }} />
                  </div>
                </OrbitItem>
              ))}

              {/* Outer orbit – 7 brands CW – r=230 */}
              {brands.slice(4).map((b, i) => (
                <OrbitItem key={b.alt} radius={230} duration={45} delay={-(i * 45 / 7)} size={92}>
                  <div style={{
                    width: "92px", height: "92px", borderRadius: "50%",
                    background: "white", border: "1.5px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)", padding: "12px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Image src={b.src} alt={b.alt} fill style={{ objectFit: "contain", padding: "12px" }} />
                  </div>
                </OrbitItem>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
