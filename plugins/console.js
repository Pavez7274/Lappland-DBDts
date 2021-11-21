/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
*/
const func = {
	name: "$console",
	description: "Send a text to the console",
	brackets: true,
	execute: async (d, fn) => {
		const c = require("colors")
		const [text, color = 'gray', author = 'LOG'] = await fn.resolveArray(d)

		c.setTheme({
			error: ["red"],
			debug: ["cyan"]
		})

		return fn.resolve(console.log(String(author).red, '-', text[color]))
	},
	fields: [
		{
			name: "text",
			required: true,
			type: "STRING"
		},
		{
			name: "options",
			required: false,
			type: "STRING"
		},
		{
			name: 'author',
			required: false,
			type: 'STRING'
		}
	]
}

module.exports = func