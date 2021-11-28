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

		if (!d.queue) return d.message.reply(d.errors.queue)
		d.queue.stop()
	}
}