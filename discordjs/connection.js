const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')
const path = require('path')
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
	allowedMentions: {
		repliedUser: false
	}
})
const DisTube = require('distube')
const { SpotifyPlugin } = require('@distube/spotify')

client.distube = new DisTube.default(client, {
	plugins: [new SpotifyPlugin()],
})
client.commands = new Collection()

client.on('ready', () => {
	console.log('D.JS'.red, '- Ready on client', String(client.user.tag).blue)
	client.user.setStatus('dnd')
})

const commands = fs.readdirSync(path.join(__dirname, '/commands'))
for (const folders of commands) {
	const folder = fs.readdirSync(path.join(__dirname, '/commands', folders))
	for (const file of folder) {
		const cdm = require(path.join(__dirname, '/commands', folders, file))
		client.commands.set(cdm.name, cdm)
	}
}

client.on('messageCreate', async (message) => {
  client.prefix = '??'
  
  if(message.author.bot) return
  if(!message.content.startsWith(client.prefix)) return

  const args = message.content.slice(client.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  const cmd = client.commands.get(command) || client.commands.find(f => f.aliases && f.aliases.includes(command))
  if(!cmd) return

  const data = {
		client: client,
		message: message,
		args: args,
		command: command,
		cmd: cmd,
		channel: message.channel,
		author: message.author,
		member: message.member
	}
	cmd.run(data)
})

client.login(process.env['token'])

module.exports = client