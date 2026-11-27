# Editing, environments and deployment

## Environments

- Development: `npm run dev`. Static files plus a local API response that always says sending is unavailable.
- Review: `npm run build && node scripts/review.mjs`. Noindex; local-only tools; disabled sending and payments. The review copy is served from the rebuild branch, not GitHub Pages.
- Production: build with `DEPLOY_ENV=production` and the verified `SITE_URL`, then deploy the Worker and `dist` assets to Cloudflare after explicit owner approval.

Keep `.env`, `.dev.vars`, tokens and secret values outside Git. `.env.example` lists the settings; it does not contain credentials. Build-time variables are read from the shell, not automatically loaded from `.env`.

| Variable / binding | Purpose |
| --- | --- |
| `SITE_URL` | Exact HTTPS origin, no trailing slash; production request-origin check |
| `DEPLOY_ENV` | `preview` or `production` |
| `INQUIRIES_ENABLED` | Must be `true` at both build and runtime to expose the connected form |
| `PUBLIC_TURNSTILE_SITE_KEY` | Public site key included in the generated browser configuration |
| `TURNSTILE_SECRET_KEY` | Worker secret; never in static output |
| `FORMSPREE_FORM_ID` | Worker secret containing the verified Formspree form ID |
| `INQUIRY_GUARD` | Durable Object binding for throttling and duplicate delivery state |
| `ASSETS` | Cloudflare static asset binding |

## Formspree connection — intentionally deferred

1. In the owner's Formspree account, create or select the ZySolves form and verify its recipient inbox. The owner said they will do this later; no endpoint was supplied.
2. Review Formspree's domain restrictions, submission quota, retention, anti-spam settings and privacy terms. Keep the destination on `formspree.io`; the implementation constructs the URL from a validated ID.
3. Create a Cloudflare Turnstile widget for the approved staging and production hostnames. Set the public key at build time and secret through Worker secrets.
4. Set `FORMSPREE_FORM_ID` and `TURNSTILE_SECRET_KEY` in the target Worker environment. Do not paste secret values into committed files.
5. Test on a staging Worker with its exact origin. Turnstile verifies both hostname and the `inquiry` action. Production runtime remains closed until all gates are configured.
6. With owner-authorised test data, verify success, actual inbox receipt, failure messages, token expiry, retry and duplicate behaviour. Provider HTTP acceptance is not proof that an email reached the inbox; verify that separately.
7. Approve final privacy/contact information, then enable the build and runtime flags. No newsletter consent is bundled into project inquiries.

The browser downloads a plain-text brief locally when sending is disabled. It does not store inquiry drafts in localStorage or imply that a download submits the form. No automatic booking, quote acceptance or payment occurs.

## Cloudflare domain diagnosis

On 26 November 2026, public DNS-over-HTTPS queries returned:

- `zysolves.com A`: status 0 (NOERROR), no answer records, Cloudflare SOA authority.
- `zysolves.com AAAA`: status 0, no answer records.
- `www.zysolves.com CNAME`: status 3 (NXDOMAIN).

The supplied Cloudflare screenshot showed an active registration and no connected Worker. This supports a missing website destination, rather than an expired registration. Account-level DNS, redirects and SSL settings were not inspected or modified. Recheck at launch because DNS may change.

## Exact production path after owner approval

1. Review and approve the draft PR, final prices, service boundaries, business/contact details and policy drafts. Complete the launch checklist first.
2. Keep the backup branch. Disable GitHub Pages in repository settings before merging a build that removes the old root HTML, so it does not become a broken or unintended commercial host. The current GitHub Pages site is unchanged until then.
3. Connect the GitHub repository to Cloudflare Workers Builds, or use the official Wrangler CLI from an authenticated owner account. No authentication, purchase or account subscription was performed in this work.
4. Create a staging Worker using the default `zysolves-review` configuration. Run `npm test`, `npm run build` and `npm run check`; upload the Worker with its `dist` assets. This is the place to test real Cloudflare headers, Durable Object persistence and the form provider.
5. For production, build with `DEPLOY_ENV=production SITE_URL=https://zysolves.com`. Keep `INQUIRIES_ENABLED=false` unless setup and inbox tests have passed. Run the remaining checks with the same environment.
6. Deploy `wrangler.jsonc`'s `production` environment. The intended CLI operation is `npx wrangler deploy --env production`. Use the official current Wrangler release and review its plan before execution. This has **not** been run.
7. In the production Worker's Settings → Domains & Routes, add `zysolves.com` as a Custom Domain. Because Cloudflare manages the domain, let the Custom Domain flow create the required DNS and certificate. Do not copy GitHub Pages A records into this architecture. The exact UI labels may vary.
8. Set up `www.zysolves.com` to redirect to the apex using Cloudflare's supported redirect configuration. Preserve the path and query. If assigning both names to a Worker, implement and verify the canonical redirect first. Do not enable a second form origin without updating its controls.
9. Verify HTTPS, all core routes, redirects from old `.html` paths, 404 behaviour, fonts, response headers, sitemap, robots, canonical URLs and the real inbox. Check mobile and keyboard use on the actual production host.
10. Only after separate explicit approval, enable paid checkout and verify a sandbox purchase, receipt, entitlement and protected download on the selected commerce provider. Never route paid files through this public repository.

No production routes are committed in `wrangler.jsonc`, so deploying the staging configuration cannot claim `zysolves.com` by itself. The production environment has `workers_dev:false`; it needs the approved Custom Domain before being publicly reachable.

## Rollback

Before launch, rollback simply means closing the draft PR; the old `main` site is untouched. After launch, use Cloudflare's deployment rollback to the previous known-good version. Reverting to the legacy branch is a source recovery option, not an automatic DNS change. Check the deployed asset version and any data migrations before rolling back.

## Common edits

- Add a service: add one record in `services`; detail routes and matching collection cards are generated. Include real deliverables, exclusions, revisions and timing.
- Change a price: edit the catalogue and the estimator configuration together. The estimator currently mirrors the core package values; tests enforce their relationship.
- Add a free product: create and test the deliverable, add a catalogue record with `status:'free'`, file, version, compatibility and contents. Build and check all links.
- Add a paid product: first finish and test its deliverable outside the public repository. Choose a provider and only then implement an available status, trusted checkout mapping and delivery. Merely changing `status` does not enable commerce.
- Add a page or journal note: edit `src/pages.mjs`. Every page needs a unique title, description, one H1 and useful navigation.
- Replace artwork: update components or assets, preserve dimensions and meaningful alt text, and verify the mobile crop. The current product covers are designed artwork, not screenshots of spreadsheets.
- Change typography or palette: CSS custom properties at the top of `site.css`; fonts are locally hosted under OFL licences. Check contrast and line wrapping after changes.
- Change the announcement: `brand.announcement` in the catalogue. No scarcity or promotion claims are enabled.
- Rebuild free resources: `npm run resources:build`, then `npm run build`. The build regenerates CSP hashes for inline downloadable-tool scripts.

## Measurement

Analytics is deliberately not connected. Start with aggregate visits, service/product views, brief starts, provider-accepted inquiries and completed orders. Do not send names, emails, budgets, form text or calculator inputs as analytics events. A purchase must be confirmed by the commerce provider, not inferred from reaching a thank-you URL. Review consent and privacy disclosures before adding measurement. A future event adapter belongs beside the browser interactions, with checkout events verified on the provider side.
