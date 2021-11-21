// Requirements
const express = require('express');
const server = express()
const path = require('path')
const db = require('./db.js')
const djs = require('./discordjs/connection.js')
const colors = require('colors')

// Configs
server.set('json spaces', 2)
server.engine('html', require('ejs').renderFile)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'src/views/'))

// Routes
server.get('/', (req, res) => {
	res.json({
		status: res.statusCode,
		web: 'https://lappland.kaedestudio.ga/app',
		lavalink: {
			url: 'https://lava.pavez.ga',
			password: 'youshallnotpass',
			port: 443,
			secure: true
		}
	})
})
server.get('/app', async (req, res) => {
	res.render('app.html', {
		title: 'App',
		allBots: await db.all('main', { filter: ({ data }) => data.key.includes('botlist_bot') }).then(bs => bs.sort((x, y) => y.data.value.votes - x.data.value.votes))
	})
})

// Listen 
module.exports = () => {
	server.listen(3000, () => {
		console.log('EXPRESS'.red, '- server ready');
	})
	return true;
}