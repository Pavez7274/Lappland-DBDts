/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$cacheGet",
	description: "cache manager",
	brackets: true,
	execute: async (d, fn) => {
		const DBDJSDB = require("dbdjs.db")
		const db = new DBDJSDB.Database({
			path: "./database/",
			tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
		})
		db.connect()
		let [key, Eval=``] = await fn.resolveArray(d)
		// Database connection

		try{
			let result = db.get("cache", key).then((data) => eval(Eval))
		} catch (error) {
			console.log(error.message)
			d.sendError(fn, `:x: Cache error: ${error.message}`)
			return fn.resolve()
		}

		if (typeof r == "object") result = require("util").inspect(result, { depth: max })

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
			name: "eval",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func