const SnipeCmd = [
	{
		type: "basicCommand",
		name: "snipe",
		code: `
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Snipe]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??snipe [position\\] [channel\\]
\`\`\`
**fields**
position: number
channel: snowflake, mention, name

**returns**
Information]
$color[1;001]
]

$if[$message[1]!=;
$let[arg;$message[1]]
;
$let[arg;1]
]
$onlyIf[$isNumber[$get[arg]]==true;
$title[1;Error >> NaN]
$thumbnail[1;$authorAvatar]
$description[1;Field 1 [position\\] must be a number]
$color[1;001]
]
$if[$message[2]!=;
$let[ch;$findChannel[$message[2]]]
;
$let[ch;$channelID]
]
$onlyIf[$get[ch]!=undefined;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The channel [$message[2]\\] could not be found]
$color[1;001]
]
$onlyIf[$js[true;d?.guild?.channels?.cache?.get('$get[ch]')?.type]==GUILD_TEXT;
$title[1;Error >> Channel >> Type]
$thumbnail[1;$authorAvatar]
$description[1;The channel [<#$get[ch]>\\] is not of type text [\`GUILD_TEXT\`\\]]
$color[1;001]
]

$reply[$messageID;false]
$js[false;

	d.db.get("main", "snipe_$get[ch]").then(data => d.keywords['type'\\] = data?.value[data?.value?.length - $get[arg]\\]?.type || 'undefined')
	d.db.get("main", "snipe_$get[ch]").then(data => d.keywords['content'\\] = data?.value[data?.value?.length - $get[arg]\\]?.content || 'undefined')
	d.db.get("main", "snipe_$get[ch]").then(data => d.keywords['author'\\] = data?.value[data?.value?.length - $get[arg]\\]?.author || 'none')

;3]

$onlyIf[$get[author]!=none;
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;There is nothing here yet]
$color[1;001]
]

$title[1;Snipe]
$thumbnail[1;$userAvatar[$get[author]]]
$description[1;**author**
<@!$get[author]>

**content**
$get[content]]
$footer[1;Type: $get[type]]
$color[1;001]
		`
	}
]

module.exports = SnipeCmd