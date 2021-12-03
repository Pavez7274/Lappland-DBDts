const SetSnipe = [
	{
		type: 'messageDeleteCommand',
		code: `
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
$js[false;

	const def = [
		{
			type: 'deleted', 
			author: 'undefined', 
			content: 'undefined'
		}
	\\]
	db.get('main', \`snipe_\${d.data.message?.channel?.id}\`).then(data => {
		const arr = data?.value || def

		arr.push({
			type: 'deleted', 
			author: d.data.message?.author?.id || 'undefined', 
			content: d.data.message?.content || 'undefined'
		})
		db.set('main', \`snipe_\${d.data.message?.channel?.id}\`, arr)
	})

;10]
		`
	},
	{
		type: 'messageUpdateCommand',
		code: `
$suppressErrors 
$onlyIf[$isBot[$authorID]!=true;]
$js[false;

	const def = [
		{
			type: 'edited', 
			author: 'undefined', 
			content: 'undefined'
		}
	\\]
	db.get('main', \`snipe_\${d.data.extras.oldMessage?.channel?.id}\`).then(data => {
		const arr = data?.value || def

		arr.push({
			type: 'edited', 
			author: d.data.extras.oldMessage?.author?.id || 'undefined', 
			content: d.data.extras.oldMessage?.content || 'undefined'
		})
		db.set('main', \`snipe_\${d.data.extras.oldMessage?.channel?.id}\`, arr)
	})

;10]
		`
	}
]

module.exports = SetSnipe