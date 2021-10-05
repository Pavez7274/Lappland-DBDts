const SmugCmd = [
	{
		type: "basicCommand",
		name: "smug",
		code: `
$reply[$messageID;false]
$title[1;Smug $nickname[$guildID;$authorID]]
$image[1;$nekos[sfw;smug]]
$footer[1;From nekos.life]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = SmugCmd