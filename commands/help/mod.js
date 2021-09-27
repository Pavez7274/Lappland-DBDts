const ModOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuMod;]
$updateInteraction
$title[1;Help Menu >> Mod]
$addField[1;Ban;Permanently kick a member
\`\`\`
??ban <user> [reason\\]
\`\`\`;yes]
$addField[1;Kick;Kick a member from the server
\`\`\`
??kick <user> [reason\\]
\`\`\`;yes]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	},
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues!=HelpMenuMod;]
$onlyIf[$interactionValues!=HelpMenuIndex;]
$onlyIf[$interactionValues!=HelpMenuDev;]
$onlyIf[$interactionValues!=HelpMenuOth;]
$ephemeral
This section is not finished yet
		`
	}
]

module.exports = ModOption