const HugCmd = [
	{
		type: "basicCommand",
		name: "hug",
		code: `
$reply[$messageID;false]
$if[$message!=;
$let[x;$findUser[$message]]
;
$let[x;undefined]
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

$title[1;$nickname[$guildID;$authorID] hugged $nickname[$guildID;$get[x]]]
$image[1;$nekos[sfw;hug]]
$color[1;001]
$callFunction[log]
		`
	},
	{
		type: "basicCommand",
		name: "cuddle",
		code: `
$reply[$messageID;false]
$if[$message!=;
$let[x;$findUser[$message]]
;
$let[x;undefined]
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

$title[1;$nickname[$guildID;$authorID] hugged $nickname[$guildID;$get[x]]]
$image[1;$nekos[sfw;cuddle]]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = HugCmd