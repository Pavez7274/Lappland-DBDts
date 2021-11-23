module.exports = {
	name: 'play',
	aliases: ['p'],
	run: async (d) => {
		if(!d.author.id == '788869971073040454') return;
		const song = await d.client.distube.search(d.args.join(' '))
		d.client.distube.playVoiceChannel(d.member.voice.channel, song[0].name, { textChannel: d.channel, member: d.member })

		return d.message.reply({
			embeds: [
				{
					title: 'Track added',
					description: `added by <@!${d.author.id}>
Search: **${d.args.join(' ')}**
Found: **[${song[0].name}](${song[0].url})**
Type: **${song[0].type}**
Duration: **${song[0].formattedDuration}**`,
					color: '#001'
				}
			]
		})
	}
}