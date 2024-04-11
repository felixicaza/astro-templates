/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: '*.{yaml,yml}',
      options: {
        tabWidth: 3
      }
    }
  ],
  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  astroAllowShorthand: false,
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@data/(.*)$',
    '^@layouts/(.*)$',
    '^@pages/(.*)$',
    '^@components/(.*)$',
    '^@scripts/(.*)$',
    '^@styles/(.*)$',
    '^@/(.*)$',
    '^.[./].*'
  ],
  importOrderParserPlugins: ['typescript', 'astro']
}

export default config
