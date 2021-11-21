/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/
const func = {
	name: '$toFixed',
	description: 'Formats a number using fixed-point notation',
	brackets: true,
	execute: async (d, fn) => {
		const [number, max = 4] = await fn.resolveArray(d)
		let result
		let y = number.toFixed(decimal)
		if (y === number) {
			result = number
		} else {
			result = y
		}

		return fn.resolve(result)
	},
	fields: [
		{
			name: 'number',
			description: 'number with decimals',
			required: true,
			type: 'NUMBER'
		},
		{
			name: 'max',
			description: 'maximum of decimal places',
			required: true,
			type: 'NUMBER'
		}
	]
}

module.exports = func