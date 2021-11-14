const UpdateBotsInformationLoop = [
	{
		type: 'loopCommand',
		interval: 10000,
		executeOnStart: true,
		code: `
$suppressErrors
$let[suppress;

$js[true;

	db.all('main', { filter: ({ data }) => data.key.includes('botlist_bot') }).then(data => {
		data.forEach(b => {
			d.client.users.fetch(b.data.value.snowflake).then(u => {
				b.data.value.username = u.username
				b.data.value.avatar = 'https://cdn.discordapp.com/avatars/' + u.id + '/' + u.avatar + '.png?size=1024'
				db.set('main', b.data.key, b.data.value)
			})
		})
	})

;30]

]
		`
	}
]

module.exports = UpdateBotsInformationLoop