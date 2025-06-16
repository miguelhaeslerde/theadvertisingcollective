#!/bin/bash

# Build the application
npm run build

# Create the client/dist directory for Cloudflare Pages
mkdir -p client/dist

# Copy the built files from dist/public to client/dist
cp -r dist/public/* client/dist/

# Copy _redirects file to the output directory
cp _redirects client/dist/ 2>/dev/null || true

echo "Build completed! Files copied to client/dist for Cloudflare Pages deployment."