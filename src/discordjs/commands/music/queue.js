module.exports = {
	name: 'queue',
	aliases: ['q'],
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Queue',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??queue
\`\`\`
**returns**
Information`,
					color: '#001'
				}
			]
		})

		const queue = d.client.distube.getQueue(d.message)
		if (!queue) return d.message.reply({
			embeds: [
				{
					title: 'Error',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: 'There is nothing playing!',
					color: '#001'
				}
			]
		})

		const q = queue.songs.map((song, i) => `${i === 0 ? 'Playing:' : `**${i}.**`} [${song.name}](${song.url}) - **${song.formattedDuration}**`).join('\n')
		try {
			d.message.reply({
				embeds: [
					{
						title: 'Queue',
						thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
						description: q,
						color: '#001'
					}
				]
			})
		} catch (e) {
			console.log(e.message)
		}
	}
}