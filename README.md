# ZySolves — The Digital Studio

A romantic, independent digital studio for custom websites, scoped business automation, digital resources and personalised celebrations. Burgundy, ballet pink and warm ivory; Instrument Serif and DM Sans; entirely online.

**Status: review build, not launched.** Formspree sending is deliberately disabled at the owner's request. Paid products, checkout, receipts and protected delivery are not connected. The production domain and `main` branch have not been changed.

- [Review website](https://raw.githack.com/Zynette/ZySolves/rebuild/digital-studio-20261126/review-preview/index.html)
- [Complete implementation and launch report](docs/HANDOVER.md)
- [Setup and deployment](docs/OPERATIONS.md)
- [Business, pricing and commerce decisions](docs/BUSINESS.md)
- [Testing and security](docs/QA.md)
- Original site: branch `backup/pre-studio-rebuild-20261126`, commit `6a1503f72f617b22f55d1baff1db796f5a234d64`.

## Work locally

Node.js 22 or newer; Node 24 used for this build. There are no application package dependencies and no install step.

```sh
npm run dev
npm test
npm run build
npm run check
```

`npm run dev` serves a local-only preview on port 3000 (or `PORT`). It never delivers inquiries. The Cloudflare Worker is a separate production entry point.

## Where to change things

| Change | Source |
| --- | --- |
| Brand details, packages, prices, care plans, catalogue | `src/catalogue.mjs` |
| Shared header, footer, artwork, metadata, wordmark | `src/components.mjs` |
| Page copy, sections, demos and draft policies | `src/pages.mjs` |
| Colours, type, spacing, responsive rules | `public/assets/site.css` |
| Shop, bag, calculators, menu, brief and preview interactions | `public/assets/app.mjs` |
| Server validation | `src/validation.mjs` |
| Formspree relay, Turnstile, throttling and duplicate handling | `src/worker.mjs` |
| Free downloadable tools | `scripts/resources.mjs` and generated `public/downloads/` |
| Static output and metadata | `scripts/build.mjs` |
| Review snapshot | `scripts/review.mjs` |
| Cloudflare environments | `wrangler.jsonc` |

`dist/` is generated and ignored. `review-preview/` is a committed static snapshot for review, with rewritten links and no APIs. Do not use that folder as the commercial production build. Build `dist/` from source for Cloudflare.

## Architecture decision

The original repository was plain HTML/CSS/JavaScript, with no package or build configuration. This rebuild uses a small Node static generator with shared components and catalogue data, browser ES modules, and a Cloudflare Worker for the inquiry API. It preserves static page delivery without a client-side framework or hydration cost. Astro remains a reasonable future migration if the journal or product authoring workflow grows; it is not required for the initial catalogue. This is an intentional departure from the preferred Astro/TypeScript starting point, not a claim that Astro was used.

No original paid files are in this public repository. Only the complimentary HTML resources are downloadable. Future paid files belong in the selected provider's private delivery system.
