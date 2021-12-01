const SetMuteRole = [
	{
		type: 'basicCommand',
		name: 'set-mute-role',
		aliases: ['setmuterole', 'mute-role', 'muterole', 'set-mute', 'setmute'],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Mute >> Set Role]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??set-mute-role <role>
\`\`\`
**fields**
role: snowflake, mention, name]
$color[1;001]
]

$onlyIf[$hasPerm[$guildID;$authorID;manageroles]==true;
$title[1;Error >> Required Permissions]
$thumbnail[1;$authorAvatar]
$description[1;\`\`\`
MANAGE_ROLES\`\`\`]
$color[1;001]
]

$onlyIf[$message!=disable;
$onlyIf[$db[get;mute_role_$guildID;none]!=none;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar]
$description[1;There is no role in the database]
$color[1;001]
]

$title[1;Mute >> Disable]
$thumbnail[1;$authorAvatar]
$description[1;There is no longer a role to mute]
$color[1;001]
$db[delete;mute_role_$guildID]
]

$onlyIf[$message!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [role\\] is empty]
$color[1;001]
]

$let[role;$findRole[$guildID;$message]]
$onlyIf[$get[role]!=;
$title[1;Error >> Role >> Not Found]
$thumbnail[1;$authorAvatar]
$description[1;This role could not be found, please verify that you typed everything correctly]
$color[1;001]
]

$title[1;Mute >> Set Role]
$thumbnail[1;$authorAvatar]
$description[1;<@&$get[role]> was configured to mute members
*remember to remove the write permissions to the role [<@&$get[role]>\\]*]
$color[1;001]
$db[set;mute_role_$guildID;$get[role]]
		`
	}
]

module.exports = SetMuteRole