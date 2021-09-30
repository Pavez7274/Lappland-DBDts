const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuDev;]
$updateInteraction
$title[1;Help Menu >> Developers]
$addField[1;Lead developer;<@!$botOwnerID>;true]
$addField[1;Plugin Builder/Maintainer;<@!$yukaID>;true]
$addField[1;Maintainer;<@!$guillermoID>;true]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption