# Business and launch decisions

## Positioning and launch scope

ZySolves is one independent founder's digital studio. The four collections are Studio, Systems, Shop and Celebrations. The website does not claim staff, client counts, awards, testimonials, guaranteed savings or commercial results. The three portfolio brands are fictional concepts.

Removed from the new offering: computer/device troubleshooting, printer and Wi-Fi help, Outlook/Microsoft 365 support, device setup, file transfer, remote screen sharing, emergency support, unlimited support and general virtual assistant work. Legacy URLs redirect to the relevant new collection after a Cloudflare deployment.

Launch emphasis: sell a small set of scoped website and workflow projects, use the free resources as useful demonstrations, and add paid products only after finishing and testing them. A growing catalogue should not distract from a clear inquiry path.

## Draft pricing rationale

The brief's introductory prices are achievable only with very constrained, repeatable work. The proposed draft increases protect room for discovery, responsive QA, revisions and handover. These are judgement-based recommendations, not a market survey or a revenue guarantee.

| Offer | Brief starting point | Draft starting price CAD | Scope logic |
| --- | ---: | ---: | --- |
| One-page website | 299 | 499 | Six sections, supplied content, two revision rounds |
| Small business website | 699 | 1,199 | Five pages, one integration, handover |
| Redesign | 499 | 799 | Three pages and a redirect plan |
| E-commerce | 1,199 | 1,899 | Hosted commerce, ten starting products, no bespoke payments |
| Spreadsheet | 149 | 199 | Three worksheets, five agreed calculations |
| Onboarding workflow | 299 | 449 | Two applications, one template, documented failures |
| Multi-system workflow | 599 | 799 | Three applications, five steps |
| Custom invitation | 49 | 79 | One supplied-image design, one revision |
| Wedding website | 149 | 299 | Up to five sections, no RSVP backend |
| Website with RSVP package | 249 | 499 | Hosted RSVP integration plus save-the-date |

At a hypothetical internal target of $50/hour, a $499 package allows about 10 hours before overhead and tax. Track actual hours and scope during early projects; raise or narrow packages if that allowance is unrealistic. Final tax treatment and prices require owner approval.

Care plans are scoped at $49, $89, $149 and $149/month. Time caps, scheduled turnaround, non-rollover and separate approval for extra work are displayed. They are not emergency or unlimited support plans.

## Digital products actually created

1. The Pricing Companion: offline HTML calculator for unit cost, target gross margin, suggested price and gross profit.
2. The Savings Companion: offline HTML planner for a shared savings goal, starting amount, two contributions and months required; no investment or mortgage assumptions.
3. The Project Prelude: editable/printable website brief, optional local draft save and clear function.
4. The Wedding Companion: offline HTML category budget with total allocation and remaining/over-budget amount.

All four are complimentary, version 1.0. Personal/internal business use is allowed; redistribution and resale are excluded. Each has instructions and a product detail page. No email is required.

The Finance Edit, Wedding Edit and Atelier Template remain marked coming soon. The catalogue describes plans, not completed paid files. No paid digital asset, private download link, payment key or customer order is included in the repository.

## Commerce comparison — researched 26 November 2026

| Approach | Entry cost / transaction model | Delivery and taxes | Fit |
| --- | --- | --- | --- |
| Payhip | Free plan: $0/month plus 5%; payment processor fees additional | Hosted digital delivery; current pricing page describes collection/remittance for specified regions; verify exact account and product coverage | Low upfront cost and operationally simple for a small template shop |
| Lemon Squeezy | No ecommerce monthly charge; base 5% + US$0.50 per transaction, with possible additional fees | Merchant-of-record model; signed/throttled downloads and tax handling under provider terms | Strong candidate for international digital goods; approval and eligibility required |
| Stripe plus custom private delivery | Processing plus custom storage, webhook, fulfilment and tax administration costs | Owner must design secure entitlements and delivery, or use an additional service | More control, but unnecessary launch complexity for a small initial catalogue |

Recommendation: start by evaluating Payhip for operational simplicity or Lemon Squeezy for a merchant-of-record model; do not build a custom payment/file-delivery service for launch. No account was created and no provider was activated. The fee currencies and conversion costs need to be checked in the selected account.

Before commerce can be enabled: provider approval, payout identity, product eligibility, CAD price/tax display, uploaded real files, final licence/refunds, test purchase, receipt delivery, expired-link behaviour and verified protected download. A browser return URL alone must never unlock a file. The current bag is a saved list of free resources, not a paid cart. Checkout/order routes clearly explain their inactive status.

Primary references:

- https://payhip.com/pricing
- https://www.lemonsqueezy.com/pricing
- https://docs.lemonsqueezy.com/help/payments/sales-tax-vat

## Estimated recurring costs

| Item | Planning allowance / limitation |
| --- | --- |
| Cloudflare static assets | Free static asset delivery under current published pricing |
| Worker requests | Free tier includes 100,000/day across the account; paid Workers starts at US$5/month if needed |
| Durable Objects | Usage and plan limits apply separately; confirm eligibility and quotas before enabling inquiries |
| Formspree | Existing account; incremental cost depends on the owner's plan and submission quota, not verified |
| Commerce | No monthly cost on the above entry plans; transaction and possible cross-border/processor fees apply |
| Domain | Existing renewal cost not supplied; screenshot showed renewal in February 2027 |
| Mailbox / optional software | Not selected or purchased; confirm before quoting a total |

A low-traffic site may fit free hosting allowances, but this is not a guaranteed $0 operating-cost promise. Static asset pricing: https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/ ; Worker plans: https://www.cloudflare.com/plans/developer-platform/ .

## Canadian setup before taking payments

This is a preparation checklist, not a claim of legal compliance. Confirm the actual business circumstances before launch.

- Confirm Ontario business-name registration for operating as ZySolves rather than the owner's full legal name, and the business structure. Do not imply incorporation. Ontario guidance: https://www.ontario.ca/page/business/start/decide-ownership-structure
- Determine GST/HST registration and place-of-supply treatment. CRA's small-supplier rules consider worldwide taxable supplies and the $30,000 threshold in a single calendar quarter or over four consecutive quarters, with different timing consequences. Do not add HST simply because the site is Canadian; confirm registration status. https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html
- Confirm payment-provider identity, payout account, permitted products and applicable business-use requirements.
- Approve the final contract, deposit/cancellation approach, revision limits, IP transfer, care-plan terms and digital licence. Drafts propose a 40/60 payment split, not a non-refundable deposit regardless of work performed.
- Publish a real privacy/contact route, approve a retention schedule, document access/deletion handling and review Formspree/Cloudflare processing. https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/pipeda-compliance-help/guide_org/
- Keep marketing consent separate from service inquiries. CASL generally requires appropriate consent, sender identification and an unsubscribe mechanism for commercial messages. No marketing subscription is enabled. https://crtc.gc.ca/eng/com500/guide.htm
- Check insurance, home-business requirements and bookkeeping needs based on the actual business; none have been assumed complete.

## Expansion roadmap

P0: owner review, real contact/inbox, staging form tests, policy/business decisions, production hosting approval.

P1: finish one paid workbook or template, validate its files, configure provider checkout/delivery, test a complete transaction, add actual screenshots and publish the approved product.

P2: industry launch kits based on real reusable deliverables; fuller beauty and cleaning concepts; richer founder imagery supplied by the owner; optional privacy-conscious analytics; screen-reader and cross-browser audit.

P3: memberships, customer portal, affiliate programmes, gift cards, subscriptions and bespoke web applications. These need independent scope, permissions and security design; they are not activated by this rebuild.
