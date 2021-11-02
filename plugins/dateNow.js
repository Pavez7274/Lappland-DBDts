/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$dateNow",
	description: "Returns the exact moment when the function was executed",
	brackets: false,
	execute: async (d, fn) => {
		return fn.resolve(
			await Date.now()
    	)
  	},
}

module.exports = func