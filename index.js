const { Bot } = require("dbd.ts")
const { BotOptions } = require('./handlers/options.js')
const client = new Bot(BotOptions)

// Database
const db = require('./db.js')

// Handlers
require(`./handlers/status.js`)(client)
require(`./handlers/events.js`)(client)
require(`./handlers/functions.js`)(client)
require(`./handlers/slash.js`)(client)
require('./server')()

// Loader
client.commands.load({
	path: "./commands/",
	debug: true
})

// Login
client.login(process.env['token']) 