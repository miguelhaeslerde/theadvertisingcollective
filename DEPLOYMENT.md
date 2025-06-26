# Deployment Guide - The Advertising Collective

## 1. GitHub Repository Setup

### Create GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click "+" → "New repository"
3. Repository name: `tac-website` or `advertising-collective`
4. Description: "The Advertising Collective - Professional consulting agency website"
5. Set to "Public" (required for free Cloudflare Pages)
6. Do NOT check "Initialize with README"
7. Click "Create repository"

### Push Code to GitHub
```bash
# Run these commands in Replit Shell
git init
git add .
git commit -m "Initial commit: TAC website with blog integration and legal compliance"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## 2. Cloudflare Pages Deployment

### Setup Cloudflare Pages
1. Go to [cloudflare.com](https://cloudflare.com) → Dashboard
2. Navigate to "Pages" in left sidebar
3. Click "Create a project" → "Connect to Git"
4. Authorize GitHub and select your repository

### Build Configuration
- **Framework preset**: Vite
- **Build command**: `npm run build:static` 
- **Build output directory**: `dist/public`
- **Root directory**: `/` (leave empty)

### Environment Variables
Add these in Cloudflare Pages settings:

**Required:**
- `NODE_VERSION`: `20`
- `DATABASE_URL`: Your Neon PostgreSQL connection string

**Optional (if using Contentful):**
- `VITE_CONTENTFUL_SPACE_ID`: Your Contentful space ID
- `VITE_CONTENTFUL_ACCESS_TOKEN`: Your Contentful access token

## 3. Database Setup

### Neon Database (Production)
1. Go to [neon.tech](https://neon.tech)
2. Create new project: "TAC Website Production"
3. Copy the connection string
4. Add to Cloudflare Pages environment variables as `DATABASE_URL`

### Database Migration
```bash
# Run in Replit to push schema to production database
npm run db:push
```

## 4. Custom Domain (Optional)

### In Cloudflare Pages:
1. Go to your Pages project
2. Click "Custom domains" tab
3. Add your domain (e.g., `theadvertisingcollective.de`)
4. Follow DNS configuration instructions

### Domain Configuration:
- Add CNAME record pointing to your `.pages.dev` URL
- SSL/TLS will be automatically configured

## 5. Production Checklist

- [ ] GitHub repository created and code pushed
- [ ] Cloudflare Pages project configured
- [ ] Environment variables set correctly
- [ ] Database connection working
- [ ] Build and deployment successful
- [ ] Website accessible via .pages.dev URL
- [ ] Contact forms working
- [ ] Blog integration functional
- [ ] Legal pages (Impressum, Datenschutz) displaying correctly

## 6. Post-Deployment

### Monitoring
- Check Cloudflare Pages dashboard for build logs
- Monitor performance in Cloudflare Analytics
- Set up email notifications for failed deployments

### Updates
- Push changes to GitHub main branch
- Cloudflare Pages will automatically rebuild and deploy
- No manual intervention needed for updates

## Technical Notes

- Static site optimized for performance
- Serverless functions for contact form handling
- PostgreSQL database for data persistence
- Content delivery via Cloudflare global network
- Automatic SSL/TLS encryption
- German GDPR compliance features included