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
	const up = await djs.users.fetch('788869971073040454')
	const uy = await djs.users.fetch('681919237706612743')
	const pavez = {
		avatar: up.displayAvatarURL({ dinamyc: true }),
		name: up.username + '#' + up.discriminator
	}
	const yuka = {
		avatar: uy.displayAvatarURL({ dinamyc: true }),
		name: uy.username + '#' + uy.discriminator
	}

	res.render('app.html', {
		title: 'App',
		allBots: await db.all('main', { filter: ({ data }) => data.key.includes('botlist_bot') }).then(bs => bs.sort((x, y) => y.data.value.votes - x.data.value.votes)),
		pavez: pavez,
		yuka: yuka
	})
})
server.get('/invite', (req, res) => {
	res.redirect('https://dsc.gg/lappland')
})

// Listen 
module.exports = () => {
	server.listen(3000, () => {
		console.log('EXPRESS'.red, '- server ready');
	})
	return true;
}