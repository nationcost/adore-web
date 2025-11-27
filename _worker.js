/**
 * Cloudflare Worker for adore.rest
 * Handles dynamic meta tags for social media crawlers
 */

const API_URL = 'https://adore-api.vwsnxy.workers.dev';

// List of user agents that are social media crawlers
const CRAWLER_USER_AGENTS = [
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'Slackbot',
  'Discordbot',
  'WhatsApp',
  'TelegramBot',
  'SkypeUriPreview',
  'vkShare',
  'redditbot',
  'Embedly',
  'Tumblr',
  'Pinterest',
  'Googlebot',
  'bingbot',
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Check if this is a profile page (username)
    const profileMatch = path.match(/^\/([a-zA-Z0-9_]+)$/);
    
    if (profileMatch) {
      const username = profileMatch[1];
      const userAgent = request.headers.get('User-Agent') || '';
      
      // Check if this is a crawler/bot
      const isCrawler = CRAWLER_USER_AGENTS.some(bot => 
        userAgent.toLowerCase().includes(bot.toLowerCase())
      );
      
      if (isCrawler) {
        // Fetch profile data and return meta HTML
        try {
          const response = await fetch(`${API_URL}/profile/${username}`);
          
          if (response.ok) {
            const profile = await response.json();
            const metaHTML = generateMetaHTML(profile);
            
            return new Response(metaHTML, {
              headers: {
                'Content-Type': 'text/html;charset=UTF-8',
                'Cache-Control': 'public, max-age=300',
              }
            });
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    }
    
    // For all other requests, fetch from origin (your static site)
    return env.ASSETS.fetch(request);
  }
};

function generateMetaHTML(profile) {
  const title = `${profile.displayName} (@${profile.username})`;
  const description = profile.bio || 'Check out my ADORE profile!';
  const image = profile.banner || profile.avatar || 'https://adore.rest/media/avatar/avatar.jpeg';
  const url = `https://adore.rest/${profile.username}`;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)} - adore</title>
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="profile">
  <meta property="og:url" content="${escapeHtml(url)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${escapeHtml(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${escapeHtml(url)}">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(image)}">
  
  <!-- Discord Embed -->
  <meta name="theme-color" content="#5865F2">
  
  <!-- Redirect to actual profile page -->
  <meta http-equiv="refresh" content="0;url=${escapeHtml(url)}">
  <script>window.location.href = "${escapeHtml(url)}";</script>
</head>
<body style="margin: 0; padding: 20px; font-family: system-ui, -apple-system, sans-serif; background: #000; color: #fff;">
  <div style="max-width: 600px; margin: 0 auto; text-align: center; padding: 40px 20px;">
    <h1 style="font-size: 2em; margin-bottom: 10px;">${escapeHtml(profile.displayName)}</h1>
    <p style="color: #888; margin-bottom: 20px;">@${escapeHtml(profile.username)}</p>
    ${profile.avatar ? `<img src="${escapeHtml(profile.avatar)}" alt="Avatar" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 20px;">` : ''}
    <p style="color: #ccc; margin-bottom: 30px;">${escapeHtml(description)}</p>
    <p style="color: #666;">Redirecting to profile...</p>
  </div>
</body>
</html>`;
}

function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.toString().replace(/[&<>"']/g, m => map[m]);
}
