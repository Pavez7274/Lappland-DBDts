const WelcomeSetCmd = [
	{
		type: "basicCommand",
		name: "set-welcome",
		aliases: ["setwelcome", "set-wlc", "setwlc"],
		code: `
$reply[$messageID;false]
$onlyIf[$hasPerm[$guildID;$authorID;managechannels]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Channels\` permission to use this command]
$color[1;001]
]
$if[$message!=;
$let[x;$djsEval[true;"$findChannel[$message]"]]
;
$let[x;nomention]
]
$onlyIf[$get[x]!=nomention;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;Mention the channel you want for those who enter the server]
$color[1;001]
]
$onlyIf[$get[x]!=undefined;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The channel [$message\\] could not be found]
$color[1;001]
]

$title[1;Welcome System]
$thumbnail[1;$authorAvatar]
$description[1;Welcome messages will be sent to <#$get[x]>]
$color[1;001]
$db[set;welcome_channel_$guildID;$get[x]]
		`
	},
	{
		type: "basicCommand",
		name: "set-leave",
		aliases: ["setleave", "set-lav", "setlav"],
		code: `
$reply[$messageID;false]
$onlyIf[$hasPerm[$guildID;$authorID;managechannels]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Channels\` permission to use this command]
$color[1;001]
]
$if[$message!=;
$let[x;$djsEval[true;"$findChannel[$message]"]]
;
$let[x;nomention]
]
$onlyIf[$get[x]!=nomention;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;Mention the channel you want for those who left the server]
$color[1;001]
]
$onlyIf[$get[x]!=undefined;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The channel [$message\\] could not be found]
$color[1;001]
]

$title[1;Welcome System]
$thumbnail[1;$authorAvatar]
$description[1;Goodbye messages will be sent to <#$get[x]>]
$color[1;001]
$db[set;leave_channel_$guildID;$get[x]]
		`
	}
]

module.exports = WelcomeSetCmd