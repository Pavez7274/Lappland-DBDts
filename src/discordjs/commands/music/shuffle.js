module.exports = {
	name: 'shuffle',
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Shuffle',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??shuffle
\`\`\``,
					color: '#001'
				}
			]
		})

		if (!d.queue) return d.message.reply(d.errors.queue)

		d.queue.shuffle(d.message)
		return d.message.reply('The queue was shuffled')
	}
}