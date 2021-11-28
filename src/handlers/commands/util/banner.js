const BannerCmd = [
	{
		type: "basicCommand",
		name: "banner",
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Banner]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??banner [user\\]
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
$onlyIf[$userBanner[$get[x]]!=;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$if[$userAccentColor[$get[x]]!=;
$description[1;The user does not have a banner, but this is his color $userAccentColor[$get[x]]];
$description[1;The user does not have a banner]
]
$color[1;001]
]

$title[1;$userTag[$get[x]] banner]
$image[1;$userBanner[$get[x];1024;true]]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = BannerCmd