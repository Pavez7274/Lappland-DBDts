const OtherOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuOth;]
$updateInteraction
$title[1;Help Menu >> Others]
$addField[1;Avatar;Displays a user icon
\`\`\`js
lappland avatar [user\\]
\`\`\`;yes]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = OtherOption