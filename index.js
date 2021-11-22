const { Bot } = require('dbd.ts')
const { BotOptions, LavalinkOptions } = require('./handlers/options.js')
const client = new Bot(BotOptions)

// Database
const db = require('./db.js')

// Lavalink || no works... secure option is required
// client.lavalink.addNode(LavalinkOptions)
// client.lavalink.connect()

// Handlers
require(`./handlers/status.js`)(client)
require(`./handlers/events.js`)(client)
require(`./handlers/functions.js`)(client)
require(`./handlers/slash.js`)(client)
require('./server.js')()

// Loader
client.commands.load({
	path: './commands/',
	debug: false
})

// Login
client.login(process.env['token']) 