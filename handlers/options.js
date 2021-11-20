module.exports = {
  BotOptions: {
		intents: [ 'GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS' ],
 		prefix: {
   		mentionPrefix: true,
   		prefixes: [ 'lappland ', '??' ]
 		},
		database: {
			path: `./database/default.sqlite`
		},
		internalSharding: true
	}, 
  LavalinkOptions: {
    id: 'asdf', 
    host: 'lava.pavez.ga', 
    port: 443,
    password: 'youshallnotpass',
		secure: true
  }
} 