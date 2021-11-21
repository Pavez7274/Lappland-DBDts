/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */
const func = {
	name: '$nekos',
	description: 'NekosLife API',
	brackets: true,
	execute: async (d, fn) => {
		const [type, funct, text] = await fn.resolveArray(d)
		const Neko = require('nekos.life');
		const nekos = new Neko()
		let r

		if (type.toLowerCase() === 'sfw') {
			r = await nekos.sfw[funct]({ text: text })
		} else if (type.toLowerCase() === 'nsfw') {
			r = await nekos.nsfw[funct]()
		} else d.container.sendError(fn, `:x: \`${type}\` is not a valid type`)

		return fn.resolve(r.url || r.owo || r.fact || r.cat || r.why || r.response)
	},
	fields: [
		{
			name: 'type',
			required: true,
			type: 'STRING'
		},
		{
			name: 'function',
			required: true,
			type: 'STRING'
		},
		{
			name: "text",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func