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
		const DBDJSDB = require("dbdjs.db")
		const db = new DBDJSDB.Database({
			path: "./database/",
			tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
		})
		db.connect()
		const [method, key, value=null, ttl=undefined] = await fn.resolveArray(d)
		let r = { key: undefined, value: undefined }

		switch(method.toLowerCase()){
			// Main
			case "get": r = await db.get("main", key).then(data => {
				try{ 
					data.value 
				} catch { 
					`${value}`
				}
			})
			break;

			case "set": r = await db.get("main", key, value, ttl).then(data => {})
			break;

			case "delete": r = await db.get("main", key).then(data => {})
			break;

			case "all": r = db.all("main", { filter: ({ data }) => eval(key || "data.key.includes('')") })

			case "": d.sendError(fn, `:x: You must enter a method!`)
			break;

			default: d.sendError(fn, `:x: \`${p[0]}\` is not a valid method`)
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