/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$exec",
	description: "Runs something in the shell",
	brackets: true,
  execute: async (d, fn) => {
    let	fields = await fn.resolveArray(d)
    let cld = require("child_process")

    return fn.resolve(
			await cld.execSync(fields[0])
    )
  },
	fields: [
		{
			name: "command",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func