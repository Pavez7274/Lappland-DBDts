const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuDev;]
$updateInteraction
$title[1;Help Menu >> Developers]
$thumbnail[1;$authorAvatar]
$addField[1;Lead developer;<@!$botOwnerID>;true]
$addField[1;Plugin Builder/Maintainer;<@!$yukaID>;true]
$addField[1;Maintainer;<@!$guillermoID>;true]
$addField[1;Would you like to work for Lappland?;[click here!\\](https://forms.gle/ewx2iDGEiNDRPDdD8)]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption