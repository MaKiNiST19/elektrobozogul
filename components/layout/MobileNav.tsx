"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { LEISTUNGEN } from "@/lib/leistungen";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Sayfa değişimlerinde menüyü kapat
  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="mobile-nav-root">
      {/* --- Hamburger Toggle --- */}
      <button 
        className={`mobile-toggle ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menü öffnen"
      >
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </button>

      {/* --- Overlay Menu --- */}
      <div 
        className={`mobile-overlay ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(false)}
        style={{ 
          opacity: isOpen ? 1 : 0, 
          visibility: isOpen ? 'visible' : 'hidden' 
        }}
      >
        <nav 
          className="mobile-menu" 
          onClick={(e) => e.stopPropagation()}
          style={{ left: isOpen ? '0' : '-100%' }}
        >
          <div className="mobile-menu__header">
            <div style={{ position: 'relative', width: '150px', height: '32px' }}>
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                fill 
                style={{ objectFit: 'contain' }}
                className="mobile-menu__logo" 
              />
            </div>
            <button className="mobile-close" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="mobile-menu__links">
            <a href="/" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Startseite</a>
            
            <div className="mobile-menu__group">
              <span className="mobile-menu__label">Leistungen</span>
              <div className="mobile-menu__sublinks">
                {LEISTUNGEN.map(l => (
                  <a key={l.slug} href={`/leistungen/${l.slug}`} className="mobile-menu__sublink" onClick={() => setIsOpen(false)}>
                    {l.shortTitle}
                  </a>
                ))}
              </div>
            </div>

            <a href="/bezirke" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Bezirke</a>
            <a href="/unsere-arbeiten" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Unsere Arbeiten</a>
            <a href="/ueber-uns" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Über uns</a>
            <a href="/kontakt" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Kontakt</a>
          </div>

          <div className="mobile-menu__footer">
            <a href="tel:+436601230073" className="btn-sparkle" style={{ width: '100%', justifyContent: 'center' }}>
              <span className="text_button">Jetzt anrufen</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
