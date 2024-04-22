import { defineConfig } from 'astro/config'

import tunnel from 'astro-tunnel'
import tailwind from '@astrojs/tailwind'
import { astroImageTools } from 'astro-imagetools'
import critters from 'astro-critters'
import { shield } from '@kindspells/astro-shield'
import sitemap from 'astro-sitemap'
import Compress from 'astro-compress'
import compressor from 'astro-compressor'

const website = 'https://example.com'

// https://astro.build/config
export default defineConfig({
  site: website,
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  compressHTML: false,
  integrations: [
    tunnel(),
    tailwind(),
    astroImageTools,
    critters(),
    shield({
      sri: {
        enableMiddleware: true
      }
    }),
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
    }),
    Compress({
      HTML: {
        collapseBooleanAttributes: true,
        maxLineLength: 0,
        removeAttributeQuotes: false,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      },
      JavaScript: {
        compress: {
          ecma: 2015
        },
        format: {
          comments: false,
          ecma: 2015
        },
        ecma: 2015,
        module: true
      },
      Image: false,
      SVG: false
    }),
    compressor()
  ]
})
