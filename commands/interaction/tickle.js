const TickleCmd = [
	{
		type: "basicCommand",
		name: "tickle",
		code: `
$reply[$messageID;false]
$if[$message!=;
$let[x;$findUser[$message]]
;
$let[x;nomention]
]
$onlyIf[$get[x]!=nomention;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;Mention the member you want to interact with]
$color[1;001]
]
$onlyIf[$get[x]!=undefined;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user could not be found]
$color[1;001]
]
$onlyIf[$get[x]!=$authorID;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You can't interact with yourself!]
$color[1;001]
]
$onlyIf[$get[x]!=$clientID;...]
$onlyIf[$memberExists[$guildID;$get[x]]!=false;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;The user [<@!$get[x]>\\] is not part of the server]
$color[1;001]
]

$title[1;$nickname[$guildID;$authorID] tries to make $nickname[$guildID;$get[x]] laugh!]
$image[1;$nekos[sfw;tickle]]
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = TickleCmd