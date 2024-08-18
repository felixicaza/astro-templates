# 🚀 Astro Templates

A collection of Astro templates.

## 👀 Features

- 🚀 Latest version of Astro
- ✅ ESLint and Prettier ready
- 🌐 Tunnels ready
- 🌎 Internationalization ready (i18n)
- ⚡ Performance focus
- 🛡️ Security focus
- ⚙️ SEO focus
- 🖼️ Image processing
- ✨ SVG icons support
- 🪄 Cross-document view transitions ([Reference](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document))
- 💅 Tailwind support
- 📱 Progressive Web App support
- ⚛ Integration with React

## 🤔 How to use

Astro allows the use of official or customized [starter templates](https://docs.astro.build/en/install/auto/#starter-templates). To use this collection of templates you can follow this syntax in the terminal:

With NPM:

```bash
npm create astro@latest -- --template <github-username>/<github-repo>/<folder>
```

With PNPM:

```bash
pnpm create astro@latest --template <github-username>/<github-repo>/<folder>
```

### Examples

Using [base](./base) template with NPM:

```bash
npm create astro@latest -- --template felixicaza/astro-templates/base
```

Using [base](./base) template with PNPM:

```bash
pnpm create astro@latest --template felixicaza/astro-templates/base
```

## 📖 Templates

- [base](./base): Template with basic integrations, extra configurations for Astro, SEO schema powered by [astro-seo-schema](https://github.com/codiume/orbit/tree/main/packages/astro-seo-schema), SVG icons support powered by [astro-iconify](https://github.com/manuelmeister/astro-iconify) and Tunnels to improve development enviroment powered by [astro-tunnel](https://github.com/morinokami/astro-tunnel).
- [base-img](./base-img): Same as [base](./base) template but with [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools) integration for image processing.
- [i18n](./i18n): Same as [base](./base) template but with [@astrolicious/i18n](https://github.com/astrolicious/i18n) integration for internationalization support (i18n).
- [pwa](./pwa): This template extends the [base](./base) template, with the necessary configurations for Progressive Web Apps (PWA) support powered by [@vite-pwa/astro](https://github.com/vite-pwa/astro).
- [pwa-img](./pwa-img): Same as [pwa](./pwa) but with [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools) integration for image processing.
- [react](./react/): Template with the necessary configurations for island support with React.
- [react-img](./react-img/): Same as the [react](./react) template, but with support for image processing.
- [react-pwa](./react-pwa/): Support for islands with React and Progressive Web Apps (PWA).
- [react-pwa-img](./react-pwa-img/): Same as the [react-pwa](./react-pwa) template, but with support for image processing.

---

Made with ❤️ by [Felix Icaza](https://felixicaza.com).
