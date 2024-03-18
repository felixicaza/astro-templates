import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import AstroPWA from '@vite-pwa/astro'
import critters from 'astro-critters'
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
    tailwind(),
    react(),
    AstroPWA({
      mode: 'development',
      base: '/',
      scope: '/',
      start_url: '/?utm_source=web_app',
      id: 'app-id',
      includeAssets: ['/favicons/android-chrome-512x512.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Web App',
        short_name: 'Web App',
        description: 'Web App Description',
        dir: 'ltr',
        lang: 'es',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
          {
            src: '/manifest/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/manifest/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/manifest/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//]
      },
      experimental: {
        directoryAndTrailingSlashHandler: true
      }
    }),
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
