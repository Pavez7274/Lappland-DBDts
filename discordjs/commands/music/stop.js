module.exports = {
	name: 'stop',
	aliases: ['disconnect', 'ds', 'leave'],
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Play',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??stop
\`\`\``,
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

		queue.stop()
	}
}