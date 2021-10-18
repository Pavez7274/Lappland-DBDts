const WallpaperCmd = [
	{
		type: "basicCommand",
		name: "wallpaper",
		code: `
$onlyIF[0==1;
$title[1;Error >> Disabled!!]
$thumbnail[1;$authorAvatar]
$description[1;This command was __disabled__ by a developer [<@!$pavez[id]>\\] as it had a chance to show **NSFW wallpapers** without any warning or need for the channel to be *NSFW*]
$footer[1;Repair date: undefined]
$color[1;FCC]
]
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