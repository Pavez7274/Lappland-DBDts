const optionsCmd = [
	{
		type: "basicCommand",
		name: "client-options",
		aliases: ["clientoptions"],
		code: `
$title[1;Client options]
$thumbnail[1;$authorAvatar]
$addField[1;Client;Options for the discord.js client.]
$addField[1;Prefix;The prefix or prefixes to use, does also take an object.]
$addField[1;internalSharding;Whether to enable sharding on this bot.]
$addField[1;ignoreAllErrors;Suppresses and skips all errors thrown by the interpreter.]
$addField[1;database;Options for the database.]
$addField[1;intents;Array of intents to enable, check discord.js docs.]
$addField[1;token;The token for this bot.]
$color[1;001]
		`
	},
	{
		type: "basicCommand",
		name: "lavalink-song-options",
		aliases: ["lavalinksongoptions"],
		code: `
$title[1;Lavalink song options]
$thumbnail[1;$authorAvatar]
$addField[1;isSeekable;Whether this song is seekable.]
$addField[1;isStream;Whether the song is a stream.]
$addField[1;author;The author name of the song.]
$addField[1;user;The user ID that added this song.]
$addField[1;length;The duration of the song in ms.]
$addField[1;title;The song title.]
$addField[1;position;The stream position.]
$addField[1;uri;The song url.]
$color[1;001]
		`
	},
	{
		type: "basicCommand",
		name: "member-options",
		aliases: ["memberoptions"],
		code: `
$title[1;Member options]
$thumbnail[1;$authorAvatar]
$addField[1;name;The name of this member.]
$addField[1;id;The id of this member.]
$addField[1;nickname;The nickname of this member.]
$addField[1;displayName;The nickname of username of this member.]
$color[1;001]
		`
	},
	{
		type: "basicCommand",
		name: "role-options",
		aliases: ["roleoptions"],
		code: `
$title[1;Role options]
$thumbnail[1;$authorAvatar]
$addField[1;name;The name of the role.]
$addField[1;id;The role id.]
$addField[1;position;The position of this role.]
$addField[1;mention;The mention for this role.]
$addField[1;guildID;The guild this role belongs to.]
$addField[1;members;The cached member ids with this role.]
$addField[1;permissions;The permissions for this role.]
$addField[1;isHoisted;Whether this role is hoisted in the member tab.]
$addField[1;isMentionable;Whether this role is mentionable.]
$addField[1;isAdmin;Whether this role has administrator perms.]
$addField[1;createdTimestamp;The time at which this role was created in ms.]
$color[1;001]
		`
	}
]

module.exports = optionsCmd