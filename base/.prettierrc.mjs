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
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  astroAllowShorthand: false
}

export default config
