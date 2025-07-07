# Powerful Automations - Marketing Website

A high-converting, single-page marketing website for an automation business built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Modern Design**: Dark theme with glassmorphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Fully functional contact form with validation
- **Database Integration**: Supabase database for storing contact submissions
- **Custom Cursor**: Unique cursor effect for enhanced interaction

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with custom glassmorphism styling
- **Animations**: Framer Motion
- **Database**: Supabase
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel

## Quick Start

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd powerful-automations
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```

4. **Set up Supabase**:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the following SQL query in the SQL Editor:
     ```sql
     CREATE TABLE contacts (
       id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       name TEXT NOT NULL,
       email TEXT NOT NULL,
       company_name TEXT,
       service_of_interest TEXT NOT NULL,
       project_details TEXT,
       created_at TIMESTAMPTZ DEFAULT NOW()
     );
     ```
   - Enable Row Level Security (RLS) for the contacts table
   - Get your Project URL and API keys from Project Settings > API

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:3000`

## Deployment

### Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to your Vercel dashboard
   - Click "New Project" and import your GitHub repository
   - Add your environment variables in the Environment Variables section
   - Deploy!

### Environment Variables for Vercel

Make sure to add these environment variables in your Vercel project settings:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route for contact form
│   ├── globals.css               # Global styles with glassmorphism
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main landing page
├── components/
│   ├── ui/                      # shadcn/ui components
│   └── ContactForm.tsx          # Contact form component
└── lib/
    └── utils.ts                 # Utility functions
```

## Customization

### Styling
- The glassmorphism theme is defined in `globals.css`
- Modify the `.glass-card` class to change the glass effect
- Update color variables in the CSS custom properties

### Content
- Update the company name and branding in `page.tsx`
- Modify service descriptions and features
- Customize the contact form fields in `ContactForm.tsx`

### Database
- The contacts table schema can be modified in the Supabase dashboard
- Update the form validation schema in `ContactForm.tsx` and `route.ts`

## License

MIT License - see LICENSE file for details.