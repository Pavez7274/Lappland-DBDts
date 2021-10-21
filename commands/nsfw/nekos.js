const NekoNsfw = [
	{
		type: "basicCommand",
		name: "neko-lewd",
		aliases: ["lewd-neko", "lewdneko", "nekolewd"],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Lewd-neko]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??lewd-neko
\`\`\`
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
$title[1;Lewd neko]
$image[1;$nekos[nsfw;neko]]
$footer[1;From nekos.life]
$color[1;001]
		`
	}
]

module.exports = NekoNsfw