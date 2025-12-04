# PRD: AI Army Notes App POC

## Introduction/Overview

The AI Army Notes App POC is the first public-facing deployment of the AI Army project. This application combines a compelling landing page with a functional notes application to demonstrate the power of AI-assisted development. The landing page introduces visitors to our vision, while the notes app provides a working demonstration of what AI collaboration can build.

**Problem it solves:** 
1. We need a public presence to attract collaborators and share our vision
2. We need a tangible demonstration of AI-assisted development capabilities
3. We need to show that AI can help build real, functional applications quickly

**Goal:** Create a compelling landing page paired with a fully functional notes application (with authentication, CRUD operations, tags, and search) that showcases the AI Army concept and demonstrates our ability to rapidly build quality software.

## Goals

1. **Launch a public presence** for AI Army within 1-3 days
2. **Communicate the vision** of collaborative AI-assisted development clearly and compellingly
3. **Demonstrate capability** through a working notes application with real functionality
4. **Attract potential collaborators** by showcasing both vision and execution
5. **Establish credibility** through professional design and working features
6. **Provide a foundation** for future feature additions and community growth

## User Stories

### Landing Page Stories

1. **As a visitor**, I want to quickly understand what AI Army is about, so I can decide if I want to learn more or try the demo.

2. **As a potential collaborator**, I want to see the project's vision and a working demo, so I can assess if this aligns with my interests.

3. **As a developer**, I want to access the notes app demo, so I can see what AI-assisted development can produce.

### Notes App Stories

4. **As a user**, I want to log in with a simple demo account, so I can access the notes application without complex authentication.

5. **As a user**, I want to create new notes with text content, so I can capture my thoughts and ideas.

6. **As a user**, I want to view all my notes in a list, so I can see what I've created.

7. **As a user**, I want to edit existing notes, so I can update or refine my content.

8. **As a user**, I want to delete notes I no longer need, so I can keep my workspace clean.

9. **As a user**, I want to add tags to my notes, so I can organize and categorize them.

10. **As a user**, I want to search through my notes, so I can quickly find specific content.

11. **As a user**, I want to filter notes by tags, so I can view related notes together.

## Functional Requirements

### Landing Page Requirements

1. **Hero Section**: The page must include a prominent hero section with:
   - Project name ("AI Army")
   - Tagline: "Building the Future of AI-Assisted Development"
   - Brief description of what AI Army is
   - Primary CTA button: "Try the Demo" (links to notes app)
   - Secondary CTA button: "View on GitHub"

2. **Vision/About Section**: The page must explain:
   - What AI Army is (collaborative AI-assisted development project)
   - Why it matters (exploring how multiple AI assistants can work together)
   - What this demo demonstrates (rapid development of a full-featured app)

3. **Demo Preview Section**: The page must showcase:
   - Screenshot or preview of the notes app
   - Key features of the demo (CRUD, tags, search)
   - Invitation to try it out

4. **Technology Section**: The page must mention:
   - Next.js, React, Supabase
   - AI-driven development workflow
   - Modern best practices

5. **Call-to-Action Section**: The page must include:
   - Link to GitHub repository
   - Link to try the demo
   - Invitation to explore and contribute

6. **Footer**: Standard footer with links and contact info

### Authentication Requirements

7. **Simple Demo Login**: The app must provide:
   - A login page/modal with simple username input (no password for POC)
   - Automatic account creation if username doesn't exist
   - Session persistence (user stays logged in)
   - Logout functionality

8. **Access Control**: The app must:
   - Show landing page to all visitors
   - Require login to access notes app
   - Redirect unauthenticated users to login
   - Show user's own notes only (data isolation by user)

### Notes App - Core CRUD Requirements

9. **Create Notes**: The app must allow users to:
   - Click a "New Note" button to create a note
   - Enter note title (required)
   - Enter note content/body (text format, required)
   - Add tags (optional, multiple tags allowed)
   - Save the note to Supabase
   - See the new note appear in the notes list immediately

10. **Read/View Notes**: The app must allow users to:
    - View a list of all their notes
    - See note title, preview of content, tags, and creation date
    - Click on a note to view full details
    - See notes sorted by most recent first (default)

11. **Update Notes**: The app must allow users to:
    - Click an "Edit" button on any note
    - Modify the title, content, and tags
    - Save changes to Supabase
    - See updated note reflected immediately

12. **Delete Notes**: The app must allow users to:
    - Click a "Delete" button on any note
    - Confirm deletion (simple confirmation dialog)
    - Remove note from Supabase
    - See note removed from list immediately

### Notes App - Tags Requirements

13. **Tag Management**: The app must allow users to:
    - Add multiple tags to a note (comma-separated or chip-based input)
    - Remove tags from a note
    - See all tags displayed on each note
    - View a list of all unique tags used across their notes

14. **Tag Filtering**: The app must allow users to:
    - Click on a tag to filter notes by that tag
    - See only notes containing the selected tag
    - Clear tag filter to see all notes again
    - See active filter state clearly indicated

### Notes App - Search Requirements

15. **Search Functionality**: The app must allow users to:
    - Enter search text in a search input field
    - Search across note titles and content
    - See results update in real-time as they type
    - Clear search to return to full notes list
    - See search term highlighted or indicated

16. **Combined Filtering**: The app must support:
    - Using search and tag filter together
    - Clear indication of active filters
    - Easy way to clear all filters

### Design Requirements

17. **Visual Design**: Both landing page and notes app must feature:
    - Modern, professional aesthetic that "wows" visitors
    - Rich color palette (curated harmonious colors)
    - Premium feel with smooth gradients and visual polish
    - Consistent design language across landing page and app
    - Responsive design (mobile, tablet, desktop)

18. **Typography**: Must use:
    - Modern web fonts (Inter, Roboto, or Outfit)
    - Clear hierarchy with appropriate heading sizes
    - Readable body text with proper line spacing

19. **Interactivity**: Must include:
    - Smooth hover effects on buttons and interactive elements
    - Subtle micro-animations for enhanced UX
    - Loading states for async operations (creating, updating, deleting notes)
    - Success/error feedback for user actions

20. **Notes App UI**: The notes app must have:
    - Clean, intuitive interface
    - Clear navigation between notes list and note detail/edit views
    - Visible search bar and tag filter controls
    - Responsive layout for notes list (grid or list view)

### Technical Requirements

21. **Database Schema**: Supabase database must include:
    - `users` table: id, username, created_at
    - `notes` table: id, user_id, title, content, tags (array), created_at, updated_at
    - Proper foreign key relationships
    - Row Level Security (RLS) policies to ensure users only see their own notes

22. **API Integration**: The app must:
    - Use Supabase client for all database operations
    - Handle async operations properly with loading states
    - Handle errors gracefully with user-friendly messages
    - Use optimistic updates where appropriate

23. **Deployment**: The app must:
    - Be deployable to Vercel
    - Have environment variables configured for Supabase credentials
    - Work in production environment

24. **Performance**: The app must:
    - Load quickly (optimized assets)
    - Handle real-time search efficiently (debounced input)
    - Cache data appropriately
    - Use proper React patterns (avoid unnecessary re-renders)

25. **Code Quality**: The implementation must:
    - Use Next.js with React best practices
    - Be well-structured with reusable components
    - Include comments for key sections
    - Follow modern React and Next.js development best practices
    - Use proper component composition and separation of concerns

26. **SEO & Accessibility**: The landing page must:
    - Have proper meta tags, title, and description
    - Use semantic HTML5 elements
    - Have unique, descriptive IDs for interactive elements
    - Use proper heading hierarchy
    - Include alt text for images

## Non-Goals (Out of Scope)

The following are explicitly **NOT** included in this POC:

1. **Real authentication/security** - Simple demo auth only, no passwords, no OAuth
2. **Rich text editing** - Plain text only for notes content
3. **File attachments** - Text notes only
4. **Sharing/collaboration** - Notes are private to each user
5. **Note folders/organization** - Tags only for organization
6. **Export functionality** - No export to PDF, markdown, etc.
7. **Mobile apps** - Web app only
8. **Email notifications** - No notification system
9. **User profiles/settings** - Minimal user data
10. **Advanced search** - Basic text search only, no regex or advanced queries
11. **Note versioning/history** - No undo or version control
12. **Internationalization** - English only
13. **Analytics integration** - Can be added later
14. **Complex animations or 3D effects** - Keep it performant

## Design Considerations

### Visual Style
- **Color Palette**: Tech-forward palette with deep blues, vibrant purples, or modern gradients
- **Landing Page Layout**: Clean, modern single-page layout with distinct sections
- **Notes App Layout**: Dashboard-style with sidebar or top nav, main content area for notes
- **Imagery**: Use `generate_image` tool for custom graphics/hero images
- **Icons**: Use simple SVG icons for actions (edit, delete, add, search)

### UI/UX Guidelines
- **Landing Page**: Above the fold hero should immediately communicate value and CTA
- **Notes App**: Intuitive, familiar note-taking interface (inspired by apps like Notion, Apple Notes)
- **Navigation**: Clear transition from landing page to notes app
- **Feedback**: Immediate visual feedback for all user actions
- **Empty States**: Helpful messages when no notes exist or no search results

## Technical Considerations

### Stack
- **Next.js** - React framework with excellent Vercel integration
- **React** - Component-based UI development
- **Supabase** - Backend-as-a-Service for database and simple auth
- **CSS Modules** or **Tailwind CSS** - For styling (to be decided during implementation)
- **TypeScript** (optional) - For type safety and better developer experience
- **Node.js** - Runtime environment

### Supabase Setup
- Create Supabase project
- Set up database tables with proper schema
- Configure Row Level Security (RLS) policies
- Get API keys and connection strings
- Store credentials in environment variables

### Deployment
- Deploy to **Vercel** using their Next.js hosting
- Configure environment variables in Vercel dashboard
- Use GitHub integration for automatic deployments
- Test production build before final deployment

### File Structure
```
ai_army/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── login/
│   │   └── page.tsx               # Login page
│   ├── notes/
│   │   ├── page.tsx               # Notes list/dashboard
│   │   ├── [id]/
│   │   │   └── page.tsx           # Individual note view/edit
│   │   └── new/
│   │       └── page.tsx           # Create new note
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── landing/
│   │   ├── Hero.tsx               # Landing page hero
│   │   ├── Vision.tsx             # Vision section
│   │   ├── DemoPreview.tsx        # Demo preview section
│   │   ├── Technology.tsx         # Technology section
│   │   └── CTA.tsx                # Call-to-action section
│   ├── notes/
│   │   ├── NotesList.tsx          # Notes list component
│   │   ├── NoteCard.tsx           # Individual note card
│   │   ├── NoteEditor.tsx         # Note editing form
│   │   ├── SearchBar.tsx          # Search input component
│   │   ├── TagFilter.tsx          # Tag filtering component
│   │   └── TagInput.tsx           # Tag input/management
│   ├── auth/
│   │   └── LoginForm.tsx          # Simple login form
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── Input.tsx              # Reusable input component
│   │   └── Modal.tsx              # Modal/dialog component
│   └── Footer.tsx                 # Shared footer
├── lib/
│   ├── supabase.ts                # Supabase client setup
│   ├── auth.ts                    # Auth helper functions
│   └── notes.ts                   # Notes CRUD operations
├── types/
│   └── index.ts                   # TypeScript types (if using TS)
├── public/
│   ├── hero-image.png             # Generated hero image
│   └── favicon.ico                # Site favicon
├── .env.local                     # Environment variables (not committed)
├── .env.example                   # Example env file
├── package.json
├── next.config.js
└── tsconfig.json                  # If using TypeScript
```

### Database Schema (Supabase)

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notes table
CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own notes"
  ON notes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own notes"
  ON notes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notes"
  ON notes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own notes"
  ON notes FOR DELETE
  USING (auth.uid() = user_id);
```

## Success Metrics

### Launch Metrics
1. **Deployment Success**: App successfully deployed to Vercel and accessible via public URL
2. **Visual Quality**: Landing page and notes app meet "wow factor" criteria
3. **Functionality**: All CRUD operations, tags, and search work correctly
4. **Performance**: App loads in under 3 seconds, search is responsive

### Engagement Metrics (Post-Launch)
1. **Demo Usage**: Visitors create demo accounts and try the notes app
2. **GitHub Traffic**: Increase in repository visits from landing page referrals
3. **Time in App**: Users spend time creating and managing notes
4. **Feature Usage**: Users utilize tags and search features

### Quality Metrics
1. **Zero Critical Bugs**: No broken functionality, data loss, or major UI issues
2. **Cross-browser Compatibility**: Works in Chrome, Firefox, Safari, Edge
3. **Mobile Responsiveness**: Full functionality on mobile devices
4. **Data Integrity**: Notes are properly saved, updated, and deleted in Supabase

## Open Questions

1. **Supabase Project**: Do you have an existing Supabase account/project or should we create a new one?
   - *Will need Supabase credentials during implementation*

2. **Demo Account Strategy**: Should there be a shared demo account everyone can use, or should each visitor create their own username?
   - *Suggest: Each visitor creates their own username for data isolation*

3. **Styling Choice**: CSS Modules or Tailwind CSS?
   - *Suggest: Tailwind CSS for rapid development and modern utility-first approach*

4. **TypeScript**: Use TypeScript for type safety or stick with JavaScript for speed?
   - *Suggest: TypeScript for better developer experience and fewer bugs*

5. **Landing Page Content**: Do you have specific copy/content for the landing page sections, or should I draft it?
   - *Can draft professional, compelling copy based on README and project vision*

6. **Notes App Branding**: Should the notes app have its own name/branding or just "AI Army Notes"?
   - *Suggest: "AI Army Notes" or "Army Notes" for simplicity*

---

## Next Steps

Once this PRD is approved:
1. Set up Supabase project and database schema
2. Initialize Next.js project with required dependencies
3. Create implementation plan and task breakdown
4. Design and develop landing page
5. Build notes app with CRUD functionality
6. Implement tags and search features
7. Generate visual assets
8. Test thoroughly across devices and browsers
9. Deploy to Vercel
10. Share with the world! 🚀

**Note**: This is significantly more complex than a simple landing page. The timeline of 1-3 days is aggressive for a full-featured app with database integration. We'll focus on rapid development while maintaining quality, but some features may need to be simplified or deferred if time constraints are tight.
