const WaifuCmd = [
	{
		type: "basicCommand",
		name: "waifu",
		code: `
$reply[$messageID;false]

$title[1;Random waifu!!]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;waifu]]
$footer[1;From nekos.life]
$color[1;001]

$addActionRow
$addButton[newWaifu;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==newWaifu]
$updateInteraction

$title[1;Random waifu!!]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;waifu]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWaifu;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	}
]

module.exports = WaifuCmd