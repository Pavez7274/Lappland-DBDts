const dbd = require("dbd.ts")
const colors = require('colors')
const client = new dbd.Bot({
  intents: [
		'GUILDS',
		'GUILD_MESSAGES', 
		'GUILD_MEMBERS',
		'DIRECT_MESSAGES',
		'GUILD_MESSAGE_REACTIONS'
	],
  prefix: {
    mentionPrefix: true,
    prefixes: ['lappland ', '??']
  },
	database: {
		path: `./database/default.sqlite`
	},
	internalSharding: true
})

// Database
const db = require('./db.js')

// Ready
client.commands.add({
	type: "readyCommand",
	code: `
$js[false;
console.log('DBD.TS'.red, '- Ready on client', String(d.client.user.tag).blue)
;2]
	`
})

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


/*          DISCORD.JS CODE           */

const djs = require('./discordjs/connection.js')


/*               24/7               */
const keepAlive = require('./server')
const Monitor = require('ping-monitor')

keepAlive()
const monitor = new Monitor({
	website: 'https://lappland.kaedestudio.ga',
	title: 'Lappland',
	interval: 2
})

monitor.on('up', async (res) => {
	console.log('MONITOR'.brightGreen, '-', 'uptime started.')
})
monitor.on('down', (res) => {
	console.log('MONITOR'.brightGreen, '-', 'uptime has down.')
})
monitor.on('stop', (website) => {
	console.log('MONITOR'.brightGreen, '-', 'uptime has stopped.')
})
monitor.on('error', (error) => {
	console.log('MONITOR'.brightGreen, '-', 'ERROR', '-', `${error}`.red)
})