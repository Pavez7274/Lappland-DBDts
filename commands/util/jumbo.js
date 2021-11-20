const JumboCmd = [
	{
		type: 'basicCommand',
		name: 'jumbo',
		aliases: [ 'emote', 'emoji' ],
		code: `
$reply[$messageID;false]

$js[false;

	const emote = d.client.emojis.cache.find(e => e.name.toLowerCase() === d.data.args[0\\].split(':')[1\\]?.toLowerCase())
	d.keywords = {
		returnError: !emote,
		url: emote?.url,
		name: emote?.name,
		id: emote?.id
	}

;30]

$onlyIf[$get[returnError]==false;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The emote [$message\\] could not be found]
$color[1;001]
]

$title[1;$get[name]]
$thumbnail[1;$authorAvatar]
$image[1;$get[url]]
$footer[1;ID: $get[id]]
$color[1;001]
		`
	}
]

module.exports = JumboCmd