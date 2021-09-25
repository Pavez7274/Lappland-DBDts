/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$random",
  description: "Returns the value of a variable",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let x = data[0]
		
    return fn.resolve(
			Math.floor( Math.random() * x )
    )
  },
	fields: [
		{
			name: "max",
			description: "",
			required: true,
			type: "NUMBER"
		}
	]
}

module.exports = func