#!/bin/bash

# Test meta tags for ADORE profiles

if [ -z "$1" ]; then
  echo "Usage: ./test-meta.sh <discord-id>"
  echo "Example: ./test-meta.sh 123456789"
  exit 1
fi

DISCORD_ID=$1
URL="https://adore.rest/$DISCORD_ID"

echo "🔍 Testing meta tags for profile: $DISCORD_ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "📱 Simulating Discord Bot..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -s -A "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)" "$URL" | grep -E "(og:|twitter:)" | head -20
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 Regular Browser (should redirect)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
curl -sI "$URL" | grep -E "(Location|HTTP)"
echo ""

echo "✅ Test complete!"
echo ""
echo "To test in Discord:"
echo "1. Share this link: $URL"
echo "2. Check if it shows the user's profile info"
echo "3. If not, try: ${URL}?v=1 (clears Discord cache)"
