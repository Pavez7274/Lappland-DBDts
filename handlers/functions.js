module.exports = (client) => {

	client.createCustomFunction({
		name: "devs",
		code: `
$onlyForIDs[$pavez[id];$yuka[id];$guillermo[id];$morgan[id];660970791202062381;
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;This command is for developers only]
$color[1;001]
]
		`
	})


	client.createCustomFunction({
  		name: "HelpMenu",
  		code: `
$ignoreCode[owo]		  
		
$addActionRow
$addSelectMenu[HelpMenu;Select a category;0;0]
$addSelectMenuOption[Index;Index menu;HelpMenuIndex_$authorID;<:home:890802816459870208>]
$addSelectMenuOption[Moderation;Moderation commands;HelpMenuMod_$authorID;<:config:890802816489254962>]
$addSelectMenuOption[Interaction;Interaction commands;HelpMenuInt_$authorID;<:chat:890802816719929344>]
$addSelectMenuOption[Others;Others commands;HelpMenuOth_$authorID;<:puzle:890802816409546792>]
$addSelectMenuOption[Developers;About the developers;HelpMenuDev_$authorID;<:contact:890804615384272906>]
$addSelectMenuOption[Fields;Information about the fields;HelpMenuFields_$authorID]
		`
	})


	client.createCustomFunction({
		name: "log", 
		code: `
$channelSendMessage[891112346611753010;
$title[1;LOG >> $userTag[$authorID]]
$addField[1;ARGS;\`\`\`js
$djsEval[yes;d.data.args] 
\`\`\`]
$addField[1;MESSAGE;\`\`\`js
$djsEval[yes;d.data.message] 
\`\`\`] 
$addField[1;CHANNEL;\`\`\`js
$djsEval[yes;d.data.mainChannel] 
\`\`\`]
$color[1;001]
;no] 
		`
	})

}