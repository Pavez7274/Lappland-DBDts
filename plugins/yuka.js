/**
 * By YukaDev | updated by Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */
const func = {
	name: '$yuka',
	description: 'Returns the Yuka information',
	brackets: true,
	execute: async (d, fn) => {
		let [data] = await fn.resolveArray(d)
		let u = await d.client.users.fetch('681919237706612743')
		let r
		switch (data) {
			case 'id': r = u.id
				break;
			case 'username': r = u.username
				break;
			case 'tag': r = `${u.username}#${u.discriminator}`
				break;
			case 'avatar': r = `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=2048`
				break;
			default: d.sendError(fn, `:x: \`${data}\` is not a valid option`)
		}
		return fn.resolve(r)
	},
	fields: [
		{
			name: 'option',
			required: true,
			type: 'STRING'
		}
	]
}

module.exports = func