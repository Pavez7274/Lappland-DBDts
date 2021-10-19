const BakaCmd = [
	{
		type: "basicCommand",
		name: "baka",
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Baka]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??baka <user>
\`\`\`
**fields**
user: snowflake, mention, usertag, nickname

**returns**
Image]
$color[1;001]
]
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
$onlyIf[$memberExists[$guildID;$get[x]]!=false;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;The user [<@!$get[x]>\\] is not part of the server]
$color[1;001]
]

$title[1;$toUpperCase[$nickname[$guildID;$get[x]]] BAKA!!!]
$image[1;$nekos[sfw;baka]]
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = BakaCmd