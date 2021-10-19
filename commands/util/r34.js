const r34Cmd = [
	{
		type: "basicCommand", 
		name: "r34", 
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> R34]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??r34 <filter>
\`\`\`
**fields**
filter: string

**returns**
Image]
$color[1;001]
]
$onlyIf[$channelNSFW[$channelID]==true;
$title[1;Error >> NSFW]
$thumbnail[1;$authorAvatar]
$description[1;This channel is not NSFW!]
$color[1;001]
]
$let[l;$r34[$message;count]]
$let[x;$r34[$message;url;$random[$get[l]]]]
$onlyIf[$get[x]!=;
$title[1;Error >> Not found!]
$thumbnail[1;$authorAvatar]
$color[1;001]
]

$image[1;$get[x]]
$color[1;001]

$callFunction[log]
`
	}
] 

module.exports = r34Cmd 