/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$db",
	description: "Replit database",
	brackets: true,
	execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		const RE = require("@replit/database")
		const db = new RE()
		let r

		switch(data[0].toLowerCase()){
			case "get": r = await db.get(data[1]).then((x) => x) || data[2] || ""
			break;

			case "set": if(!data[1]) d.sendError(fn, `:x: You must specify the name of the variable!`)
			r = await db.set(data[1], data[2] || null).then((x) => {})
			break;

			case "list": r = await db.list(data[2] || "").then((x) => x.join(data[1] || ", "))
			break;

			case "all": r = await db.getAll()
			break;

			case "delete": if(!data[1]) d.sendError(fn, `:x: You must specify the name of the variable!`)
			r = await db.delete(data[1]).then((x) => {})
		}
		return fn.resolve(
			r
    )
	},
	fields: [
		{
			name: "method",
			required: true,
			type: "STRING"
		},
		{
			name: "value",
			required: false,
			type: ["STRING", "BOOLEAN", "NUMBER", "TIME"]
		},
		{
			name: "text",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func