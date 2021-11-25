module.exports = {
	name: 'pause',
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Pause',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??pause
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
		
		d.client.distube.pause(queue).catch(() => {
			return d.message.reply('Can\'t pause the queue')
		})
		return d.message.reply('Songs are paused')
	}
}