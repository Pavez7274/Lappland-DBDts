module.exports = {
	name: 'queue',
	aliases: ['q'],
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Queue',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??queue
\`\`\`
**returns**
Information`,
					color: '#001'
				}
			]
		})
		
		if (!d.queue) return d.message.reply(d.errors.queue)

		let rest = 0
		let list = new Array()
		d.queue.songs.map((song, i) => {
			if(i<=10) list.push(`${i === 0 ? 'Playing:' : `**${i}.**`} [${song.name}](${song.url}) - **${song.formattedDuration}**`)
			if(i>10) rest = rest + 1
		})
		let msg
		if(rest==0){
			msg = list.join('\n')
		} else msg = `${list.join('\n')}\n**and ${rest} more ${rest>1 ? 'songs' : 'song'}**`

		try {
			d.message.reply({
				embeds: [
					{
						title: 'Queue',
						thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
						description: msg,
						footer: { text: 'Total duration: '+d.msToTime(eval(d.queue.songs.map(s => s.duration).join('+'))*1000) },
						color: '#001'
					}
				]
			})
		} catch (e) {
			console.log(e.message)
		}
	}
}