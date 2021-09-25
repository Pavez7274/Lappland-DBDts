/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$cmdName",
  description: "returns the exact moment the function was executed",
	brackets: false,
  execute: async (d, fn) => {
    return fn.resolve(
			d.data.command.data.name
    )
  },
}

module.exports = func