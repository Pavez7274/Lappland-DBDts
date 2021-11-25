module.exports = {
	name: 'resume',
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Resume',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??resume
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
		
		d.client.distube.resume(queue).catch(() => {
			return d.message.reply('Can\'t resume the queue')
		})
		return d.message.reply('Queue resumed')
	}
}