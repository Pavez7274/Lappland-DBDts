module.exports = {
  BotOptions: {
		intents: [ 'GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_VOICE_STATES' ],
 		prefix: {
   		mentionPrefix: true,
   		prefixes: [ 'lappland ', '??' ]
 		},
		database: {
			path: './src/database/default.sqlite'
		},
		internalSharding: true
	}
} 