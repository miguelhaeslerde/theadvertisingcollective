# Deployment Instructions for ADSTRONOMY GmbH Website

## Cloudflare Pages Deployment

### Build Configuration
- **Build command**: `./build.sh`
- **Build output directory**: `client/dist`
- **Root directory**: `.` (project root)
- **Node.js version**: 20

### Environment Variables (if needed)
```
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### Manual Steps in Cloudflare Pages Dashboard:
1. Connect your GitHub repository: `miguelhaeslerde/theadvertisingcollective`
2. Set build command: `./build.sh`
3. Set build output directory: `client/dist`
4. Deploy

### Files Created for Deployment:
- `build.sh` - Custom build script that handles directory structure
- `wrangler.toml` - Cloudflare configuration
- `_redirects` - SPA routing configuration (root directory)
- `client/public/_redirects` - SPA routing backup

## Alternative Deployment Options

### Netlify
- Build command: `npm run build`
- Publish directory: `dist/public`
- Uses `client/public/_redirects` automatically

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist/public`

## SPA Routing
The `_redirects` files ensure all routes are handled by React Router:
```
/*    /index.html   200
```

This prevents 404 errors when users directly access routes like `/about` or `/blog/post-slug`.