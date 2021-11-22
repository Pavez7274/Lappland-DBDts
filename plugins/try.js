/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/
const func = {
	name: '$try',
	description: 'Ehhh... yes',
	brackets: true,
	execute: async (d, fn) => {
		let [Try, Catch] = fn.resolveArray(d)
		let result;

		try {
			result = await eval(Try)
		} catch (error) {
			result = await eval(Catch)
		}

		return fn.resolve(result)
	},
	fields: [
		{
			name: 'try',
			required: true,
			type: 'STRING'
		},
		{
			name: 'catch',
			required: true,
			type: 'STRING'
		}
	]
}

module.exports = func