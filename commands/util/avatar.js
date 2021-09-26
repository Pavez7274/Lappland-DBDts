const AvatarCmd = [
	{
		type: "basicCommand",
		name: "avatar",
		code: `
$reply[$messageID;false]
$if[$message!=;
$let[x;$findUser[$message]]
;
$let[x;$authorID]
]
$onlyIf[$get[x]!=undefined;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user could not be found]
$color[1;001]
]

$title[1;$userTag[$get[x]] icon]
$image[1;$userAvatar[$get[x]]]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = AvatarCmd