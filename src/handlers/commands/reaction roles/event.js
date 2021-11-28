const ReactionEvent = [
	{
		type: 'reactionAddCommand',
		code: `
$suppressErrors
$ignoreCode[No works]

$ignoreCode[Javascript part]
$js[false;

	db.get('main', 'reaction_roles_$messageID').then(data => {
		d.keywords.isReactionEnable = data?.value?.status || false
		d.keywords.reactions = data?.value?.reactions || [\\]
	})

;10]
$onlyIf[$get[isReactionEnable]==true;]

$js[false;

	const emote = d.keywords.reactions.find(react => react.id && react.id === '$emojiID')

	if(emote){
		d.keywords.role = emote.role
	}

;10]

$giveRole[$guildID;$authorID;$get[role];Reaction roles]
		`
	}
]

module.exports = ReactionEvent