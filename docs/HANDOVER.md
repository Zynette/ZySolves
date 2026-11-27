# ZySolves rebuild handover

**Outcome:** implemented a complete review website with a new visual identity, 46 routes, ten scoped service packages, four functional free resources, three live concept sites and practical interactive tools. This is a review build with documented launch dependencies, not a claim of production readiness.

**Live-domain status:** no merge, production deployment, DNS modification, paid subscription or real payment activation was performed. Formspree was explicitly deferred by the owner. The original site is preserved in `backup/pre-studio-rebuild-20261126` at `6a1503f72f617b22f55d1baff1db796f5a234d64`.

[Open the website review](https://raw.githack.com/Zynette/ZySolves/rebuild/digital-studio-20261126/review-preview/index.html)

[Implementation branch](https://github.com/Zynette/ZySolves/tree/rebuild/digital-studio-20261126)

## Brand identity

Deep burgundy `#590F25`, black cherry `#380F20`, ballet pink `#F1CDD6`, rose milk `#FBE9EC`, ivory `#FFF8F2`, dark cocoa `#302125`. Locally hosted Instrument Serif with italic accents and DM Sans. Wordmark variants, monogram/favicon, share graphic, original botanical line art and stationery-inspired covers are included. The layout alternates editorial sections, dark systems panels and romantic celebration compositions rather than repeating identical cards throughout.

## Implemented pages

| Collection | Routes |
| --- | --- |
| Core | `/`, `/services/`, `/studio/`, `/systems/`, `/celebrations/`, `/work/`, `/pricing/`, `/about/` |
| Customer journey | `/start/`, `/contact/`, `/consultation/`, `/faq/` |
| Shop | `/shop/`, seven `/shop/{product}/` detail pages, `/bag/` |
| Honest commerce states | `/checkout/`, `/order/` — inactive, no payment or fabricated order confirmation |
| Free resources | `/resources/`, four self-contained `/downloads/*.html` tools |
| Journal | `/journal/`, `/journal/before-your-website/`, `/journal/first-automation/` |
| Policies | `/privacy/`, `/terms/`, `/refunds/`, `/licence/`, `/accessibility/` |
| Service details | `/services/landing-page/`, `/services/business-website/`, `/services/website-redesign/`, `/services/ecommerce/`, `/services/spreadsheet/`, `/services/onboarding/`, `/services/workflow/`, `/services/invitation/`, `/services/wedding-website/`, `/services/wedding-rsvp/` |
| Demonstrations | `/demos/atelier/`, `/demos/evergreen/`, `/demos/wedding/` |
| Error handling | `/404/` and root `404.html` |

Product categories are filters within the shop, not duplicate thin SEO pages. Scheduling explains the reviewed-inquiry process; no unsupported calendar integration is shown.

## Functionality and completion states

| Area | Implemented / tested | Dependency or limit |
| --- | --- | --- |
| Navigation and layout | Shared desktop/mobile navigation, footer, responsive sections, keyboard focus | More physical-device and assistive-tech testing |
| Shop | Search, category/status filters, sorting, details, persistent saved bag, free downloads | Bag is not a paid cart |
| Project inquiry | Conditional fields, validation, estimate prefill, local brief download, real server relay code | Sending disabled until owner supplies Formspree and approves setup |
| Security | Validation, size limits, Turnstile integration, rate/duplicate protection, generated headers | Production provider and Cloudflare tests remain |
| Website estimator | Page count, site type, booking, starter copy and branding, non-binding range | Complex work requires a custom proposal |
| Systems calculator | Transparent monthly time/value calculation | Gross labour value, not guaranteed cash savings |
| Finders | Collection recommendation and design-style selection with inquiry handoff | A useful starting point, not a complex assessment |
| Concept work | Beauty treatment selection, cleaning estimate, wedding themes and demo RSVP | Fictional businesses; no client/testimonial claims |
| Before/after | Labelled conceptual design comparison slider | Not a measured client result |
| SEO | Unique metadata, canonical URLs, sitemap, preview noindex, share image, Organization JSON-LD and Service microdata | Product rich results and indexation checks deferred to real product launch |
| Brand assets | Wordmark variants, monogram, favicon, social image, botanical and cover styles | Owner can replace or extend artwork |
| Analytics | Measurement plan documented | No external analytics account or events activated |
| Commerce | Provider comparison and implementation plan; clear unavailable states | No checkout, order processing, receipts or paid delivery yet |

## Resources created

- **The Pricing Companion:** unit cost, target margin, model selling price and gross profit.
- **The Savings Companion:** goal, current balance, two contributions, progress and months required.
- **The Project Prelude:** editable project brief with optional browser-local save, clear and print.
- **The Wedding Companion:** six editable categories, allocated spending and remaining/over-budget total.

These are functional complimentary HTML tools, not Excel workbooks. They work offline after downloading. The Finance Edit, Wedding Edit and Atelier Template are coming-soon listings and cannot be purchased.

## Portfolio demonstrations

- **Atelier:** warm editorial beauty studio, treatment menu and demo next step. Objective: express a personal service brand with clear choices.
- **Evergreen:** fresh green home-services design and illustrative cleaning estimate. Objective: make a practical service easy to understand.
- **Amelia & Julian:** romantic wedding site with rose, sage and blue palettes, itinerary and demo RSVP. Objective: bring celebration details together without claiming a real event.

All use HTML/CSS and small browser modules. No fictional business is presented as a paying client.

## Architecture and audit findings

The old ZySolves site was static HTML. Its form simulated successful submission without sending a request, and several pages repeated unsupported 10–20-hour saving claims. These behaviours were removed. The prior HamiltonTechHelp repository informed the Worker relay/validation pattern; its support categories, email address, customer flows and visual design were not carried into the new site.

The selected stack is a dependency-free Node static generator, ES modules and Cloudflare Worker. See [README](../README.md) for the rationale for not introducing Astro/TypeScript in this first implementation. Shared content and catalogue data make prices, packages and page details editable. Paid files must stay outside the public repository.

## Testing, accessibility and performance

14 automated tests pass. The build produces 46 routes. The static check validates 51 HTML files and 1,517 internal references. Browser checks cover desktop, narrow mobile, tablet widths, navigation, saved resources, estimates, conditional inquiry fields and calculator/demo cases. See [QA report](QA.md) for exactly what was and was not tested.

No Lighthouse score, WCAG certification, real email delivery or payment test is claimed. The site has a small static payload, but performance must be measured on its actual host with final integrations.

## Review ratings

These are subjective development-review judgements, not independent certifications or measured customer outcomes.

| Area | /10 | Reason |
| --- | ---: | --- |
| Visual design | 8 | Coherent editorial identity and custom compositions; more original photography would add depth |
| Originality | 7.5 | Original layouts/artwork; stationery and serif motifs are familiar design conventions |
| Brand identity | 8 | Consistent palette, type, copy and collection structure; wordmark could receive a later bespoke lettering pass |
| Professionalism | 8 | Clear scopes, honest concepts and consistent presentation; real business details remain to approve |
| Customer experience | 7 | Useful exploration and briefs; inquiry sending and paid journeys are unavailable |
| Mobile responsiveness | 8 | Tested responsive layouts and menu; not a full physical-device matrix |
| Business credibility | 7 | Honest founder and process information; no actual client case studies or verified testimonials yet |
| Sales effectiveness | 6.5 | Clear pathways, demonstrations and prices; no conversion data and no live sales pipeline |
| Accessibility | 7 | Semantic and keyboard foundations; full audit and assistive-tech tests outstanding |
| Security | 7 | Fail-closed integrations and meaningful controls; staging/provider verification still required |
| Performance | 8 provisional | Small static architecture; no Lighthouse or field measurements |
| SEO | 7.5 | Technical metadata and sitemap foundation; preview deliberately unindexed |
| Maintainability | 7.5 | Shared catalogue/components, no dependencies and tests; page content module can be split as it grows |
| Digital product experience | 7 | Four usable free resources; paid product fulfilment not yet built |
| Production readiness | 5 | Review-ready; inbox, business/policy decisions, hosting verification and commerce remain gated |

Customer perspective: clear offerings and prices, but cannot yet send a real request. Designer perspective: a coherent direction with room for richer art direction. Engineer perspective: small, testable foundation with staging gates. Shop-owner perspective: useful free collection, paid fulfilment pending. Security perspective: disabled external actions reduce risk while integration controls are tested. Mobile perspective: readable and usable at tested widths. Template buyer: contents/compatibility visible, free files available, paid availability honest. Automation buyer: scoped deliverables and transparent assumptions. Wedding customer: live palette preview and clear package boundaries.

## What remains, in priority order

1. Owner review of the design, draft prices, final business/contact information and policies.
2. Formspree endpoint and destination verification; Turnstile setup; staging delivery and receipt test. The owner asked to do this later.
3. Cloudflare staging deployment, real headers/storage tests, final accessibility/browser check.
4. Explicit production approval, merge, Custom Domain connection and DNS verification.
5. Finish and validate the first paid deliverable; approve a commerce provider; sandbox checkout, receipts, protected delivery and refund tests; separate approval for live payments.
6. Add real client work, optional founder photography, more products and privacy-conscious measurement as evidence and operational capacity grow.

[Operating costs, commerce comparison and Canadian setup](BUSINESS.md). [Exact deployment and editing instructions](OPERATIONS.md).

## Reviewing and approving launch

Review the preview's homepage, services, shop, calculator, wedding demo and mobile view. Request changes on the draft PR or in chat. Approval of the visual design alone does not enable payments or connect DNS. Once the launch gates above are satisfied, explicitly approve the production merge/domain connection; approve live commerce separately after its test results are available.
