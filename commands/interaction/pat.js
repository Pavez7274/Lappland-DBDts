const PatCmd = [
	{
		type: "basicCommand",
		name: "pat",
		code: `
$reply[$messageID;false]
$onlyIf[$findUser[$message]!=$authorID;
$title[1;You can't interact with yourself]
$thumbnail[1;$authorAvatar]
$color[1;001]
]
$onlyIf[$findUser[$message]!=undefined;
$callFunction[user not found]
]

$title[1;$nickname[$guildID;$authorID]]
		`
	}
]

module.exports = PatCmd