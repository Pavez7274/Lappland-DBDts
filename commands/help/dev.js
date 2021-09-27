const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuDev;]
$updateInteraction
$title[1;Help Menu >> Developers]
$addField[1;Lead devs;$userTag[$botOwnerID];true]
$addField[1;Plugin Builder/Maintainer;$userTag[$yukaID];true]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption