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
		let r = await nekos.sfw[data[0]]({ text: data[1] })
		
    return fn.resolve(
			r.url || r.owo || r.fact || r.cat || r.why
    )
  },
	fields: [
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