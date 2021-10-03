const WallpaperCmd = [
	{
		type: "basicCommand",
		name: "wallpaper",
		code: `
$reply[$messageID;false]

$title[1;Random wallpaper]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;wallpaper]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWall;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==newWall]
$updateInteraction

$title[1;Random wallpaper]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;wallpaper]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWall;New;DANGER]
$addButton[delRows;Select;DANGER]
		`
	}
]

module.exports = WallpaperCmd