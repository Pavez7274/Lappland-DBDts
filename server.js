// Requirements
const express = require('express');
const server = express()
const path = require("path")
const database = require('@replit/database')
const db = new database()

// Configs
server.set('json spaces', 2)
server.engine("html", require("ejs").renderFile)
server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "src/views/"))

// Rutas
server.get("/", (req, res) => {
	res.json({
			status:res.statusCode,
			web: "https://lappland.kaedestudio.ga/app"
		})
})
server.get("/app",(req, res) => {
	res.render("app.html", {
		title: "App",
		db: db
	})
})

// Listen 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor listo!');
    })
    return true;
}