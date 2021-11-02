/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
 */ 
const func = {
	name: "$field",
	description: "no desc",
	brackets: true,
	execute: async (d, fn) => {
		const [ field ] = fn.resolveArray(d)
    	return fn.resolve(
			d.data.args.join(" ").split(" ?? ")[field]
    	)
	},
	fields: [
		{
			name: "field",
			type: "NUMBER",
			required: true
		}
	]
}

module.exports = func