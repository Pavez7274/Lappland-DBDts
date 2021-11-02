module.exports = (client) => {

	client.createApplicationCommandData({
		type: 'CHAT_INPUT',
		name: 'level',
		description: 'Returns the statistics of a user',
		options: [
			{
				name: 'user',
				description: 'user from which to see the statistics',
				required: false,
				type: 'USER'
			}
		]
	})


	client.createApplicationCommandData({
		type: 'CHAT_INPUT',
		name: 'help',
		description: 'Do you want to know about any command? use this'
	})
	
}