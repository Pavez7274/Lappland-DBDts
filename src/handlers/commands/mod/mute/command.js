const Mute = [
	{
		type: 'basicCommand',
		name: 'mute',
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Mute]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??mute <user> [time\\] [reason\\]
\`\`\`
**fields**
user: snowflake, mention, username, nickname
time: number
reason: string]
$color[1;001]
]

$onlyIf[$hasPerm[$guildID;$authorID;manageroles]==true;
$title[1;Error >> Required Permissions]
$thumbnail[1;$authorAvatar]
$description[1;\`\`\`
MANAGE_ROLES\`\`\`]
$color[1;001]
]

$onlyIf[$db[get;mute_role_$guildID;none]!=none;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar]
$description[1;There is no role in the database]
$color[1;001]
]

$onlyIf[$message!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [user\\] is empty]
$color[1;001]
]
$let[user;$findMember[$guildID;$message[1];false]]

$onlyIf[$get[user]!=;
$title[1;Error >> User >> Not Found]
$thumbnail[1;$authorAvatar]
$description[1;This user could not be found, please verify that you typed everything correctly]
$color[1;001]
]

$if[$message[3]!=;$let[reason;$messageSlice[2]];$let[reason;No reason was given]]
$let[time;undefined]

$if[$message[2]!=;
$if[$message[2]==undefined;
$let[time;undefined]
;
$onlyIf[$and[$parseTime[$message[2]]!=0;$parseTime[$message[2]]>0]==true;
$title[1;Error >> Field]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` must be of type time (or undefined)

ex: 24h | undefined]
$color[1;001]]
$createObject[{}]
$addObjectProperty[guild;$guildID]
$addObjectProperty[user;$get[user]]
$addObjectProperty[name;unmute]

$let[time;$parseTime[$message[2]]]
$setPersistentTimeout[$get[time];$getObject]
]]

$giveRole[$guildID;$get[user];$db[get;mute_role_$guildID];Mute: $get[reason]]
$title[1;Mute >> Add]
$thumbnail[1;$authorAvatar]
$description[1;**<@!$authorID> has silenced <@!$get[user]>**
Reason: $get[reason]
Time: $parseDuration[$get[time];3]]
$color[1;001]
		`
	},
	{
		type: 'timeoutCommand',
		code: `
$onlyIf[$get[name]==unmute;]

$takeRole[$get[guild];$get[user];$db[get;mute_role_$get[guild]];unmute]
		`
	}
]

module.exports = Mute