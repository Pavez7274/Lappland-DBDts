const dbd = require("dbd.ts") 
const client = new dbd.Bot({
  intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	],
  prefix: {
    mentionPrefix: true,
    prefixes: ["lappland ", "??"]
  }
})

// StatusManager
require(`./bot/status.js`)(client)

// Events
require(`./bot/events.js`)(client)

// Loader
client.commands.load({
  path: "./commands/"
})

// Functions
require(`./bot/functions.js`)(client)

// Slashclient
require(`./bot/slash.js`)(client)

// Login
client.login(process.env['token'])

/*               24/7               */
const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
  website: "https://lappland.kaedestudio.ga",
  title: 'Rawr!',
  interval: 2
})