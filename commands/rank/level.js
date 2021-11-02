const GetUserLevel = [
	{
		type: 'basicCommand',
		name: 'level',
		aliases: ['lvl', 'rank', 'xp'],
		code: `
$if[$message!=;
$let[user;$findUser[$message;false]];
$let[user;$authorID]]

$onlyIf[$get[user]!=;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user [$message\\] could not be found]
$color[1;001]
]

$title[1;Rankcard]
$thumbnail[1;$userAvatar[$get[user]]]
$description[1;Requires $sub[$db[get;exp_$get[user];500];$db[get;xp_$get[user];0]] xp to climb to level $sum[$db[get;level_$get[user];0];1]

**Experience:** $db[get;xp_$get[user];0]/$db[get;exp_$get[user];500] ($toFixed[$math[$db[get;xp_$get[user];0]*100/$db[get;exp_$get[user];500]];2]%)
**Level:** $db[get;level_$get[user];0]
]
$color[1;001]
$addActionRow
$addButton[xpButton;how do I get xp?;DANGER]
		`
	},
	{
		type: 'buttonCommand',
		code: `
$onlyIf[$interactionID==xpButton;]

$ephemeral
To get **xp** u can simply talk on any channel
		`
	},
	{
		type: 'slashCommand',
		name: 'level',
		code: `
$reply

$if[$slashOption[user]!=;
$let[user;$findUser[$slashOption[user];false]];
$let[user;$authorID]]

$onlyIf[$get[user]!=;
$title[1;Error >> Not found]
$thumbnail[1;$authorAvatar]
$description[1;The user [$message\\] could not be found]
$color[1;001]
]

$title[1;Rankcard]
$thumbnail[1;$userAvatar[$get[user]]]
$description[1;Requires $sub[$db[get;exp_$get[user];500];$db[get;xp_$get[user];0]] xp to climb to level $sum[$db[get;level_$get[user];0];1]

**Experience:** $db[get;xp_$get[user];0]/$db[get;exp_$get[user];500] ($toFixed[$math[$db[get;xp_$get[user];0]*100/$db[get;exp_$get[user];500]];2]%)
**Level:** $db[get;level_$get[user];0]
]
$color[1;001]
$addActionRow
$addButton[xpButton;how do I get xp?;DANGER]
		`
	}
]

module.exports = GetUserLevel