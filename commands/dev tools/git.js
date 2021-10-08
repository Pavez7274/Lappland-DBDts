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
$if[$authorID==$pavez[id];$exec[git config --global user.name "Pavez7274" && git config --global user.email ${process.env['git-2']} && git $message];$if[$authorID==$yuka[id];$exec[git config --global user.name "YukitaDev" && git config --global user.email ${process.env['git-1']} && git $message];$exec[git $message]]]
\`\`\`]
$color[1;001]
`
	}
] 

module.exports = GitCmd 