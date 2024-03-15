import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import { astroImageTools } from 'astro-imagetools'
import critters from 'astro-critters'
import sitemap from 'astro-sitemap'

const website = 'https://example.com'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroImageTools,
    critters(),
    sitemap({
      canonicalURL: website,
      lastmod: new Date(),
      createLinkInHead: false,
      xmlns: {
        xhtml: true
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es'
        }
      },
      // Remove trailing slash
      serialize(item) {
        /* eslint-disable-next-line no-param-reassign */
        item.url = item.url.replace(/\/$/g, '')
        return item
      }
    })
  ]
})
