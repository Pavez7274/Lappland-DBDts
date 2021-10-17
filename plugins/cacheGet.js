/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$cacheGet",
	description: "cache manager",
	brackets: true,
	execute: async (d, fn) => {
		// Database connection
		const DBDJSDB = require("dbdjs.db")
		const db = new DBDJSDB.Database({
			path: "./database/",
			tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
		})
		db.connect()
		// Code
		let [key, value="undefined"] = await fn.resolveArray(d)
		let result = { key: undefined, value: undefined }

		let x = await db.get("cache", key).then(data => data)
		if(!x) x = { value: value }
		result = x.value

		if (typeof result == "object") result = require("util").inspect(result, { depth: max })

		return fn.resolve(
			result
		)
	},
	fields: [
		{
			name: "key",
			required: true,
			type: "STRING"
		},
		{
			name: "value",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func