# Nature Harvest — Improved Front-end

A responsive React + TypeScript + Vite front-end concept for the Nature Harvest agri-export website.

## Pages
- `/` — buyer-focused homepage
- `/products` — product portfolio
- `/about` — company / sourcing approach
- `/contact` — validated enquiry / quote form UI

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

For production:

```bash
npm run build
npm run preview
```

## Technologies
- React
- TypeScript
- React Router
- Vite
- Responsive CSS

## Important assumptions
- This is a front-end redesign/prototype; the enquiry form currently validates and shows success feedback but does not send data to a CRM/backend.
- Product imagery uses remote Unsplash image URLs for prototype presentation. Production should replace these with approved Nature Harvest assets and serve them through an optimized image/CDN pipeline.
- Existing Nature Harvest content and public contact information were used only as the basis for the redesign. Product availability, certifications, export destinations, MOQs and commercial terms should be confirmed by the business before publication.
- WhatsApp and email links are configured from the public contact details visible on the current site.

## Suggested production next steps
1. Connect the enquiry form to an API/CRM/email service.
2. Add real product grades, packaging, MOQ and destination-market data.
3. Replace prototype images with licensed/owned product photography.
4. Add Organization, Product, Breadcrumb and FAQ structured data.
5. Generate sitemap.xml, robots.txt and canonical URLs.
6. Add analytics + conversion events for quote clicks, WhatsApp clicks and form submissions.
7. Run Lighthouse/PageSpeed and image optimization after deployment.
