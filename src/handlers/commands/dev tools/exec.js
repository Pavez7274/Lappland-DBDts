const ExecCmd = [
	{
		type: "basicCommand", 
		name: "exec", 
		code: `
$callFunction[devs]
$reply[$messageID;false]
$title[1;Exec >> $message[1]]
$thumbnail[1;$authorAvatar]
$addField[1;Imput;\`\`\`js
$message\`\`\`]
$addField[1;Output;\`\`\`js
$exec[$message]\`\`\`]
$color[1;001]
`
	}
] 

module.exports = ExecCmd 