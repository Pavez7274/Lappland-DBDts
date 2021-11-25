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
		
		d.client.distube.shuffle(d.message)

	return d.message.reply('The queue was shuffled')
	}
}