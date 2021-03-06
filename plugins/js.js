/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$js',
	description: 'The same as $djsEval, but more advanced',
	brackets: true,
	execute: async (d, fn) => {
		// Colors
		const colors = require('colors')
		colors.setTheme({
			error: ['white', 'bgRed'],
			log: ['gray', 'italic']
		})
		const log = (text, color = 'gray', author = 'LOG') => {
			console.log(author.red, text[color])
		}

		// fs, path y os
		const fs = require('fs')
		const Path = require('path')
		const os = require('os')
		const cpu = os.cpus()[0]

		// axios
		const axios = require('axios').default

		// Database
		const db = require('../src/db.js')
		db.async = {
			get: async (key, table = 'main') => {
				const x = await db.get(table, key)
				return x?.value || undefined
			},
			filter: async (how, key, table = 'main') => {
				if (how.toLowerCase() === 'includes'){
					return await db.all(table, { filter: ({data}) => data.key.includes(key) })
				} else if (how.toLowerCase() === 'starts'){
					return await db.all(table, { filter: ({data}) => data.key.startsWith(key) })
				}
			}
		}

		// Nekos life
		let Neko = require('nekos.life')
		let nekos = new Neko()

		// Exec
		let cld = require('child_process')
		const exec = async (data) => {
			return await cld.execSync(data)
		}

		// New options
		d.author = d.data?.message?.author
		d.guild = d.data?.message?.guild
		d.channel = d.data?.message?.channel
		d.db = db
		d.fields = d.data?.args.join(' ').split(' ?? ')

		let [re, code, maxData = 0] = await fn.resolveArray(d)
		let r = undefined;
		try {
			r = await eval(code)
		} catch (error) {
			return d.container.sendError(fn, `:x: Error: \`${error.message}\``)
		}

		if (typeof r === 'object') r = require('util').inspect(r, { depth: maxData })

		return fn.resolve(String(re) === 'true' ? r : '')
	},
	fields: [
		{
			name: 'return',
			required: true,
			type: 'BOOlEAN'
		},
		{
			name: 'code',
			required: true,
			type: 'STRING'
		},
		{
			name: 'max',
			required: false,
			type: 'NUMBER'
		}
	]
}

module.exports = func