const OtherOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuOth_]==true;]
$onlyIf[$interactionValues==HelpMenuOth_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$updateInteraction
$title[1;Help Menu >> Others]
$thumbnail[1;$authorAvatar]
$addField[1;Avatar;Displays a user icon
\`\`\`xml
??avatar [user\\]
\`\`\`]
$addField[1;R34;Search NSFW images from Rule34
\`\`\`xml
??r34 <filter>
\`\`\`]
$addField[1;AFK;Make the bot send a message when you are mentioned
\`\`\`xml
??afk [reason\\]
\`\`\`]
$addField[1;Remind;Reminds you of something after a certain time
\`\`\`xml
??remind <time> <reminder>
\`\`\`]
$addField[1;New-avatar;Returns a random avatar from nekos.life
\`\`\`xml
??new-avatar
\`\`\`]
$addField[1;Wallpaper;Return a wallpaper from nekos.life
\`\`\`xml
??wallpaper
\`\`\`]
$addField[1;Banner;Returns the user's banner or accent color
\`\`\`xml
??banner <user>
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = OtherOption