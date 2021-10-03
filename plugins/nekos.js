/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$nekos",
  description: "NekosLife API",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		const Neko = require('nekos.life');
		const nekos = new Neko()
		let r

		if(data[0] == "sfw"){
			r = await nekos.sfw[data[1]]({ text: data[2] })
		} else if(data[0] == "nsfw"){
			r = await nekos.nsfw[data[1]]()
		} else d.sendError(fn, `:x: \`${data[0]}\` is not a valid type`)
		
    return fn.resolve(
			r.url || r.owo || r.fact || r.cat || r.why || r.response
    )
  },
	fields: [
		{
			name: "type", 
			required: true, 
			type: "STRING"
		},
		{
			name: "function", 
			required: true, 
			type: "STRING"
		},
		{
			name: "text", 
			required: false, 
			type: "STRING"
		}
	]
}

module.exports = func