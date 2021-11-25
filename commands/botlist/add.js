const AddBotCmd = [
	{
		type: "basicCommand",
		name: "add-bot",
		aliases: ["add.bot", "addbot"],
		code: `
$reply[$messageID;false]

$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Edit-Bot]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`xml
??edit-bot <snowflake> ?? <prefix> ?? <description>
\`\`\`
**fields**
snowflake: id, mention, usertag, nickname
prefix: string
description: string

**returns**
Information]
$color[1;001]
]

$onlyIf[$message!=;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;Invalid use in fields
\`\`\`xml
??add-bot <snowflake> ?? <prefix> ?? <description>
\`\`\`]
$color[1;001]
]

$let[client;$js[true;d.fields[0\\]]]
$let[prefix;$js[true;d.fields[1\\]]]
$let[description;$js[true;d.fields[2\\]]]

$onlyIf[$get[client]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [snowflake\\] is empty]
$color[1;001]
]

$onlyIf[$get[prefix]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 2\` [prefix\\] is empty]
$color[1;001]
]

$onlyIf[$get[description]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 3\` [description\\] is empty]
$color[1;001]
]

$let[x;$findUser[$get[client];false]]
$onlyIf[$get[x]!=;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The client [$get[client]\\] could not be found]
$color[1;001]
]

$onlyIf[$isBot[$get[x]]==true;
$title[1;Error >> Not a bot]
$thumbnail[1;$authorAvatar]
$description[1;The **client** [<@!$get[x]>\\] is not a **bot**!!]
$color[1;001]
]

$onlyIf[$and[$db[get;botlist_bot_$get[x]]==null;$db[get;botlist_waiting_$get[x]]==null]==true;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar] 
$description[1;<@!$get[x]> is already part of the database, either standby or accepted]
$color[1;001]
]

sent!
$createObject[{}]
$addObjectProperty[snowflake;$get[x]]
$addObjectProperty[username;$username[$get[x]]]
$addObjectProperty[prefix;$get[prefix]]
$addObjectProperty[avatar;$userAvatar[$get[x]]]
$addObjectProperty[votes;0]
$addObjectProperty[library;undefined]
$addObjectProperty[description;$get[description]]

$js[false;

d.object.commands = [\\]
d.object.tags = [\\]
d.object.developers = [ d.author.id \\]

db.set('main', 'botlist_waiting_' + d.object.snowflak, d.object)

;30]

$ignoreCode[
$channelSendMessage[885773205749501992;<@!$authorID>
$title[1;$userTag[$get[x]] | Pending bot]
$thumbnail[1;$userAvatar[$get[x]]]
$description[1;**Snowflake:** $get[x]
**Prefix:** $get[prefix]
**Developer:** <@!$authorID> ||$authorID||
**Description:**
\`\`\`js
$get[description]
\`\`\`

$hyperlink[invite;https://discord.com/oauth2/authorize?client_id=$get[x]&scope=bot%20applications.commands&permissions=2147483647]]
$color[1;001]
;false]
] 
		`
	}
]

module.exports = AddBotCmd