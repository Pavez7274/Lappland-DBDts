/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$dbSet",
  description: "Add or change the value of a variable",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let db = require(`quick.db`)
		let variable = data[0]
		let value = data[1]
		if(!variable) d.sendError(fn, `:x: Enter the name of the variable`)
		
		let r2 = data[2] || false
		let r

		if(r2){
			r = await db.set(variable, value)
		} else {
			await db.set(variable, value)
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
			name: "value",
			description: "Variable value",
			required: true,
			type: ["NUMBER", "STRING", "BOOLEAN", "TIME"]
		},
		{
			name: "return",
			description: "Return the value?",
			required: false,
			type: "BOOLEAN"
		}
	]
}

module.exports = func