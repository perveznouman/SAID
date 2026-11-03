# SAID — Architecture & Interior Design

Complete Next.js source code for the Suhaib Architecture & Interior Design website.

## Included

- Responsive homepage with a nine-image automatic hero slider
- About Us
- Services
- Architecture Projects with filtering and the Royse Warehouse gallery
- Interior Projects with Residential, Corporate Office, Healthcare, and F&B filters
- Process
- Contact Us
- Responsive transparent header and dark branded footer
- All current project imagery and SAID branding assets

## Local setup

Requirements: Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploying

The project can be deployed directly to Vercel:

1. Upload the project to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the detected framework as Next.js.
4. Deploy.
5. Add your domain under **Project Settings → Domains** and update the DNS records shown by Vercel.

Images are stored in `public/assets`. Page content and project information are stored in `app`.
