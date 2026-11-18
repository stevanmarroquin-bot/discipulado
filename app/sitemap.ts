import { MetadataRoute } from 'next'
import { MODULOS, getLeccionesPorModulo } from '@/lib/content'

const BASE = 'https://discipulado.breadoflife.com.gt'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1 },
  ]

  for (const mod of MODULOS) {
    entries.push({
      url: `${BASE}/${mod.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })
    for (const l of getLeccionesPorModulo(mod.id)) {
      entries.push({
        url: `${BASE}/${mod.slug}/${l.slug}`,
        lastModified: new Date(l.fecha),
        priority: 0.9,
      })
    }
  }

  return entries
}
