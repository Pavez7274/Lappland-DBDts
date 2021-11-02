const ClearCmd = [
	{
		type: "basicCommand", 
		name: "clear", 
		code: `
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Clear]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??clear <amount> ![user\\]
\`\`\`
**fields**
amount: number
user: snowflake, mention, usertag, nickname]
$color[1;001]
]
$onlyIf[$message!=;
$title[1;Error >> Fields]
$thumbnail[1;$authorAvatar]
$description[1;\`\`\`
??clear <amount> ![user\\]
\`\`\`]
$color[1;001]
]
$onlyIf[$hasPerm[$guildID;$authorID;managemessages]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Messages\` permission to use this command]
$color[1;001]
]
$onlyIf[$hasPerm[$guildID;$clientID;managemessages]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;I need \`Manage_Messages\` permissions to use this command]
$color[1;001]
]
$onlyIf[$isNumber[$message[1]]==true;
$title[1;Error >> NaN]
$thumbnail[1;$authorAvatar]
$description[1;Field 1 [amount\\] must be a number]
$color[1;001]
]

$clearMessages[$channelID;$message]
		`
	}
]

module.exports = ClearCmd 