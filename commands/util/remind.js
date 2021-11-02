const RemindCmd = [
	{
		type: "basicCommand",
		name: "remind",
		code: `
$ignoreCode[Works, optimized in v1.5 btw]

$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Remind]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??remind <reminder>
\`\`\`
**fields**
reminder: string

**returns**
Reminder]
$color[1;001]
]
$onlyIf[$and[$parseTime[$message[0]]!=0;$parseTime[$message[0]]>0]==true;
$title[1;Error >> Field]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` must be of type time

ex: 24h]
$color[1;001]
]
$createObject[{}]
$addObjectProperty[name;remind]
$addObjectProperty[author;$authorID]
$addObjectProperty[message;$messageSlice[1]]
$addObjectProperty[messageID;$messageID]
$addObjectProperty[channel;$channelID]
$addObjectProperty[guild;$guildID]
$addObjectProperty[stamp;$getTimestamp]

$setPersistentTimeout[$parseTime[$message[0]];$getObject]

I will remind you later
||on <t:$truncate[$math[($getTimestamp+$parseTime[$message[0]])/1000]]>||
		`
	},
	{
		type: 'timeoutCommand',
		code: `
$onlyIf[$get[name]==remind;]

$sendDM[$get[author];
$title[1;<:lappy:902410135958343680> | Remind]
$thumbnail[1;$userAvatar[$get[author]]]
$description[1;You asked me to remind you of this on <t:$truncate[$math[$get[stamp]/1000]]>
$get[message]

$hyperlink[jump to message;https://discord.com/channels/$get[guild]/$get[channel]/$get[messageID]]]
$color[1;001]
]
		`
	}
]

module.exports = RemindCmd