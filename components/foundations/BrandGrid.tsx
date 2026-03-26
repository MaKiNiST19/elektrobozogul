"use client";
import React from 'react';

const BrandGrid = ({ compact = true }: { compact?: boolean }) => {
  const brands = [
    { name: 'Siemens', logo: '🔴' },
    { name: 'Legrand', logo: '🔵' },
    { name: 'Eaton', logo: '⚡' },
    { name: 'Hager', logo: '🟢' },
    { name: 'ABB', logo: '🟠' },
  ];

  return (
    <section style={{
      padding: compact ? '40px 20px' : '80px 20px',
      background: 'white',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            color: 'var(--primary)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            Vertrauen durch Erfahrung
          </p>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: 'var(--dark)',
            marginBottom: '16px'
          }}>
            Unternehmen, Hausverwaltungen und Kunden setzen auf Elektro-Bozogul
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--mid)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            In Wien zählt nicht nur saubere Elektrotechnik, sondern auch Verlässlichkeit im Alltag. Elektro-Bozogul begleitet Privatwohnungen, Betriebe und Hausverwaltungen bei Installationen, Störungen, E-Befunden und Modernisierungen mit klarer Kommunikation und fachwertiger Ausführung.
          </p>
        </div>

        {/* Orbit Brands */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '280px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Center Circle */}
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 8px 24px rgba(15, 78, 57, 0.3)',
            fontSize: '32px',
            fontWeight: 700,
          }}>
            ✓
          </div>

          {/* Orbit Circle */}
          <svg
            style={{ position: 'absolute', width: '280px', height: '280px', opacity: 0.2 }}
            viewBox="0 0 280 280"
          >
            <circle cx="140" cy="140" r="120" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

          {/* Brand Items in Orbit */}
          {brands.map((brand, i) => {
            const angle = (i / brands.length) * Math.PI * 2;
            const radius = 120;
            const x = 140 + radius * Math.cos(angle);
            const y = 140 + radius * Math.sin(angle);

            return (
              <div
                key={brand.name}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translate(-50%, -50%) scale(1.1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(15, 78, 57, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translate(-50%, -50%) scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ fontSize: '24px' }}>{brand.logo}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '60px' }}>
          <a href="/kontakt" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--primary)',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--primary-dark)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--primary)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
