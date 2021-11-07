/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: '$pushObjectValue',
	description: 'Add a value to a property',
	brackets: true,
	execute: async (d, fn) => {
		const [ property, value ] = await fn.resolveArray(d)
	  try{

			if(typeof d.object[property] != 'object'){
				d.object[property] = Array(d.object[property])
				d.object[property].push(value)
			} else {
				d.object[property].push(value)
			}

		} catch {
			return d.container.sendError(fn, `:x: Failed to push \`${value}\``)
		}
    
    return fn.resolve()
  },
	fields: [
		{
			name: 'property', 
			required: true, 
			type: 'STRING'
		},
		{
			name: 'value', 
			required: true, 
			type: ['STRING', 'NUMBER']
		}
	]
}

module.exports = func