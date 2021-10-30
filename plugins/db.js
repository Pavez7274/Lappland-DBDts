/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$db",
	description: "database manager",
	brackets: true,
	execute: async (d, fn) => {
		const colors = require(`colors`)
		// Database connection
		const db = require('../db.js')
		
		const [method, key, value="null", ttl=undefined] = await fn.resolveArray(d)
		let r = { key: undefined, value: undefined }

		switch(method.toLowerCase()){
			// Main
			case "get": let y = await db.get("main", key).then(data => data)
			if(!y) y = { value: value }
			r=y.value
			break;

			case "set": r = await db.set("main", key, value, ttl).then(data => {})
			break;

			case "delete": r = await db.delete("main", key).then(data => {})
			break;

			case "all": r = await db.all("main", { filter: ( data ) => data.key.includes(key) }).then(data => data)

			case "": return d.sendError(fn, `:x: You must enter a method!`)
			break;

			default: return d.sendError(fn, `:x: \`${method}\` is not a valid method`)
		}

		if (typeof r == "object") r = require("util").inspect(r, { depth: 5 })

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
			name: "key",
			required: true,
			type: "STRING"
		},
		{
			name: "value",
			required: false,
			type: ["STRING", "BOOLEAN", "NUMBER", "TIME"]
		},
		{
			name: "ttl",
			required: false,
			type: "NUMBER"
		}
	]
}

module.exports = func