const RebootCmd = [
	{
		type: "basicCommand", 
		name: "reboot", 
		aliases: ["rt"], 
		code: `
$callFunction[devs]

$reply[$messageID;false]
Rebooting
`
	}
]  

module.exports = RebootCmd 