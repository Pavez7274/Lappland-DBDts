const RebootCmd = [
	{
		type: "basicCommand", 
		name: "reboot", 
		aliases: ["rt"], 
		code: `
$callFunction[devs]

$let[ch;$channelID]
$let[msj;$sendReply[$get[ch];$messageID;Rebooting;false;true]]

$setTimeout[2s;$deleteMessage[$get[ch];$get[msj]]
$reboot]
`
	}
]  

module.exports = RebootCmd 