const NewAvatarCmd = [
	{
		type: "basicCommand",
		name: "new-avatar",
		aliases: ["new-icon", "newavatar", "newicon", "gen-avatar", "gen-icon", "genavatar", "genicon"],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> New-avatar]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??new-avatar
\`\`\`
**returns**
Image]
$color[1;001]
]
$image[1;$nekos[sfw;avatar]]
$footer[1;From nekos.life]
$color[1;001]

$addActionRow
$addButton[newAvatar;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==newAvatar]
$updateInteraction

$image[1;$nekos[sfw;avatar]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newAvatar;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==delRows]
$deleteMessageRows[$channelID;$messageID]
		`
	}
]

module.exports = NewAvatarCmd