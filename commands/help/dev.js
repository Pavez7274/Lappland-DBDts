const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuDev;]
$updateInteraction
$title[1;Help Menu >> Developers]
$addField[1;Main;$userTag[$botOwnerID]]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
		`
	}
]

module.exports = DevsOption