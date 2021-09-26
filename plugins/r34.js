/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$r34",
  description: "Check if a variable exists",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
	  let posts = require("rule34js").posts
		let filter = data[0] 
		let index = data[1] || 0
		
    return fn.resolve(
			await posts({tags:[filter]}).then(x => x.posts[index].file_url)
    )
  },
	fields: [
		{
			name: "filter", 
			required: true, 
			type: "STRING"
		}, 
		{
			name: "index",
			description: "",
			required: false,
			type: "NUMBER"
		}
	]
}

module.exports = func