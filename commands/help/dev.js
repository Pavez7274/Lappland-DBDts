const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuDev_]==true;]
$onlyIf[$interactionValues==HelpMenuDev_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]


$updateInteraction
$title[1;Help Menu >> Developers]
$thumbnail[1;$authorAvatar]
$addField[1;Lead developer;<@!$pavez[id]>]
$addField[1;Plugin Builder;<@!$yuka[id]>]
$addField[1;Maintainer;<@!$guillermo[id]>]
$addField[1;Would you like to work for Lappland?;[click here!\\](https://forms.gle/ewx2iDGEiNDRPDdD8)]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption