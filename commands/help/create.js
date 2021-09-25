const helpCmd = [
	{
		name: "help",
		type: "basicCommand",
		code: `
$reply[$messageID;false]
$title[1;Help Menu]
$addField[1;Information;\`\`\`
Ram: $djsEval[yes;let x = $ram
x.toFixed(2)]    Cpu: $djsEval[yes;let x = $cpu
x.toFixed(2)]    Ping: $ping
\`\`\`]
$addField[1;Categories;\`\`\`
-----------------------------------
      Name       |      Status                 
-----------------|-----------------
  Moderation     |        ✔        
  Interaction    |        ✖              
  Others         |        ✔       
  Developers     |        ✔         
-----------------------------------
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
		`
	},
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuIndex;]
$updateInteraction
$title[1;Help Menu]
$addField[1;Information;\`\`\`
Ram: $djsEval[yes;let x = $ram
x.toFixed(2)]    Cpu: $djsEval[yes;let x = $cpu
x.toFixed(2)]    Ping: $ping
\`\`\`]
$addField[1;Categories;\`\`\`
-----------------------------------
      Name       |      Status                 
-----------------|-----------------
  Moderation     |        ✔        
  Interaction    |        ✖              
  Others         |        ✔       
  Developers     |        ✔         
-----------------------------------
\`\`\`] 
$color[1;001]
$callFunction[HelpMenu]
		`
	}
]

module.exports = helpCmd