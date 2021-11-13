const { Bot } = require("dbd.ts")
const colors = require('colors')
const { BotOptions } = require('./handlers/options.js')
const client = new Bot(BotOptions)

// Database
const db = require('./db.js')

// StatusManager
require(`./handlers/status.js`)(client)

// Events
require(`./handlers/events.js`)(client)

// Loader
client.commands.load({
	path: "./commands/",
	debug: true
})

// Functions
require(`./handlers/functions.js`)(client)

// Slash
require(`./handlers/slash.js`)(client)

// Login
client.login(process.env['token'])


/*               24/7               */
require('./server')()