const { Client, Intents } = require('discord.js') 
const client = new Client({
	intents: [ Intents?.FLAGS?.GUILDS, Intents?.FLAGS?.GUILD_MESSAGES ]
})

client.on('ready', () => {
	console.log('D.JS'.red, '- Ready on client', String(client.user.tag).blue)
	client.user.setStatus('dnd')
})

client.login(process.env['token'])

module.exports = client