/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */  
const func = {
	name: "$dbDelete",
  description: "Delete a variable",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let db = require(`quick.db`)
		let variable = data[0]
		let ret = data[1] || false
		let r

		if(!variable) d.sendError(fn, `:x: Enter the name of the variable`)
		if(ret) {
			r = await db.delete(variable)
		} else {
			await db.delete(variable)
			r = ""
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
			name: "return?",
			description: "Returns if it was possible to delete the variable",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func