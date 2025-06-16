# The Advertising Collective - Replit Configuration

## Overview

The Advertising Collective (TAC) is a modern full-stack web application built for a German consulting agency. It's designed as a marketing and lead generation website with integrated contact management capabilities. The application features a sleek, professional design with German-focused content and includes advanced features like blog integration with Contentful CMS and a comprehensive contact form system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API endpoints

### Development Environment
- **Environment**: Replit with Node.js 20
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Vite dev server with HMR
- **Build Process**: TSX for TypeScript execution in development

## Key Components

### Frontend Components
- **Layout System**: Responsive layout with Header, Footer, and dynamic page content
- **Hero Section**: Video Sales Letter (VSL) placeholder with call-to-action
- **Contact Form**: Multi-field form with validation and privacy compliance
- **Blog System**: Contentful-powered blog with pagination and reading time estimation
- **Theme System**: Light/dark mode toggle with persistent preferences
- **Services Showcase**: Grid-based service presentation
- **Customer Logos**: Animated marquee display of client logos

### Backend Services
- **Contact Management**: Full CRUD operations for contact submissions
- **Data Validation**: Zod schemas for type-safe data handling
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **Error Handling**: Centralized error handling with appropriate HTTP status codes

### Database Schema
- **Users Table**: Authentication system (prepared for future use)
- **Contacts Table**: Lead capture and management system
- **Migrations**: Drizzle-based database migrations

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. React Hook Form validates data client-side using Zod schemas
3. Form data submitted to `/api/contacts` endpoint
4. Backend validates data using shared Zod schemas
5. Data stored in PostgreSQL database via Drizzle ORM
6. Success/error response returned to frontend
7. User receives confirmation via toast notification

### Blog Content Flow
1. Content managed in Contentful CMS
2. Frontend queries Contentful API for blog posts
3. TanStack Query caches responses for performance
4. Blog posts rendered with rich text content
5. Pagination and search functionality supported

### Theme Management
1. Theme preference stored in localStorage
2. System respects user's OS preference as default
3. Theme context provides global state management
4. CSS variables enable smooth theme transitions

## External Dependencies

### Content Management
- **Contentful CMS**: Headless CMS for blog content management
- **Rich Text Rendering**: Contentful's rich text format support

### Database & Hosting
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Deployment**: Integrated hosting and deployment platform

### UI & Styling
- **Google Fonts**: Bowlby One SC and Instrument Sans typography
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Modern icon library

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESLint & Prettier**: Code quality and formatting
- **Vite Plugins**: Development experience enhancements

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Enabled via Vite dev server
- **Database**: Automatic connection to Neon PostgreSQL

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: ESBuild bundles Express server to `dist`
- **Static Assets**: Served from `dist/public` directory
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Run Command**: Parallel workflow for development
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Port Mapping**: Internal 5000 → External 80

## Changelog

- June 16, 2025: Initial setup
- June 16, 2025: Implemented complete diagonal yellow divider system with scrolling animations
- June 16, 2025: Added customer logo dividers between sections, removed duplicate static logos
- June 16, 2025: Corrected diagonal angles for better section coverage on widescreen displays
- June 16, 2025: Restructured Services section to vertical layout with standalone cards containing complete service information
- June 16, 2025: Removed navigation dependencies from Services section - each card is now self-contained
- June 16, 2025: Updated all legal documents and contact information to ADSTRONOMY GmbH (Berlin) with correct registrations and Luis Fretz as managing director

## User Preferences

Preferred communication style: Simple, everyday language.