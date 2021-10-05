const PatCmd = [
	{
		type: "basicCommand",
		name: "pat",
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
$title[1;Error >> user not found]
$thumbnail[1;$authorAvatar]
$description[1;The user could not be found, check that you have put everything correctly]
$color[0;001]
]

$title[1;$nickname[$guildID;$authorID] patting $nickname[$guildID;$mentioned[1]]]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;pat]]
$footer[1;From nekos.life]
$color[1;001]
		`
	}
]

module.exports = PatCmd