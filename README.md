# 🚀 Astro Templates

A collection of Astro templates. _(mostly for personal use)_

## 👀 Features

- 🚀 Latest version of Astro
- ✅ ESLint and Prettier ready
- ⚡ Performance focus
- 🖼️ Image processing
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

With NPM:

```bash
npm create astro@latest -- --template felixicaza/astro-templates/base
```

With PNPM:

```bash
pnpm create astro@latest --template felixicaza/astro-templates/base
```

## 📖 Structure

- [base](./base): Template with basic integrations and extra configurations for Astro.
- [base-img](./base-img): Same as [Base](./base) template but with [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools) integration for image processing.
- [pwa](./pwa): This template extends the [Base](./base) template, with the necessary configurations for Progressive Web Apps (PWA) support powered by [@vite-pwa/astro](https://github.com/vite-pwa/astro).
- [react](./react/): Template with the necessary configurations for island support with React.
- [react-img](./react-img/): Same as the [react](./react) template, but with support for image processing.
- [react-pwa](./react-pwa/): Support for islands with React and Progressive Web Apps (PWA).
- [react-pwa-img](./react-pwa-img/): Same as the [react-pwa](./react-pwa) template, but with support for image processing.

---

Made with ❤️ by [Felix Icaza](https://felixicaza.com).
