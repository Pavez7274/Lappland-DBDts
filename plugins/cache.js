/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: '$cache',
	description: 'Cache manager',
	brackets: true,
	execute: async (d, fn) => {
		let [method, key, value, ttl=60000] = await fn.resolveArray(d)
		const db = require('../src/db.js')

		switch (method.toLowerCase()) {
			// Cache
			case 'get': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				let y = await db.get('cache', key).then(data => data)
				if (!y) y = { value: value }
				r = y.value
				break;

			case 'set': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.set('cache', key, value, ttl).then(data => { })
				break;

			case 'delete': if (!key) d.container.sendError(fn, ':x: Enter a key!')
				r = await db.delete('cache', key).then(data => { })
				break;

			case 'all': r = await db.all('cache', { filter: (data) => data.key.includes(key) }).then(data => data)
				break;

			case 'ping': let start = Date.now()
				await db.all('cache')
				r = Date.now() - start
				break;

			case '': return d.sendError(fn, `:x: You must enter a method!`)
				break;

			default: return d.sendError(fn, `:x: \`${method}\` is not a valid method`)
		}

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
			type: ['STRING', 'NUMBER']
		},
		{
			name: 'ttl',
			required: false,
			type: 'NUMBER'
		}
	]
}

module.exports = func