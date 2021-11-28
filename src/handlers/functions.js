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
$addActionRow
$addSelectMenu[HelpMenu;Select a category;0;0]
$addSelectMenuOption[Index;Index menu;HelpMenuIndex_$authorID;<:lappy:902410135958343680>]
$addSelectMenuOption[Moderation;Moderation commands;HelpMenuMod_$authorID;<:lappyfacha:902410117826351154>]
$addSelectMenuOption[Interaction;Interaction commands;HelpMenuInt_$authorID;<:lappyAaa:913295794151501864>]
$addSelectMenuOption[Music;Music commands;HelpMenuMusic_$authorID;<:lappyfeli:913295978205966338>]
$addSelectMenuOption[Others;Others commands;HelpMenuOth_$authorID;<:lappyfood:913295896899383306>]
$addSelectMenuOption[Developers;About the developers;HelpMenuDev_$authorID;<:lappyAaa:913295794151501864>]
$addSelectMenuOption[Fields;Information about the fields;HelpMenuFields_$authorID;<:lappy_:902410151766667275>]
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