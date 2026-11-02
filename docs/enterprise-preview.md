# Enterprise site redesign

The local production route `/` now uses the enterprise design that was reviewed
at `/preview`. The `/preview` route points to the same homepage so old review
links still work. The top header and navigation remain visible throughout the
site. Nothing has been pushed to GitHub or deployed from this redesign.

## Pages

- `/gigaops` is the platform overview and module catalogue.
- `/platform/mobile` presents the native mobile direction, with an interactive
  online/offline example and an explicit development-stage label. It remains
  reachable from the homepage mobile section and footer, without a separate
  top-level header item.
- GigaOps is listed as a product and has its platform page at `/gigaops`.
  Eight additional products, including SPEED, have dedicated `/products/*` pages.
  `/products` is the product directory.
- Eleven broad GigaOps capability pages and fifteen specialist module pages have
  dedicated `/gigaops/*` routes. Together they cover the distinct module
  manifests in the product repository. SPEED also has its own product page.
- Eight industries each have a dedicated `/industries/*` page connecting an
  industry workflow to relevant products and modules. `/industries` is their
  directory.
- About, careers, teams, contact, privacy and terms use the same header and
  footer. The contact page offers email and phone links because the previous
  form only displayed a success toast and did not send a message.

Every solution page has a clickable example workflow, capability narrative,
related routes, and three measures to use when agreeing on a customer baseline
and target. The site does not present illustrative numbers as customer results.
The homepage leads from the hero into an automatically advancing five-module
handoff. Its example event visibly moves from a source module, through the
GigaOps SaaS core, to the next module; the current data and context update at
each step. Visitors can pause or select a handoff. The interactive product
walkthrough follows it. The six-stage SaaS architecture diagram also advances
automatically and links to the relevant capability pages. An online/offline
mobile example comes next. The homepage closes with three simple links to GigaOps, SPEED and industry
journeys. Full product, module and industry card catalogues live on their own
pages. The desktop header dropdown closes on an outside pointer press or Escape;
the mobile menu also closes when pressed outside the header.
The Maintenance, Workforce, Inventory and Product Catalogue modules show web
and phone markers in the catalogue and on their own pages. The phone marker
says **Mobile planned**, following the current native rollout sequence. It does
not claim those module journeys are released on signed devices.
Module pages carry a short evaluation or development stage label, based on the
product repository catalogue, so their scope is not presented as released.

## Product evidence

The interactive workspaces use example data and explain workflows reflected in
the current product pages and module source. They are designed website
interactions, not screenshots of a running customer tenant. Their interface
labels this directly as an example workflow.
The connected handoff and phone are also illustrative website interactions, not
live data feeds or screenshots. The GigaOps Companion is identified as a planned
capability. Its sourced case, proposed action and confirmation behavior follow
the local platform generative UI plan and the mobile agentic operations proposal.
Offline mobile writes remain a later release gate in the mobile implementation
plan; the website does not present them as available now.

The two original UAT images in `client/src/assets/product-preview/` remain in
the repository as internal reference material. They are not displayed in the
new public pages: their internal branding and UI differ from the site design.
Before publishing a product video or screenshot gallery, capture clean seeded
sessions from the running SPEED and GigaOps products, confirm naming, and
review the shown data and capabilities.

## Local review

Run `npm run check` and `npm run build`, then `PORT=5077 npm start`.
Open `http://localhost:5077/` and follow the top navigation. The site is
ready for local review before the agreed GitHub and deployment step.
