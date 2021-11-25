const ModOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuInt_]==true;]
$onlyIf[$interactionValues==HelpMenuInt_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$updateInteraction
$title[1;Help Menu >> Mod]
$thumbnail[1;$authorAvatar]
$addField[1;Pat;Caress a member
\`\`\`xml
??pat <user>
\`\`\`]
$addField[1;Hug;Hug a member
\`\`\`xml
??hug <user>
\`\`\`]
$addField[1;Kiss;Kiss a member
\`\`\`xml
??kiss <user>
\`\`\`]
$addField[1;Baka;Meet asuka, study asuka... be asuka
\`\`\`xml
??baka <user>
\`\`\`]
$addField[1;Poke;Poke/Annoy a member
\`\`\`xml
??poke <user>
\`\`\`]
$addField[1;Slap;Slap your ex!! or a member
\`\`\`xml
??slap <user>
\`\`\`]
$addField[1;Smug;Make a smug face (ew)
\`\`\`xml
??smug
\`\`\`]
$addField[1;Tickle;Tickle a member (until he dies laughing)
\`\`\`xml
??tickle <user>
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = ModOption