import { BEZIRKE, type Bezirk } from './bezirke';
import type { Leistung } from './leistungen';

const FIRMA = {
  name: "Elektro-Bozogul",
  url: "https://elektro-bozogul.at",
  telephone: "+436601230073",
  email: "office@elektro-bozogul.at",
};

// ============================================================
// 1. Organization Schema (Root Layout'a koyulur)
// ============================================================
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${FIRMA.url}/#business`,
    "name": FIRMA.name,
    "url": FIRMA.url,
    "telephone": FIRMA.telephone,
    "email": FIRMA.email,
    "logo": `${FIRMA.url}/images/logo.png`,
    "image": `${FIRMA.url}/images/logo.png`,
    "description": "Ihr Elektriker in Wien – alle 23 Bezirke. Elektroinstallation, E-Befund, Notdienst, Photovoltaik, Smart Home und E-Mobilität.",
    "sameAs": [
      "https://instagram.com/elektrobozogul"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressRegion": "Wien",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.2082,
      "longitude": 16.3738
    },
    "areaServed": BEZIRKE.map(b => ({
      "@type": "City",
      "name": `Wien ${b.name}`,
      "postalCode": b.plz
    })),
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elektro-Dienstleistungen Wien",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elektroinstallation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Befund" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Photovoltaik" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Home" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Mobilität Wallbox" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Beleuchtung" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24h Elektro-Notdienst" } },
      ]
    }
  };
}

// ============================================================
// 2. Bezirk Sayfa Şeması
// ============================================================
export function generateBezirkSchema(bezirk: Bezirk) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${FIRMA.url}/#business`,
        "name": FIRMA.name,
        "url": FIRMA.url,
        "telephone": FIRMA.telephone,
        "email": FIRMA.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wien",
          "addressCountry": "AT"
        },
        "areaServed": {
          "@type": "City",
          "name": `Wien ${bezirk.name}`,
          "postalCode": bezirk.plz
        }
      },
      {
        "@type": "WebPage",
        "url": `${FIRMA.url}/bezirke/${bezirk.slug}`,
        "name": `Elektriker ${bezirk.name} ${bezirk.plz} Wien | Elektro-Bozogul`,
        "description": bezirk.description,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": FIRMA.url },
            { "@type": "ListItem", "position": 2, "name": "Bezirke", "item": `${FIRMA.url}/bezirke` },
            { "@type": "ListItem", "position": 3, "name": bezirk.name }
          ]
        }
      }
    ]
  };
}

// ============================================================
// 3. FAQ Schema
// ============================================================
export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

// ============================================================
// 4. Bezirk × Leistung Şeması
// ============================================================
export function generateBezirkLeistungSchema(bezirk: Bezirk, leistung: Leistung) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${leistung.title} im ${bezirk.name} Wien`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${FIRMA.url}/#business`,
          "name": FIRMA.name,
          "telephone": FIRMA.telephone,
        },
        "areaServed": {
          "@type": "City",
          "name": `Wien ${bezirk.name}`,
          "postalCode": bezirk.plz
        },
        "url": `${FIRMA.url}/bezirke/${bezirk.slug}/${leistung.slug}`,
        "description": leistung.description,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": FIRMA.url },
          { "@type": "ListItem", "position": 2, "name": "Bezirke", "item": `${FIRMA.url}/bezirke` },
          { "@type": "ListItem", "position": 3, "name": bezirk.name, "item": `${FIRMA.url}/bezirke/${bezirk.slug}` },
          { "@type": "ListItem", "position": 4, "name": leistung.shortTitle }
        ]
      }
    ]
  };
}

// ============================================================
// 5. Review Aggregate Schema (Google Reviews)
// ============================================================
export function generateReviewSchema(ratingValue: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${FIRMA.url}/#business`,
    "name": FIRMA.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": reviewCount.toString()
    }
  };
}
