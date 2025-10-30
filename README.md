# Aladian Trading PLC Marketing Site

A premium marketing experience for Aladian Trading PLC built with Next.js 14, Tailwind CSS, shadcn/ui patterns, and Framer Motion. Ready to deploy to Netlify with integrated forms and serverless functions.

## Tech stack
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS with custom theming
- shadcn/ui-inspired components using Radix primitives
- Framer Motion for interactions
- Netlify Functions for enhanced form handling

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Then visit [http://localhost:3000](http://localhost:3000).

3. **Lint the project**
   ```bash
   npm run lint
   ```

## Building for production

```bash
npm run build
npm run start
```

## Deploying to Netlify

1. Push this repository to GitHub (or your preferred Git provider).
2. In Netlify, select **Add new site** → **Import an existing project** and connect the repository.
3. Use the default build settings:
   - Build command: `next build`
   - Publish directory: `.next`
4. Deploy. The included `netlify.toml` and `@netlify/plugin-nextjs` handle routing and ISR.

### Manual deploy (drag and drop)

1. Run `npm run build`.
2. Zip the project directory (including the `.next` output) and upload it via Netlify's **Deploys** → **Deploys from drop**.

## Netlify Forms

The contact form uses Netlify Forms via HTML attributes and progressively enhances to call the serverless function at `/.netlify/functions/contact` for real-time validation and responses.

## Project structure

```
app/               # App Router pages & layouts
components/        # Reusable UI components
lib/               # Config, SEO, utility helpers
netlify/functions/ # Serverless contact handler
public/            # Static assets & imagery
data/              # Editable JSON content
```
