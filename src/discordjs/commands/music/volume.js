module.exports = {
	name: 'volume',
	run: (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Volume',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??volume [new]
\`\`\`
**fields**
new: number

**returns**
volume`,
					color: '#001'
				}
			]
		})

		if (!d.queue) return d.message.reply(d.errors.queue)

		if (d.args[0]) {
			const newVolume = parseInt(d.args[0])
			if (isNaN(newVolume)) return d.sendError('`Field 1` [new] must be a number', 'NaN')
			if (newVolume > 200) return d.sendError('`Field 1` [new] cannot be greater than 200%')
			if (newVolume < 10) return d.sendError('`Field 1` [new] cannot be less than 10%')

			d.queue.setVolume(newVolume)
			d.message.reply(`The volume is now ${newVolume}%`)
		} else {
			d.message.reply(`The current volume is ${d.queue.volume}%`)
		}
	}
}