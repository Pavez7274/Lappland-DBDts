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

		// fs, path y os
		const fs = require("fs")
		const Path = require("path")
    	const os = require('os')
    	const cpu = os.cpus()[0]

		// axios
		const axios = require('axios').default

		// Database
		const db = require('../db.js')
		db.async = {
			get: async (key, table='main') => {
			const x = await db.get(table, key)
			return x?.value || undefined
		}
		}

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

		const isSymbol = (t) => {
			const x = t.replace(/(\w+)/g, '')
			return x ? true : false
		}

		// New options
		d.author = d.data?.message?.author
		d.guild = d.data?.message?.guild
		d.channel = d.data?.message?.channel
		d.rdb = new RE()
		d.db = db
		d.fields = d.data?.args.join(" ").split(" ?? ")

		let [re, code, maxData=0] = await fn.resolveArray(d)
		let r = undefined;
		try {
			r = await eval(code)
		} catch (error) {
			return d.sendError(fn, `:x: Error: \`${error.message}\``)
		}

		if (typeof r == "object") r = require("util").inspect(r, { depth: maxData })

		return fn.resolve(
			String(re) == "true" ? r : ''
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