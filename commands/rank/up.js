const LevelupSpace = [
	{
		type: "spaceCommand",
		code: `
$onlyIf[$djsEval[yes;d.data.message.author.bot]!=true]
$if[$dbHas[$authorID.cd.levelup]==true;
$let[cd;$dbGet[$authorID.cd.levelup;true]]
;
$let[cd;$sum[$dateNow;6000]]
]
$onlyIf[$get[cd]<=$dateNow;]

$dbAdd[xp.$authorID;$random[14]]
$dbSet[$authorID.cd.levelup;$sum[$dateNow;5000];false]
		`
	}
]

module.exports = LevelupSpace