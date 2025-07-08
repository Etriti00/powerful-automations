# Power Automations - AI Business Automation Solutions

A modern, high-converting business website for Power Automations built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. Features custom automation logo, SEO optimization, and a fully functional contact system.

## 🚀 Features

- **🎨 Modern Design**: Professional automation-focused design with custom gear logo
- **📱 Responsive Layout**: Mobile-first design optimized for all devices
- **⚡ Smooth Animations**: Framer Motion animations for enhanced user experience
- **📝 Contact System**: Fully functional contact form with database integration
- **🔍 SEO Optimized**: Complete SEO setup with meta tags, sitemap, and robots.txt
- **🗄️ Database Integration**: Supabase database for storing contact submissions
- **🎯 Performance**: Optimized bundle sizes and static generation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS 4
- **UI Components**: shadcn/ui with custom styling
- **Animations**: Framer Motion
- **Database**: Supabase with Row Level Security
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout with SEO
│   └── page.tsx                      # Homepage
├── components/
│   ├── ui/                           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   └── textarea.tsx
│   ├── Header.tsx                    # Navigation header
│   ├── Logo.tsx                      # Custom automation logo
│   └── StatsSection.tsx             # Statistics section
└── lib/
    └── utils.ts                      # Utility functions

public/
├── favicon.svg                       # Custom logo favicon
├── robots.txt                        # SEO robots file
└── sitemap.xml                       # SEO sitemap
```

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd powerful-automations
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your Supabase credentials in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Database Setup

Create a new Supabase project and run this SQL in the SQL Editor:

```sql
-- Create contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  service_of_interest VARCHAR(255) NOT NULL,
  project_details TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow insert contacts" ON contacts FOR INSERT WITH CHECK (true);
```

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3035](http://localhost:3035) in your browser.

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: Power Automations website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**:
- Import your GitHub repository in Vercel
- Add environment variables (see below)
- Deploy!

### Environment Variables for Production

Add these in your Vercel project settings:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🎨 Customization

### Branding
- Update company information in `src/app/layout.tsx` (metadata)
- Modify logo colors in `src/components/Logo.tsx`
- Customize the automation services in `src/app/page.tsx`

### Styling
- Global styles in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- Color scheme defined in CSS custom properties

### Content
- Homepage content in `src/app/page.tsx`
- Contact page in `src/app/contact/page.tsx`
- SEO metadata in `src/app/layout.tsx`

### Database Schema
- Modify the contacts table schema in Supabase dashboard
- Update form validation in `src/app/api/contact/route.ts`
- Adjust form fields in `src/app/contact/page.tsx`

## 📊 Performance

Current bundle sizes:
- Homepage: ~7.76 kB
- Contact page: ~30.2 kB
- First Load JS: ~159 kB (excellent)

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for Power Automations - AI Business Automation Solutions