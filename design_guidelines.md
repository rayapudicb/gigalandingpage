# Meta Careers-Inspired Business Page Design Guidelines

## Design Approach
**Reference-Based Hybrid:** Drawing from Meta Careers, Google Careers, and LinkedIn - combining professional corporate aesthetics with approachable, human-centered design. Focus on content hierarchy, clear navigation, and showcasing company culture through strategic imagery.

## Typography System
- **Headings:** Sans-serif system font stack (Inter, SF Pro, Segoe UI)
  - Hero: text-5xl to text-7xl, font-bold, tracking-tight
  - Section headers: text-4xl, font-bold
  - Card titles: text-xl, font-semibold
- **Body:** text-base to text-lg, leading-relaxed
- **Labels/Meta:** text-sm, font-medium, uppercase tracking-wide for categories

## Layout & Spacing
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Content max-width: max-w-7xl
- Text content: max-w-4xl

## Page Structure

### Hero Section (80vh)
- Full-width background image showcasing workplace/team culture
- Centered content with blurred-background search bar
- H1 headline + supporting tagline
- Prominent job search input with category filters
- Stats strip below hero (e.g., "2000+ Open Positions | 50+ Locations")

### Job Categories Grid
- 3-column grid (lg:grid-cols-3 md:grid-cols-2)
- Large clickable cards with:
  - Category icon/illustration
  - Category name (text-2xl)
  - Job count
  - Brief 2-line description
  - Arrow indicator

### Featured Opportunities
- 2-column layout showcasing priority roles
- Cards with: Role title, location, team, quick apply button
- Alternating image-text layout for visual rhythm

### Life at Company Section
- Photo grid: 2-3 columns showing authentic workplace moments
- Employee testimonial cards with headshots
- Culture value highlights with icons

### Benefits/Why Join
- 4-column icon grid (stacks to 1 on mobile)
- Each benefit: Icon, title, 1-2 line description

### Footer
- Multi-column: Quick links, Locations, Social media, Newsletter signup
- Job alert subscription form
- Legal links and company info

## Component Library

**Search Bar:**
- Large, prominent with shadow-lg
- Integrated filters (Location, Department, Type)
- Autocomplete dropdown

**Job Cards:**
- White background, rounded-lg, shadow-md hover:shadow-xl transition
- Layout: Title, Department badge, Location + Remote tag, Quick apply button
- Bookmark icon top-right

**Category Cards:**
- Hover lift effect (hover:-translate-y-2)
- Gradient border accent on hover
- Clean internal padding (p-8)

**Navigation:**
- Sticky header with transparent-to-solid scroll effect
- Logo left, main nav center, "Search Jobs" CTA right
- Mobile: Hamburger menu

## Images
**Required Images:**
1. **Hero Background:** Large (1920x1080) - Diverse team collaboration, modern office, or company culture moment
2. **Category Icons/Illustrations:** Simple, modern iconography for each job category (8-12 images)
3. **Life at Company Grid:** 6-9 authentic workplace photos showing: team meetings, office spaces, events, employee candids
4. **Employee Headshots:** 3-5 professional but approachable testimonial photos
5. **Benefits Icons:** Custom illustrated icons for each benefit (6-8 icons)

## Interactions
- Smooth scroll to sections
- Hover states: Cards lift, buttons darken
- Filter animations: Fade in/out job results
- Minimal, purposeful animations only

## Responsive Behavior
- Mobile: Single column, stacked sections, simplified filters
- Tablet: 2-column grids, maintained hierarchy
- Desktop: Full 3-4 column layouts, expanded navigation