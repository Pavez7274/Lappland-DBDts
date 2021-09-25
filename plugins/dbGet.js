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
		let suppress = data[1] || false
		let def = data[2] || ""
		let r
		if(!variable) d.sendError(fn, `:x: Enter the name of the variable`)

		if(suppress){
			r = await db.get(variable) || def
		} else {
			if(!db.has(variable)) {
				d.sendError(fn, `:x: Variable \`${variable}\` not found`)
			} else {
				r = await db.get(variable) || def
			}
		}
		
    return fn.resolve(
			r
    )
  },
	fields: [
		{
			name: "variable",
			description: "Variable name",
			required: true,
			type: "STRING"
		},
		{
			name: "suppress",
			description: "suppress the error message",
			required: false,
			type: "BOOLEAN"
		},
		{
			name: "default",
			description: "Default value in case of not finding the variable",
			required: false,
			type: ["NUMBER", "STRING", "BOOLEAN", "TIME"]
		}
	]
}

module.exports = func