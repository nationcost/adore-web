# ADORE Website

Official website for ADORE Discord bot.

## 🚀 Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Build:** Vite
- **Hosting:** cPanel (adore.rest)
- **API:** Cloudflare Workers (api.adore.rest)

## 📁 Project Structure

```
adore-web/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── utils/          # Utilities, types, data
│   ├── App.tsx         # Main app component
│   ├── index.tsx       # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   └── media/
│       ├── avatar/     # Profile avatars
│       ├── music/      # Music files
│       └── covers/     # Album covers
├── dist/               # Build output
└── index.html          # HTML template
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

```bash
# Build
npm run build

# Push to GitHub
git add .
git commit -m "Update"
git push

# Deploy to cPanel
cd ~/public_html/adore-web
git pull
cp -r dist/* ../
cp -r public/media ../
```

## 🔗 Links

- Website: https://adore.rest
- API: https://api.adore.rest
- Discord: https://discord.gg/dyjn7wzdyH

## 📝 Profile Pages

- **Static:** `/me`, `/koi`, `/apoorva` (hardcoded)
- **Dynamic:** `/:username` (fetches from API)

## 🔑 Environment

API endpoint is configured in `src/pages/DynamicProfile.tsx`:
```typescript
const API_URL = 'https://adore-api.vwsnx.workers.dev';
```

Update this to `https://api.adore.rest` once Cloudflare domain is active.
