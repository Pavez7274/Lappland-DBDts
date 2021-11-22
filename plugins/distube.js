/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
*/
const func = {
	name: '$distube',
	description: 'Music manager',
	brackets: false,
	execute: async (d, fn) => {
		// let [method, option, ...data] = fn.resolveArray(d)
		const DisTube = require('distube')
		const { SpotifyPlugin } = require('@distube/spotify')
		const distube = new DisTube.default(d.client, {
			emitNewSongOnly: true,
			plugins: [new SpotifyPlugin()]
		})
		return distube.play(d.data.message, 'pretty visitors')
	},
	// fields: [
	// 	{
	// 		name: 'method',
	// 		required: true,
	// 		type: 'STRING'
	// 	},
	// 	{
	// 		name: 'option',
	// 		required: true,
	// 		type: 'STRING'
	// 	},
	// 	{
	// 		name: 'data',
	// 		required: false,
	// 		type: 'STRING'
	// 	}
	// ]
}

module.exports = func