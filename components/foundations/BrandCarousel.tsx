import Image from 'next/image';

export default function BrandCarousel() {
  const brands = [
    { name: 'Siemens', src: '/images/brands/siemens-logo-wien.png' },
    { name: 'Legrand', src: '/images/brands/legrand-logo-wien.png' },
    { name: 'Eaton', src: '/images/brands/eaton-logo-wien.png' },
    { name: 'Jung', src: '/images/brands/jung-logo-wien.png' },
    { name: 'Berker', src: '/images/brands/berker-logo-wien.png' },
    { name: 'Schneider Electric', src: '/images/brands/schneider-electric-logo-wien-elektriker.png' },
    { name: 'Schrack Technik', src: '/images/brands/schrack-technik-logo-wien-elektriker.png' },
    { name: 'Viko', src: '/images/brands/viko-logo-wien-elektriker.png' },
    { name: 'Fermax', src: '/images/brands/fermax-logo-wien-elektriker.png' },
    { name: 'Mersen', src: '/images/brands/mersen-logo-wien-elektriker.png' },
    { name: 'OBO Bettermann', src: '/images/brands/obo-betterman-logo-wien-elektriker.png' },
  ];

  // Duplicate for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section className="brand-carousel-section">
      <div style={{ overflow: 'hidden', padding: '32px 0' }}>
        <p style={{
          textAlign: 'center',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '20px'
        }}>
          Wir arbeiten mit führenden Marken
        </p>
        <div className="brand-carousel-track">
          {allBrands.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="brand-carousel-item" style={{ position: 'relative', width: '120px', height: '40px', margin: '0 20px' }}>
              <Image
                src={brand.src}
                alt={`${brand.name} Partner Wien`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
