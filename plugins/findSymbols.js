/**
 * By YukaDev
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$findSymbols",
	description: "Returns the size of a file or directory",
	brackets: true,
	execute: async (d, fn) => {
		const [text] = await fn.resolveArray(d)
		
    	return fn.resolve(
			text.replace(/(\w+)/g, '')
    	)
  },
	fields: [
		{
			name: "text",
			description: "",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func