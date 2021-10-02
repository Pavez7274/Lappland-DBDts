const RebootCmd = [
	{
		type: "basicCommand", 
		name: "reboot", 
		aliases: ["rt"], 
		code: `
$callFunction[devs]

$reply[$messageID;false]
Rebooting
$setTimeout[2s;$reboot]
`
	}
]  

module.exports = RebootCmd 