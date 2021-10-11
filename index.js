const dbd = require("dbd.ts") 
const colors = require('colors');
const client = new dbd.Bot({
  intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	],
  prefix: {
    mentionPrefix: true,
    prefixes: ["lappland ", "??"]
  }
})

// Ready
client.commands.add({
	type: "readyCommand",
	code: `
$console[|--------------[DBD.TS\\]--------------|
| Ready on client $userTag[$clientID]
|------------------------------------|\n;magenta]
	`
})

// StatusManager
require(`./handlers/status.js`)(client)

// Events
require(`./handlers/events.js`)(client)

// Loader
client.commands.load({
  path: "./commands/"
})

// Functions
require(`./handlers/functions.js`)(client)

// Slash
require(`./handlers/slash.js`)(client)

// Login
client.login(process.env['token'])

/*               24/7               */
const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
  website: "https://lappland.kaedestudio.ga",
  title: 'Lappland',
  interval: 2
})

monitor.on('up', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime started.
|-------------------------------------|\n`.brightGreen));
monitor.on('down', (res) => console.log(`|--------------[MONITOR]--------------|
| uptime has down.
${res.statusMessage}
|-------------------------------------|\n`.yellow));
monitor.on('stop', (website) => console.log(`>--------------[MONITOR]--------------<\n      uptime has stopped.\n\n`.red))
monitor.on('error', (error) => console.log(`|--------------[MONITOR]--------------|
${error}
|-------------------------------------|\n`.withe.bgRed));