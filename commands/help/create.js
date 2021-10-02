const helpCmd = [
	{
		name: "help",
		type: "basicCommand",
		code: `
$reply[$messageID;false]
$title[1;Help Menu]
$thumbnail[1;$authorAvatar]
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
\`\`\`

[Open Source!\\](https://github.com/Pavez7274/Lappland)]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	},
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$interactionValues==HelpMenuIndex;]
$updateInteraction
$title[1;Help Menu]
$thumbnail[1;$authorAvatar]
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
\`\`\`

[Open Source!\\](https://github.com/Pavez7274/Lappland)] 
$color[1;001]
$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = helpCmd