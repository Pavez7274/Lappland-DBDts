module.exports = {
	name: 'search',
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Search',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??search <song>
\`\`\`
**fields**
song: query

**returns**
Information`,
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

		const songs = await d.client.distube.search(d.stringArgs)

		if (!songs) return d.message.reply('No song found')

		return d.message.reply({
			embeds: [
				{
					title: 'Search',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: songs.map(r => `[${r.name}](${r.url})`).join('\n'),
					color: '#001'
				}
			]
		})
	}
}