const RemoveAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$dbGet[$authorID.afk.status;true;false]!=false;]

$let[id;$sendReply[$channelID;$messageID;You are no longer afk;false;true]] $let[ch;$channelID]

$dbDelete[$authorID.afk]
$setTimeout[5s;$deleteMessage[$get[ch];$get[id]]]
`
	}
] 

module.exports = RemoveAfkSpace