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
$addButton[newAvatar_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$includes[$interactionID;newAvatar_]==true;]
$onlyIf[$interactionID==newAvatar_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this button]
$color[1;001]
]
$updateInteraction

$image[1;$nekos[sfw;avatar]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newAvatar_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$includes[$interactionID;delRows_]==true;]
$onlyIf[$interactionID==delRows_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$deleteMessageRows[$channelID;$messageID]
		`
	}
]

module.exports = NewAvatarCmd