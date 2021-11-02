const AvatarCmd = [
	{
		type: "basicCommand",
		name: "avatar",
		aliases: ["icon"],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Avatar]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??avatar [user\\]
\`\`\`
**fields**
user: snowflake, mention, usertag, nickname

**returns**
Image]
$color[1;001]
]

$if[$message!=;
$let[x;$findUser[$message;false]]
;
$let[x;$authorID]
]
$onlyIf[$get[x]!=;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user [$message\\] could not be found]
$color[1;001]
]

$ignoreCode[test]
$title[1;$userTag[$get[x]] icon]
$image[1;$userAvatar[$get[x]]]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = AvatarCmd