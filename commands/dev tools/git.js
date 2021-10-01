const GitCmd = [
	{
		type: "basicCommand", 
		name: "git", 
		code: `
$callFunction[devs]
$reply[$messageID;false]
$title[1;Exec >> git]
$thumbnail[1;$authorAvatar]
$addField[1;Imput;\`\`\`js
git $message\`\`\`]
$addField[1;Output;\`\`\`js
$exec[git $message]\`\`\`]
$color[1;001]
`
	}
] 

module.exports = GitCmd 