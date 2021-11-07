// Requirements
const express = require('express');
const server = express()
const path = require('path')
const db = require('./db.js')
const djs = require('./discordjs/connection.js')

// Configs
server.set('json spaces', 2)
server.engine('html', require('ejs').renderFile)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'src/views/'))

// Rutas
server.get('/', (req, res) => {
	res.json({
			status:res.statusCode,
			web: 'https://lappland.kaedestudio.ga/app'
		})
})
server.get('/app', async (req, res) => {
	res.render('app.html', {
		title: 'App',
		allBots: await db.all('main', { filter: ({ data }) => data.key.includes('botlist_bot') }).then(bs => bs.sort((x, y) => y.data.value.votes - x.data.value.votes))
	})
})
server.get('/nekos', async (req, res) => {
	const Neko = require('nekos.life');
	const nekos = new Neko()

	res.json({
		url: await nekos.nsfw.neko()
	})
})

// Listen 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor listo!');
    })
    return true;
}