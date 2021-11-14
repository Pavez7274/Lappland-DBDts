const VoteCmd = [
	{
		type: 'basicCommand',
		name: 'vote',
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Vote]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??vote <bot>
\`\`\`
**fields**
bot: snowflake, mention, usertag, nickname

**returns**
Information]
$color[1;001]
]
$let[user;$findUser[$message;false]]

$js[false;
db.get('main', 'botlist_bot_' + d.keywords.user).then(data => {
	d.keywords['botID'\\] = data?.value?.snowflake || 'none'
	d.keywords['votes'\\] = data?.value?.votes || 0
})
;0]
$onlyIf[$get[botID]!=none;
$title[1;Error >> DataBase]
$thumbnail[1;$authorAvatar]
$description[1;No bot in the database matches]
$color[1;001]
]
$onlyIf[$db[get;$authorID_cooldown_vote_$get[botID];false]!=true;
$title[1;Error >> await!]
$thumbnail[1;$authorAvatar]
$description[1;You still can't vote for this bot again]
$color[1;001]
]

$title[1;Vote >> $userTag[$get[botID]]]
$thumbnail[1;$userAvatar[$get[botID]]]
$description[1;You voted for $userTag[$get[botID]]! now has $math[$get[votes]+1] votes]
$color[1;001]
$db[set;$authorID_cooldown_vote_$get[botID];true;300000]

$js[false;
db.get('main', 'botlist_bot_' + d.keywords.botID).then(data => {
	data.value.votes = data.value.votes + 1
	db.set('main', 'botlist_bot_' + d.keywords.botID, data.value)
})
;0]
		`
	}
]

module.exports = VoteCmd