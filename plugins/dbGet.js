/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$dbGet",
  description: "Returns the value of a variable",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let db = require(`quick.db`)
		let variable = data[0]
		if(!variable) d.sendError(fn, `:x: Enter the name of the variable`)
		if(!db.has(variable)) d.sendError(fn, `:x: Variable \`${variable}\` not found`)
		
    return fn.resolve(
			db.get(variable)
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