const SmugCmd = [
	{
		type: "basicCommand",
		name: "smug",
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Smug]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??smug
\`\`\`

**returns**
Image]
$color[1;001]
]
$title[1;Smug $nickname[$guildID;$authorID]]
$image[1;$nekos[sfw;smug]]
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = SmugCmd