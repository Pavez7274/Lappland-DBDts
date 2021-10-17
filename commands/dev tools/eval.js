const Eval = [
	// command
	{
		type: "basicCommand",
		name: "eval",
		code: `
$callFunction[devs]
$onlyIf[$includes[$message;\\$clientToken]!=true;
$reply[$messageID;false]
$title[1;Error >> Don't show the token!!]
$thumbnail[1;$authorAvatar]
$description[1;This function is disabled, if you need to see the token do it from [discord.com/developers\\](https://discord.com/developers/applications/890016209007960145/bot)]
$color[1;001]
]
$eval[$message]
		`
	},
	{
		type: "basicCommand",
		name: "djs",
		code: `
$callFunction[devs]
$onlyIf[$includes[$toLowerCase[$message];token]!=true;
$reply[$messageID;false]
$title[1;Error >> Don't show the token!!]
$thumbnail[1;$authorAvatar]
$description[1;To prevent it from being shown to everyone, it was decided that \`eval()\` cannot be executed if the word \`token\` is found]
$color[1;001]
]
$reply[$messageID;false]

$if[$endsWith[$message;--no]==false;
$title[1;Eval >> D.JS]
$thumbnail[1;$authorAvatar]
$addField[1;Input;\`\`\`js
$message
\`\`\`]
$addField[1;Output;\`\`\`js
$js[true;$message]
\`\`\`]
$color[1;001]
;
$js[false;$replaceText[$message;--no;]]
]
		`
	},

	// slash
	{
    type: "slashCommand",
    name: "eval",
		code: `
$callFunction[devs]
$onlyIf[$includes[$message;\\$clientToken]!=true;
$title[1;Error >> Don't show the token!!]
$thumbnail[1;$authorAvatar]
$description[1;This function is disabled, if you need to see the token do it from [discord.com/developers\\](https://discord.com/developers/applications/890016209007960145/bot)]
$color[1;001]
]
$eval[$slashOption[code]]
		`
	}
]

module.exports = Eval