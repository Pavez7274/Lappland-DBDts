const WaifuCmd = [
	{
		type: "basicCommand",
		name: "waifu",
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Waifu]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??waifu
\`\`\`
**returns**
Image]
$color[1;001]
]

$title[1;Random waifu!!]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;waifu]]
$footer[1;From nekos.life]
$color[1;001]

$addActionRow
$addButton[newWaifu_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$includes[$interactionID;newWaifu_]==true;]
$onlyIf[$interactionID==newWaifu_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this button]
$color[1;001]
]
$updateInteraction

$title[1;Random waifu!!]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;waifu]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWaifu_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	}
]

module.exports = WaifuCmd