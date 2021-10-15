const DevsOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuFields;]
$updateInteraction
$title[1;Help Menu >> Fields]
$thumbnail[1;$authorAvatar]
$description[1;\`\`\`xml
<>    =>  Required
[\\]    =>  Optional
!<>   =>  Required disabled
![\\]   =>  Optional disabled
??   =>  Separator
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = DevsOption