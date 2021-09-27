const GetAfkSpace = [
	{
		type: "spaceCommand", 
		code: `
$onlyIf[$mentioned[1]!=;]
$onlyIf[$dbGet[$mentioned[1].afk.status;true;false]!=false;]

$title[1;$userTag[$mentioned[1]] Is AFK]
$thumbnail[1;$authorAvatar]
$addField[1;Reason;$dbGet[$mentioned[1].afk.reason;true;\`DATABASE ERROR\`]]
$color[1;001]
`
	}
] 

module.exports = GetAfkSpace 