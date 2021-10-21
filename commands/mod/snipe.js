const SnipeCmd = [
	{
		type: "basicCommand",
		name: "snipe",
		code: `
$reply[$messageID;false]
$js[false;

	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['type'\\] = data?.value[data?.value?.length - 1\\]?.type || 'undefined')
	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['content'\\] = data?.value[data?.value?.length - 1\\]?.content || 'undefined')
	d.db.get("main", "snipe_" + d.channel.id).then(data => d.keywords['author'\\] = data?.value[data?.value?.length - 1\\]?.author || 'undefined')

;3]

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