const dbd = require("dbd.ts")
const colors = require('colors')
const client = new dbd.Bot({
  intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	],
  prefix: {
    mentionPrefix: true,
    prefixes: ["lappland ", "??"]
  },
	database: {
		path: `./database/default.sqlite`
	}
})

// Database
const DBDJSDB = require("dbdjs.db")
const db = new DBDJSDB.Database({
	path: "./database/",
	tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
})
db.connect()

// Ready
client.commands.add({
	type: "readyCommand",
	code: `
$console[|--------------[DBD.TS\\]--------------|
| Ready on client $userTag[$clientID]
|------------------------------------|\n;magenta]
	`
})

// StatusManager
require(`./handlers/status.js`)(client)

// Events
require(`./handlers/events.js`)(client)

// Loader
client.commands.load({
  path: "./commands/"
})

// Functions
require(`./handlers/functions.js`)(client)

// Slash
require(`./handlers/slash.js`)(client)

// Login
client.login(process.env['token'])

/*               24/7               */
const keepAlive = require('./server')
const Monitor = require('ping-monitor')

keepAlive()
const monitor = new Monitor({
  website: "https://lappland.kaedestudio.ga",
  title: 'Lappland',
  interval: 2
})

monitor.on('up', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime started.
|-------------------------------------|\n`.brightGreen))
monitor.on('down', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime has down.
${res.statusMessage}
|-------------------------------------|\n`.yellow))
monitor.on('stop', (website) => console.log(`|--------------[MONITOR]--------------|
| uptime has stopped
|-------------------------------------|\n`.red))
monitor.on('error', (error) => console.log(`|--------------[MONITOR]--------------|
| ${error}
|-------------------------------------|\n`.bgRed))


/*          DISCORD.JS CODE           */

const { Client, Intents } = require('discord.js') 
const djs = new Client({
	intents: [ Intents?.FLAGS?.GUILDS, Intents?.FLAGS?.GUILD_MESSAGES ]
})

djs.on('ready', () => {
	console.log(`|-------------[DISCORD.JS]-------------|
| Ready on client ${djs.user.tag}
|--------------------------------------|
`.cyan)
	djs.user.setStatus('dnd')
})

djs.on('messageDelete', async (message) => {
	const def = [
		{
			type: "deleted", 
			author: 'undefined', 
			content: 'undefined'
		}
	]
	let arr = await db.get("main", `snipe_${message?.channel?.id}`).then(data => data?.value || def)
	arr.push({
		type: "deleted", 
		author: message?.author?.id || 'undefined', 
		content: message?.content || 'undefined'
	})
	db.set("main", `snipe_${message?.channel?.id}`, arr)
}) 

djs.login(process.env['token'])