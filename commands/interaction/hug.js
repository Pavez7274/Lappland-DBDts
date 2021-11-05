const HugCmd = [
	{
		type: "basicCommand",
		name: "hug",
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Hug]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??hug <user>
\`\`\`
**fields**
user: snowflake, mention, usertag, nickname

**returns**
Image]
$color[1;001]
]
$if[$message!=;
$let[x;$findMember[$guildID;$message]]
;
$let[x;nomention]
]
$onlyIf[$get[x]!=nomention;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;Mention the member you want to interact with]
$color[1;001]
]
$onlyIf[$get[x]!=;
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
$footer[1;From nekos.life]
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
$let[x;$findMember[$guildID;$message]]
;
$let[x;nomention]
]
$onlyIf[$get[x]!=nomention;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;Mention the member you want to interact with]
$color[1;001]
]
$onlyIf[$get[x]!=;
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
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = HugCmd