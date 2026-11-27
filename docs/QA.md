# Validation and security review

## Automated results

`npm test`: **14 tests passed**, no failures.

Covered: website-estimate inclusions and extra pages; automation time/value arithmetic; savings and margin boundaries; real/free catalogue deliverables; consent, field types and allowed values; dangerous URLs and impossible dates; fail-closed integration gates; HTTP method, origin and content-type checks; actual streamed body-size limits; validated forwarding; accepted delivery; repeated-request suppression; changed-payload retries; failed Turnstile verification; hostname/action binding; uncertain provider failures; five-attempt throttling.

These are Node unit/integration tests with mocked provider responses and in-memory storage. They do not establish real Formspree delivery, Cloudflare Durable Object transactional behaviour, bot challenge completion or production headers.

`npm run build`: **46 routes generated**. Four standalone downloadable tools and the root 404 file bring the output to **51 HTML files**.

`npm run check`: **1,517 internal navigation/asset references checked**, no missing referenced local files. One H1, language and viewport metadata checked on each HTML file. Downloadable resource scripts parsed. Preview inquiry sending verified disabled. CSS asset references checked.

Syntax checks passed for the browser module, Worker and review build script. There are no application runtime package dependencies to audit. Cloudflare tooling and CI actions still require normal update maintenance.

## Browser observations

Cloud Chrome desktop and responsive iframe views were used; this is not a physical-device certification.

- Desktop homepage composition inspected and captured.
- Main collection, pricing, inquiry, work, about, systems, studio and product pages inspected at a narrow 320px iframe width; no material horizontal overflow observed.
- Homepage checked at 320, 375/390, 768 and 1024px iframe widths; desktop browser around 1350px. A 1px fractional overflow was observed in the 320px homepage measurement, with no material clipped content. Actual iOS/Android rendering remains to be checked.
- Mobile menu opens, updates `aria-expanded`, and closes with Escape.
- Shop search returns one matching savings/pricing resource; saved bag persists across page navigation.
- Website estimator: business site, seven pages and booking yielded $1,699–$2,150 CAD and transferred those selections into the inquiry form.
- Conditional inquiry fields change with service selection. Sending remains disabled in preview.
- Pricing download: $40 unit cost with 50% target margin yields $80 price and $40 gross profit. 100% margin displays a validation message.
- Savings download: initial example yields 15 months. Zero contributions displays an explanatory state rather than Infinity.
- Wedding concept: Sage theme selection updates the pressed state; demo RSVP explicitly confirms that nothing was sent or stored.
- Refined mobile product artwork to keep the monogram and title within the paper frame.

Screenshots: [desktop home](screenshots/desktop-home.jpg), [mobile home](screenshots/mobile-home.jpg), [desktop shop](screenshots/desktop-shop.jpg).

## Accessibility

Implemented semantic landmarks, language metadata, one H1, labels, native form constraints, skip link, visible focus, keyboard-operable controls, Escape handling, live result/status messages and reduced-motion support. Main functional controls have at least 44px height. Body text uses dark cocoa or burgundy on light backgrounds; dark panels use ivory/pink text. Decorative mockup labels are intentionally smaller and should not carry essential information.

Not yet verified: full WCAG 2.2 AA audit, axe scan, screen-reader testing, 200–400% zoom on every route, native mobile assistive technology, external provider accessibility, and every palette/text combination. Do not advertise certified compliance.

## Performance

Static pages, local WOFF2 fonts, no framework hydration, no analytics or third-party widgets during preview, small browser modules and SVG/CSS artwork. Initial measured output was approximately 454 KB before the PNG share image and final documentation changes; homepage about 18 KB, CSS about 28 KB and browser module about 12 KB uncompressed. The social PNG is metadata, not an image loaded in the homepage layout.

No Lighthouse run or field Core Web Vitals measurement was completed. No score of 95+ is claimed. Measure the actual Cloudflare staging/production build, caching and third-party integrations before making performance claims.

## Security decisions and limitations

- No secrets, card fields, paid files, private download URLs or real customer records are committed.
- Server-side allowlisted input validation, URL scheme checks, consent requirement and streamed body-size cap.
- Strict request origin and method checks; no permissive CORS.
- Formspree URL is constructed only from a validated ID. Redirects are not treated as success.
- Turnstile is bound to the expected hostname and `inquiry` action.
- A Durable Object stores throttling and delivery state. It stores a data fingerprint and timestamps, not inquiry contents; object names derive from a date-scoped hashed IP. This is pseudonymous anti-abuse processing and belongs in the final privacy disclosure.
- Duplicate IDs are not resent after accepted delivery. An uncertain upstream outcome remains pending rather than blindly sending again. The date-scoped object and 24-hour cleanup mean this is bounded retry protection, not an unlimited exactly-once guarantee.
- Frontend query values are assigned as text/form values, not injected as HTML. Bag IDs are checked against the catalogue. Templates use trusted source content; editing source is a privileged action.
- Static production headers include CSP, nosniff, HSTS, referrer policy, framing protection and permissions restrictions. Inline script hashes are generated for metadata and standalone free tools. Inline styles remain allowed for artwork/layout; no unsafe-inline script policy is used.
- Static review hosting and the local server do not reproduce Cloudflare's response-header enforcement. Validate headers on a staging Worker.
- Payment webhooks, order entitlements, protected download expiry and tax logic are **not implemented or tested**. Commerce is intentionally unavailable rather than simulated.
- Real provider errors, inbox delivery, throttling persistence and concurrent requests must be tested in staging before opening inquiries.

## Release gate

A passing local test suite does not make this a launched business. Required: owner-approved copy/prices/policies, real contact route, Formspree/Turnstile setup and inbox test, staging Worker checks, final mobile/accessibility review, explicit domain/launch approval. Paid sales require their own provider and delivery tests.
