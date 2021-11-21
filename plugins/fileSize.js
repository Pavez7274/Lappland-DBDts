/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$fileSize',
	description: 'Returns the size of a file or directory',
	brackets: true,
	execute: async (d, fn) => {
		const [file] = await fn.resolveArray(d)
		return fn.resolve(await require("fs").promises.stat(file))
	},
	fields: [
		{
			name: 'file',
			required: true,
			type: 'STRING'
		}
	]
}

module.exports = func