const ShutdownCmd = [
	{
		type: "basicCommand",
		name: "shutdown",
		aliases: ["shut", "down", "offbot"],
		code: `
$callFunction[devs]
$console[$userTag[$authorID] has forced a total shutdown of the processes;error;DEBUG]
$shutdown
		`
	}
]

module.exports = ShutdownCmd