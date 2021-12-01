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
	leaveOnEmpty: true,
	leaveOnFinish: true,
	emptyCooldown: 20,
	nsfw: true
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
	client.prefix = ['??', `<@!${client.user.id}>`, `<@${client.user.id}>`]
	let args = []

	if (message.author.bot) return
	if (message.content.startsWith(client.prefix[0])) {
		args = message.content.slice(client.prefix[0].length).trim().split(/ +/g)
	} else if (message.content.startsWith(client.prefix[1])) {
		args = message.content.slice(client.prefix[1].length).trim().split(/ +/g)
	} else if (message.content.startsWith(client.prefix[2])) {
		args = message.content.slice(client.prefix[2].length).trim().split(/ +/g)
	} else return
	const command = args.shift().toLowerCase()

	const cmd = client.commands.get(command) || client.commands.find(f => f.aliases && f.aliases.includes(command))
	if (!cmd) return

	const data = {
		client: client,
		message: message,
		args: args,
		command: command,
		cmd: cmd,
		queue: client.distube.getQueue(message),
		distube: client.distube,
		channel: message.channel,
		author: message.author,
		member: message.member,
		lastArg: args[args.length - 1],
		stringArgs: args.join(' '),
		errors: {
			queue: {embeds:[{title:'Error',thumbnail:{url:message.author.displayAvatarURL({dynamic:!0})},description:'There is nothing playing!',color:'#001'}]}
		},
		sendError: (desc, t='') => {
			let title='Error'
			if(t)title='Error >> '+t
			message.reply({embeds:[{title:title,thumbnail:{url:message.author.displayAvatarURL({dynamic:!0})},description:desc,color:'#001'}]})
		}
	}
	cmd.run(data)
})

client.distube
	.on('addSong', async (queue, song) => {
		queue.textChannel.send({
			embeds: [
				{
					title: 'Track added',
					thumbnail: { url: song.thumbnail },
					description: `added by ${song.user}
Song: **[${song.name}](${song.url})**
Duration: **${song.formattedDuration}**`,
					color: '#001'
				}
			]
		})
	})
	.on('playSong', (queue, song) => {
		queue.textChannel.send(`Playing \`${song.name}\``).then(x => {
			queue.textChannel.messages.fetch(x.id).then(m => setTimeout(() => m.delete(), 10000))
		})
	})

client.login(process.env['token'])

module.exports = client