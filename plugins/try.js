/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$try",
  description: "Formats a number using fixed-point notation",
	brackets: true,
  execute: async (d, fn) => {
		let [Try, Catch] = fn.resolveArray(d)
    let result;

    try{
      
    } catch (error) {
      
    }
		
    return fn.resolve(
			result
    )
  },
	fields: [
		{
			name: "try",
			required: true,
			type: "TEXT"
		},
		{
			name: "catch",
			required: true,
			type: "TEXT"
		}
	]
}

module.exports = func