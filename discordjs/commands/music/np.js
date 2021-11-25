module.exports = {
	name: 'now-playing',
	aliases: ['nowplaying', 'np'],
	run: async (d) => {
		if (d.lastArg === '--help') return d.message.reply({
			embeds: [
				{
					title: 'Help >> Now Playing',
					thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
					description: `**usage**
\`\`\`xml
??now-playing
\`\`\`
**returns**
Information`,
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
		const song = queue.songs[0]

		return d.message.reply({
			embeds: [
				{
					title: song.name,
					thumbnail: { url: song.thumbnail },
					description: `**Uploader:** [${song.uploader.name}](${song.uploader.url})
**Duration:** ${song.formattedDuration}
**Views:** ${song.views}
**Added by:** <@!${song.user.id}>
**Likes and dislikes:** ${song.likes} | ${song.dislikes}`,
					color: '#001'
				}
			]
		})
	}
}