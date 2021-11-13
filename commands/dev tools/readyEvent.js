const ReadyCmd = [
	{
		type: 'readyCommand', 
		code: `
$js[false;
console.log('DBD.TS'.red, '- Ready on client', String(d.client.user.tag).blue)
;2]
		`
	}
]

module.exports = ReadyCmd