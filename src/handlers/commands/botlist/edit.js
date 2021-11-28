const EditPropertyCmd = [
	{
		type: 'basicCommand',
		name: 'edit-bot',
		aliases: ['editbot'],
		code: `
$reply[$messageID;false]

$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Edit-Bot]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`xml
??edit-bot <bot> ?? <property> ?? <new>
\`\`\`
**fields**
bot: snowflake, mention, usertag, nickname
property: string => prefix, description, library

**returns**
Information]
$color[1;001]
]

$js[false;
d.keywords = {
	bot: d.fields[0\\] || '',
	property: d.fields[1\\] || '',
	new: d.fields[2\\] || ''
}
;0]

$onlyIf[$get[bot]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [bot\\] is empty]
$color[1;001]
]

$onlyIf[$get[property]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 2\` [property\\] is empty]
$color[1;001]
]
$onlyIf[$includes[$get[property];description;library;prefix]==true;
$title[1;Error >> Field >> Invalid data]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 2\` $get[property] is not a valid property]
$footer[1;use --help to see properties]
$color[1;001]
]

$onlyIf[$get[new]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 3\` [new\\] is empty]
$color[1;001]
]

$let[user;$findUser[$get[bot];false]]

$onlyIf[$db[get;botlist_bot_$get[user];undefined]!=undefined;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar]
$description[1;No bot [$get[bot]\\] in the database matches]
$color[1;001]
]

$js[false;
db.get('main', 'botlist_bot_$get[user]').then(data => {
	d.keywords.dev = data?.value?.developers.includes(d.author.id)
	d.keywords.old = data.value[d.keywords.property\\]
})
;0]

$onlyIf[$get[dev]==true;
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;You're not a developer of this bot]
$color[1;001]
]

$title[1;New data >> $get[property]]
$thumbnail[1;$authorAvatar]
$addField[1;New;$get[new]]
$addField[1;Old;$get[old]]
$color[1;001]

$js[false;

db.get('main', 'botlist_bot_$get[user]').then(data => {
	data.value[d.keywords.property\\] = d.keywords.new
	db.set('main', 'botlist_bot_$get[user]', data.value)
})

;30]
		`
	}
]

module.exports = EditPropertyCmd