const helpCmd = [
	{
		name: "help",
		type: "basicCommand",
		code: `
$reply[$messageID;false]
$js[false;
d.keywords.usage = os.loadavg()[0\\]
;0]

$title[1;Help Menu]
$thumbnail[1;$authorAvatar]
$addField[1;Information;\`\`\`
Ram: $djsEval[yes;let x = $ram
x.toFixed(2)]Mb    Cpu: $get[usage]%    Ping: $pingMs
\`\`\`]
$addField[1;Categories;\`\`\`
-----------------------------------
      Name       |      Status                 
-----------------|-----------------
  Moderation     |        ✔        
  Interaction    |        ✔              
  Others         |        ✔       
  Developers     |        ✔   
  Fields         |        ✔
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
$js[false;
d.keywords.usage = os.loadavg()[0\\]
;0]

$updateInteraction
$title[1;Help Menu]
$thumbnail[1;$authorAvatar]
$addField[1;Information;\`\`\`
Ram: $djsEval[yes;let x = $ram
x.toFixed(2)]Mb    Cpu: $get[usage]%    Ping: $pingMs
\`\`\`]
$addField[1;Categories;\`\`\`
-----------------------------------
      Name       |      Status                 
-----------------|-----------------
  Moderation     |        ✔        
  Interaction    |        ✔              
  Others         |        ✔       
  Developers     |        ✔   
  Fields         |        ✔
-----------------------------------
\`\`\`

[Open Source!\\](https://github.com/Pavez7274/Lappland)] 
$color[1;001]
$callFunction[HelpMenu]
$callFunction[log]
		`
	},
  {
    type: 'basicCommand',
    name: 'all-commands',
    aliases: ['allcommands', 'allcmds'],
    code: `
\`\`\`
$js[true;d.allCommands.join(', ');1]
\`\`\`
    `
  }
]

module.exports = helpCmd