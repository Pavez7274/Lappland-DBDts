/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$console",
	description: "Send a text to the console",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		const c = require("colors")
		c.setTheme({
			error: ["red"],
			debug: ["cyan"]
		})

    return fn.resolve(
			eval(`console.log(\`${data[0]}\`.${data[1] || "gray"})`)
    )
  },
	fields: [
		{
			name: "number",
			required: true,
			type: "STRING"
		},
		{
			name: "options",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func