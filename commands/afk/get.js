const GetAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$mentioned[1]!=;]
$onlyIf[$db[get;afk_$mentioned[1]_status;false]!=false;]

$let[ch;$channelID]
$let[id;$sendReply[$channelID;$messageID;
$title[1;$userTag[$mentioned[1]] Is AFK]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addField[1;Reason;$db[get;afk_$mentioned[1]_reason;\`DATABASE ERROR!\`]]
$addField[1;Stamp;<t:$toFixed[$math[$db[get;afk_$mentioned[1]_stamp;$dateNow]/1000];0]:R>]
$color[1;001];false;true]]

$setTimeout[8s;$deleteMessage[$get[ch];$get[id]]]
`
	}
] 

module.exports = GetAfkSpace 