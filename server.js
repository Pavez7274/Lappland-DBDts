const express = require('express');
const server = express()

// Configs
server.set('json spaces', 2)

// Rutas
server.get("/", (req, res) => {
	res.json({status:res.statusCode})
})

// Listen 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor listo!');
    })
    return true;
}