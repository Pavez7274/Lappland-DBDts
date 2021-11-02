const RemoveWelcomeCmd = [
	{
		type: "basicCommand",
		name: "disable-welcome",
		aliases: ["disablewelcome", "disablewlc", "dwlc"],
		code: `
$ignoreCode[No works]

$reply[$messageID;false]
$onlyIf[$hasPerm[$guildID;$authorID;managechannels]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Channels\` permission to use this command]
$color[1;001]
]
$onlyIf[$db[list;welcome_channel_$guildID]!=;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;There are no records in the database about the welcome system on this server, if you think it's a bug/error, you can contact a Lead developer using DM [Direct Message\\]]
$color[1;001]
]

$title[1;Welcome system]
$thumbnail[1;$authorAvatar]
$description[1;Welcome messages will no longer be sent]
$color[1;001]
$db[delete;welcome_channel_$guildID]
		`
	},
	{
		type: "basicCommand",
		name: "disable-leave",
		aliases: ["disableleave", "disablelav", "dlav"],
		code: `
$reply[$messageID;false]
$onlyIf[$hasPerm[$guildID;$authorID;managechannels]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Channels\` permission to use this command]
$color[1;001]
]
$onlyIf[$db[list;welcome_channel_$guildID]!=;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;There are no records in the database about the goodbye system on this server, if you think it's a bug/error, you can contact a Lead developer using DM [Direct Message\\]]
$color[1;001]
]

$title[1;Welcome system]
$thumbnail[1;$authorAvatar]
$description[1;Goodbye messages will no longer be sent]
$color[1;001]
$db[delete;welcome_channel_$guildID]
		`
	}
]

module.exports = RemoveWelcomeCmd