/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$toFixed",
  description: "Formats a number using fixed-point notation",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let x = data[0]
		let decimal = data[1]
    let result
    let y = x.toFixed(decimal)
    if(y == x){
      result = x 
    } else {
      result = y 
    }
		
    return fn.resolve(
			result
    )
  },
	fields: [
		{
			name: "number",
			description: "number with decimals",
			required: true,
			type: "NUMBER"
		},
		{
			name: "max",
			description: "maximum of decimal places",
			required: true,
			type: "NUMBER"
		}
	]
}

module.exports = func