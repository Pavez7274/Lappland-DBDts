const LevelupSpace = [
	{
		type: "spaceCommand",
		code: `
$onlyIf[$djsEval[yes;d.data.message.author.bot]!=true;]
$if[$db[get;cooldown_$authorID_levelup]!=;
$let[cd;$db[get;cooldown_$authorID_levelup]]
;
$let[cd;$sub[$dateNow;10]]
]
$onlyIf[$get[cd]<=$dateNow;]

$let[new;$sum[$db[get;xp_$authorID;0];$random[14]]]
$let[newstamp;$sum[$dateNow;5000]]
$db[set;xp_$authorID;$get[new]]
$db[set;cooldown_$authorID_levelup;$get[newstamp]]
		`
	}
]

module.exports = LevelupSpace