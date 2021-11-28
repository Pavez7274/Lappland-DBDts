module.exports = {
	name: 'autoplay',
	aliases: ['radio', 'auto'],
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Auto Play',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??autoplay
\`\`\`
**returns**
Information`,
					color: '#001'
				}
			]
		})

		if (!d.queue) return d.message.reply(d.errors.queue)

		const ap = d.queue.toggleAutoplay()
		return d.message.reply(ap ? 'Autoplay has been activated' : 'Autoplay has been disabled')
	}
}