# Mahendram Landmark Ventures — Website

**India's Integrated Engineering, Infrastructure, Interior & Facility Management Company**

> Built with React + Vite + Tailwind CSS + React Router v6 + Sanity CMS

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Open `.env` and fill in your values:

| Variable | Where to Get It |
|---|---|
| `VITE_SANITY_PROJECT_ID` | [sanity.io/manage](https://sanity.io/manage) → your project |
| `VITE_SANITY_DATASET` | Usually `production` |
| `VITE_FORMSPREE_ID` | [formspree.io](https://formspree.io) → Forms → your form ID |

### 3. Update Hardcoded Placeholders

| File | Find | Replace With |
|---|---|---|
| `src/lib/sanityClient.js` | `'REPLACE'` | your Sanity project ID |
| `src/pages/Contact.jsx` | `REPLACE_WITH_YOUR_ID` in Formspree URL | your Formspree form ID |
| `sanity.config.js` | `'REPLACE'` | your Sanity project ID |

### 4. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

```bash
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — Vercel Dashboard

1. Push repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add env variables: **Settings → Environment Variables**

> `vercel.json` contains the SPA rewrite rule so React Router works on direct URL visits and page refreshes.

---

## 🗂 Project Structure

```
mahendram-landmark/
├── public/
├── sanity/
│   └── schemas/
│       ├── post.js              # Knowledge Center article schema
│       └── project.js           # Projects portfolio schema
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav, mobile menu, active links
│   │   └── Footer.jsx           # 4-col footer + WhatsApp floating button
│   ├── lib/
│   │   └── sanityClient.js      # Sanity client + GROQ query helpers
│   ├── pages/
│   │   ├── Home.jsx             # 7-section landing page
│   │   ├── About.jsx            # Vision, Mission, Core Values
│   │   ├── Services.jsx         # 8 service cards + delivery process
│   │   ├── Industries.jsx       # 13 industry sector cards
│   │   ├── Projects.jsx         # Sanity-powered filterable portfolio
│   │   ├── KnowledgeCenter.jsx  # Sanity-powered blog + search + filter
│   │   ├── Contact.jsx          # 4-tab Formspree forms + office cards
│   │   └── NotFound.jsx         # 404 page
│   ├── App.jsx                  # HelmetProvider + Router + lazy loading
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives + design tokens
├── .env.example                 # Environment variable template
├── sanity.config.js             # Sanity Studio configuration
├── tailwind.config.js           # Brand tokens + marquee animation
├── vercel.json                  # SPA rewrite rule
└── vite.config.js               # Vite configuration
```

---

## 🎨 Design System

| Token | Tailwind Class | Hex | Usage |
|---|---|---|---|
| Primary | `bg-primary` / `text-primary` | `#1A2B4A` | Navy — headings, nav, dark UI |
| Accent | `bg-accent` / `text-accent` | `#D4891A` | Amber — CTAs, highlights |
| Surface | `bg-surface` | `#F7F8FA` | Light page backgrounds |
| Dark | `bg-dark` | `#0F1C2E` | Footer, dark sections |
| Text | `text-textMain` | `#1C1C2E` | Body text |
| Muted | `text-muted` | `#6B7280` | Secondary text |

**Font:** Inter — preloaded via Google Fonts in `index.html`

---

## 📰 Sanity CMS

### Initialize Studio

```bash
npx sanity@latest init    # point to your existing project
npx sanity@latest dev     # start the Studio at localhost:3333
```

### Schemas

| Schema | Purpose | Key Fields |
|---|---|---|
| `post` | Knowledge Center articles | title, slug, category (10), body, coverImage, featured |
| `project` | Projects portfolio | title, slug, category (9), location, year, scopeOfWork, gallery |

---

## 🔗 Integrations

| Service | Purpose | Config File |
|---|---|---|
| Sanity | CMS — blog + portfolio | `src/lib/sanityClient.js` |
| Formspree | Contact form submissions | `src/pages/Contact.jsx` |
| WhatsApp | Floating chat button | `src/components/Footer.jsx` |
| Vercel | Hosting + CDN | `vercel.json` |
| react-helmet-async | Per-page SEO meta tags | `src/App.jsx` + all pages |

---

## 📄 Pages & Routes

| Route | Page | SEO |
|---|---|---|
| `/` | Home — 7-section landing | ✅ Unique title + OG |
| `/about` | About — Vision, Mission, Values | ✅ |
| `/services` | Services — 8 verticals | ✅ |
| `/industries` | Industries — 13 sectors | ✅ |
| `/projects` | Projects — CMS portfolio | ✅ |
| `/knowledge-center` | Knowledge Center — CMS blog | ✅ |
| `/contact` | Contact — 4 Formspree tabs | ✅ |
| `*` | 404 Not Found | noindex |

---

## 🏢 Business Divisions

| Division | Focus |
|---|---|
| **Mahendram Landmark Ventures Pvt Ltd** | Engineering, Infrastructure & Contracting |
| **Inovvio Interior** | Design, Interior & Workplace Solutions |
| **Ortus Apex** | Integrated Facility & Asset Management |

---

*© 2025 Mahendram Landmark Ventures Pvt Ltd. All Rights Reserved.*
