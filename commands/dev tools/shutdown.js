const ShutdownCmd = [
	{
		type: "basicCommand",
		name: "shutdown",
		aliases: ["shut", "down", "offbot"],
		code: `
$callFunction[devs]
$console[SHUTDOWN OF THE BOT MADE BY $userTag;bgRed.italic]
$shutdown
		`
	}
]

module.exports = ShutdownCmd