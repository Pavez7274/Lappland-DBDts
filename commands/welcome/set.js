const WelcomeSetCmd = [
	{
		type: "basicCommand",
		name: "set-welcome",
		code: `
$reply[$messageID;false]
$onlyIf[$hasPerm[$guildID;$authorID;managechannels]==true;
$title[1;Error >> Permissions]
$thumbnail[1;$authorAvatar]
$description[1;You need \`Manage_Channels\` permission to use this command]
$color[1;001]
]

		`
	}
]

module.exports = WelcomeSetCmd