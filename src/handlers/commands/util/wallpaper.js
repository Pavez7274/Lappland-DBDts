const WallpaperCmd = [
	{
		type: "basicCommand",
		name: "wallpaper",
		code: `
$reply[$messageID;false]
$onlyIf[0==1;
$title[1;Error >> Disabled!!]
$thumbnail[1;$authorAvatar]
$description[1;This command was __disabled__ by a developer [<@!$pavez[id]>\\] as it had a chance to show **NSFW wallpapers** without any warning or need for the channel to be *NSFW*]
$footer[1;Repair date: undefined]
$color[1;FF0000]
]

$title[1;Random wallpaper]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;wallpaper]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWall_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$includes[$interactionID;newWall_]==true;]
$onlyIf[$interactionID==newWall_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this button]
$color[1;001]
]
$updateInteraction

$title[1;Random wallpaper]
$thumbnail[1;$authorAvatar]
$image[1;$nekos[sfw;wallpaper]]
$footer[1;From nekos.life]
$color[1;001]
$addActionRow
$addButton[newWall_$authorID;New;DANGER]
$addButton[delRows_$authorID;Select;DANGER]
		`
	}
]

module.exports = WallpaperCmd