# Tasks: AI Army Notes App POC

## Relevant Files

### Landing Page
- `app/page.tsx` - Main landing page component
- `app/layout.tsx` - Root layout with metadata and SEO
- `app/globals.css` - Global styles and design tokens
- `components/landing/Hero.tsx` - Hero section with CTAs
- `components/landing/Vision.tsx` - Vision/About section
- `components/landing/DemoPreview.tsx` - Demo preview section
- `components/landing/Technology.tsx` - Technology stack section
- `components/landing/CTA.tsx` - Call-to-action section
- `components/Footer.tsx` - Shared footer component

### Authentication
- `app/login/page.tsx` - Login page
- `components/auth/LoginForm.tsx` - Simple demo login form
- `lib/auth.ts` - Authentication helper functions
- `lib/supabase.ts` - Supabase client configuration

### Notes App
- `app/notes/page.tsx` - Notes dashboard/list view
- `app/notes/new/page.tsx` - Create new note page
- `app/notes/[id]/page.tsx` - View/edit individual note page
- `components/notes/NotesList.tsx` - Notes list component
- `components/notes/NoteCard.tsx` - Individual note card component
- `components/notes/NoteEditor.tsx` - Note editing form
- `components/notes/SearchBar.tsx` - Search input component
- `components/notes/TagFilter.tsx` - Tag filtering component
- `components/notes/TagInput.tsx` - Tag input/management component
- `lib/notes.ts` - Notes CRUD operations and API calls

### Shared UI Components
- `components/ui/Button.tsx` - Reusable button component
- `components/ui/Input.tsx` - Reusable input component
- `components/ui/Modal.tsx` - Modal/dialog component

### Configuration & Assets
- `package.json` - Project dependencies and scripts
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (Supabase keys)
- `.env.example` - Example environment variables file
- `.gitignore` - Git ignore patterns
- `public/hero-image.png` - Generated hero image
- `public/demo-screenshot.png` - Notes app screenshot for landing page
- `public/favicon.ico` - Site favicon

### Database
- Supabase database schema (SQL scripts for users and notes tables)
- Row Level Security (RLS) policies

### Notes

- This POC includes both a landing page and a full-featured notes application
- Focus on rapid development while maintaining visual quality
- Use Supabase for backend (database and simple auth)
- Simple demo authentication (no real security for POC)
- Full CRUD operations for notes
- Tags and search functionality
- No unit tests required for this POC (focus on speed)

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [ ] 0.0 Create feature branch
- [ ] 1.0 Project Setup & Configuration
- [ ] 2.0 Supabase Setup & Database Schema
- [ ] 3.0 Design System & Global Styles
- [ ] 4.0 Generate Visual Assets
- [ ] 5.0 Build Shared UI Components
- [ ] 6.0 Implement Authentication
- [ ] 7.0 Build Landing Page
- [ ] 8.0 Build Notes App - Core CRUD
- [ ] 9.0 Implement Tags Functionality
- [ ] 10.0 Implement Search Functionality
- [ ] 11.0 Polish & Responsive Design
- [ ] 12.0 Testing & Quality Assurance
- [ ] 13.0 Deploy to Vercel
