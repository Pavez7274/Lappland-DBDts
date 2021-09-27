/**
 * By YukaDev
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$fileSize",
  description: "Returns the size of a file or directory",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		const fs = require("fs")
		let file = data[0]
		let r = await fs.promises.stat(file)
		
    return fn.resolve(
			r.size
    )
  },
	fields: [
		{
			name: "file",
			description: "",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func