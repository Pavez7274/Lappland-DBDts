/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$r34",
  description: "...",
	brackets: true,
  execute: async (d, fn) => {
		const [ filter, p, index=0 ] = await fn.resolveArray(d)
	  let { posts } = require("rule34js")
    let r; let f
		
    try{
			posts({tags:[filter]}).then(data => {
				if(p === "url"){
					r = data.posts[index].file_url
				} else if(p === "count"){
					r = Number(data.count - 1) 
				}
			})
		} catch (error) {
			console.log(error.message)
		}
		
    return fn.resolve(
			f
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