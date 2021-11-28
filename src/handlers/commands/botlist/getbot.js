const GetBotInformation = [
	{
		type: 'basicCommand', 
		name: 'get-bot', 
		aliases: ['getbot', 'view-bot', 'viewbot'], 
		code: `
$reply[$messageID;false]
$let[snowflake;$findUser[$message;false]]

$onlyIf[$get[snowflake]!=;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user [$message\\] could not be found]
$color[1;001]
]
$onlyIf[$isBot[$get[snowflake]]==true;
$title[1;Error >> Not a bot]
$thumbnail[1;$authorAvatar]
$description[1;The **client** [<@!$get[snowflake]>\\] is not a **bot**!!]
$color[1;001]
]

$let[search;$db[get;botlist_bot_$get[snowflake];none]]

$onlyIf[$get[search]!=none;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar]
$description[1;That bot is not in the database or has not yet been accepted]
$color[1;001]
]

$ignoreCode[
	Javascript
]
$js[false;

	d.object = $get[search]

;30]

$title[1;Bot information]
$thumbnail[1;$getObjectProperty[avatar]]
$description[1;**Bot:** <@!$getObjectProperty[snowflake]> ||$getObjectProperty[snowflake]||
\`\`\`js
$getObjectProperty[description]
\`\`\`

**Prefix:** \`$getObjectProperty[prefix]\`
**Library:** $getObjectProperty[library]
**Votes:** $getObjectProperty[votes]
||**devs:** $getObjectProperty[developers]||]
$color[1;001]
		`
	}
]

module.exports = GetBotInformation 