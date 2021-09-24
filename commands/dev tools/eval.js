const Eval = [
	// command
	{
		type: "basicCommand",
		name: "eval",
		code: `
$callFunction[devs]
$eval[$message]
		`
	},
	{
		type: "basicCommand",
		name: "djs",
		code: `
$callFunction[devs]
\`\`\`js
$djsEval[yes;
let db = require("quick.db")
$message]
\`\`\`
		`
	},

	// slash
	{
    type: "slashCommand",
    name: "eval",
		code: `
$onlyForIDs[$botOwnerID;]
$eval[$slashOption[code]]
		`
	}
]

module.exports = Eval