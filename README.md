# Nourish360 — Eat Smart. Move Well. Live Better.

Educational food and wellness app (Next.js + TypeScript), exported as a static site and deployed to GitHub Pages.

## Run in Codespaces
```
npm install
npm run dev
```
Open the forwarded port 3000.

## Deploy (GitHub Pages, free)
1. GitHub Pages on the Free plan needs a **public** repository (Settings → General → Danger Zone → Change visibility).
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes.
4. Site URL: `https://<your-username>.github.io/Nourish360/`

## Adding content
Edit `lib/data.ts`. Every topic has summary, sections, red flags (where relevant) and sources.
All health content is DRAFT until a qualified professional reviews it.

## Safety
No secrets in the repo. Content is educational, not diagnostic. Keep red-flag advice clinician-reviewed.
