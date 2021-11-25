module.exports = {
	name: "skip",
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Skip',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??skip
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
					description: 'Right now there are no songs in the queue!',
					color: '#001'
				}
			]
		})
		try {
			const song = queue.skip()
			d.message.reply({
				embeds: [
					{
						title: 'Skipped',
						thumbnail: { url: song.thumbnail },
						description: `Playing now: \n[${queue.songs[1].name}](${queue.songs[1].url})`,
						color: '#001'
					}
				]
			})
		} catch (e) {
			d.message.reply(String(e))
		}
	}
}