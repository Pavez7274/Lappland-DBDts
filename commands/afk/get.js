const GetAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$ignoreCode[
	This part of the code is dedicated to checking if the message has a mention, and if the mentioned user is afk
]
$onlyIf[$mentioned[1]!=;]
$onlyIf[$db[get;afk_$mentioned[1]_status;false]!=false;]


$ignoreCode[
	Send the embed with the afk status information
]
$let[ch;$channelID]
$let[id;$sendReply[$channelID;$messageID;
$title[1;$userTag[$mentioned[1]] Is AFK]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addField[1;Reason;$db[get;afk_$mentioned[1]_reason;\`DATABASE ERROR\`]]
$addField[1;Stamp;<t:$toFixed[$math[$db[get;afk_$mentioned[1]_stamp;$getTimestamp]/1000];0]:R>]
$color[1;001];false;true]]

$ignoreCode[
	Delete the embed message after 8 seconds
]
$setTimeout[8s;$deleteMessage[$get[ch];$get[id]]]
`
	}
] 

module.exports = GetAfkSpace 