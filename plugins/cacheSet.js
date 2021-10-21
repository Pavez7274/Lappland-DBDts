/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$cacheSet",
	description: "cache manager",
	brackets: true,
	execute: async (d, fn) => {
		const c = require("colors")
		// Database connection
		const DBDJSDB = require("dbdjs.db")
		const db = new DBDJSDB.Database({
			path: "./database/",
			tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
		})
		db.connect()
		let [ key, value, ttl=60000 ] = await fn.resolveArray(d)
		let cache = await db.set("cache", key, value, ttl).then((data) => {
			console.log(`|---------------[cache]---------------|
| Name: ${key}
| Value: ${value}
| TTL: ${ttl}
|-------------------------------------|`.gray)
		})
		// Code
		return fn.resolve(
			cache
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