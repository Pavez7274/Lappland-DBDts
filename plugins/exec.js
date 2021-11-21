/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$exec',
	description: "Runs something in the shell",
	brackets: true,
	execute: async (d, fn) => {
		let [code] = await fn.resolveArray(d)
		return fn.resolve(await require('child_process').execSync(code))
	},
	fields: [
		{
			name: 'command',
			required: true,
			type: 'STRING'
		}
	]
}

module.exports = func