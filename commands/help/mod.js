const ModOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuMod;]
$updateInteraction
$title[1;Help Menu >> Mod]
$thumbnail[1;$authorAvatar]
$addField[1;Ban;Permanently kick a member
\`\`\`xm
??ban <user> [reason\\]
\`\`\`;yes]
$addField[1;Kick;Kick a member from the server
\`\`\`xml
??kick <user> [reason\\]
\`\`\`;yes]
$addField[1;Snipe;Returns the last message deleted/edited
\`\`\`xml
??snipe [position\\] [channel\\]
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = ModOption