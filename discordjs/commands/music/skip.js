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

		if (!d.queue) return d.message.reply(d.errors.queue)
		try {
			const song = await d.queue.skip()
			d.message.reply({
				embeds: [
					{
						title: 'Skipped',
						thumbnail: { url: song.thumbnail },
						description: `Playing now: \n[${song.name}](${song.url})`,
						color: '#001'
					}
				]
			})
		} catch (e) {
			d.message.reply(String(e))
		}
	}
}