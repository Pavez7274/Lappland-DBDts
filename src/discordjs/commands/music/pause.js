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

		if (!d.queue) return d.message.reply(d.errors.queue)

		try {
			d.queue.pause()
			return d.message.reply('Songs are paused')
		} catch {
			return d.message.reply('Can\'t pause the queue')
		}
	}
}