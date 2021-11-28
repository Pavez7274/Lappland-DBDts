const colors = require('colors')
const { Database } = require('dbdjs.db')
const db = new Database({
	path: './src/database/',
	tables: [{ name: 'main' }, { name: 'dev' }, { name: 'cache' }],
	debug: true
})

db.once('ready', () => {
	console.log('DATABASE'.red, '- database ready')
})
db.connect()

module.exports = db