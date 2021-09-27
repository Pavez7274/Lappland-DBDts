const RemoveAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$dbGet[$authorID.afk.status;true;false]!=false;]

$reply[$messageID;false]
You are no longer afk
$dbDelete[$authorID.afk]
`
	}
] 

module.exports = RemoveAfkSpace