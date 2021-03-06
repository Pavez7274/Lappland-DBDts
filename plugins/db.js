/**
 * By Pavez#7274 
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$db',
	description: 'database manager',
	brackets: true,
	execute: async (d, fn) => {
		const colors = require('colors')
		// Database connection
		const db = require('../src/db.js')

		const [method, key, value = "null", ttl = undefined] = await fn.resolveArray(d)
		let r = { key: undefined, value: undefined }

		switch (method.toLowerCase()) {
			// Main
			case 'get': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				let y = await db.get('main', key).then(data => data)
				if (!y) y = { value: value }
				r = y.value
				break;

			case 'set': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.set('main', key, value, ttl).then(data => { })
				break;

			case 'delete': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.delete('main', key).then(data => { })
				break;

			case 'all': r = await db.all('main', { filter: (data) => data.key.includes(key) }).then(data => data)
				break;

			case 'ping': let start = Date.now()
				await db.all('main')
				r = Date.now() - start
				break;

			// dev
			case 'devget': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				let dy = await db.get('dev', key).then(data => data)
				if (!dy) dy = { value: value }
				r = dy.value
				break;

			case 'devset': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.set('dev', key, value, ttl).then(data => { })
				break;

			case 'devdelete': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.delete('dev', key).then(data => { })
				break;

			case 'devall': r = await db.all('dev', { filter: (data) => data.key.includes(key) }).then(data => data)
				break;

			case 'devping': let dstart = Date.now()
				await db.all('dev')
				r = Date.now() - dstart
				break;

			case '': return d.sendError(fn, `:x: You must enter a method!`)
				break;

			default: return d.sendError(fn, `:x: \`${method}\` is not a valid method`)
		}

		if (typeof r == 'object') r = require('util').inspect(r, { depth: 5 })

		return fn.resolve(r)
	},
	fields: [
		{
			name: 'method',
			required: true,
			type: 'STRING'
		},
		{
			name: 'key',
			required: false,
			type: 'STRING'
		},
		{
			name: 'value',
			required: false,
			type: ['STRING', 'BOOLEAN', 'NUMBER', 'TIME']
		},
		{
			name: 'ttl',
			required: false,
			type: 'NUMBER'
		}
	]
}

module.exports = func