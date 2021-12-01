module.exports = {
	name: 'play',
	aliases: ['p'],
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Play',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??play <song>
\`\`\`
**fields**
song: query, url (spotify | yt | ytm)

**returns**
Information`,
					color: '#001'
				}
			]
		})
		if (!d.member.voice.channel) return d.message.reply({
			embeds: [
				{
					title: 'Error >> Voice',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: 'You must be in a voice channel!',
					color: '#001'
				}
			]
		})
		if (!d.stringArgs) return d.message.reply({
			embeds: [
				{
					title: 'Error >> Field >> Empty',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: '`Field 1` [query] is empty'
				}
			]
		})
		d.distube.play(d.message, d.stringArgs)
	}
}