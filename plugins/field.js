/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$field',
	description: 'Returns the specified field',
	brackets: true,
	execute: async (d, fn) => {
		const [number] = fn.resolveArray(d)
		return fn.resolve(d.data.args.join(' ').split(' ?? ')[number])
	},
	fields: [
		{
			name: 'field',
			type: 'NUMBER',
			required: true
		}
	]
}

module.exports = func