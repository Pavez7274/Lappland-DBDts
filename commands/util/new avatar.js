const NewAvatarCmd = [
	{
		type: "basicCommand",
		name: "new-avatar",
		aliases: ["new-icon", "newavatar", "newicon", "gen-avatar", "gen-icon", "genavatar", "genicon"],
		code: `
$reply[$messageID;false]
$image[1;$nekos[avatar]]
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

$image[1;$nekos[avatar]]
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