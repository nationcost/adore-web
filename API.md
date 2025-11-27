# ADORE API - Complete Setup Guide

Everything you need to know about the ADORE API.

---

## 🔗 API Endpoints

**Base URL:** `https://adore-api.vwsnxy.workers.dev`  
**Custom Domain:** `https://api.adore.rest` (when DNS propagates)

---

## 🔑 API Keys

### BOT_API_KEY (Discord Bot)
```
e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386
```
Use this key for all Discord bot operations (create, update, delete profiles, upload files).

### ADMIN_API_KEY (Admin Operations)
```
9a6479274ea928e35300048c241a3254bb1443f8e9275c79f154138744bebbf4
```
Use this key for admin operations (list all profiles).

---

## 📡 API Endpoints

### 1. GET /profile/:username
**Fetch a user profile (PUBLIC - No auth required)**

```bash
curl https://adore-api.vwsnxy.workers.dev/profile/testuser
```

**Response:**
```json
{
  "username": "testuser",
  "displayName": "testuser",
  "avatar": "https://cdn.discordapp.com/avatars/...",
  "banner": "https://media.adore.rest/banners/123.jpg",
  "bio": "Hello world!",
  "song": "Bohemian Rhapsody",
  "songArtist": "Queen",
  "songCover": "https://i.scdn.co/image/...",
  "songPreview": "https://p.scdn.co/mp3-preview/...",
  "songUrl": "https://open.spotify.com/track/...",
  "discordId": "123456789",
  "links": [
    { "type": "discord", "url": "https://discord.com/users/123" },
    { "type": "github", "url": "https://github.com/user" }
  ],
  "createdAt": "2024-11-26T12:00:00.000Z",
  "updatedAt": "2024-11-26T15:30:00.000Z"
}
```

---

### 2. POST /profile/update
**Create or update a profile (Requires BOT_API_KEY)**

```bash
curl -X POST https://adore-api.vwsnxy.workers.dev/profile/update \
  -H "X-API-Key: e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "discordId": "123456789",
    "avatar": "https://cdn.discordapp.com/avatars/...",
    "banner": "https://media.adore.rest/banners/123.jpg",
    "bio": "Hello world!",
    "song": "Bohemian Rhapsody",
    "songArtist": "Queen",
    "songCover": "https://i.scdn.co/image/...",
    "songPreview": "https://p.scdn.co/mp3-preview/...",
    "songUrl": "https://open.spotify.com/track/...",
    "links": [
      { "type": "discord", "url": "https://discord.com/users/123" },
      { "type": "auto", "url": "https://github.com/user" }
    ]
  }'
```

**Response:**
```json
{
  "success": true,
  "profile": { ... },
  "message": "Profile created"
}
```

---

### 3. POST /upload/avatar
**Upload avatar image to R2 (Requires BOT_API_KEY)**

```bash
curl -X POST https://adore-api.vwsnxy.workers.dev/upload/avatar \
  -H "X-API-Key: e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386" \
  -F "avatar=@avatar.png" \
  -F "discordId=123456789"
```

**Response:**
```json
{
  "success": true,
  "url": "https://media.adore.rest/avatars/123456789.png",
  "filename": "avatars/123456789.png"
}
```

**Limits:**
- Max file size: 5MB
- Allowed types: PNG, JPG, JPEG, GIF, WEBP
- Overwrites existing avatar for that Discord ID

---

### 4. POST /upload/banner
**Upload banner image to R2 (Requires BOT_API_KEY)**

```bash
curl -X POST https://adore-api.vwsnxy.workers.dev/upload/banner \
  -H "X-API-Key: e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386" \
  -F "banner=@banner.jpg" \
  -F "discordId=123456789"
```

**Response:**
```json
{
  "success": true,
  "url": "https://media.adore.rest/banners/123456789.jpg",
  "filename": "banners/123456789.jpg"
}
```

**Limits:**
- Max file size: 8MB
- Allowed types: PNG, JPG, JPEG, GIF, WEBP
- Recommended size: 1920x480px (4:1 ratio)

---

### 5. DELETE /profile/:username
**Delete a profile (Requires BOT_API_KEY + ownership)**

```bash
curl -X DELETE https://adore-api.vwsnxy.workers.dev/profile/johndoe \
  -H "X-API-Key: e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386" \
  -H "Content-Type: application/json" \
  -d '{"discordId": "123456789"}'
```

**Response:**
```json
{
  "success": true,
  "message": "Profile deleted"
}
```

---

### 6. GET /profiles
**List all profiles (Requires ADMIN_API_KEY)**

```bash
curl https://adore-api.vwsnxy.workers.dev/profiles \
  -H "X-API-Key: 9a6479274ea928e35300048c241a3254bb1443f8e9275c79f154138744bebbf4"
```

**Response:**
```json
{
  "profiles": [ ... ],
  "count": 10
}
```

---

## 🎨 Profile Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | Yes | Unique username (alphanumeric + underscore) |
| `discordId` | string | Yes | Discord user ID (for ownership) |
| `avatar` | string | No | Avatar URL (Discord CDN or R2) |
| `banner` | string | No | Banner URL (Discord CDN or R2) |
| `bio` | string | No | Bio text (max 200 chars) |
| `song` | string | No | Song name |
| `songArtist` | string | No | Artist name |
| `songCover` | string | No | Album cover URL |
| `songPreview` | string | No | Spotify 30-sec preview URL |
| `songUrl` | string | No | Spotify track URL |
| `links` | array | No | Array of social links |

---

## 🔗 Social Links

### Supported Platforms (with icons)
- `discord` - Discord profile
- `instagram` - Instagram
- `tiktok` - TikTok
- `github` - GitHub
- `twitter` - Twitter/X
- `youtube` - YouTube
- `twitch` - Twitch
- `roblox` - Roblox
- `spotify` - Spotify profile
- `steam` - Steam
- `link` - Generic link (default)

### Auto-Detection
Set `type: "auto"` and the API will detect the platform from the URL:

```json
{
  "links": [
    { "type": "auto", "url": "https://github.com/user" }
  ]
}
```

Will be stored as:
```json
{
  "links": [
    { "type": "github", "url": "https://github.com/user" }
  ]
}
```

---

## 🗄️ Storage

### Cloudflare KV (Profile Data)
- **Namespace ID:** `6f65bb6da6bc474c9c2c0f1ed53bf939`
- **Binding:** `PROFILES`
- **Stores:** Profile JSON data

### Cloudflare R2 (Media Files)
- **Bucket:** `adore`
- **Binding:** `MEDIA_BUCKET`
- **Custom Domain:** `media.adore.rest`
- **Stores:** Avatar and banner images

---

## 🔒 Security

### Two-Layer Security
1. **API Key** - Validates request is from authorized source
2. **Discord ID** - Users can only modify their own profiles

### Example: Ownership Check
```javascript
// User A tries to update User B's profile
POST /profile/update
{
  "username": "userB",
  "discordId": "111111111"  // User A's ID
}

// Response: 403 Forbidden
{
  "error": "Access denied - You do not own this profile",
  "owner": "222222222",      // User B's ID
  "attempted": "111111111"   // User A's ID
}
```

---

## 🚀 Discord Bot Integration

### Environment Variables
```env
BOT_API_KEY=e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386
API_BASE_URL=https://adore-api.vwsnxy.workers.dev
```

### Example: Create Profile
```javascript
const response = await fetch(`${process.env.API_BASE_URL}/profile/update`, {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.BOT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: interaction.user.username,
    discordId: interaction.user.id,
    avatar: interaction.user.displayAvatarURL({ size: 512 }),
    bio: 'Hello world!'
  })
});

const data = await response.json();
```

### Example: Upload Avatar
```javascript
const FormData = require('form-data');

// Download image from Discord
const imageResponse = await fetch(attachment.url);
const imageBuffer = await imageResponse.arrayBuffer();

// Upload to R2
const formData = new FormData();
formData.append('avatar', Buffer.from(imageBuffer), {
  filename: 'avatar.png',
  contentType: 'image/png'
});
formData.append('discordId', interaction.user.id);

const uploadResponse = await fetch(`${process.env.API_BASE_URL}/upload/avatar`, {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.BOT_API_KEY,
    ...formData.getHeaders()
  },
  body: formData
});

const { url } = await uploadResponse.json();

// Update profile with R2 URL
await fetch(`${process.env.API_BASE_URL}/profile/update`, {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.BOT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: interaction.user.username,
    discordId: interaction.user.id,
    avatar: url
  })
});
```

---

## 🎵 Spotify Integration

### Get Spotify Access Token
```javascript
const response = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
    ).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
});

const { access_token } = await response.json();
```

### Search for Track
```javascript
const response = await fetch(
  `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
  {
    headers: { 'Authorization': `Bearer ${access_token}` }
  }
);

const { tracks } = await response.json();
const track = tracks.items[0];
```

### Get Track by ID
```javascript
const trackId = '3n3Ppam7vgaVa1iaRUc9Lp'; // From Spotify URL
const response = await fetch(
  `https://api.spotify.com/v1/tracks/${trackId}`,
  {
    headers: { 'Authorization': `Bearer ${access_token}` }
  }
);

const track = await response.json();
```

### Update Profile with Spotify Data
```javascript
await fetch(`${process.env.API_BASE_URL}/profile/update`, {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.BOT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: interaction.user.username,
    discordId: interaction.user.id,
    song: track.name,
    songArtist: track.artists[0].name,
    songCover: track.album.images[0].url,
    songPreview: track.preview_url,
    songUrl: track.external_urls.spotify
  })
});
```

---

## 📊 Rate Limits & Quotas

### Cloudflare Workers (Free Tier)
- 100,000 requests/day
- 10ms CPU time per request

### Cloudflare KV (Free Tier)
- 100,000 reads/day
- 1,000 writes/day
- 1 GB storage

### Cloudflare R2 (Free Tier)
- 10 GB storage
- 1 million Class A operations (writes)
- 10 million Class B operations (reads)
- **Unlimited egress (FREE bandwidth!)**

---

## 🐛 Error Codes

| Code | Error | Cause |
|------|-------|-------|
| 400 | Bad Request | Missing required fields or invalid input |
| 401 | Unauthorized | Invalid or missing API key |
| 403 | Forbidden | Trying to modify someone else's profile |
| 404 | Not Found | Profile doesn't exist |
| 500 | Internal Server Error | Server error |

---

## ✅ Deployment Checklist

- [x] Cloudflare Workers deployed
- [x] KV namespace created and bound
- [x] R2 bucket created and bound
- [x] Custom domain `media.adore.rest` connected to R2
- [x] API keys set as secrets
- [x] All endpoints tested
- [x] Frontend built and deployed

---

## 🔗 Quick Links

- **API URL:** https://adore-api.vwsnxy.workers.dev
- **Media URL:** https://media.adore.rest
- **Frontend:** https://adore.rest
- **Cloudflare Dashboard:** https://dash.cloudflare.com/248b6da4d9a64de03171ad88e22a3629/workers-and-pages

---

## 📝 Notes

- Profile usernames are case-insensitive and stored in lowercase
- Discord IDs are used for ownership verification
- R2 files are named by Discord ID (one avatar + one banner per user)
- Links with `type: "auto"` are automatically detected
- Spotify preview URLs are 30-second clips
- All timestamps are in ISO 8601 format (UTC)


---

## 🤖 Discord Bot Commands

### Command Structure

```
/about create [name]              - Create your profile
/about bio [description]          - Set your bio
/about avatar [image/gif/@user]   - Set your avatar
/about banner [image/gif/@user]   - Set your banner
/about music [spotify/name]       - Set your favorite song
/about social [link] [--platform] - Add social links
/about view [@user]               - View a profile
/about delete                     - Delete your profile
```

---

### 1. `/about create [name]`
**Create your ADORE profile**

**Usage:**
```
/about create johndoe
/about create cool_user_123
```

**What it does:**
1. Creates profile with username
2. Sets Discord ID as owner
3. Auto-adds Discord avatar
4. Auto-adds Discord profile link

**API Call:**
```javascript
POST /profile/update
{
  "username": "johndoe",
  "discordId": "123456789",
  "avatar": "https://cdn.discordapp.com/avatars/...",
  "links": [
    { "type": "discord", "url": "https://discord.com/users/123456789" }
  ]
}
```

**Response:**
```
✅ Profile created!
Username: johndoe
View at: https://adore.rest/johndoe
```

---

### 2. `/about bio [description]`
**Set your profile bio**

**Usage:**
```
/about bio Hey! I'm a developer who loves music 🎵
/about bio Software engineer | Gamer | Music lover
```

**Rules:**
- Max 200 characters
- Supports emojis
- Can be updated anytime

**API Call:**
```javascript
POST /profile/update
{
  "username": "johndoe",
  "discordId": "123456789",
  "bio": "Hey! I'm a developer who loves music 🎵"
}
```

**Response:**
```
✅ Bio updated!
"Hey! I'm a developer who loves music 🎵"
```

---

### 3. `/about avatar [image/gif/@user]`
**Set your profile avatar**

**Options:**
1. **Attach image/GIF** - Upload custom avatar
2. **Mention user** - `@username` to copy their avatar
3. **No input** - Uses your Discord avatar

**Usage:**
```
/about avatar [attach image.png]
/about avatar @friend
/about avatar
```

**Supported formats:**
- PNG, JPG, JPEG, GIF, WEBP
- Max 5MB
- Animated GIFs supported

**Flow:**
```javascript
// If attachment provided
if (attachment) {
  // 1. Download image
  const imageBuffer = await fetch(attachment.url).then(r => r.arrayBuffer());
  
  // 2. Upload to R2
  const formData = new FormData();
  formData.append('avatar', Buffer.from(imageBuffer));
  formData.append('discordId', user.id);
  
  const upload = await fetch(`${API_URL}/upload/avatar`, {
    method: 'POST',
    headers: { 'X-API-Key': BOT_API_KEY },
    body: formData
  });
  
  const { url } = await upload.json();
  
  // 3. Update profile
  await fetch(`${API_URL}/profile/update`, {
    method: 'POST',
    headers: {
      'X-API-Key': BOT_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.username,
      discordId: user.id,
      avatar: url
    })
  });
}
// If user mentioned
else if (mentionedUser) {
  avatarUrl = mentionedUser.displayAvatarURL({ size: 512, dynamic: true });
}
// Default: use command user's avatar
else {
  avatarUrl = user.displayAvatarURL({ size: 512, dynamic: true });
}
```

**Response:**
```
✅ Avatar updated!
[Shows avatar preview]
```

---

### 4. `/about banner [image/gif/@user]`
**Set your profile banner**

**Options:**
1. **Attach image/GIF** - Upload custom banner
2. **Mention user** - `@username` to copy their banner
3. **No input** - Removes banner

**Usage:**
```
/about banner [attach banner.jpg]
/about banner @friend
/about banner
```

**Supported formats:**
- PNG, JPG, JPEG, GIF, WEBP
- Max 8MB
- Recommended: 1920x480px (4:1 ratio)

**Flow:**
```javascript
// If attachment provided
if (attachment) {
  // Upload to R2
  const formData = new FormData();
  formData.append('banner', imageBuffer);
  formData.append('discordId', user.id);
  
  const upload = await fetch(`${API_URL}/upload/banner`, {
    method: 'POST',
    headers: { 'X-API-Key': BOT_API_KEY },
    body: formData
  });
  
  const { url } = await upload.json();
  
  // Update profile
  await updateProfile({ banner: url });
}
// If user mentioned
else if (mentionedUser) {
  const fetchedUser = await mentionedUser.fetch();
  bannerUrl = fetchedUser.bannerURL({ size: 1024, dynamic: true });
}
// Default: remove banner
else {
  bannerUrl = null;
}
```

**Response:**
```
✅ Banner updated!
[Shows banner preview]
```

---

### 5. `/about music [input]`
**Set your favorite song**

**Options:**
1. **Spotify link** - Auto-fetches song details
2. **Song name** - Searches Spotify
3. **Manual** - Opens modal for manual entry

**Usage:**
```
/about music https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp
/about music Bohemian Rhapsody
/about music Bohemian Rhapsody - Queen
```

**Spotify Link Detection:**
```javascript
const spotifyRegex = /spotify\.com\/track\/([a-zA-Z0-9]+)/;

if (spotifyRegex.test(input)) {
  // Extract track ID
  const trackId = input.match(spotifyRegex)[1];
  
  // Get Spotify access token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      ).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  
  const { access_token } = await tokenResponse.json();
  
  // Fetch track details
  const trackResponse = await fetch(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    {
      headers: { 'Authorization': `Bearer ${access_token}` }
    }
  );
  
  const track = await trackResponse.json();
  
  // Update profile
  await fetch(`${API_URL}/profile/update`, {
    method: 'POST',
    headers: {
      'X-API-Key': BOT_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user.username,
      discordId: user.id,
      song: track.name,
      songArtist: track.artists[0].name,
      songCover: track.album.images[0].url,
      songPreview: track.preview_url,
      songUrl: track.external_urls.spotify
    })
  });
}
```

**Spotify Search:**
```javascript
else {
  // Search Spotify
  const searchResponse = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(input)}&type=track&limit=5`,
    {
      headers: { 'Authorization': `Bearer ${access_token}` }
    }
  );
  
  const { tracks } = await searchResponse.json();
  
  // Show select menu with top 5 results
  // User picks one
  // Store selected track
}
```

**Response:**
```
🎵 Song updated!
Now Playing: Bohemian Rhapsody by Queen
[Shows album cover]
```

---

### 6. `/about social [link] [--platform]`
**Add social media links**

**Supported Platforms:**
- `--discord` - Discord profile
- `--instagram` / `--insta` - Instagram
- `--tiktok` - TikTok
- `--roblox` - Roblox
- `--twitter` / `--x` - Twitter/X
- `--github` - GitHub
- `--youtube` - YouTube
- `--twitch` - Twitch
- `--spotify` - Spotify profile
- `--steam` - Steam
- (no flag) - Auto-detect or generic link

**Usage:**
```
/about social https://instagram.com/username --instagram
/about social https://github.com/username --github
/about social https://mywebsite.com
```

**Auto-Detection:**
```javascript
function detectPlatform(url) {
  const patterns = {
    discord: /discord\.com\/users\/|discordapp\.com\/users\//i,
    instagram: /instagram\.com\//i,
    tiktok: /tiktok\.com\/@/i,
    roblox: /roblox\.com\/users\//i,
    twitter: /twitter\.com\/|x\.com\//i,
    github: /github\.com\//i,
    youtube: /youtube\.com\/|youtu\.be\//i,
    twitch: /twitch\.tv\//i,
    spotify: /open\.spotify\.com\/user\//i,
    steam: /steamcommunity\.com\//i
  };
  
  for (const [platform, regex] of Object.entries(patterns)) {
    if (regex.test(url)) return platform;
  }
  
  return 'link'; // Default
}
```

**API Call:**
```javascript
// Get current profile
const profile = await fetch(`${API_URL}/profile/${username}`).then(r => r.json());

// Add new link
const links = profile.links || [];
links.push({
  type: platform || 'auto',  // API will auto-detect if 'auto'
  url: link
});

// Update profile
await fetch(`${API_URL}/profile/update`, {
  method: 'POST',
  headers: {
    'X-API-Key': BOT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: user.username,
    discordId: user.id,
    links: links
  })
});
```

**Response:**
```
✅ Social link added!
Platform: Instagram
URL: https://instagram.com/username

You now have 3 social links.
```

---

### 7. `/about view [@user]`
**View a profile**

**Usage:**
```
/about view
/about view @friend
```

**API Call:**
```javascript
const username = mentionedUser ? mentionedUser.username : user.username;
const profile = await fetch(`${API_URL}/profile/${username.toLowerCase()}`).then(r => r.json());
```

**Response:**
```
📋 Profile: johndoe
Bio: Hey! I'm a developer who loves music 🎵
Song: Bohemian Rhapsody by Queen

🔗 Links:
• Discord: discord.com/users/123
• Instagram: instagram.com/johndoe
• GitHub: github.com/johndoe

View full profile: https://adore.rest/johndoe
```

---

### 8. `/about delete`
**Delete your profile**

**Usage:**
```
/about delete
```

**Confirmation:**
```
⚠️ Are you sure you want to delete your profile?
This action cannot be undone.

[Delete] [Cancel]
```

**API Call:**
```javascript
await fetch(`${API_URL}/profile/${username}`, {
  method: 'DELETE',
  headers: {
    'X-API-Key': BOT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    discordId: user.id
  })
});
```

**Response:**
```
✅ Profile deleted successfully.
Your username is now available for others to use.
```

---

## 🎯 Command Implementation Tips

### 1. Use Deferred Replies for Uploads
```javascript
// For file uploads (avatar, banner)
await interaction.deferReply({ ephemeral: true });

// ... do upload ...

await interaction.editReply('✅ Avatar updated!');
```

### 2. Validate File Types
```javascript
if (!attachment.contentType?.startsWith('image/')) {
  return interaction.reply('❌ File must be an image!');
}

if (attachment.size > 5 * 1024 * 1024) {
  return interaction.reply('❌ Image too large! Max 5MB.');
}
```

### 3. Handle Errors Gracefully
```javascript
try {
  const response = await fetch(...);
  const data = await response.json();
  
  if (data.error) {
    return interaction.reply(`❌ Error: ${data.error}`);
  }
  
  // Success
} catch (error) {
  console.error(error);
  return interaction.reply('❌ Something went wrong!');
}
```

### 4. Use Embeds for Rich Responses
```javascript
const embed = new EmbedBuilder()
  .setColor(0x0055DC)
  .setTitle(`${profile.displayName}'s Profile`)
  .setDescription(profile.bio)
  .setThumbnail(profile.avatar)
  .setImage(profile.banner)
  .addFields(
    { name: '🎵 Now Playing', value: `${profile.song} by ${profile.songArtist}` },
    { name: '🔗 Links', value: profile.links.map(l => `• ${l.url}`).join('\n') }
  )
  .setURL(`https://adore.rest/${profile.username}`);

await interaction.reply({ embeds: [embed] });
```

---

## 📝 Command Registration

```javascript
const commands = [
  new SlashCommandBuilder()
    .setName('about')
    .setDescription('Manage your ADORE profile')
    .addSubcommand(subcommand =>
      subcommand
        .setName('create')
        .setDescription('Create your profile')
        .addStringOption(option =>
          option
            .setName('username')
            .setDescription('Your unique username')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('bio')
        .setDescription('Set your bio')
        .addStringOption(option =>
          option
            .setName('description')
            .setDescription('Your bio (max 200 characters)')
            .setRequired(true)
            .setMaxLength(200)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('avatar')
        .setDescription('Set your avatar')
        .addAttachmentOption(option =>
          option
            .setName('image')
            .setDescription('Upload an image or GIF')
            .setRequired(false)
        )
        .addUserOption(option =>
          option
            .setName('user')
            .setDescription('Copy avatar from another user')
            .setRequired(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('banner')
        .setDescription('Set your banner')
        .addAttachmentOption(option =>
          option
            .setName('image')
            .setDescription('Upload a banner image')
            .setRequired(false)
        )
        .addUserOption(option =>
          option
            .setName('user')
            .setDescription('Copy banner from another user')
            .setRequired(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('music')
        .setDescription('Set your favorite song')
        .addStringOption(option =>
          option
            .setName('input')
            .setDescription('Spotify link or song name')
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('social')
        .setDescription('Add a social link')
        .addStringOption(option =>
          option
            .setName('link')
            .setDescription('Your social media link')
            .setRequired(true)
        )
        .addStringOption(option =>
          option
            .setName('platform')
            .setDescription('Platform type (auto-detected if not specified)')
            .setRequired(false)
            .addChoices(
              { name: 'Discord', value: 'discord' },
              { name: 'Instagram', value: 'instagram' },
              { name: 'TikTok', value: 'tiktok' },
              { name: 'Roblox', value: 'roblox' },
              { name: 'Twitter/X', value: 'twitter' },
              { name: 'GitHub', value: 'github' },
              { name: 'YouTube', value: 'youtube' },
              { name: 'Twitch', value: 'twitch' },
              { name: 'Spotify', value: 'spotify' },
              { name: 'Steam', value: 'steam' },
              { name: 'Other', value: 'link' }
            )
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('view')
        .setDescription('View a profile')
        .addUserOption(option =>
          option
            .setName('user')
            .setDescription('User to view (defaults to you)')
            .setRequired(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('delete')
        .setDescription('Delete your profile')
    )
];

// Register commands
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
```


---

## 🎭 Dynamic Meta Tags for Social Media

### Problem
When sharing profile links on Discord, Twitter, etc., they show default site meta tags instead of user-specific info.

### Solution
The main site (`adore.rest`) uses a Cloudflare Worker that:
1. Detects social media crawlers (Discord, Twitter, Facebook, etc.)
2. Fetches profile data from the API
3. Serves dynamic HTML with proper Open Graph meta tags
4. Redirects regular users to the React app

### How It Works
- **Profile URL**: `https://adore.rest/123456789` (Discord ID)
- **For Crawlers**: Serves HTML with meta tags showing user's name, bio, avatar/banner
- **For Users**: Redirects to React SPA with full profile experience

### Deployment
```bash
# Build and deploy the site with meta tag worker
./deploy-site.sh
```

### Configuration
The worker is configured in `wrangler.toml` and uses `_worker.js` to handle requests.

---

## 🤖 Discord Bot Commands

### Profile Management

**Create Profile**
```
!about create
```
Creates a profile using your Discord ID as the identifier. Username defaults to your Discord username.

**Set Username**
```
!about username [name]
```
Set your custom username (alphanumeric + underscore, 3-20 chars).

**Set Display Name**
```
!about name [name]
```
Set your display name (can include spaces, up to 32 chars).

**Set Bio**
```
!about bio [text]
```
Set your profile bio (max 200 characters).

**Set Avatar**
```
!about avatar [attachment/@user]
```
Upload custom avatar or copy from mentioned user.

**Set Banner**
```
!about banner [attachment/@user]
```
Upload custom banner or copy from mentioned user.

**Set Favorite Song**
```
!about music [spotify link or song name]
```
Add your favorite song with Spotify integration.

**Add Social Link**
```
!about social [url] [--platform]
```
Add social media links (auto-detects platform or use `--platform` flag).

**View Profile**
```
!about view [@user]
```
View your or another user's profile.

**Delete Profile**
```
!about delete
```
Permanently delete your profile (requires confirmation).

---
