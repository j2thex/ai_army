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
- `app/notes/page.tsx` - Notes dashboard/list view with user filtering
- `app/notes/new/page.tsx` - Create new note page
- `app/notes/[id]/page.tsx` - View/edit individual note page
- `components/notes/NotesList.tsx` - Notes list component with author display
- `components/notes/NoteCard.tsx` - Individual note card with author info
- `components/notes/NoteEditor.tsx` - Note editing form
- `components/notes/SearchBar.tsx` - Search input component
- `components/notes/TagFilter.tsx` - Tag filtering component
- `components/notes/TagInput.tsx` - Tag input/management component
- `components/notes/UserFilter.tsx` - "My Notes" vs "All Notes" toggle
- `components/notes/Navbar.tsx` - App navbar with current user and logout
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

- This POC includes both a landing page and a full-featured **collaborative multi-user** notes application
- Focus on rapid development while maintaining visual quality
- Use Supabase for backend (database and simple auth)
- Simple demo authentication (no real security for POC)
- **Collaborative model**: Any user can view, edit, and delete any note
- Notes display author information (who created each note)
- Users can filter between "My Notes" and "All Notes"
- Full CRUD operations for notes with author tracking
- Tags and search functionality across all users' notes
- No unit tests required for this POC (focus on speed)

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [ ] 0.0 Create feature branch
  - [ ] 0.1 Create and checkout a new branch for this feature (e.g., `git checkout -b feature/notes-app-poc`)

- [ ] 1.0 Project Setup & Configuration
  - [ ] 1.1 Initialize Next.js project with TypeScript using `npx create-next-app@latest`
  - [ ] 1.2 Choose project options: TypeScript (Yes), ESLint (Yes), Tailwind CSS (Yes), App Router (Yes)
  - [ ] 1.3 Install Supabase client library: `npm install @supabase/supabase-js`
  - [ ] 1.4 Create `.env.local` file for environment variables
  - [ ] 1.5 Create `.env.example` file with placeholder values for Supabase credentials
  - [ ] 1.6 Update `.gitignore` to ensure `.env.local` is not committed
  - [ ] 1.7 Test that the Next.js dev server runs successfully with `npm run dev`

- [ ] 2.0 Supabase Setup & Database Schema
  - [ ] 2.1 Add Supabase project URL and anon key to `.env.local` (wait for user to provide credentials)
  - [ ] 2.2 Create `lib/supabase.ts` with Supabase client configuration
  - [ ] 2.3 Access Supabase dashboard and navigate to SQL Editor
  - [ ] 2.4 Create `users` table with schema: id (UUID), username (TEXT UNIQUE), created_at (TIMESTAMP)
  - [ ] 2.5 Create `notes` table with schema: id, user_id, title, content, tags (TEXT[]), created_at, updated_at, last_edited_by
  - [ ] 2.6 Set up foreign key relationships between notes.user_id and users.id
  - [ ] 2.7 Enable Row Level Security (RLS) on notes table
  - [ ] 2.8 Create RLS policy: "Authenticated users can view all notes" (SELECT)
  - [ ] 2.9 Create RLS policy: "Authenticated users can create notes" (INSERT)
  - [ ] 2.10 Create RLS policy: "Authenticated users can update all notes" (UPDATE)
  - [ ] 2.11 Create RLS policy: "Authenticated users can delete all notes" (DELETE)
  - [ ] 2.12 Create performance indexes on notes.user_id and notes.created_at
  - [ ] 2.13 Test database connection from Next.js app

- [ ] 3.0 Design System & Global Styles
  - [ ] 3.1 Define color palette in `app/globals.css` using CSS variables (primary, secondary, accent, background, text colors)
  - [ ] 3.2 Import Google Fonts (e.g., Inter or Roboto) in `app/layout.tsx`
  - [ ] 3.3 Set up Tailwind CSS configuration with custom colors matching the design system
  - [ ] 3.4 Create base typography styles (headings, body text, line heights)
  - [ ] 3.5 Define spacing scale and border radius values
  - [ ] 3.6 Create utility classes for gradients and shadows
  - [ ] 3.7 Set up responsive breakpoints configuration
  - [ ] 3.8 Add smooth transition and animation utilities

- [ ] 4.0 Generate Visual Assets
  - [ ] 4.1 Use `generate_image` tool to create hero image for landing page (tech/AI themed)
  - [ ] 4.2 Use `generate_image` tool to create demo screenshot/preview of notes app
  - [ ] 4.3 Save generated images to `public/` directory
  - [ ] 4.4 Create or download a simple favicon and save to `public/favicon.ico`
  - [ ] 4.5 Optimize images for web (ensure reasonable file sizes)

- [ ] 5.0 Build Shared UI Components
  - [ ] 5.1 Create `components/ui/Button.tsx` - reusable button with variants (primary, secondary, danger)
  - [ ] 5.2 Create `components/ui/Input.tsx` - reusable text input with label and error states
  - [ ] 5.3 Create `components/ui/Modal.tsx` - modal/dialog component for confirmations
  - [ ] 5.4 Create `components/Footer.tsx` - shared footer with GitHub link and contact info
  - [ ] 5.5 Test all UI components render correctly with different props

- [ ] 6.0 Implement Authentication
  - [ ] 6.1 Create `lib/auth.ts` with helper functions for login, logout, and session management
  - [ ] 6.2 Implement simple username-based auth (create user if doesn't exist, no password)
  - [ ] 6.3 Create `app/login/page.tsx` - login page layout
  - [ ] 6.4 Create `components/auth/LoginForm.tsx` - login form with username input
  - [ ] 6.5 Implement login logic: check if user exists in Supabase, create if new
  - [ ] 6.6 Store user session in localStorage or cookies
  - [ ] 6.7 Create auth context or hook to manage authentication state globally
  - [ ] 6.8 Implement logout functionality
  - [ ] 6.9 Add route protection: redirect unauthenticated users to /login
  - [ ] 6.10 Test login flow: create new user, login existing user, logout

- [ ] 7.0 Build Landing Page
  - [ ] 7.1 Create `components/landing/Hero.tsx` - hero section with project name, tagline, and CTAs
  - [ ] 7.2 Add "Try the Demo" button linking to /notes and "View on GitHub" button
  - [ ] 7.3 Create `components/landing/Vision.tsx` - vision/about section explaining AI Army
  - [ ] 7.4 Create `components/landing/DemoPreview.tsx` - showcase notes app features with screenshot
  - [ ] 7.5 Create `components/landing/Technology.tsx` - technology stack section (Next.js, Supabase, etc.)
  - [ ] 7.6 Create `components/landing/CTA.tsx` - final call-to-action section
  - [ ] 7.7 Update `app/page.tsx` to compose all landing page sections
  - [ ] 7.8 Add smooth scrolling between sections
  - [ ] 7.9 Implement hover effects and micro-animations on buttons and cards
  - [ ] 7.10 Ensure landing page is responsive on mobile, tablet, and desktop
  - [ ] 7.11 Test all CTAs link correctly (GitHub, demo, login)

- [ ] 8.0 Build Notes App - Core CRUD
  - [ ] 8.1 Create `lib/notes.ts` with CRUD functions: createNote, getNotes, getNote, updateNote, deleteNote
  - [ ] 8.2 Create `components/notes/Navbar.tsx` - app navbar showing current user and logout button
  - [ ] 8.3 Create `app/notes/page.tsx` - notes dashboard/list view
  - [ ] 8.4 Create `components/notes/NoteCard.tsx` - individual note card displaying title, preview, author, tags, date
  - [ ] 8.5 Create `components/notes/NotesList.tsx` - grid/list of note cards
  - [ ] 8.6 Implement fetching and displaying all notes from Supabase on notes dashboard
  - [ ] 8.7 Display author username on each note card
  - [ ] 8.8 Create `app/notes/new/page.tsx` - create new note page
  - [ ] 8.9 Create `components/notes/NoteEditor.tsx` - form for editing note (title, content, tags)
  - [ ] 8.10 Implement create note functionality: save to Supabase with current user as author
  - [ ] 8.11 Create `app/notes/[id]/page.tsx` - view/edit individual note page
  - [ ] 8.12 Implement view note functionality: fetch and display single note
  - [ ] 8.13 Implement update note functionality: save changes to Supabase
  - [ ] 8.14 Implement delete note functionality with confirmation modal
  - [ ] 8.15 Add loading states for all async operations (creating, updating, deleting)
  - [ ] 8.16 Add success/error feedback messages for user actions
  - [ ] 8.17 Test full CRUD cycle: create, view, edit, delete notes

- [ ] 9.0 Implement Tags Functionality
  - [ ] 9.1 Create `components/notes/TagInput.tsx` - component for adding/removing tags (chip-based or comma-separated)
  - [ ] 9.2 Integrate TagInput into NoteEditor component
  - [ ] 9.3 Save tags array to Supabase when creating/updating notes
  - [ ] 9.4 Display tags on NoteCard component with styling
  - [ ] 9.5 Create `components/notes/TagFilter.tsx` - component to filter notes by tag
  - [ ] 9.6 Fetch all unique tags from all notes for the tag filter dropdown/list
  - [ ] 9.7 Implement tag filtering logic: filter notes list by selected tag
  - [ ] 9.8 Allow clicking on a tag in a note card to filter by that tag
  - [ ] 9.9 Add clear tag filter button
  - [ ] 9.10 Test tag functionality: add tags to notes, filter by tags, clear filter

- [ ] 10.0 Implement Search Functionality
  - [ ] 10.1 Create `components/notes/SearchBar.tsx` - search input component
  - [ ] 10.2 Add SearchBar to notes dashboard page
  - [ ] 10.3 Implement search logic: filter notes by search term in title and content
  - [ ] 10.4 Add debouncing to search input (wait 300ms after user stops typing)
  - [ ] 10.5 Update notes list in real-time as user types
  - [ ] 10.6 Respect "My Notes" vs "All Notes" filter when searching
  - [ ] 10.7 Combine search with tag filter (both filters active simultaneously)
  - [ ] 10.8 Add clear search button
  - [ ] 10.9 Show active search term indicator
  - [ ] 10.10 Test search: search across all notes, search within my notes, combine with tag filter

- [ ] 11.0 Implement User Filtering (My Notes vs All Notes)
  - [ ] 11.1 Create `components/notes/UserFilter.tsx` - toggle component for "My Notes" / "All Notes"
  - [ ] 11.2 Add UserFilter to notes dashboard page
  - [ ] 11.3 Implement filter logic: show only current user's notes when "My Notes" is selected
  - [ ] 11.4 Show all users' notes when "All Notes" is selected (default)
  - [ ] 11.5 Ensure search and tag filters respect the user filter setting
  - [ ] 11.6 Add visual indication of which filter is active
  - [ ] 11.7 Visual distinction on note cards: highlight notes created by current user
  - [ ] 11.8 Test user filtering: toggle between My Notes and All Notes, combine with search/tags

- [ ] 12.0 Polish & Responsive Design
  - [ ] 12.1 Review all pages for consistent styling and spacing
  - [ ] 12.2 Ensure all interactive elements have hover states and smooth transitions
  - [ ] 12.3 Add micro-animations for note creation, deletion, and updates
  - [ ] 12.4 Test responsive design on mobile (320px, 375px, 414px widths)
  - [ ] 12.5 Test responsive design on tablet (768px, 1024px widths)
  - [ ] 12.6 Test responsive design on desktop (1280px, 1920px widths)
  - [ ] 12.7 Fix any layout issues or text overflow on different screen sizes
  - [ ] 12.8 Ensure touch targets are large enough on mobile (min 44px)
  - [ ] 12.9 Add empty states: message when no notes exist, no search results, etc.
  - [ ] 12.10 Optimize images and assets for performance
  - [ ] 12.11 Review and improve accessibility: proper heading hierarchy, alt text, ARIA labels

- [ ] 13.0 SEO & Metadata Configuration
  - [ ] 13.1 Update `app/layout.tsx` with proper metadata: title, description, Open Graph tags
  - [ ] 13.2 Set page title: "AI Army - Building the Future of AI-Assisted Development"
  - [ ] 13.3 Write compelling meta description for landing page
  - [ ] 13.4 Add Open Graph tags for social sharing (og:title, og:description, og:image)
  - [ ] 13.5 Ensure favicon is properly configured
  - [ ] 13.6 Test metadata appears correctly when sharing URL

- [ ] 14.0 Testing & Quality Assurance
  - [ ] 14.1 Test complete user flow: visit landing page → login → create note → view notes → edit note → delete note
  - [ ] 14.2 Test collaborative features: login as different users, verify all users see all notes
  - [ ] 14.3 Test that notes show correct author information
  - [ ] 14.4 Test all filtering combinations: search + tags + user filter
  - [ ] 14.5 Test edge cases: empty notes list, very long note content, many tags
  - [ ] 14.6 Test error handling: network errors, invalid data, missing fields
  - [ ] 14.7 Cross-browser testing: Chrome, Firefox, Safari, Edge
  - [ ] 14.8 Mobile device testing: iOS Safari, Android Chrome
  - [ ] 14.9 Check for console errors and warnings
  - [ ] 14.10 Verify all links work (GitHub, navigation, CTAs)
  - [ ] 14.11 Performance check: page load times, search responsiveness

- [ ] 15.0 Deploy to Vercel
  - [ ] 15.1 Create Vercel account (if not already created)
  - [ ] 15.2 Install Vercel CLI: `npm install -g vercel`
  - [ ] 15.3 Run `vercel` command in project directory to link project
  - [ ] 15.4 Configure environment variables in Vercel dashboard (Supabase URL and key)
  - [ ] 15.5 Deploy to production: `vercel --prod`
  - [ ] 15.6 Test production deployment: verify all features work in production
  - [ ] 15.7 Test that environment variables are correctly configured
  - [ ] 15.8 Set up GitHub integration for automatic deployments (optional)
  - [ ] 15.9 Share production URL and celebrate! 🚀
  - [ ] 15.10 Update README.md with live demo link
