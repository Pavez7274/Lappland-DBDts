/**
 * By YukaDev
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$yukaID",
  description: "Returns the Yuka id",
	brackets: false,
  execute: async (d, fn) => {
    return fn.resolve(
			"681919237706612743"
    )
	}
}

module.exports = func