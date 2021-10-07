const GetAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$mentioned[1]!=;]
$onlyIf[$db[get;afk_$mentioned[1]_status;false]!=false;]

$title[1;$userTag[$mentioned[1]] Is AFK]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addField[1;Reason;$db[get;afk_$mentioned[1]_reason;\`DATABASE ERROR!\`]]
$color[1;001]
`
	}
] 

module.exports = GetAfkSpace 