module.exports = {
  name: 'js',
  run: async (d) => {
    let evaled = 'undefined'
    let maxData = 0
		if(d.author.id !== '788869971073040454') return

    try{
      evaled = await eval(d.args.join(' '))
    } catch (error){
      return d.message.reply({
        embeds: [
          {
            title: 'Error',
						thumbnail: { url: d.author.displayAvatarURL({ dynamic: true }) },
            description: `\`\`\`bash\n${error.stack}\n\`\`\``,
            color: '#001'
          }
        ]
      })
    }

    if (typeof evaled == 'object') evaled = require('util').inspect(evaled, { depth: maxData })

    d.channel.send(`${evaled}` || 'hecho')
  }
}