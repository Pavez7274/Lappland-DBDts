const dbd = require("dbd.ts")
const db = require("quick.db")
const client = new dbd.Bot({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	prefix: {
		mentionPrefix: true,
		prefixes: ["lappland ", "..."]
	},
	database: {
		path: `./json.sqlite`
	}
})

// StatusManager
const status = new dbd.StatusManager(client)
status.add({
	name: "Running with dbd.ts",
	presence: "dnd",
})
status.start()

// Events
client.addEvent([
	"onMessage",
	"onInteraction"
])

// Loader
client.commands.load({
  path: "./commands/"
})

// Functions
client.createFunction({
  name: "devs",
  code: `
$onlyForIDs[$botOwnerID;
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;This command is for developers only]
$color[1;001]
]
    `
})
client.createFunction({
	name: "HelpMenu",
	code: `
$addActionRow
$addSelectMenu[HelpMenu;Select a category;0;0]
$addSelectMenuOption[Index;Index menu;HelpMenuIndex;<:home:890802816459870208>]
$addSelectMenuOption[Moderation;Moderation commands;HelpMenuMod;<:config:890802816489254962>]
$addSelectMenuOption[Interaction;Interaction commands;HelpMenuInt;<:chat:890802816719929344>]
$addSelectMenuOption[Others;Others commands;HelpMenuOth;<:puzle:890802816409546792>]
$addSelectMenuOption[Developers;About the developers;HelpMenuDev;<:contact:890804615384272906>]
	`
})
client.createFunction({
	name: "log", 
	code: `
$channelSendMessage[891112346611753010;
$title[1;LOG >> $userTag[$authorID]]
$addField[1;COMMAND;\`\`\`js
$djsEval[yes;d.data.command] 
\`\`\`]
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

// Login
client.login(process.env['token'])

// Slash
client.createSlashCommandData({
  type: "CHAT_INPUT",
  name: "eval",
  description: "Evaluate a code from dbd.ts",
  options: [
		{
    	name: "code",
      description: "Code in dbd.ts that you want to evaluate",
      required: true,
      type: "STRING"
    }
  ]
})


/*               24/7               */
const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
	website: "https://lappland.kaedestudio.ga",
	title: 'Rawr!',
	interval: 2
})