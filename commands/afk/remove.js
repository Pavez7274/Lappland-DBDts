const RemoveAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$ignoreCode[
	Check if the user is afk
]
$onlyIf[$db[get;afk_$authorID_status;false]==true;]

$ignoreCode[
	Respond with a message that he/she 'is no longer afk'
]
$let[id;$sendReply[$channelID;$messageID;You're no longer afk;false;true]] $let[ch;$channelID]

$ignoreCode[
	Reset the variables and delete the message
]
$db[delete;afk_$authorID_reason]
$db[delete;afk_$authorID_status]
$db[delete;afk_$authorID_stamp]
$setTimeout[5s;$deleteMessage[$get[ch];$get[id]]]
`
	}
] 

module.exports = RemoveAfkSpace