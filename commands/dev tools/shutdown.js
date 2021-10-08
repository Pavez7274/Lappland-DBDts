const ShutdownCmd = [
	{
		type: "basicCommand",
		name: "shutdown",
		aliases: ["shut", "down", "offbot"],
		code: `
$callFunction[devs]
$if[$message!=;$let[reason;$message];$let[reason;No reason was given]]
$console[|--------------[DEBUG\\]--------------|
| Action: Shutdown
| Executed by: $userTag - $authorID
| Reason: > $get[reason] <
| Stamp: $dateNow
|-----------------------------------|;error]
$shutdown
		`
	}
]

module.exports = ShutdownCmd