/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$guillermo',
	description: 'Returns the Guillermo information',
	brackets: true,
	execute: async (d, fn) => {
		let [data] = await fn.resolveArray(d)
		let u = await d.client.users.fetch('533756121811517442')
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
			default: d.container.sendError(fn, `:x: \`${data}\` is not a valid option`)
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