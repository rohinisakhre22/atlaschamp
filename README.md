# AtlasChamp Website

Marketing site for **AtlasChamp** — Atlassian services including migrations, upgrades, custom development, automation, integrations, and consulting.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) for contact form validation

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | ESLint                   |
| `npm run test`    | Vitest (watch)           |
| `npm run test:run`| Vitest (single run)      |
| `npm run format`  | Prettier write           |

## Contact form

Submissions POST to the URL in `VITE_CONTACT_ENDPOINT`. Copy `.env.example` to `.env.local` and set your endpoint (e.g. Formspree, Netlify Forms, or a custom API expecting JSON):

```env
VITE_CONTACT_ENDPOINT=https://your-endpoint.example/submit
```

Without this variable, the form shows a clear configuration error instead of a fake success state.

Service cards link to `#contact?service=<id>` to pre-select the service in the form.

## Project structure

```
src/
  components/
    layout/     Header, Footer, Container, Section, SkipLink
    sections/   Hero, Services, About, Contact
    ui/         Button, Input, Textarea, Select
  constants/    Site copy and data (single source of truth)
  hooks/        useContactForm
  lib/          Utilities, validation, API submit
  types/
```

## CI

GitHub Actions runs lint, tests, and build on push/PR to `main` or `master`.
