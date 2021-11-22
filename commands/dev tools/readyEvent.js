const ReadyCmd = [
	{
		type: 'readyCommand',
		code: `
$js[false;
	console.log('DBD.TS'.red, '- Ready on client', String(d.client.user.tag).blue)

	const cmds = Array.from(d.bot.commands.cache.get('basicCommand'))
	for(const cmd of cmds){
		console.log('loaded'.red, String(cmd[1\\].data.name).blue, \`\n\${cmd[1\\].absolutePath}\`.cyan)
	}

;2]
		`
	}
]

module.exports = ReadyCmd