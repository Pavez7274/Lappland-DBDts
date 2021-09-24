/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$dbHas",
  description: "Check if a variable exists",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let db = require(`quick.db`)
		if(!variable) d.sendError(fn, `:x: Enter the name of the variable`)
		let variable = data[0]
		
    return fn.resolve(
			db.has(variable)
    )
  },
	fields: [
		{
			name: "variable",
			description: "Variable name",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func