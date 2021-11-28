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

		if (!d.queue) return d.message.reply(d.errors.queue)
		
		try {
			d.queue.resume()
			return d.message.reply('Queue resumed')
		} catch {
			return d.message.reply('Can\'t resume the queue')
		}
	}
}