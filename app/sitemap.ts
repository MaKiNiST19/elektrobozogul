import { MetadataRoute } from 'next';
import { BEZIRKE } from '@/lib/bezirke';
import { LEISTUNGEN } from '@/lib/leistungen';
import { NIEDEROESTERREICH_LOCATIONS } from '@/data/niederoesterreich';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elektro-bozogul.at';
  const now = new Date().toISOString();

  // Statik ana sayfalar (en yüksek öncelik)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/bezirke`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/notfall-elektriker`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Hizmet sayfaları
  const leistungPages: MetadataRoute.Sitemap = LEISTUNGEN.map(l => ({
    url: `${baseUrl}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Bezirk sayfaları (yüksek öncelik)
  const bezirkPages: MetadataRoute.Sitemap = BEZIRKE.map(b => ({
    url: `${baseUrl}/bezirke/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // Bezirk × Leistung sayfaları noindex olarak işaretlendi – sitemap'den çıkarıldı
  // Bu sayfalar scaled content abuse riski nedeniyle Google'dan gizlendi

  // Niederösterreich sayfaları
  const niederoesterreichPages: MetadataRoute.Sitemap = NIEDEROESTERREICH_LOCATIONS.map(l => ({
    url: `${baseUrl}/niederoesterreich/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.70,
  }));

  return [
    ...staticPages,
    ...leistungPages,
    ...bezirkPages,
    ...niederoesterreichPages,
  ];
}
