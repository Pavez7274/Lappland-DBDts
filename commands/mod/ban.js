const BanCmd = [
	{
		type: "basicCommand",
		name: "ban",
		code: `
$if[$authorID!=$ownerID;$onlyIf[$hasPerm[$guildID;$authorID;banmembers]==true;
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;To use this command you need permission to ban members from the server]
$color[1;001]
]]
$let[id;$mentioned[1;false]]
$onlyIf[$get[id]!=;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;You must mention the server member you want to ban]
$color[1;001]
]
$onlyIf[$get[id]!=$authorID;
$title[1;Error >> You can't ban yourself]
$thumbnail[1;$authorAvatar]
$description[1;If you have to leave the server you can do it on your own]
$color[1;001]
]
$onlyIf[$get[id]!=$ownerID;
$title[1;Error >> I can not do that]
$thumbnail[1;$authorAvatar]
$description[1;I can't ban the server owner]
$color[1;001]
]

$ban[$guildID;$get[id];$messageSlice[1]]
$title[1;Banned Member]
$thumbnail[1;$userAvatar[$get[id]]]
$description[1;$userTag[$get[id]] was banned from the server by $userTag[$authorID]]
$color[1;001]
		`
	}
]

module.exports = BanCmd