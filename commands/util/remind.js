const RemindCmd = [
	{
		type: "basicCommand",
		name: "remind",
		code: `
$let[ch;$channelID] $let[msg;$messageSlice[1]] $let[author;$authorID]
$setTimeout[$message[1];
$djsEval[no;
let msg = \`$get[msg]
||<@!$get[author]>||\`
d.client.channels.cache.get("$get[ch]").send(msg)
]
]
		`
	}
]

module.exports = RemindCmd