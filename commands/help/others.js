const OtherOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuOth;]
$updateInteraction
$title[1;Help Menu >> Others]
$thumbnail[1;$authorAvatar]
$addField[1;Avatar;Displays a user icon
\`\`\`xml
??avatar [user\\]
\`\`\`;yes]
$addField[1;R34;Search NSFW images from Rule34
\`\`\`xml
??r34 <filter>
\`\`\`;yes]
$addField[1;Remind;Reminds you of something after a certain time
\`\`\`xml
??remind <time> <reminder>
\`\`\`]
$footer[1;Developed by Kaede Studio]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = OtherOption