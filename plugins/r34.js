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
		let p = data[1] 
		let index = data[2] || 0
    let r
		
    let y = await posts({tags:[filter]}).then(x => x)
    
  	if(p === "url"){
		  r = y.posts[index].file_url
    } else if(p === "count"){
      r = Number(y.count - 1) 
    }
		
    return fn.resolve(
			r
    )
  },
	fields: [
		{
			name: "filter", 
			required: true, 
			type: "STRING"
		},
		{
			name: "property", 
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