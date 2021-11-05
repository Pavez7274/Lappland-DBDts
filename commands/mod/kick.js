const KickCmd = [
	{
		type: "basicCommand",
		name: "kick",
		code: `
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Kick]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`xml
??kick <user> [reason\\]
\`\`\`
**fields**
user: snowflake, mention, usertag, nickname
reason: string]
$color[1;001]
]
$if[$authorID!=$ownerID;$onlyIf[$hasPerm[$guildID;$authorID;kickmembers]==true;
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;To use this command you need permission to kick members from the server]
$color[1;001]
]]
$let[id;$findMember[$guildID;$message[0]]]
$if[$message[2]!=;$let[r;$messageSlice[1]];$let[r;No reason was given]]

$onlyIf[$get[id]!=;
$title[1;Error >> Mention a member!]
$thumbnail[1;$authorAvatar]
$description[1;You must mention the server member you want to kick out]
$color[1;001]
]
$onlyIf[$get[id]!=$authorID;
$title[1;Error >> You can't kick yourself]
$thumbnail[1;$authorAvatar]
$description[1;If you have to leave the server you can do it on your own]
$color[1;001]
]
$onlyIf[$get[id]!=$ownerID;
$title[1;Error >> I can not do that]
$thumbnail[1;$authorAvatar]
$description[1;I can't kick the server owner]
$color[1;001]
]

$suppressErrors[
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;There was an error at the time of doing this action, please review the following
- That I am in a hierarchical position higher than the user
- That I have permission to kick users]
$color[1;001]
]

$ban[$guildID;$get[id];$get[r]]
$title[1;Kicked Member]
$thumbnail[1;$userAvatar[$get[id]]]
$description[1;$userTag[$get[id]] was kicked from the server by $userTag[$authorID]]
$color[1;001]
$callFunction[log]
		`
	}
]

module.exports = KickCmd