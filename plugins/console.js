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
    return fn.resolve(
			eval(`console.log("${data[0]}".${data[1] || "gray"})`)
    )
  },
	fields: [
		{
			name: "number",
			required: true,
			type: "STRING"
		},
		{
			name: "max",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func