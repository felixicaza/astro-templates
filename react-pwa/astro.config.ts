import { defineConfig } from 'astro/config'

import { URL, TITLE, DESCRIPTION, COLOR, ICONS_SIZES } from './src/data/constants'

import react from '@astrojs/react'
import AstroPWA from '@vite-pwa/astro'
import playformInline from '@playform/inline'
import sitemap from 'astro-sitemap'
import playformCompress from '@playform/compress'
import compressor from 'astro-compressor'

import { composeVisitors } from 'lightningcss'
import globalCustomMedia from '@sardine/lightningcss-plugin-global-custom-queries'

const customMediaSource = './src/styles/config/media.css'

// https://astro.build/config
export default defineConfig({
  site: URL,
  trailingSlash: 'never',
  server: {
    host: true
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  compressHTML: false,
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true
        },
        visitor: composeVisitors([globalCustomMedia({ source: customMediaSource })])
      }
    },
    build: {
      cssMinify: 'lightningcss'
    }
  },
  integrations: [
    react(),
    AstroPWA({
      mode: 'development',
      base: '/',
      scope: '/',
      includeAssets: ['/favicons/android-chrome-512x512.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: TITLE,
        short_name: TITLE,
        description: DESCRIPTION,
        dir: 'ltr',
        lang: 'es',
        display: 'standalone',
        orientation: 'portrait',
        background_color: COLOR,
        theme_color: COLOR,
        icons: ICONS_SIZES.flatMap((size) => [
          {
            src: `/manifest/icon-${size}x${size}.png`,
            sizes: `${size}x${size}`,
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: `/manifest/maskable-icon-${size}x${size}.png`,
            sizes: `${size}x${size}`,
            type: 'image/png',
            purpose: 'maskable'
          }
        ])
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
      },
      devOptions: {
        enabled: true
      },
      experimental: {
        directoryAndTrailingSlashHandler: true
      }
    }),
    sitemap({
      canonicalURL: URL,
      lastmod: new Date(),
      createLinkInHead: false,
      xmlns: {
        xhtml: true,
        news: false,
        video: false,
        image: false
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es'
        }
      },
      // Remove trailing slash
      serialize(item) {
        item.url = item.url.replace(/\/$/g, '')
        return item
      }
    }),
    playformInline(),
    playformCompress({
      HTML: {
        'html-minifier-terser': {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          maxLineLength: 0,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          noNewlinesBeforeTagClose: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
          useShortDoctype: true
        }
      },
      JavaScript: {
        terser: {
          compress: {
            arguments: true,
            drop_console: true
          },
          format: {
            comments: false,
            indent_level: 2
          },
          ecma: 2020
        }
      },
      Cache: true,
      CSS: false,
      Image: false,
      SVG: false
    }),
    compressor({ gzip: false })
  ]
})
