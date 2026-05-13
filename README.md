# Pelican Academy - Premium Static Website

An ultra-premium, world-class static website built for **Pelican Academy**, an ISO 9001:2015 Certified Institution.

## 🚀 Tech Stack
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** [FormSubmit](https://formsubmit.co/) (Backend-less)
- **Deployment:** Static Export (`output: 'export'`)

## ✨ Key Features
- **Apple-level Design:** Clean, minimal, and premium aesthetic.
- **Cinematic Hero Section:** Animated text reveals and smooth background motion.
- **Responsive & Mobile-First:** Optimized for all screen sizes with sticky CTAs and a floating WhatsApp button.
- **SEO Optimized:** Metadata, Open Graph tags, and semantic HTML structure.
- **Performance:** Target Lighthouse 95+ with static optimization.
- **No Backend Required:** Contact forms work via FormSubmit.

## 📁 Project Structure
- `src/app`: Main pages and layout.
- `src/components/sections`: Reusable website sections (Hero, About, Courses, etc.).
- `src/lib`: Utility functions (Tailwind merge).
- `public`: Static assets (images, icons).

## 🛠️ Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment (Static Export)
This project is configured for **Static Export**.

1. Generate the static files:
   ```bash
   npm run build
   ```
2. The static files will be generated in the `out/` directory.
3. Deploy the content of the `out/` folder to any static hosting provider:
   - **Cloudflare Pages:** Upload the `out/` folder or link to GitHub.
   - **Vercel:** Configure build settings to `npm run build` and output directory to `out`.
   - **Netlify:** Set build command to `npm run build` and publish directory to `out`.

## 📬 Form Configuration
The contact form uses **FormSubmit**. 
Current recipient: `919994048827` (Note: You may need to verify the email on the first submission at [formsubmit.co](https://formsubmit.co)).

---
Built with ❤️ for Pelican Academy.
