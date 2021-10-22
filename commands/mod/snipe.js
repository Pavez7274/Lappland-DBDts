const SnipeCmd = [
	{
		type: "basicCommand",
		name: "snipe",
		code: `
$if[$message!=;
$let[arg;$message]
;
$let[arg;1]
]
$onlyIf[$isNumber[$get[arg]]==true;
$title[1;Error >> NaN]
$thumbnail[1;$authorAvatar]
$description[1;Field 1 [position\\] must be a number]
$color[1;001]
]

$reply[$messageID;false]
$js[false;

	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['type'\\] = data?.value[data?.value?.length - $get[arg]\\]?.type || 'undefined')
	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['content'\\] = data?.value[data?.value?.length - $get[arg]\\]?.content || 'undefined')
	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['author'\\] = data?.value[data?.value?.length - $get[arg]\\]?.author || 'none')

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