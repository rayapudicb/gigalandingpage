# TechVision Careers Website

## Overview

A corporate careers/job listing website inspired by Meta Careers, built with React frontend and Express backend. The application showcases job opportunities, company culture, team information, and events for a fictional tech company called "TechVision." The design follows Meta Careers-style guidelines with professional corporate aesthetics and human-centered design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite for development and production builds

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/` (Home, NotFound)
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

Path aliases configured:
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **Storage**: In-memory storage implementation (MemStorage class) with interface for database migration

The backend provides REST API endpoints for:
- Jobs listing
- Teams/departments information
- Events data
- Products information
- User management (basic CRUD)

API routes are registered in `server/routes.ts` with sample data currently hardcoded.

### Data Layer
- **Schema Definition**: Shared between frontend and backend in `shared/schema.ts`
- **Database**: PostgreSQL (configured via Drizzle, requires DATABASE_URL environment variable)
- **Migrations**: Drizzle Kit for database migrations (output to `./migrations/`)

Current schema includes:
- Users table with id, username, password
- TypeScript interfaces for Job, Team, Event, Product entities

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: 
  - Frontend: Vite builds to `dist/public/`
  - Backend: esbuild bundles server to `dist/index.cjs`
- **Build Script**: Custom `script/build.ts` handles both client and server builds

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit for TypeScript with type-safe queries
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI/Component Libraries
- **Radix UI**: Full suite of accessible, unstyled UI primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled components built on Radix (configured in `components.json`)
- **Lucide React**: Icon library
- **react-icons**: Additional icon sets (Facebook, Instagram)
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Vaul**: Drawer component
- **react-day-picker**: Calendar/date picker
- **Recharts**: Charting library

### Form & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolvers
- **Zod**: Schema validation library

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility
- **clsx**: Conditional class name utility

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **esbuild**: Fast JavaScript bundler for server code
- **Replit Plugins**: Development banner, error overlay, cartographer (Replit-specific)