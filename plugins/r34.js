/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$r34",
	description: "...",
	brackets: true,
	execute: async (d, fn) => {
		const [filter] = await fn.resolveArray(d)
		const { search, commonfy } = require('booru')
		const result = await search('rule34.xxx', filter, { limit: 1, random: true })
		if (!result?.posts[0]?.file_url) return d.container.sendError(fn, 'No results')

		return fn.resolve(result?.posts[0]?.file_url)
	},
	fields: [
		{
			name: 'filter',
			required: true,
			type: 'STRING'
		},

	]
}

module.exports = func