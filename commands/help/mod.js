const ModOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuMod_]==true;]
$onlyIf[$interactionValues==HelpMenuMod_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$updateInteraction
$title[1;Help Menu >> Mod]
$thumbnail[1;$authorAvatar]
$addField[1;Ban;Permanently kick a member
\`\`\`xm
??ban <user> [reason\\]
\`\`\`]
$addField[1;Kick;Kick a member from the server
\`\`\`xml
??kick <user> [reason\\]
\`\`\`]
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