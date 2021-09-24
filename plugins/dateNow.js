/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$dateNow",
  description: "returns the exact moment the function was executed",
	brackets: false,
  execute: async (d, fn) => {
    return fn.resolve(
			Date.now()
    )
  },
}

module.exports = func