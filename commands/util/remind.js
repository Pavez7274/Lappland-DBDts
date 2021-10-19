const RemindCmd = [
	{
		type: "basicCommand",
		name: "remind",
		code: `
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Avatar]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??remind <reminder>
\`\`\`
**fields**
reminder: string

**returns**
Reminder]
$color[1;001]
]
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