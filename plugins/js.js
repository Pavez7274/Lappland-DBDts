/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$js",
	description: "owo",
	brackets: true,
	execute: async (d, fn) => {
		// Colors :D
		const colors = require(`colors`)
		colors.setTheme({
			error: ["white", "bgRed"],
			log: ["gray", "italic"]
		})

		// axios
		const axios = require('axios').default

		// Database
		const DBDJSDB = require("dbdjs.db")
		const db = new DBDJSDB.Database({
			path: "./database/",
			tables: [{ name: "main" }, { name: "dev" }, { name: "cache" }]
		})
		db.connect()

		// Replit database
		let RE = require("@replit/database")

		// Nekos life
		let Neko = require('nekos.life')
		let nekos = new Neko()

		// Exec
		let cld = require("child_process")
		const exec = async (data) => {
			return await cld.execSync(data)
		}

		// Commands
		let cdms = d.bot.commands.cache.get("basicCommand")
			let num = -1; let size = cdms.size; let cdmArr = []
			for(let i = 0;i<=size-1;i++){
				num = eval(num+1)
				cdmArr.push(cdms.get(num).data.name)
			}

		// New options
		d.author = d.data.message.author
		d.guild = d.data.message.guild
		d.channel = d.data.message.channel
		d.allCommands = cdmArr
		d.rdb = new RE()
		d.db = db
		d.fields = d.data.args.join(" ").split(" ?? ")

		let [re, code, maxData=0] = await fn.resolveArray(d)
		let r = undefined;
		try {
			r = await eval(code)
		} catch (error) {
			return d.sendError(fn, `:x: Error: \`${error.message}\``)
		}

		if (typeof r == "object") r = require("util").inspect(r, { depth: maxData })

		return fn.resolve(
			re ? r : ""
    )
	},
	fields: [
		{
			name: "return",
			required: true,
			type: "BOOlEAN"
		},
		{
			name: "code",
			required: true,
			type: "STRING"
		},
		{
			name: "max",
			required: false,
			type: "NUMBER"
		}
	]
}

module.exports = func