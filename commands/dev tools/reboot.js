const RebootCmd = [
	{
		type: "basicCommand", 
		name: "reboot", 
		aliases: ["rt"], 
		code: `
$callFunction[devs]

$let[ch;$channelID]
$let[msj;$sendReply[$get[ch];$messageID;Rebooting;false;true]]

$if[$message!=;$let[reason;$message];$let[reason;No reason was given]]
$console[|--------------[DEBUG\\]--------------|
| Action: Reboot
| Executed by: $userTag - $authorID
| Reason: > $get[reason] <
| Stamp: $dateNow
|-----------------------------------|;debug]
$setTimeout[2s;$deleteMessage[$get[ch];$get[msj]]
$reboot]
`
	}
]  

module.exports = RebootCmd 