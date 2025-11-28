const { EmbedBuilder } = require('discord.js');
const { embeds } = require('../../core/embeds');
const { runHelpCommand } = require('../../utils/commandProcessor');
const { createConfirmation } = require('../../core/buttons');
const config = require('../../config/setup');
const logger = require('../../utils/logger');
const FormData = require('form-data');
const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL || 'https://adore-api.vwsnxy.workers.dev';
const BOT_API_KEY = process.env.BOT_API_KEY || 'e53f318f1132bffab427633f1f75fe6abd57925cfd90060c0bfec87e97621386';

// Helper functions
async function getProfile(discordId) {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/id/${discordId}`, {
      headers: {
        'X-API-Key': BOT_API_KEY
      }
    });
    return response.data || null;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    return null;
  }
}

async function getProfileByUsername(username) {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/${username.toLowerCase()}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    throw error;
  }
}

async function updateProfile(data) {
  const response = await axios.post(`${API_BASE_URL}/profile/update`, data, {
    headers: {
      'X-API-Key': BOT_API_KEY,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

async function searchYouTube(query) {
  try {
    const response = await axios.post(`${API_BASE_URL}/youtube/search`, 
      { query },
      {
        headers: {
          'X-API-Key': BOT_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('YouTube search error:', error);
    return null;
  }
}

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
  return 'link';
}

// Cooldown tracking
const createCooldowns = new Map();
const updateCooldowns = new Map();
const COOLDOWN_TIME = 60000;
const UPDATE_COOLDOWN = 10000;

module.exports = {
  name: "about",
  aliases: ['profile', 'bio'],
  description: 'manage your ADORE profile',
  syntax: 'about [subcommand] (parameters)',
  example: 'about create username',
  isGroupCommand: true,
  run: async (client, message, args) => {
    try {
      if (!args[0]) {
        return runHelpCommand(message, 'about');
      }

      const subcommand = args[0].toLowerCase();

      switch (subcommand) {
        case 'create': {
          const subcommandInfo = {
            description: 'Create your ADORE profile',
            syntax: '{guildprefix}about create [username]',
            aliases: [],
            parameters: ['username (optional)'],
            example: '{guildprefix}about create myusername'
          };

          const username = args[1] || message.author.username;

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = createCooldowns.get(message.author.id);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before creating a profile again`);
          }

          // Check if user already has a profile
          const existingProfile = await getProfile(message.author.id);
          if (existingProfile) {
            return embeds.warn(message, `You already have a profile at **https://adore.rest/${existingProfile.username}**\nProfiles can only be created **once** per account`);
          }

          // Validate username format
          if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return embeds.warn(message, 'Username can **only** contain letters, numbers, and underscores');
          }

          // Validate username length
          if (username.length < 3) {
            return embeds.warn(message, 'Username must be at least **3 characters** long');
          }

          if (username.length > 20) {
            return embeds.warn(message, 'Username **cannot** be longer than **20 characters**');
          }

          // Set cooldown
          createCooldowns.set(message.author.id, now + COOLDOWN_TIME);

          const profileData = {
            username: username.toLowerCase(),
            displayName: username,
            discordId: message.author.id,
            avatar: message.author.displayAvatarURL({ size: 512, extension: 'png' }),
            links: [
              { type: 'discord', url: `https://discord.com/users/${message.author.id}` }
            ]
          };

          await updateProfile(profileData);

          // Clear cooldown on success
          createCooldowns.delete(message.author.id);

          return embeds.success(message, `**Created** your ADORE profile\n\n**Username:** ${username}\n**Profile:** https://adore.rest/${username.toLowerCase()}`);
        }

        case 'rename': {
          const subcommandInfo = {
            description: 'Change your ADORE profile display name',
            syntax: '{guildprefix}about rename [name]',
            aliases: [],
            parameters: ['name'],
            example: '{guildprefix}about rename Cool Name'
          };

          const name = args.slice(1).join(' ');
          if (!name) return runHelpCommand(message, 'about');

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Validate name length
          if (name.length > 32) {
            return embeds.warn(message, 'Display name **cannot** be longer than **32 characters**');
          }

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-rename`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before updating your name again`);
          }

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-rename`, now + UPDATE_COOLDOWN);

          await updateProfile({
            discordId: message.author.id,
            displayName: name
          });

          return embeds.success(message, `**Updated** your display name to **${name}**`);
        }

        case 'bio': {
          const subcommandInfo = {
            description: 'Set your ADORE profile bio',
            syntax: '{guildprefix}about bio [description]',
            aliases: [],
            parameters: ['description'],
            example: '{guildprefix}about bio Hey! I love music 🎵'
          };

          const bio = args.slice(1).join(' ');
          if (!bio) return runHelpCommand(message, 'about');

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-bio`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before updating your bio again`);
          }

          // Validate bio length
          if (bio.length > 200) {
            return embeds.warn(message, `Bio is **too long**! Maximum **200 characters** (yours is **${bio.length}**)`);
          }

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-bio`, now + UPDATE_COOLDOWN);

          await updateProfile({
            discordId: message.author.id,
            bio: bio
          });

          return embeds.success(message, `**Updated** your bio\n\n${bio}`);
        }

        case 'avatar': {
          const subcommandInfo = {
            description: 'Set your ADORE profile avatar',
            syntax: '{guildprefix}about avatar (attachment/user)',
            aliases: [],
            parameters: ['attachment or user mention (optional)'],
            example: '{guildprefix}about avatar @user'
          };

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-avatar`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before updating your avatar again`);
          }

          let avatarUrl;
          const mentionedUser = message.mentions.users.first();
          const attachment = message.attachments.first();

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-avatar`, now + UPDATE_COOLDOWN);

          if (attachment) {
            // Validate file type
            if (!attachment.contentType?.startsWith('image/')) {
              return embeds.deny(message, 'File must be an **image**');
            }

            // Validate file size (5MB)
            if (attachment.size > 5 * 1024 * 1024) {
              return embeds.deny(message, 'Image **too large**! Maximum **5MB**');
            }

            avatarUrl = attachment.url;
          } else if (mentionedUser) {
            avatarUrl = mentionedUser.displayAvatarURL({ size: 512, extension: 'png' });
          } else {
            avatarUrl = message.author.displayAvatarURL({ size: 512, extension: 'png' });
          }

          await updateProfile({
            discordId: message.author.id,
            avatar: avatarUrl
          });

          return embeds.success(message, '**Avatar updated** successfully');
        }

        case 'banner': {
          const subcommandInfo = {
            description: 'Set your ADORE profile banner',
            syntax: '{guildprefix}about banner (attachment/user)',
            aliases: [],
            parameters: ['attachment or user mention (optional)'],
            example: '{guildprefix}about banner @user'
          };

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-banner`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before updating your banner again`);
          }

          let bannerUrl = null;
          const mentionedUser = message.mentions.users.first();
          const attachment = message.attachments.first();

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-banner`, now + UPDATE_COOLDOWN);

          if (attachment) {
            // Validate file type
            if (!attachment.contentType?.startsWith('image/')) {
              return embeds.deny(message, 'File must be an **image**');
            }

            // Validate file size (8MB)
            if (attachment.size > 8 * 1024 * 1024) {
              return embeds.deny(message, 'Image **too large**! Maximum **8MB**');
            }

            bannerUrl = attachment.url;
          } else if (mentionedUser) {
            const fetchedUser = await mentionedUser.fetch();
            bannerUrl = fetchedUser.bannerURL({ size: 1024, extension: 'png' });
          }

          await updateProfile({
            discordId: message.author.id,
            banner: bannerUrl
          });

          return embeds.success(message, bannerUrl ? '**Banner updated** successfully' : '**Banner removed** successfully');
        }

        case 'music':
        case 'song': {
          const subcommandInfo = {
            description: 'Set your favorite song on your ADORE profile',
            syntax: '{guildprefix}about music [youtube link or song name] (--time 2:30) (--name Song Name)',
            aliases: ['song'],
            parameters: ['youtube link or song name', 'time (optional)', 'name (optional)'],
            example: '{guildprefix}about music https://youtube.com/watch?v=... --time 1:30 --name My Favorite Song'
          };

          const fullInput = args.slice(1).join(' ');
          if (!fullInput) return runHelpCommand(message, 'about');

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-music`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before updating your song again`);
          }

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-music`, now + UPDATE_COOLDOWN);

          // Parse flags
          const timeMatch = fullInput.match(/--time\s+(\d+):(\d+)/);
          const nameMatch = fullInput.match(/--name\s+(.+?)(?:\s+--|$)/);
          
          let startTime = 0;
          if (timeMatch) {
            const minutes = parseInt(timeMatch[1]);
            const seconds = parseInt(timeMatch[2]);
            startTime = minutes * 60 + seconds;
          }

          const customName = nameMatch ? nameMatch[1].trim() : null;

          // Remove flags from input
          const input = fullInput.replace(/--time\s+\d+:\d+/g, '').replace(/--name\s+.+?(?=\s+--|$)/g, '').trim();

          // Check if input is a YouTube link
          const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
          const match = input.match(youtubeRegex);

          let videoData;

          if (match) {
            const videoId = match[1];
            videoData = {
              videoId: videoId,
              title: customName || 'YouTube Video',
              thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              url: `https://www.youtube.com/watch?v=${videoId}`
            };
          } else {
            videoData = await searchYouTube(input);

            if (!videoData) {
              return embeds.deny(message, '**No songs found** with that name on YouTube');
            }

            if (customName) {
              videoData.title = customName;
            }
          }

          await updateProfile({
            discordId: message.author.id,
            song: videoData.title,
            songArtist: 'YouTube',
            songCover: videoData.thumbnail,
            songPreview: null,
            songUrl: videoData.url,
            youtubeId: videoData.videoId,
            songStartTime: startTime
          });

          const timeInfo = startTime > 0 ? `\n⏱️ Starts at ${Math.floor(startTime / 60)}:${(startTime % 60).toString().padStart(2, '0')}` : '';
          return embeds.success(message, `**Song updated** successfully\n\n🎵 **${videoData.title}**${timeInfo}\n🔗 [Watch on YouTube](${videoData.url})`);
        }

        case 'social':
        case 'link': {
          const subcommandInfo = {
            description: 'Add a social media link to your ADORE profile',
            syntax: '{guildprefix}about social [url] (--platform)',
            aliases: ['link'],
            parameters: ['url', 'platform (optional)'],
            example: '{guildprefix}about social https://github.com/username --github'
          };

          const fullInput = args.slice(1).join(' ');
          if (!fullInput) return runHelpCommand(message, 'about');

          // Check cooldown
          const now = Date.now();
          const cooldownEnd = updateCooldowns.get(`${message.author.id}-social`);
          if (cooldownEnd && now < cooldownEnd) {
            const timeLeft = Math.ceil((cooldownEnd - now) / 1000);
            return embeds.cooldown(message, `Please wait **${timeLeft} seconds** before adding another link`);
          }

          // Set cooldown
          updateCooldowns.set(`${message.author.id}-social`, now + UPDATE_COOLDOWN);

          // Parse platform flag
          const platformMatch = fullInput.match(/--(\w+)$/);
          const platform = platformMatch ? platformMatch[1] : null;
          const link = platform ? fullInput.replace(/--\w+$/, '').trim() : fullInput.trim();

          if (!link) return runHelpCommand(message, 'about');

          // Get current profile
          const profile = await getProfile(message.author.id);

          if (!profile) {
            return embeds.deny(message, 'You need to **create a profile** first using `about create`');
          }

          // Add new link
          const links = profile.links || [];
          const detectedPlatform = platform || detectPlatform(link);

          links.push({
            type: detectedPlatform,
            url: link
          });

          await updateProfile({
            discordId: message.author.id,
            links: links
          });

          const platformName = detectedPlatform.charAt(0).toUpperCase() + detectedPlatform.slice(1);
          return embeds.success(message, `**Social link added**\n\n**Platform:** ${platformName}\n**URL:** ${link}\n**Total Links:** ${links.length}`);
        }

        case 'view':
        case 'show': {
          const subcommandInfo = {
            description: 'View an ADORE profile',
            syntax: '{guildprefix}about view (@user)',
            aliases: ['show'],
            parameters: ['user (optional)'],
            example: '{guildprefix}about view @user'
          };

          const targetUser = message.mentions.users.first() || message.author;
          const profile = await getProfile(targetUser.id);

          if (!profile) {
            return embeds.deny(message, `<@${targetUser.id}> doesn't have an **ADORE profile** yet`);
          }

          const embed = new EmbedBuilder()
            .setColor(config.colors.embed)
            .setTitle(`${profile.displayName || profile.username}'s Profile`)
            .setURL(`https://adore.rest/${profile.username}`)
            .setThumbnail(profile.avatar);

          if (profile.banner) {
            embed.setImage(profile.banner);
          }

          if (profile.bio) {
            embed.setDescription(profile.bio);
          }

          if (profile.song && profile.songArtist) {
            embed.addFields({
              name: '🎵 Now Playing',
              value: `**${profile.song}** by ${profile.songArtist}`,
              inline: false
            });
          }

          if (profile.links && profile.links.length > 0) {
            const linksText = profile.links.map(l => `• [${l.type.charAt(0).toUpperCase() + l.type.slice(1)}](${l.url})`).join('\n');
            embed.addFields({
              name: '🔗 Links',
              value: linksText,
              inline: false
            });
          }

          embed.setFooter({ text: `Created ${new Date(profile.createdAt).toLocaleDateString()}` });

          return message.channel.send({ embeds: [embed] });
        }

        case 'delete':
        case 'remove': {
          const subcommandInfo = {
            description: 'Delete your ADORE profile',
            syntax: '{guildprefix}about delete',
            aliases: ['remove'],
            parameters: [],
            example: '{guildprefix}about delete'
          };

          // Check if user has a profile
          const existingProfile = await getProfile(message.author.id);
          if (!existingProfile) {
            return embeds.deny(message, 'You don\'t have a profile to **delete**');
          }

          await createConfirmation(
            message,
            'Are you sure you want to **delete your profile**? This action **cannot** be undone',
            async (interaction) => {
              try {
                await axios.delete(`${API_BASE_URL}/profile`, {
                  headers: {
                    'X-API-Key': BOT_API_KEY,
                    'Content-Type': 'application/json'
                  },
                  data: {
                    discordId: message.author.id
                  }
                });

                const successEmbed = new EmbedBuilder()
                  .setColor(config.colors.success)
                  .setDescription(`${config.emojis.success} <@${message.author.id}>: Profile **deleted** successfully`);

                await interaction.editReply({ embeds: [successEmbed], components: [] });
              } catch (error) {
                logger.webhook.error(error, message);
                const errorEmbed = new EmbedBuilder()
                  .setColor(config.colors.error)
                  .setDescription(`${config.emojis.error} <@${message.author.id}>: ${error.response?.data?.error || 'Failed to delete profile'}`);

                await interaction.editReply({ embeds: [errorEmbed], components: [] });
              }
            }
          );
          break;
        }

        default: {
          return runHelpCommand(message, 'about');
        }
      }
    } catch (error) {
      logger.webhook.error(error, message);
      const errorMessage = error.response?.data?.error || 'An error occurred';
      return embeds.deny(message, errorMessage);
    }
  }
}
