const r34Cmd = [
	{
		type: "basicCommand", 
		name: "r34", 
		code: `
$reply[$messageID;false]
$onlyIf[$channelNSFW[$channelID]==true;
$title[1;Error >> NSFW]
$thumbnail[1;$authorAvatar]
$description[1;This channel is not NSFW!]
$color[1;001]
]
$let[x;$r34[$message;url;0]]
$onlyIf[$get[x]!=;
$title[1;Error >> Not found!]
$thumbnail[1;$authorAvatar]
$color[1;001]
]

$image[1;$get[x]]
$color[1;001]
`
	}
] 

module.exports = r34Cmd 