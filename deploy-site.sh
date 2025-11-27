#!/bin/bash

# Deploy ADORE site with dynamic meta tags

echo "🔨 Building frontend..."
npm run build

echo "🚀 Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "✅ Deployment complete!"
echo "🌐 Site: https://adore.rest"
echo ""
echo "Note: Make sure your domain (adore.rest) is configured in Cloudflare Dashboard"
echo "to point to this worker."
