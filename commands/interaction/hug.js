const HugCmd = [
	{
		type: "basicCommand",
		name: "hug",
		code: `
$reply[$messageID;false]
$onlyIf[$message!=;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;You must mention the user with whom you want to interact]
$color[1;001]
]
$onlyIf[$mentioned[1]!=$authorID;
$title[1;You can't interact with yourself]
$thumbnail[1;$authorAvatar]
$color[1;001]
]
$onlyIf[$mentioned[1]!=;
$callFunction[user not found]
]

$title[1;$nickname[$guildID;$authorID] hugged $nickname[$guildID;$mentioned[1]]]
$thumbnail[1;$authorID]
$image[1;$nekos[hug]]
$footer[1;From nekos.life]
$color[1;001]
		`
	}
]

module.exports = HugCmd