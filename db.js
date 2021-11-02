const colors = require('colors')
const DBDJSDB = require('dbdjs.db')
const db = new DBDJSDB.Database({
	path: './database/',
	tables: [{ name: 'main' }, { name: 'dev' }, { name: 'cache' }], 
	debug: true
})

db.once('ready', () => {
	console.log('DATABASE'.red, '- database ready')
})
db.connect()

module.exports = db