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
];

export default function OrbitBrands() {
  return (
    <section style={{ background: "white", padding: "80px 0", overflow: "hidden" }}>
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="orbit-layout">

          {/* ── Text ── */}
          <div className="orbit-text">
            <p style={{ color: "var(--primary)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
              Vertrauen durch Erfahrung
            </p>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "var(--dark)", lineHeight: 1.2, marginBottom: "20px" }}>
              Unternehmen, Hausverwaltungen und Kunden setzen auf Elektro-Bozogul
            </h2>
            <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.7, marginBottom: "32px" }}>
              In Wien zählt nicht nur saubere Elektroarbeit, sondern auch Verlässlichkeit im Alltag.
              Elektro-Bozogul begleitet Privatwohnungen, Betriebe und Hausverwaltungen mit klarer
              Kommunikation und fachgerechter Ausführung.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Verlässlicher Partner für laufende Elektroarbeiten",
                "Saubere Ausführung für Wohn- und Gewerbeobjekte",
                "Vertrauen durch nachvollziehbare Kommunikation",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: 600, color: "var(--dark)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/leistungen" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "var(--primary)", color: "white",
              padding: "13px 28px", borderRadius: "12px",
              fontWeight: 700, fontSize: "14px", textDecoration: "none",
            }}>
              Leistungen ansehen
            </a>
          </div>

          {/* ── Orbit Visual ── */}
          <div className="orbit-visual">
            <div style={{ position: "relative", width: "380px", height: "380px", margin: "0 auto", flexShrink: 0 }}>

              {/* Dashed rings */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 380 380">
                <circle cx="190" cy="190" r="100" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4" />
                <circle cx="190" cy="190" r="165" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4" />
              </svg>

              {/* Centre logo */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "72px", height: "72px", borderRadius: "50%",
                background: "white", border: "2px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                zIndex: 10, padding: "8px",
              }}>
                <Image src="/images/logo.png" alt="Elektro-Bozogul" fill style={{ objectFit: "contain", padding: "8px" }} />
              </div>

              {/* Inner orbit – 3 brands CCW – r=100 */}
              {[brands[0], brands[1], brands[2]].map((b, i) => (
                <OrbitItem key={b.alt} radius={100} duration={22} delay={-(i * 22 / 3)} reverse size={60}>
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "50%",
                    background: "white", border: "1.5px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.10)", padding: "9px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Image src={b.src} alt={b.alt} fill style={{ objectFit: "contain", padding: "9px" }} />
                  </div>
                </OrbitItem>
              ))}

              {/* Outer orbit – 2 brands CW – r=165 */}
              {[brands[3], brands[4]].map((b, i) => (
                <OrbitItem key={b.alt} radius={165} duration={34} delay={-(i * 34 / 2)} size={68}>
                  <div style={{
                    width: "68px", height: "68px", borderRadius: "50%",
                    background: "white", border: "1.5px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.11)", padding: "11px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    <Image src={b.src} alt={b.alt} fill style={{ objectFit: "contain", padding: "11px" }} />
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
