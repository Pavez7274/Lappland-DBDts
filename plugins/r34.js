/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$r34",
  description: "...",
	brackets: true,
  execute: async (d, fn) => {
		const [ filter ] = await fn.resolveArray(d)
	  let { posts } = require("rule34js")
		let response = await posts({ tags: filter.split(", ") })
		let result = await response?.posts[Math.floor(Math.random() * (response?.count - 1))]?.file_url
    
    return fn.resolve(
			result
    )
  },
	fields: [
		{
			name: "filter", 
			required: true, 
			type: "STRING"
		},
		
	]
}

module.exports = func