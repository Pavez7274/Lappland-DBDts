const KissCmd = [
	{
		type: "basicCommand",
		name: "kiss",
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
$onlyIf[$get[x]!=$clientID;
$if[$random[100]==100;
$nekos[sfw;OwOify;Hey h-hey hey you c-can't do that!!]
;
Hey h-hey hey you c-can't do that!!
]
]

$title[1;$nickname[$guildID;$authorID] kissed $nickname[$guildID;$get[x]]♡♡]
$image[1;$nekos[sfw;kiss]]
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = KissCmd