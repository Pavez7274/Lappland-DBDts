const QuickDBCmd = [
	{
		type: "basicCommand",
		name: "quickdb",
		code: `
$if[$toLowerCase[$message]!=;
$if[$toLowerCase[$message[1]]==example;
$if[$toLowerCase[$message[2]]==cooldown;
$title[1;Quick.DB >> Example >> Set/Get Cooldown]
$description[1;
Set
\`\`\`js
const db = require('quick.db')
let user = message.author.id // or ID
let time = 18000000 // Time in ms (In the example it is 5h)

db.set(\`\${user}.cooldown\`, Date.now() + time)
\`\`\`

Get
\`\`\`js
const db = require('quick.db')
let user = message.author.id // or ID

db.get(\`\${user}.cooldown\`)
\`\`\`]
$color[1;001]
;
Sorry, it was not found in example]
;
Sorry, it was not found in category
Categories: example]
;
$title[1;SetUp]
$description[1;\`\`\`js
const db = require('quick.db')
\`\`\`

Methods
\`\`\`js
await db.set("Var Name", "New value")
// Value types: [ Number, String, Array, Object, JSON \\]
// Returns: New Value

await db.get("Var Name", options/filter)
// Returns: Value

await db.has("Var Name")
// Returns: Boolean

await db.delete("Var Name")
// Returns: Boolean

await db.all()
// Returns: all vars
\`\`\`]
$color[1;001]
]

$callFunction[log]
		`
	}
]

module.exports = QuickDBCmd