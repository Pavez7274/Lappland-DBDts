const RemoveAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$db[get;afk_$authorID_status;false]==true;]

$let[id;$sendReply[$channelID;$messageID;You are no longer afk;false;true]] $let[ch;$channelID]

$db[delete;afk_$authorID_reason]
$db[delete;afk_$authorID_status]
$db[delete;afk_$authorID_stamp]
$setTimeout[5s;$deleteMessage[$get[ch];$get[id]]]
`
	}
] 

module.exports = RemoveAfkSpace