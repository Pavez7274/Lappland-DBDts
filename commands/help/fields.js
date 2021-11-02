const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuFields_]==true;]
$onlyIf[$interactionValues==HelpMenuFields_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$updateInteraction
$title[1;Help Menu >> Fields]
$thumbnail[1;$authorAvatar]
$description[1;\`\`\`xml
<>    =>  Required
[\\]    =>  Optional
!<>   =>  Required disabled
![\\]   =>  Optional disabled
??    =>  Separator
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption