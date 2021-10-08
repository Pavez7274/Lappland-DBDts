/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$c",
  description: "Allows you to place comments in your code",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
    return fn.resolve(
			""
    )
  },
	fields: [
		{
			name: "comment",
			description: "The comment",
			required: true,
			type: "TEXT"
		}
	]
}

module.exports = func