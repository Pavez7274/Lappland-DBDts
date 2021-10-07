const SetSnipeEvent = [
	{
		type: "messageDeleteCommand",
		code: `
$log[>---------[LOG]---------<
$authorID - $message
]
		`,
	}
]

module.exports = SetSnipeEvent