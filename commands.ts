export const commandsData = {
  "bully": [
    {
      "name": "nsr",
      "description": "Prevent members from reacting to their own messages",
      "aliases": [
        "noselfreact"
      ],
      "syntax": "nsr [subcommand] (user)",
      "permission": "manage_guild"
    },
    {
      "name": "nsr on",
      "description": "Enable no self-react",
      "aliases": [],
      "syntax": "nsr on",
      "permission": "manage_guild"
    },
    {
      "name": "nsr off",
      "description": "Disable no self-react",
      "aliases": [],
      "syntax": "nsr off",
      "permission": "manage_guild"
    },
    {
      "name": "nsr bypass",
      "description": "Toggle bypass for a user",
      "aliases": [],
      "syntax": "nsr bypass [user]",
      "permission": "manage_guild"
    }
  ],
  "core": [
    {
      "name": "botinfo",
      "description": "Gets basic information about the bot",
      "aliases": [
        "bi",
        "info",
        "about"
      ],
      "syntax": "botinfo",
      "permission": null
    },
    {
      "name": "help",
      "description": "View extended help for commands",
      "aliases": [
        "h",
        "command"
      ],
      "syntax": "help (command)",
      "permission": null
    },
    {
      "name": "invite",
      "description": "Send an invite link of the bot",
      "aliases": [
        "addme"
      ],
      "syntax": "invite",
      "permission": null
    },
    {
      "name": "latency",
      "description": "Shows bot's latency response times",
      "aliases": [
        "ms",
        "ping"
      ],
      "syntax": "latency",
      "permission": null
    },
    {
      "name": "prefix",
      "description": "Manage server prefix",
      "aliases": [
        "setprefix"
      ],
      "syntax": "prefix [subcommand] (value)",
      "permission": "administrator"
    },
    {
      "name": "prefix view",
      "description": "View the current server prefix",
      "aliases": [],
      "syntax": "prefix view",
      "permission": "administrator"
    },
    {
      "name": "prefix set",
      "description": "Set a new server prefix",
      "aliases": [],
      "syntax": "prefix set [prefix]",
      "permission": "administrator"
    },
    {
      "name": "prefix remove",
      "description": "Reset server prefix to default",
      "aliases": [],
      "syntax": "prefix remove",
      "permission": "administrator"
    }
  ],
  "fun": [
    {
      "name": "bal",
      "description": "Check your or someone else wallet and bank balance",
      "aliases": [
        "balance",
        "money",
        "cash"
      ],
      "syntax": "bal (user)",
      "permission": null
    },
    {
      "name": "deposit",
      "description": "Deposit money from your wallet to your bank",
      "aliases": [
        "dep"
      ],
      "syntax": "deposit [amount]",
      "permission": null
    },
    {
      "name": "leaderboard",
      "description": "View the top 10 richest users in server or globally",
      "aliases": [
        "lb",
        "top",
        "rich"
      ],
      "syntax": "leaderboard [global]",
      "permission": null
    },
    {
      "name": "transfer",
      "description": "Transfer money from your wallet to another user",
      "aliases": [
        "give",
        "pay"
      ],
      "syntax": "transfer [user] [amount]",
      "permission": null
    },
    {
      "name": "withdraw",
      "description": "Withdraw money from your bank to your wallet",
      "aliases": [
        "with"
      ],
      "syntax": "withdraw [amount]",
      "permission": null
    },
    {
      "name": "crime",
      "description": "Commit crimes to earn coins with a cooldown",
      "aliases": [
        "blacked"
      ],
      "syntax": "crime",
      "permission": null
    },
    {
      "name": "curse",
      "description": "Curse yourself or someone else to lose luck points",
      "aliases": [],
      "syntax": "curse [user]",
      "permission": null
    },
    {
      "name": "daily",
      "description": "Claim your daily coins with streak bonuses",
      "aliases": [
        "claim"
      ],
      "syntax": "daily",
      "permission": null
    },
    {
      "name": "pick",
      "description": "Pick up coins from the streets with a cooldown",
      "aliases": [
        "beg",
        "grab"
      ],
      "syntax": "pick",
      "permission": null
    },
    {
      "name": "pray",
      "description": "Pray for yourself or someone else to gain luck points",
      "aliases": [],
      "syntax": "pray [user]",
      "permission": null
    },
    {
      "name": "rob",
      "description": "Attempt to rob money from another user",
      "aliases": [
        "steal"
      ],
      "syntax": "rob [user]",
      "permission": null
    },
    {
      "name": "slut",
      "description": "Work in the adult entertainment industry to earn coins with a cooldown",
      "aliases": [
        "whore"
      ],
      "syntax": "slut",
      "permission": null
    },
    {
      "name": "vote",
      "description": "Vote for the bot on Top.gg and earn 10,000 coins!",
      "aliases": [
        "topgg",
        "upvote"
      ],
      "syntax": "vote claim",
      "permission": null
    },
    {
      "name": "coinflip",
      "description": "Flip a coin and bet on the outcome (bot chooses heads or tails randomly)",
      "aliases": [
        "cf",
        "flip",
        "gamble"
      ],
      "syntax": "coinflip [amount]",
      "permission": null
    },
    {
      "name": "slot",
      "description": "Play the slot machine! Match symbols to win big!",
      "aliases": [
        "slots",
        "spin"
      ],
      "syntax": "slot [amount]",
      "permission": null
    },
    {
      "name": "ttt",
      "description": "Play tic tac toe with another user with optional betting",
      "aliases": [
        "tictactoe",
        "tic"
      ],
      "syntax": "ttt [user] (amount)",
      "permission": null
    },
    {
      "name": "divorce",
      "description": "Divorce your current partner",
      "aliases": [
        "unmarry"
      ],
      "syntax": "divorce",
      "permission": null
    },
    {
      "name": "edaters",
      "description": "View all married couples in the server",
      "aliases": [
        "couples",
        "edater"
      ],
      "syntax": "edaters",
      "permission": null
    },
    {
      "name": "married",
      "description": "Check marriage status and duration",
      "aliases": [
        "marriage"
      ],
      "syntax": "married [user]",
      "permission": null
    },
    {
      "name": "marry",
      "description": "Propose marriage to someone with a ring",
      "aliases": [
        "propose"
      ],
      "syntax": "marry [user] (ring)",
      "permission": null
    },
    {
      "name": "buy",
      "description": "Buy items from the gambling store",
      "aliases": [
        "purchase"
      ],
      "syntax": "buy [number] (quantity)",
      "permission": null
    },
    {
      "name": "inventory",
      "description": "View your or someone else's inventory",
      "aliases": [
        "inv",
        "items",
        "bagpack"
      ],
      "syntax": "inventory [user]",
      "permission": null
    },
    {
      "name": "items",
      "description": "View and buy items from the store",
      "aliases": [
        "consumables",
        "tools",
        "banknotes",
        "notes",
        "bank-notes",
        "rings"
      ],
      "syntax": "items [category]",
      "permission": null
    },
    {
      "name": "sell",
      "description": "Sell items from your inventory",
      "aliases": [],
      "syntax": "sell [number] (quantity)",
      "permission": null
    },
    {
      "name": "store",
      "description": "View the gambling store to buy items",
      "aliases": [
        "shop"
      ],
      "syntax": "store [category]",
      "permission": null
    },
    {
      "name": "use",
      "description": "Use items from your inventory",
      "aliases": [
        "consume"
      ],
      "syntax": "use [number] (quantity)",
      "permission": null
    },
    {
      "name": "8ball",
      "description": "ask the magic 8-ball a question",
      "aliases": [
        "8b"
      ],
      "syntax": "8ball [question]",
      "permission": null
    },
    {
      "name": "rps",
      "description": "Play rock paper scissors alone or with another player",
      "aliases": [
        "rockpaperscissors",
        "rockpaperscissor"
      ],
      "syntax": "rps [@user]",
      "permission": null
    },
    {
      "name": "advice",
      "description": "sends a random piece of advice",
      "aliases": [],
      "syntax": "advice",
      "permission": null
    },
    {
      "name": "blacktea",
      "description": "Play a word challenge game with friends",
      "aliases": [
        "bt",
        "wordgame"
      ],
      "syntax": "blacktea [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "blacktea start",
      "description": "Start a new blacktea word game",
      "aliases": [],
      "syntax": "blacktea start",
      "permission": null
    },
    {
      "name": "blacktea end",
      "description": "End the current blacktea game",
      "aliases": [],
      "syntax": "blacktea end",
      "permission": null
    },
    {
      "name": "blacktea exit",
      "description": "Leave the current blacktea game",
      "aliases": [],
      "syntax": "blacktea exit",
      "permission": null
    },
    {
      "name": "blacktea time",
      "description": "Set response time for blacktea games (5-60 seconds)",
      "aliases": [],
      "syntax": "blacktea time [seconds]",
      "permission": null
    },
    {
      "name": "quote",
      "description": "Quote a message by replying, message ID, or mentioning a user",
      "aliases": [
        "q"
      ],
      "syntax": "quote [message_id|@user text]",
      "permission": "attach_files"
    },
    {
      "name": "yomama",
      "description": "sends a random yo mama joke",
      "aliases": [
        "ym",
        "yomomma"
      ],
      "syntax": "yomama (user)",
      "permission": null
    },
    {
      "name": "define",
      "description": "Get the definition of a word",
      "aliases": [
        "def"
      ],
      "syntax": "define [word]",
      "permission": null
    },
    {
      "name": "image",
      "description": "Search for images using Google Custom Search",
      "aliases": [
        "img",
        "search"
      ],
      "syntax": "image [query]",
      "permission": null
    },
    {
      "name": "urban",
      "description": "Get the Urban Dictionary definition of a word or phrase",
      "aliases": [
        "ud"
      ],
      "syntax": "urban [word]",
      "permission": null
    },
    {
      "name": "youtube",
      "description": "search for a song/video on youtube",
      "aliases": [
        "yt"
      ],
      "syntax": "youtube [query]",
      "permission": null
    }
  ],
  "information": [
    {
      "name": "guildhistory",
      "description": "view the server's name change history",
      "aliases": [
        "gnames"
      ],
      "syntax": "guildhistory",
      "permission": null
    },
    {
      "name": "names",
      "description": "view a user's name change history",
      "aliases": [
        "nh",
        "namehistory"
      ],
      "syntax": "names (user)",
      "permission": null
    },
    {
      "name": "servernames",
      "description": "view the server's name change history",
      "aliases": [
        "gnames",
        "guildhistory"
      ],
      "syntax": "servernames (server id)",
      "permission": null
    },
    {
      "name": "afk",
      "description": "Set an AFK status for when you are mentioned",
      "aliases": [],
      "syntax": "afk (reason)",
      "permission": null
    },
    {
      "name": "bday",
      "description": "manage birthday settings",
      "aliases": [
        "birthday"
      ],
      "syntax": "bday (subcommand)",
      "permission": null
    },
    {
      "name": "bday set",
      "description": "Set your birthday (can only be set once)",
      "aliases": [],
      "syntax": "bday set [day] [month]",
      "permission": null
    },
    {
      "name": "bday list",
      "description": "List all birthdays in the server",
      "aliases": [],
      "syntax": "bday list",
      "permission": null
    },
    {
      "name": "bday view",
      "description": "View a user\\",
      "aliases": [],
      "syntax": "bday (user)",
      "permission": null
    },
    {
      "name": "timezone",
      "description": "View or set timezone information",
      "aliases": [
        "tz"
      ],
      "syntax": "timezone (subcommand)",
      "permission": null
    },
    {
      "name": "timezone set",
      "description": "Set your timezone by city name",
      "aliases": [],
      "syntax": "timezone set [city]",
      "permission": null
    }
  ],
  "moderation": [
    {
      "name": "filter",
      "description": "Manage Discord's built-in AutoMod filtering system",
      "aliases": [
        "automod"
      ],
      "syntax": "filter [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "filter invites",
      "description": "Manage invite link filtering",
      "aliases": [],
      "syntax": "filter invites [on/off]",
      "permission": "manage_guild"
    },
    {
      "name": "filter add",
      "description": "Add a word to the filter",
      "aliases": [],
      "syntax": "filter add [word]",
      "permission": "manage_guild"
    },
    {
      "name": "filter remove",
      "description": "Remove a word from the filter",
      "aliases": [],
      "syntax": "filter remove [word]",
      "permission": "manage_guild"
    },
    {
      "name": "filter list",
      "description": "List all filtered words",
      "aliases": [],
      "syntax": "filter list",
      "permission": "manage_guild"
    },
    {
      "name": "filter reset",
      "description": "Reset the word filter",
      "aliases": [],
      "syntax": "filter reset",
      "permission": "manage_guild"
    },
    {
      "name": "filter exempt",
      "description": "Manage filter exempt list",
      "aliases": [],
      "syntax": "filter exempt [role/user/channel]",
      "permission": "manage_guild"
    },
    {
      "name": "ban",
      "description": "ban the mentioned user from the server (works with user IDs for users not in server)",
      "aliases": [
        "deport",
        "hackban",
        "hban",
        "hb"
      ],
      "syntax": "ban [user] (reason)",
      "permission": "ban_members"
    },
    {
      "name": "unban",
      "description": "unban the mentioned user from the server",
      "aliases": [],
      "syntax": "unban [user] (reason)",
      "permission": "ban_members"
    },
    {
      "name": "history",
      "description": "view and manage moderation history",
      "aliases": [],
      "syntax": "history",
      "permission": "manage_messages"
    },
    {
      "name": "history view",
      "description": "View a specific case",
      "aliases": [],
      "syntax": "history view [caseid]",
      "permission": "manage_messages"
    },
    {
      "name": "history remove",
      "description": "Remove a specific case from user history",
      "aliases": [],
      "syntax": "history remove [user] [caseid]",
      "permission": "manage_messages"
    },
    {
      "name": "history removeall",
      "description": "Remove all cases from user history",
      "aliases": [],
      "syntax": "history removeall [user]",
      "permission": "manage_messages"
    },
    {
      "name": "history User",
      "description": "Remove a specific case from user history",
      "aliases": [],
      "syntax": "history remove [user] [caseid]",
      "permission": "manage_messages"
    },
    {
      "name": "modhistory",
      "description": "view moderation actions performed by moderators",
      "aliases": [
        "mhistory",
        "mh"
      ],
      "syntax": "modhistory [moderator] (action)",
      "permission": "manage_messages"
    },
    {
      "name": "jail",
      "description": "jails the specified member or lists jailed users",
      "aliases": [
        "basement"
      ],
      "syntax": "jail [user/list] (reason)",
      "permission": "manage_roles"
    },
    {
      "name": "setup",
      "description": "automatically setup jail role and channel with proper permissions",
      "aliases": [
        "setme"
      ],
      "syntax": "setup",
      "permission": "administrator"
    },
    {
      "name": "unjail",
      "description": "unjails the specified member",
      "aliases": [],
      "syntax": "unjail [user] (reason)",
      "permission": "manage_roles"
    },
    {
      "name": "kick",
      "description": "Kicks the mentioned user from the server",
      "aliases": [
        "boot"
      ],
      "syntax": "kick [user] (reason)",
      "permission": "kick_members"
    },
    {
      "name": "imute",
      "description": "revoke someone's attachment/embed perms in this channel",
      "aliases": [
        "imgmute",
        "imagemute"
      ],
      "syntax": "imute [user] (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "iunmute",
      "description": "restore someone's attachment/embed perms in this channel",
      "aliases": [
        "imgunmute",
        "imageunmute"
      ],
      "syntax": "iunmute [user] (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "mute",
      "description": "timeout a user using Discord's built-in timeout feature",
      "aliases": [
        "shh",
        "timeout",
        "tu"
      ],
      "syntax": "mute [user] (duration) (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "rmute",
      "description": "revoke someone's reaction/emote perms in this channel",
      "aliases": [
        "reactmute",
        "reactionmute",
        "emojimute",
        "emotemute",
        "emute"
      ],
      "syntax": "rmute [user] (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "runmute",
      "description": "restore someone's reaction/emote perms in this channel",
      "aliases": [
        "runreactionmute"
      ],
      "syntax": "runmute [user] (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "unmute",
      "description": "remove timeout from a user using Discord's built-in timeout feature",
      "aliases": [
        "untimeout",
        "uto"
      ],
      "syntax": "unmute [user] (reason)",
      "permission": "moderate_members"
    },
    {
      "name": "cleanup",
      "description": "clean up bot messages and user commands in the channel",
      "aliases": [
        "bc"
      ],
      "syntax": "cleanup (number)",
      "permission": "manage_messages"
    },
    {
      "name": "purge",
      "description": "bulk delete messages from a channel",
      "aliases": [
        "clear",
        "c"
      ],
      "syntax": "purge [number/subcommand] (parameters)",
      "permission": "manage_messages"
    },
    {
      "name": "purge bots",
      "description": "Delete messages from bots only",
      "aliases": [],
      "syntax": "purge bots [number]",
      "permission": "manage_messages"
    },
    {
      "name": "purge humans",
      "description": "Delete messages from humans only",
      "aliases": [],
      "syntax": "purge humans [number]",
      "permission": "manage_messages"
    },
    {
      "name": "purge media",
      "description": "Delete messages with attachments or embeds",
      "aliases": [],
      "syntax": "purge media [number]",
      "permission": "manage_messages"
    },
    {
      "name": "purge between",
      "description": "Delete messages between two message IDs",
      "aliases": [],
      "syntax": "purge between [topMsgID] [lastMsgID]",
      "permission": "manage_messages"
    },
    {
      "name": "unwarn",
      "description": "remove a warning from a user's moderation history",
      "aliases": [],
      "syntax": "unwarn [user] [case_id] (reason)",
      "permission": "manage_messages"
    },
    {
      "name": "warn",
      "description": "warn a user and add it to their moderation history",
      "aliases": [],
      "syntax": "warn [user] (reason)",
      "permission": "manage_messages"
    }
  ],
  "music": [
    {
      "name": "fm",
      "description": "Show your current or last played track from Last.fm",
      "aliases": [
        "np"
      ],
      "syntax": "fm (user)",
      "permission": null
    },
    {
      "name": "spotify",
      "description": "Manage Spotify playback and account",
      "aliases": [
        "sp"
      ],
      "syntax": "spotify [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "spotify link",
      "description": "Link your Spotify account to control playback",
      "aliases": [],
      "syntax": "spotify link",
      "permission": null
    },
    {
      "name": "spotify unlink",
      "description": "Unlink your Spotify account",
      "aliases": [],
      "syntax": "spotify unlink",
      "permission": null
    },
    {
      "name": "spotify play",
      "description": "Play a track, search query, or from another user",
      "aliases": [],
      "syntax": "spotify play [track link|search query|@user]",
      "permission": null
    },
    {
      "name": "spotify pause",
      "description": "Pause current playback",
      "aliases": [],
      "syntax": "spotify pause",
      "permission": null
    },
    {
      "name": "spotify skip",
      "description": "Skip to the next track",
      "aliases": [],
      "syntax": "spotify skip",
      "permission": null
    },
    {
      "name": "spotify previous",
      "description": "Go back to the previous track",
      "aliases": [],
      "syntax": "spotify previous",
      "permission": null
    },
    {
      "name": "spotify volume",
      "description": "Set playback volume (0-100)",
      "aliases": [],
      "syntax": "spotify volume [0-100]",
      "permission": null
    },
    {
      "name": "spotify repeat",
      "description": "Set repeat mode (track, context, or off)",
      "aliases": [],
      "syntax": "spotify repeat [mode]",
      "permission": null
    },
    {
      "name": "spotify shuffle",
      "description": "Toggle shuffle mode on or off",
      "aliases": [],
      "syntax": "spotify shuffle [state]",
      "permission": null
    },
    {
      "name": "spotify queue",
      "description": "Add a track to your queue",
      "aliases": [],
      "syntax": "spotify queue [track link|search query]",
      "permission": null
    },
    {
      "name": "spotify search",
      "description": "Search for a track and get its Spotify link",
      "aliases": [],
      "syntax": "spotify search [search query|@user]",
      "permission": null
    },
    {
      "name": "spotify recents",
      "description": "View your recently played tracks",
      "aliases": [],
      "syntax": "spotify recents",
      "permission": null
    },
    {
      "name": "spotify toptracks",
      "description": "View your top tracks (short, medium, or long term)",
      "aliases": [],
      "syntax": "spotify toptracks [short|medium|long]",
      "permission": null
    },
    {
      "name": "spotify topartists",
      "description": "View your top artists (short, medium, or long term)",
      "aliases": [],
      "syntax": "spotify topartists [short|medium|long]",
      "permission": null
    },
    {
      "name": "spotifyslash",
      "description": "No description provided",
      "aliases": [],
      "syntax": "spotifyslash",
      "permission": null
    }
  ],
  "premium": [
    {
      "name": "ask",
      "description": "Ask adore anything",
      "aliases": [
        "adore",
        "question"
      ],
      "syntax": "ask [question]",
      "permission": null
    },
    {
      "name": "selfprefix",
      "description": "Manage your personal prefix",
      "aliases": [
        "selfp"
      ],
      "syntax": "selfprefix [subcommand] (prefix)",
      "permission": null
    },
    {
      "name": "transparent",
      "description": "Remove background from an image to make it transparent",
      "aliases": [
        "tp"
      ],
      "syntax": "transparent [attach image or reply to message with image]",
      "permission": null
    }
  ],
  "profiles": [
    {
      "name": "emoji",
      "description": "Manage server emojis",
      "aliases": [
        "emote"
      ],
      "syntax": "emoji [subcommand]",
      "permission": "manage_expressions"
    },
    {
      "name": "enlarge",
      "description": "Enlarge an emoji or emote and send it as a file.",
      "aliases": [
        "jumbo",
        "e"
      ],
      "syntax": "enlarge (emoji/emote)",
      "permission": null
    },
    {
      "name": "steal",
      "description": "Steal stickers and emotes from messages by replying to them",
      "aliases": [
        "stealemoji",
        "stealsticker"
      ],
      "syntax": "steal (reply to message)",
      "permission": "manage_expressions"
    },
    {
      "name": "sticker",
      "description": "Manage server stickers - add, remove, and tag stickers",
      "aliases": [],
      "syntax": "sticker [subcommand]",
      "permission": "manage_expressions"
    },
    {
      "name": "sticker add",
      "description": "Add a sticker to the server",
      "aliases": [],
      "syntax": "sticker add [name] [image/url]",
      "permission": "manage_expressions"
    },
    {
      "name": "sticker remove",
      "description": "Remove a sticker from the server",
      "aliases": [],
      "syntax": "sticker remove [message_link]",
      "permission": "manage_expressions"
    },
    {
      "name": "sticker tag",
      "description": "Tag all stickers with server vanity",
      "aliases": [],
      "syntax": "sticker tag",
      "permission": "manage_expressions"
    },
    {
      "name": "sticker",
      "description": "Manage server stickers - steal, remove, and archive",
      "aliases": [],
      "syntax": "sticker [subcommand]",
      "permission": "manage_expressions"
    },
    {
      "name": "guildbanner",
      "description": "show a server's banner",
      "aliases": [
        "serverbanner2",
        "gbanner"
      ],
      "syntax": "guildbanner (server)",
      "permission": null
    },
    {
      "name": "guildicon",
      "description": "show a server's icon",
      "aliases": [
        "servericon",
        "icon",
        "serverpfp"
      ],
      "syntax": "guildicon (server)",
      "permission": null
    },
    {
      "name": "guildsplash",
      "description": "show a server's invite splash screen",
      "aliases": [
        "serversplash",
        "splash"
      ],
      "syntax": "guildsplash (server)",
      "permission": null
    },
    {
      "name": "setbanner",
      "description": "set the server banner (requires boost level 2+)",
      "aliases": [],
      "syntax": "setbanner (image)",
      "permission": "manage_guild"
    },
    {
      "name": "seticon",
      "description": "set the server icon",
      "aliases": [
        "setavatar"
      ],
      "syntax": "seticon (image)",
      "permission": "manage_guild"
    },
    {
      "name": "setsplash",
      "description": "set the server invite splash screen (requires boost level 1+)",
      "aliases": [
        "setsplashbackground"
      ],
      "syntax": "setsplash (image)",
      "permission": "manage_guild"
    },
    {
      "name": "avatar",
      "description": "show a user's global avatar",
      "aliases": [
        "av",
        "pfp"
      ],
      "syntax": "avatar (user)",
      "permission": null
    },
    {
      "name": "banner",
      "description": "show a user's global banner",
      "aliases": [
        "userbanner"
      ],
      "syntax": "banner (user)",
      "permission": null
    },
    {
      "name": "savatar",
      "description": "show a user's server-specific avatar",
      "aliases": [
        "serveravatar",
        "sav"
      ],
      "syntax": "savatar (user)",
      "permission": null
    },
    {
      "name": "sbanner",
      "description": "show a user's server-specific banner",
      "aliases": [
        "serverbanner"
      ],
      "syntax": "sbanner (user)",
      "permission": null
    },
    {
      "name": "userinfo",
      "description": "Get information about a Discord user",
      "aliases": [
        "lookup",
        "whois",
        "ui"
      ],
      "syntax": "userinfo (user)",
      "permission": null
    }
  ],
  "roleplay": [
    {
      "name": "anal",
      "description": "`NSFW` anal roleplay command.",
      "aliases": [],
      "syntax": "anal (user)",
      "permission": null
    },
    {
      "name": "blowjob",
      "description": "`NSFW` blowjob roleplay command.",
      "aliases": [],
      "syntax": "blowjob (user)",
      "permission": null
    },
    {
      "name": "cum",
      "description": "`NSFW` cum roleplay command.",
      "aliases": [],
      "syntax": "cum (user)",
      "permission": null
    },
    {
      "name": "fuck",
      "description": "`NSFW` fuck roleplay command.",
      "aliases": [],
      "syntax": "fuck (user)",
      "permission": null
    },
    {
      "name": "pussylick",
      "description": "`NSFW` pussylick roleplay command.",
      "aliases": [],
      "syntax": "pussylick (user)",
      "permission": null
    },
    {
      "name": "solo",
      "description": "`NSFW` solo roleplay command.",
      "aliases": [],
      "syntax": "solo",
      "permission": null
    },
    {
      "name": "threesome",
      "description": "`NSFW` threesome roleplay command.",
      "aliases": [],
      "syntax": "threesome @user1 @user2",
      "permission": null
    },
    {
      "name": "yaoi",
      "description": "`NSFW` yaoi roleplay command.",
      "aliases": [],
      "syntax": "yaoi (user)",
      "permission": null
    },
    {
      "name": "yuri",
      "description": "`NSFW` yuri roleplay command.",
      "aliases": [],
      "syntax": "yuri (user)",
      "permission": null
    },
    {
      "name": "bite",
      "description": "Bite someone",
      "aliases": [],
      "syntax": "bite (user)",
      "permission": null
    },
    {
      "name": "blush",
      "description": "Blush at someone",
      "aliases": [],
      "syntax": "blush (user)",
      "permission": null
    },
    {
      "name": "bonk",
      "description": "Bonk someone",
      "aliases": [],
      "syntax": "bonk (user)",
      "permission": null
    },
    {
      "name": "bully",
      "description": "Bully someone",
      "aliases": [],
      "syntax": "bully (user)",
      "permission": null
    },
    {
      "name": "cry",
      "description": "Cry at someone",
      "aliases": [],
      "syntax": "cry (user)",
      "permission": null
    },
    {
      "name": "cuddle",
      "description": "Cuddle with someone",
      "aliases": [],
      "syntax": "cuddle (user)",
      "permission": null
    },
    {
      "name": "dance",
      "description": "Dance with someone",
      "aliases": [],
      "syntax": "dance (user)",
      "permission": null
    },
    {
      "name": "glomp",
      "description": "Glomp someone",
      "aliases": [],
      "syntax": "glomp (user)",
      "permission": null
    },
    {
      "name": "headpat",
      "description": "Give someone a nice headpat",
      "aliases": [],
      "syntax": "headpat (user)",
      "permission": null
    },
    {
      "name": "highfive",
      "description": "Give someone a high five",
      "aliases": [
        "hi5"
      ],
      "syntax": "highfive (user)",
      "permission": null
    },
    {
      "name": "hug",
      "description": "Give someone a warm hug",
      "aliases": [],
      "syntax": "hug (user)",
      "permission": null
    },
    {
      "name": "kill",
      "description": "Kill someone (roleplay)",
      "aliases": [],
      "syntax": "kill (user)",
      "permission": null
    },
    {
      "name": "kiss",
      "description": "Give someone a sweet kiss",
      "aliases": [],
      "syntax": "kiss (user)",
      "permission": null
    },
    {
      "name": "lick",
      "description": "Lick someone",
      "aliases": [],
      "syntax": "lick (user)",
      "permission": null
    },
    {
      "name": "nom",
      "description": "Nom on someone",
      "aliases": [],
      "syntax": "nom (user)",
      "permission": null
    },
    {
      "name": "pat",
      "description": "Give someone a gentle pat",
      "aliases": [],
      "syntax": "pat (user)",
      "permission": null
    },
    {
      "name": "poke",
      "description": "Poke someone",
      "aliases": [],
      "syntax": "poke (user)",
      "permission": null
    },
    {
      "name": "slap",
      "description": "Slap someone",
      "aliases": [],
      "syntax": "slap (user)",
      "permission": null
    },
    {
      "name": "wave",
      "description": "Wave at someone",
      "aliases": [],
      "syntax": "wave (user)",
      "permission": null
    },
    {
      "name": "wink",
      "description": "Wink at someone",
      "aliases": [],
      "syntax": "wink (user)",
      "permission": null
    },
    {
      "name": "yeet",
      "description": "Yeet someone",
      "aliases": [],
      "syntax": "yeet (user)",
      "permission": null
    }
  ],
  "server": [
    {
      "name": "alias",
      "description": "Create your own shortcuts for commands",
      "aliases": [],
      "syntax": "alias [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "alias add",
      "description": "Create an alias for a command with optional {0} placeholder",
      "aliases": [],
      "syntax": "alias add [shortcut] [command]",
      "permission": "manage_guild"
    },
    {
      "name": "alias remove",
      "description": "Remove an alias",
      "aliases": [],
      "syntax": "alias remove [shortcut]",
      "permission": "manage_guild"
    },
    {
      "name": "alias removeall",
      "description": "Remove all aliases in this server",
      "aliases": [],
      "syntax": "alias removeall",
      "permission": "manage_guild"
    },
    {
      "name": "alias list",
      "description": "List all your aliases",
      "aliases": [],
      "syntax": "alias list",
      "permission": "manage_guild"
    },
    {
      "name": "alias reset",
      "description": "Reset all your aliases",
      "aliases": [],
      "syntax": "alias reset",
      "permission": "manage_guild"
    },
    {
      "name": "autoreact",
      "description": "automatically react to messages containing specific words",
      "aliases": [
        "react"
      ],
      "syntax": "autoreact [subcommand] (parameters)",
      "permission": "manage_channels"
    },
    {
      "name": "autoreact list",
      "description": "List all autoreacts",
      "aliases": [],
      "syntax": "autoreact list",
      "permission": "manage_channels"
    },
    {
      "name": "autoreact reset",
      "description": "Remove all autoreacts",
      "aliases": [],
      "syntax": "autoreact reset",
      "permission": "manage_channels"
    },
    {
      "name": "autoresponder",
      "description": "automatically respond to specific triggers",
      "aliases": [
        "autoresponse",
        "autorespond",
        "trigger"
      ],
      "syntax": "autoresponder [subcommand] (parameters)",
      "permission": "manage_channels"
    },
    {
      "name": "autoresponder reset",
      "description": "Remove all autoresponders",
      "aliases": [],
      "syntax": "autoresponder reset",
      "permission": "manage_channels"
    },
    {
      "name": "autoresponder list",
      "description": "List all autoresponders",
      "aliases": [],
      "syntax": "autoresponder list",
      "permission": "manage_channels"
    },
    {
      "name": "autoresponder reply",
      "description": "Remove all autoresponders",
      "aliases": [],
      "syntax": "autoresponder reset",
      "permission": "manage_channels"
    },
    {
      "name": "message",
      "description": "View message statistics for a user",
      "aliases": [
        "msg"
      ],
      "syntax": "message <user>",
      "permission": null
    },
    {
      "name": "boost",
      "description": "Set up a boost message and role for when members boost the server",
      "aliases": [
        "boosts"
      ],
      "syntax": "boost [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "boost add",
      "description": "Add or update a boost message for a channel",
      "aliases": [],
      "syntax": "boost add [channel] [message]",
      "permission": "manage_guild"
    },
    {
      "name": "boost remove",
      "description": "Remove a boost message from a channel",
      "aliases": [],
      "syntax": "boost remove [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "boost view",
      "description": "Preview the boost message for a channel",
      "aliases": [],
      "syntax": "boost view [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "boost variables",
      "description": "Shows available variables for boost messages",
      "aliases": [],
      "syntax": "boost variables",
      "permission": "manage_guild"
    },
    {
      "name": "boost award",
      "description": "Set or remove the boost award role",
      "aliases": [],
      "syntax": "boost award [@role/none]",
      "permission": "manage_guild"
    },
    {
      "name": "boost list",
      "description": "Lists all configured boost messages",
      "aliases": [],
      "syntax": "boost list",
      "permission": "manage_guild"
    },
    {
      "name": "boosters",
      "description": "View boost tracking information",
      "aliases": [
        "booster"
      ],
      "syntax": "boosters (lost/new)",
      "permission": "manage_guild"
    },
    {
      "name": "firstmessage",
      "description": "Get a link for the first message in a channel",
      "aliases": [
        "first"
      ],
      "syntax": "firstmessage (channel)",
      "permission": null
    },
    {
      "name": "hide",
      "description": "hides the channel for default/selected role",
      "aliases": [
        "hidechannel"
      ],
      "syntax": "hide (channel) (role)",
      "permission": "manage_channels"
    },
    {
      "name": "lock",
      "description": "locks the channel for default/selected role",
      "aliases": [
        "lockdown"
      ],
      "syntax": "lock (channel) (role)",
      "permission": "manage_channels"
    },
    {
      "name": "naughty",
      "description": "toggles `NSFW` status on a channel",
      "aliases": [
        "nsfw"
      ],
      "syntax": "naughty (channel)",
      "permission": "manage_channels"
    },
    {
      "name": "nuke",
      "description": "Deletes and recreates the channel with the same settings",
      "aliases": [],
      "syntax": "nuke",
      "permission": "manage_channels"
    },
    {
      "name": "pin",
      "description": "pin a message in the current channel",
      "aliases": [],
      "syntax": "pin",
      "permission": "manage_messages"
    },
    {
      "name": "topic",
      "description": "Set or clear the topic/description of a channel",
      "aliases": [
        "settopic",
        "channeltopic"
      ],
      "syntax": "topic (channel) (description)",
      "permission": "manage_channels"
    },
    {
      "name": "unhide",
      "description": "Unhide the channel for default/selected role",
      "aliases": [
        "unhidechannel"
      ],
      "syntax": "unhide (channel) (role)",
      "permission": "manage_channels"
    },
    {
      "name": "unlock",
      "description": "unlock the channel for default/selected role",
      "aliases": [
        "unlockdown"
      ],
      "syntax": "unlock (channel) (role)",
      "permission": "manage_channels"
    },
    {
      "name": "leave",
      "description": "Set up a leave message for when members leave",
      "aliases": [
        "bye"
      ],
      "syntax": "leave [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "leave add",
      "description": "Add or update a leave message for a channel",
      "aliases": [],
      "syntax": "leave add [channel] [message]",
      "permission": "manage_guild"
    },
    {
      "name": "leave remove",
      "description": "Remove a leave message from a channel",
      "aliases": [],
      "syntax": "leave remove [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "leave view",
      "description": "Preview the leave message for a channel",
      "aliases": [],
      "syntax": "leave view [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "leave variables",
      "description": "Shows available variables for leave messages",
      "aliases": [],
      "syntax": "leave variables",
      "permission": "manage_guild"
    },
    {
      "name": "leave list",
      "description": "Lists all configured leave messages",
      "aliases": [],
      "syntax": "leave list",
      "permission": "manage_guild"
    },
    {
      "name": "welcome",
      "description": "Set up a welcome message for when new members join",
      "aliases": [
        "welc"
      ],
      "syntax": "welcome [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "welcome add",
      "description": "Add or update a welcome message for a channel",
      "aliases": [],
      "syntax": "welcome add [channel] [message]",
      "permission": "manage_guild"
    },
    {
      "name": "welcome remove",
      "description": "Remove a welcome message from a channel",
      "aliases": [],
      "syntax": "welcome remove [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "welcome view",
      "description": "Preview the welcome message for a channel",
      "aliases": [],
      "syntax": "welcome view [channel]",
      "permission": "manage_guild"
    },
    {
      "name": "welcome variables",
      "description": "Shows available variables for welcome messages",
      "aliases": [],
      "syntax": "welcome variables",
      "permission": "manage_guild"
    },
    {
      "name": "welcome list",
      "description": "Lists all configured welcome messages",
      "aliases": [],
      "syntax": "welcome list",
      "permission": "manage_guild"
    },
    {
      "name": "confess",
      "description": "Submit an anonymous confession",
      "aliases": [],
      "syntax": "confess [confession text]",
      "permission": null
    },
    {
      "name": "confession",
      "description": "Manage the confession system",
      "aliases": [],
      "syntax": "confession [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "count",
      "description": "Configure the counting game system",
      "aliases": [
        "counting"
      ],
      "syntax": "count [subcommand]",
      "permission": "manage_guild"
    },
    {
      "name": "giveaways",
      "description": "Manage server giveaways",
      "aliases": [
        "giveaway",
        "gw"
      ],
      "syntax": "giveaways",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways start",
      "description": "Start a new giveaway",
      "aliases": [],
      "syntax": "giveaways start [duration] [winners] [title]",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways end",
      "description": "End a giveaway early",
      "aliases": [],
      "syntax": "giveaways end [message_link]",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways list",
      "description": "List all active giveaways",
      "aliases": [],
      "syntax": "giveaways list",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways cancel",
      "description": "Cancel a giveaway",
      "aliases": [],
      "syntax": "giveaways cancel [message_link]",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways reroll",
      "description": "Reroll giveaway winners",
      "aliases": [],
      "syntax": "giveaways reroll [message_link] [winners]",
      "permission": "manage_channels"
    },
    {
      "name": "giveaways edit",
      "description": "Edit giveaway settings",
      "aliases": [],
      "syntax": "giveaways edit [type] [message_link] [value]",
      "permission": "manage_channels"
    },
    {
      "name": "starboard",
      "description": "Set up a starboard system for highlighting popular messages",
      "aliases": [
        "board"
      ],
      "syntax": "starboard (set/threshold/emoji/check/unset) <value>",
      "permission": "manage_guild"
    },
    {
      "name": "starboard set",
      "description": "Set the starboard channel",
      "aliases": [],
      "syntax": "starboard set <channel>",
      "permission": "manage_guild"
    },
    {
      "name": "starboard threshold",
      "description": "Set the minimum number of reactions needed for a message to appear on the starboard",
      "aliases": [],
      "syntax": "starboard threshold <number>",
      "permission": "manage_guild"
    },
    {
      "name": "starboard emoji",
      "description": "Set the emoji used for starboard reactions",
      "aliases": [],
      "syntax": "starboard emoji <emoji>",
      "permission": "manage_guild"
    },
    {
      "name": "starboard check",
      "description": "View the current starboard configuration",
      "aliases": [],
      "syntax": "starboard check",
      "permission": "manage_guild"
    },
    {
      "name": "starboard unset",
      "description": "Disable the starboard system",
      "aliases": [],
      "syntax": "starboard unset",
      "permission": "manage_guild"
    },
    {
      "name": "ticket",
      "description": "Manage the ticket system for your server",
      "aliases": [
        "tickets"
      ],
      "syntax": "ticket [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "ticket setup",
      "description": "Create ticket system",
      "aliases": [],
      "syntax": "ticket setup",
      "permission": "manage_guild"
    },
    {
      "name": "ticket reset",
      "description": "Reset ticket system",
      "aliases": [],
      "syntax": "ticket reset",
      "permission": "manage_guild"
    },
    {
      "name": "ticket category",
      "description": "Set ticket category",
      "aliases": [],
      "syntax": "ticket category [category]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket add",
      "description": "Add user to current ticket",
      "aliases": [],
      "syntax": "ticket add [@user]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket remove",
      "description": "Remove user from current ticket",
      "aliases": [],
      "syntax": "ticket remove [@user]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket close",
      "description": "Close current ticket",
      "aliases": [],
      "syntax": "ticket close",
      "permission": "manage_guild"
    },
    {
      "name": "ticket open",
      "description": "Reopen current ticket",
      "aliases": [],
      "syntax": "ticket open",
      "permission": "manage_guild"
    },
    {
      "name": "ticket rename",
      "description": "Rename current ticket",
      "aliases": [],
      "syntax": "ticket rename [name]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket support",
      "description": "Set support role",
      "aliases": [],
      "syntax": "ticket support [@role/none]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket message",
      "description": "Set custom ticket setup message",
      "aliases": [],
      "syntax": "ticket message [custom message/remove/none]",
      "permission": "manage_guild"
    },
    {
      "name": "ticket variables",
      "description": "Show available variables for ticket messages",
      "aliases": [],
      "syntax": "ticket variables",
      "permission": "manage_guild"
    },
    {
      "name": "vanity",
      "description": "add vanity role to someone for reppin your server in their custom status",
      "aliases": [
        "rep"
      ],
      "syntax": "vanity [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "vanity set",
      "description": "Set the vanity text that users need in their status",
      "aliases": [],
      "syntax": "vanity set [text]",
      "permission": "manage_guild"
    },
    {
      "name": "vanity role",
      "description": "Set the role given to users who rep the server",
      "aliases": [],
      "syntax": "vanity role [@role]",
      "permission": "manage_guild"
    },
    {
      "name": "vanity add",
      "description": "Add a vanity message to be sent when someone reps",
      "aliases": [],
      "syntax": "vanity add [#channel] [message]",
      "permission": "manage_guild"
    },
    {
      "name": "vanity remove",
      "description": "Remove the vanity message for a channel",
      "aliases": [],
      "syntax": "vanity remove [#channel]",
      "permission": "manage_guild"
    },
    {
      "name": "vanity view",
      "description": "Preview the vanity message for a channel",
      "aliases": [],
      "syntax": "vanity view [#channel]",
      "permission": "manage_guild"
    },
    {
      "name": "vanity variables",
      "description": "Show available variables for vanity messages",
      "aliases": [],
      "syntax": "vanity variables",
      "permission": "manage_guild"
    },
    {
      "name": "vanity check",
      "description": "Check current vanity configuration",
      "aliases": [],
      "syntax": "vanity check",
      "permission": "manage_guild"
    },
    {
      "name": "vanity enable",
      "description": "Re-enable the vanity system if it was disabled",
      "aliases": [],
      "syntax": "vanity enable",
      "permission": "manage_guild"
    },
    {
      "name": "voicemaster",
      "description": "Voice channel management system",
      "aliases": [
        "vm",
        "voice",
        "vc"
      ],
      "syntax": "voicemaster [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "voicemaster lock",
      "description": "Lock your voice channel",
      "aliases": [],
      "syntax": "voicemaster lock",
      "permission": null
    },
    {
      "name": "voicemaster unlock",
      "description": "Unlock your voice channel",
      "aliases": [],
      "syntax": "voicemaster unlock",
      "permission": null
    },
    {
      "name": "voicemaster hide",
      "description": "Hide your voice channel",
      "aliases": [],
      "syntax": "voicemaster hide",
      "permission": null
    },
    {
      "name": "voicemaster unhide",
      "description": "Unhide your voice channel",
      "aliases": [],
      "syntax": "voicemaster unhide",
      "permission": null
    },
    {
      "name": "voicemaster increase",
      "description": "Increase user limit by 1",
      "aliases": [],
      "syntax": "voicemaster increase",
      "permission": null
    },
    {
      "name": "voicemaster decrease",
      "description": "Decrease user limit by 1",
      "aliases": [],
      "syntax": "voicemaster decrease",
      "permission": null
    },
    {
      "name": "voicemaster limit",
      "description": "Set user limit (0-99)",
      "aliases": [],
      "syntax": "voicemaster limit [number]",
      "permission": null
    },
    {
      "name": "voicemaster name",
      "description": "Change your channel name",
      "aliases": [],
      "syntax": "voicemaster rename [name]",
      "permission": null
    },
    {
      "name": "voicemaster kick",
      "description": "Disconnect a user from your channel",
      "aliases": [],
      "syntax": "voicemaster kick [@user]",
      "permission": null
    },
    {
      "name": "voicemaster invite",
      "description": "Invite a user to your channel",
      "aliases": [],
      "syntax": "voicemaster invite [@user]",
      "permission": null
    },
    {
      "name": "voicemaster reject",
      "description": "Reject a user from your channel",
      "aliases": [],
      "syntax": "voicemaster reject [@user]",
      "permission": null
    },
    {
      "name": "voicemaster permit",
      "description": "Permit a user to access your channel",
      "aliases": [],
      "syntax": "voicemaster permit [@user]",
      "permission": null
    },
    {
      "name": "voicemaster status",
      "description": "Set your channel status",
      "aliases": [],
      "syntax": "voicemaster status [text]",
      "permission": null
    },
    {
      "name": "voicemaster transfer",
      "description": "Transfer ownership to another user",
      "aliases": [],
      "syntax": "voicemaster transfer [@user]",
      "permission": null
    },
    {
      "name": "voicemaster claim",
      "description": "Claim ownership of an abandoned channel",
      "aliases": [],
      "syntax": "voicemaster claim",
      "permission": null
    },
    {
      "name": "levels",
      "description": "Manage the leveling system for your server",
      "aliases": [
        "level",
        "lvl",
        "rank"
      ],
      "syntax": "levels [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "levels unlock",
      "description": "Enable the leveling system",
      "aliases": [],
      "syntax": "levels unlock",
      "permission": null
    },
    {
      "name": "levels lock",
      "description": "Disable the leveling system",
      "aliases": [],
      "syntax": "levels lock",
      "permission": null
    },
    {
      "name": "levels setrate",
      "description": "Set XP gain multiplier",
      "aliases": [],
      "syntax": "levels setrate [multiplier]",
      "permission": null
    },
    {
      "name": "levels roles",
      "description": "Show all level roles",
      "aliases": [],
      "syntax": "levels roles",
      "permission": null
    },
    {
      "name": "levels stackroles",
      "description": "Toggle role stacking",
      "aliases": [],
      "syntax": "levels stackroles [on/off]",
      "permission": null
    },
    {
      "name": "levels update",
      "description": "Update a level role",
      "aliases": [],
      "syntax": "levels update [@role] [level]",
      "permission": null
    },
    {
      "name": "levels reset",
      "description": "Reset all level data",
      "aliases": [],
      "syntax": "levels reset",
      "permission": null
    },
    {
      "name": "levels cleanup",
      "description": "Remove level data for users who left",
      "aliases": [],
      "syntax": "levels cleanup",
      "permission": null
    },
    {
      "name": "levels leaderboard",
      "description": "Show the server level leaderboard",
      "aliases": [],
      "syntax": "levels leaderboard",
      "permission": null
    },
    {
      "name": "levels add",
      "description": "Add a level role reward",
      "aliases": [],
      "syntax": "levels add [@role] [level]",
      "permission": null
    },
    {
      "name": "levels remove",
      "description": "Remove a level role reward",
      "aliases": [],
      "syntax": "levels remove [level]",
      "permission": null
    },
    {
      "name": "levels set",
      "description": "Set a user\\",
      "aliases": [],
      "syntax": "levels set [@user] [level]",
      "permission": null
    },
    {
      "name": "levels sync",
      "description": "Sync level roles for all members",
      "aliases": [],
      "syntax": "levels sync",
      "permission": null
    },
    {
      "name": "levels messagemode",
      "description": "Configure level up message mode",
      "aliases": [],
      "syntax": "levels messagemode [none/channel/context] [#channel]",
      "permission": null
    },
    {
      "name": "levels message",
      "description": "Manage custom level up messages",
      "aliases": [],
      "syntax": "levels message [message/remove/none/view/variables]",
      "permission": null
    },
    {
      "name": "forcenick",
      "description": "force a nickname on a user that will be automatically restored if they try to change it",
      "aliases": [
        "fn"
      ],
      "syntax": "forcenick [user] (nickname)",
      "permission": "manage guild & manage nicknames"
    },
    {
      "name": "forcenick list",
      "description": "List all forced nicknames",
      "aliases": [],
      "syntax": "forcenick list",
      "permission": "manage guild & manage nicknames"
    },
    {
      "name": "forcenick reset",
      "description": "Remove all forced nicknames",
      "aliases": [],
      "syntax": "forcenick reset",
      "permission": "manage guild & manage nicknames"
    },
    {
      "name": "forcenick set",
      "description": "Force a nickname on a user or remove their forced nickname",
      "aliases": [],
      "syntax": "forcenick [@user] [nickname]",
      "permission": "manage guild & manage nicknames"
    },
    {
      "name": "rename",
      "description": "change a member's nickname",
      "aliases": [
        "nick"
      ],
      "syntax": "rename (user) <nickname>",
      "permission": null
    },
    {
      "name": "antinuke",
      "description": "Antinuke protection system",
      "aliases": [
        "an"
      ],
      "syntax": "antinuke [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "antinuke whitelist",
      "description": "Whitelist a member or bot from triggering antinuke",
      "aliases": [],
      "syntax": "antinuke whitelist [user]",
      "permission": null
    },
    {
      "name": "antinuke role",
      "description": "Prevent mass role delete",
      "aliases": [],
      "syntax": "antinuke role [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antinuke kick",
      "description": "Prevent mass member kick",
      "aliases": [],
      "syntax": "antinuke kick [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antinuke ban",
      "description": "Prevent mass member ban",
      "aliases": [],
      "syntax": "antinuke ban [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antinuke channel",
      "description": "Prevent mass channel create and delete",
      "aliases": [],
      "syntax": "antinuke channel [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antinuke webhook",
      "description": "Prevent mass webhook creation",
      "aliases": [],
      "syntax": "antinuke webhook [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antinuke botadd",
      "description": "Prevent new bot additions",
      "aliases": [],
      "syntax": "antinuke botadd [state] (punishment)",
      "permission": null
    },
    {
      "name": "antinuke config",
      "description": "View server configuration for Antinuke",
      "aliases": [],
      "syntax": "antinuke config",
      "permission": null
    },
    {
      "name": "antinuke permissions",
      "description": "Watch specific dangerous permissions",
      "aliases": [],
      "syntax": "antinuke permissions [permission] (punishment)",
      "permission": null
    },
    {
      "name": "antinuke view",
      "description": "View all whitelisted members & bots",
      "aliases": [],
      "syntax": "antinuke view",
      "permission": null
    },
    {
      "name": "antinuke admin",
      "description": "Give a user permissions to edit antinuke settings",
      "aliases": [],
      "syntax": "antinuke admin [user]",
      "permission": null
    },
    {
      "name": "antinuke admins",
      "description": "View all antinuke admins",
      "aliases": [],
      "syntax": "antinuke admins",
      "permission": null
    },
    {
      "name": "antiraid",
      "description": "Anti-raid protection system",
      "aliases": [],
      "syntax": "antiraid [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "antiraid avatar",
      "description": "Kick members without profile pictures",
      "aliases": [],
      "syntax": "antiraid avatar [state] (punishment)",
      "permission": null
    },
    {
      "name": "antiraid newaccount",
      "description": "Kick/ban new accounts",
      "aliases": [],
      "syntax": "antiraid newaccount [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antiraid massjoin",
      "description": "Prevent mass join raids",
      "aliases": [],
      "syntax": "antiraid massjoin [state] (threshold) (punishment)",
      "permission": null
    },
    {
      "name": "antiraid whitelist",
      "description": "Whitelist a member from antiraid checks",
      "aliases": [],
      "syntax": "antiraid whitelist [user]",
      "permission": null
    },
    {
      "name": "antiraid view",
      "description": "View all whitelisted members",
      "aliases": [],
      "syntax": "antiraid view",
      "permission": null
    },
    {
      "name": "antiraid config",
      "description": "View antiraid configuration",
      "aliases": [],
      "syntax": "antiraid config",
      "permission": null
    },
    {
      "name": "fakepermissions",
      "description": "Restrict moderators to only use bot commands for moderation",
      "aliases": [
        "fakeperms",
        "fp"
      ],
      "syntax": "fakepermissions [subcommand] [parameters]",
      "permission": null
    },
    {
      "name": "fakepermissions add",
      "description": "Add fake permissions to a role",
      "aliases": [],
      "syntax": "fakepermissions add [role] [permissions]",
      "permission": null
    },
    {
      "name": "fakepermissions remove",
      "description": "Remove fake permissions from a role",
      "aliases": [],
      "syntax": "fakepermissions remove [role] [permissions]",
      "permission": null
    },
    {
      "name": "fakepermissions list",
      "description": "View fake permissions for a role",
      "aliases": [],
      "syntax": "fakepermissions list [role]",
      "permission": null
    },
    {
      "name": "fakepermissions reset",
      "description": "Reset all fake permissions",
      "aliases": [],
      "syntax": "fakepermissions reset",
      "permission": null
    },
    {
      "name": "autorole",
      "description": "Set up automatic role assign on member join",
      "aliases": [
        "ar"
      ],
      "syntax": "autorole [subcommand] (parameters)",
      "permission": "manage guild & manage roles"
    },
    {
      "name": "autorole add",
      "description": "Adds a autorole and assigns on join to member",
      "aliases": [],
      "syntax": "autorole add [role]",
      "permission": "manage guild & manage roles"
    },
    {
      "name": "autorole reset",
      "description": "Clears every autorole for guild",
      "aliases": [],
      "syntax": "autorole reset",
      "permission": "manage guild & manage roles"
    },
    {
      "name": "autorole list",
      "description": "Lists all autoroles configured for the guild",
      "aliases": [],
      "syntax": "autorole list",
      "permission": "manage guild & manage roles"
    },
    {
      "name": "autorole remove",
      "description": "Removes a autorole and stops assigning on join",
      "aliases": [],
      "syntax": "autorole remove [role]",
      "permission": "manage guild & manage roles"
    },
    {
      "name": "boostrole",
      "description": "Manage booster roles",
      "aliases": [
        "br",
        "boosterrole"
      ],
      "syntax": "boostrole [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "buttonrole",
      "description": "Manage button roles",
      "aliases": [
        "br"
      ],
      "syntax": "buttonrole [subcommand] (parameters)",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole add",
      "description": "Add a button role to a message",
      "aliases": [],
      "syntax": "buttonrole add [message_link] [role] [style] <emoji> <label>",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole remove",
      "description": "Remove a button role from a message",
      "aliases": [],
      "syntax": "buttonrole remove [message_link] [role]",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole list",
      "description": "List all button roles in the server",
      "aliases": [],
      "syntax": "buttonrole list",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole reset",
      "description": "Remove all button roles from the server",
      "aliases": [],
      "syntax": "buttonrole reset",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole removeall",
      "description": "Remove all button roles from a specific message",
      "aliases": [],
      "syntax": "buttonrole removeall [message_link]",
      "permission": "manage_roles"
    },
    {
      "name": "buttonrole re.voro",
      "description": "Remove all button roles from the server",
      "aliases": [],
      "syntax": "buttonrole reset",
      "permission": "manage_roles"
    },
    {
      "name": "inrole",
      "description": "get a list of users in a specific role",
      "aliases": [
        "members",
        "rolemembers"
      ],
      "syntax": "inrole (role)",
      "permission": null
    },
    {
      "name": "reactionrole",
      "description": "Manage reaction roles",
      "aliases": [
        "rr"
      ],
      "syntax": "reactionrole [subcommand] (parameters)",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole add",
      "description": "Add a reaction role to a message",
      "aliases": [],
      "syntax": "reactionrole add [message_link] [reaction] [role]",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole remove",
      "description": "Remove a reaction role from a message",
      "aliases": [],
      "syntax": "reactionrole remove [message_link] [reaction]",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole list",
      "description": "List all reaction roles in the server",
      "aliases": [],
      "syntax": "reactionrole list",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole reset",
      "description": "Remove all reaction roles from the server",
      "aliases": [],
      "syntax": "reactionrole reset",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole removeall",
      "description": "Remove all reaction roles from a specific message",
      "aliases": [],
      "syntax": "reactionrole removeall [message_link]",
      "permission": "manage_roles"
    },
    {
      "name": "reactionrole re.voro",
      "description": "Remove all reaction roles from the server",
      "aliases": [],
      "syntax": "reactionrole reset",
      "permission": "manage_roles"
    },
    {
      "name": "role",
      "description": "Comprehensive role management system",
      "aliases": [
        "r"
      ],
      "syntax": "role [user] [role] or role [subcommand] (parameters)",
      "permission": "manage_roles"
    },
    {
      "name": "role rename",
      "description": "Rename a role",
      "aliases": [],
      "syntax": "role rename [role] [new name]",
      "permission": "manage_roles"
    },
    {
      "name": "role color",
      "description": "Change role color",
      "aliases": [],
      "syntax": "role color [role] [color]",
      "permission": "manage_roles"
    },
    {
      "name": "role gradient",
      "description": "Apply gradient color to role name",
      "aliases": [],
      "syntax": "role gradient [role] [color1] [color2]",
      "permission": "manage_roles"
    },
    {
      "name": "role icon",
      "description": "Set role icon",
      "aliases": [],
      "syntax": "role icon [role] [emoji]",
      "permission": "manage_roles"
    },
    {
      "name": "role humans",
      "description": "Restore roles to a user who left the server",
      "aliases": [],
      "syntax": "role restore [user]",
      "permission": "manage_roles"
    },
    {
      "name": "role bots",
      "description": "Restore roles to a user who left the server",
      "aliases": [],
      "syntax": "role restore [user]",
      "permission": "manage_roles"
    },
    {
      "name": "roles",
      "description": "View all roles in the server",
      "aliases": [],
      "syntax": "roles",
      "permission": null
    },
    {
      "name": "customize",
      "description": "Customize the bot's server profile (avatar, banner, bio)",
      "aliases": [
        "custom"
      ],
      "syntax": "customize [subcommand] (value)",
      "permission": "Server Owner"
    },
    {
      "name": "logs",
      "description": "Set up logging channels with webhooks for different log types",
      "aliases": [
        "logging",
        "audit"
      ],
      "syntax": "logs [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "logs add",
      "description": "Add a logging channel",
      "aliases": [],
      "syntax": "logs add [channel] [type]",
      "permission": "manage_guild"
    },
    {
      "name": "logs remove",
      "description": "Remove a logging channel",
      "aliases": [],
      "syntax": "logs remove [channel] [type]",
      "permission": "manage_guild"
    },
    {
      "name": "logs list",
      "description": "List all logging channels",
      "aliases": [],
      "syntax": "logs list",
      "permission": "manage_guild"
    },
    {
      "name": "settings",
      "description": "View and manage server settings",
      "aliases": [],
      "syntax": "settings [subcommand] (parameters)",
      "permission": "manage_guild"
    },
    {
      "name": "settings config",
      "description": "View all server configuration settings",
      "aliases": [],
      "syntax": "settings config",
      "permission": "manage_guild"
    },
    {
      "name": "settings baserole",
      "description": "set base role for booster role positioning",
      "aliases": [],
      "syntax": "settings baserole [@role]",
      "permission": "manage_guild"
    },
    {
      "name": "settings bypass",
      "description": "Toggle NSFW bypass to allow NSFW commands in non-NSFW channels",
      "aliases": [],
      "syntax": "settings bypass nsfw",
      "permission": "manage_guild"
    },
    {
      "name": "settings Prefix",
      "description": "set base role for booster role positioning",
      "aliases": [],
      "syntax": "settings baserole [@role]",
      "permission": "manage_guild"
    },
    {
      "name": "webhook",
      "description": "Manage webhooks for the server",
      "aliases": [],
      "syntax": "webhook [subcommand] (parameters)",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook create",
      "description": "Create a new webhook in the current channel",
      "aliases": [],
      "syntax": "webhook create [name]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook delete",
      "description": "Delete a webhook by ID, name, or short ID",
      "aliases": [],
      "syntax": "webhook delete [webhook_id/name/short_id]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook send",
      "description": "Send a message through a webhook",
      "aliases": [],
      "syntax": "webhook send [webhook_id] [message]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook edit",
      "description": "Edit a webhook message",
      "aliases": [],
      "syntax": "webhook edit [message_link] [new_message]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook rename",
      "description": "Rename a webhook",
      "aliases": [],
      "syntax": "webhook rename [webhook_id] [new_name]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook avatar",
      "description": "Set a webhook\\",
      "aliases": [],
      "syntax": "webhook avatar [webhook_id] [image_url]",
      "permission": "manage_webhooks"
    },
    {
      "name": "webhook list",
      "description": "List all webhooks in the server",
      "aliases": [],
      "syntax": "webhook list",
      "permission": "manage_webhooks"
    }
  ],
  "social": [
    {
      "name": "instagram",
      "description": "Get information about an Instagram profile",
      "aliases": [
        "ig",
        "insta"
      ],
      "syntax": "instagram (username)",
      "permission": null
    },
    {
      "name": "roblox",
      "description": "Get information about a Roblox player",
      "aliases": [
        "rbx",
        "rblx"
      ],
      "syntax": "roblox (username)",
      "permission": null
    },
    {
      "name": "tiktok",
      "description": "Get information about a TikTok profile",
      "aliases": [
        "tt"
      ],
      "syntax": "tiktok (username)",
      "permission": null
    },
    {
      "name": "valorant",
      "description": "Get information about a Valorant player",
      "aliases": [
        "valo",
        "val"
      ],
      "syntax": "valorant (username#tag)",
      "permission": null
    }
  ],
  "utility": [
    {
      "name": "copyembed",
      "description": "copy an embed custom syntax code",
      "aliases": [
        "copy"
      ],
      "syntax": "copyembed (message)",
      "permission": "Manage Messages"
    },
    {
      "name": "createembed",
      "description": "Create your own embed, You can use [**embed website**](https://adore.vly.site/embeds) to your own embeds",
      "aliases": [
        "ce"
      ],
      "syntax": "createembed (code)",
      "permission": "Manage Messages"
    },
    {
      "name": "repost",
      "description": "Download content from Instagram or TikTok",
      "aliases": [],
      "syntax": "repost (link)",
      "permission": null
    },
    {
      "name": "say",
      "description": "Say a message",
      "aliases": [],
      "syntax": "say (message)",
      "permission": "Administrator"
    },
    {
      "name": "sprint",
      "description": "Manage reading sprints",
      "aliases": [],
      "syntax": "sprint [subcommand] (parameters)",
      "permission": null
    },
    {
      "name": "sprint start",
      "description": "Start a new reading sprint",
      "aliases": [],
      "syntax": "sprint start [duration] [name]",
      "permission": null
    },
    {
      "name": "sprint end",
      "description": "End the current sprint",
      "aliases": [],
      "syntax": "sprint end",
      "permission": null
    },
    {
      "name": "sprint join",
      "description": "Join the current sprint",
      "aliases": [],
      "syntax": "sprint join [book name], [start page]",
      "permission": null
    },
    {
      "name": "sprint leave",
      "description": "Leave the current sprint",
      "aliases": [],
      "syntax": "sprint leave",
      "permission": null
    },
    {
      "name": "sprint update",
      "description": "Update your current page",
      "aliases": [],
      "syntax": "sprint update [page number]",
      "permission": null
    },
    {
      "name": "sprint flow",
      "description": "Pause or resume your time tracking",
      "aliases": [],
      "syntax": "sprint flow",
      "permission": null
    },
    {
      "name": "sprint leaderboard",
      "description": "Show sprint leaderboard",
      "aliases": [],
      "syntax": "sprint leaderboard",
      "permission": null
    },
    {
      "name": "sprint history",
      "description": "Show your sprint history",
      "aliases": [],
      "syntax": "sprint history",
      "permission": null
    },
    {
      "name": "ocr",
      "description": "Extract text from images using OCR (Optical Character Recognition)",
      "aliases": [
        "textrecognition",
        "readtext"
      ],
      "syntax": "ocr {attach image} or ocr {image url}",
      "permission": null
    },
    {
      "name": "clearsnipe",
      "description": "clear snipe data for this channel",
      "aliases": [
        "cs",
        "clearsnipes"
      ],
      "syntax": "clearsnipe",
      "permission": null
    },
    {
      "name": "editsnipe",
      "description": "snipes edited messages",
      "aliases": [
        "es"
      ],
      "syntax": "editsnipe (number)",
      "permission": null
    },
    {
      "name": "reactionsnipe",
      "description": "snipes removed reactions",
      "aliases": [
        "rs",
        "reactsnipe"
      ],
      "syntax": "reactionsnipe (number)",
      "permission": null
    },
    {
      "name": "snipe",
      "description": "snipes deleted messages",
      "aliases": [
        "s"
      ],
      "syntax": "snipe (number)",
      "permission": null
    },
    {
      "name": "note",
      "description": "manage your personal notes",
      "aliases": [
        "notes",
        "todo"
      ],
      "syntax": "note",
      "permission": null
    },
    {
      "name": "remind",
      "description": "set personal reminders with optional daily repeating",
      "aliases": [
        "reminder",
        "remindme"
      ],
      "syntax": "remind",
      "permission": null
    },
    {
      "name": "screenshot",
      "description": "Take a screenshot of a website",
      "aliases": [
        "ss",
        "screen",
        "snap"
      ],
      "syntax": "screenshot (url)",
      "permission": null
    },
    {
      "name": "swear",
      "description": "track swear usage in the server",
      "aliases": [
        "swears"
      ],
      "syntax": "swear",
      "permission": null
    },
    {
      "name": "swear list",
      "description": "List all swears used by you or another user",
      "aliases": [],
      "syntax": "swear list [user]",
      "permission": null
    },
    {
      "name": "swear reset",
      "description": "Reset all swear data for the server",
      "aliases": [],
      "syntax": "swear reset",
      "permission": null
    },
    {
      "name": "swear view",
      "description": "View swear statistics for a specific user",
      "aliases": [],
      "syntax": "swear [user]",
      "permission": null
    },
    {
      "name": "translate",
      "description": "Translate text to different languages",
      "aliases": [
        "tr"
      ],
      "syntax": "translate (language) (text)",
      "permission": null
    }
  ]
};