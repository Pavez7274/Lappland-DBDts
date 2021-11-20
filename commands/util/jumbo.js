const JumboCmd = [
	{
		type: 'basicCommand',
		name: 'jumbo',
		aliases: [ 'emote', 'emoji' ],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Jumbo]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??jumbo <emote>
\`\`\`
**fields**
emote: string, number

**returns**
Image]
$color[1;001]
]

$onlyIf[$message!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [emote\\] is empty]
$color[1;001]
]

$js[false;

	const emote = d.client.emojis.cache.find(e => e.name.toLowerCase() === d.data.args[0\\].split(':')[1\\]?.toLowerCase() || e.id === d.data.args[0\\] || e.name.toLowerCase() === d.data.args[0\\].toLowerCase())
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