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
$js[false;
console.log('DBD.TS'.red, '- Ready on client', String(d.client.user.tag).magenta)
;2]
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


/*          DISCORD.JS CODE           */

const { Client, Intents } = require('discord.js') 
const djs = new Client({
	intents: [ Intents?.FLAGS?.GUILDS, Intents?.FLAGS?.GUILD_MESSAGES ]
})

djs.on('ready', () => {
	console.log('D.JS'.red, '- Ready on client', String(djs.user.tag).cyan)
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

djs.on('messageUpdate', async (message) => {
	const def = [
		{
			type: "edited", 
			author: 'undefined', 
			content: 'undefined'
		}
	]
	let arr = await db.get("main", `snipe_${message?.channel?.id}`).then(data => data?.value || def)
	arr.push({
		type: "edited", 
		author: message?.author?.id || 'undefined', 
		content: message?.content || 'undefined'
	})
	db.set("main", `snipe_${message?.channel?.id}`, arr)
})

djs.login(process.env['token'])


/*               24/7               */
const keepAlive = require('./server')
const Monitor = require('ping-monitor')

keepAlive()
const monitor = new Monitor({
  website: "https://lappland.kaedestudio.ga",
  title: 'Lappland',
  interval: 2
})

monitor.on('up', async (res) => {
  console.log('MONITOR'.brightGreen, '-', 'uptime started.')

	const allBots = await db.get('main', 'bots').then(data => data.value)
  allBots.forEach(async (bot, index) => {
		let user = await djs.users.fetch(String(bot.id))
		allBots[index].image = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`
		allBots[index].name = user.username

		await db.set('main', 'bots', allBots)
  })
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