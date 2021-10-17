/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$cacheSet",
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
		let [key, value, ttl=60000, Eval=`console.log(\`|---------------[cache]---------------|
| Name: \${key}
| Value: \${value}
| TTL: \${ttl}
|-------------------------------------|\`)`] = await fn.resolveArray(d)

		// Code
		db.set("cache", key, value, ttl).then((data) => eval(Eval))

		return fn.resolve()
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
		},
		{
			name: "eval",
			required: false,
			type: "STRING"
		}
	]
}

module.exports = func