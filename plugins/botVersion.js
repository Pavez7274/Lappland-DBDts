/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$botVersion",
	description: "Returns the version of the bot (from package)",
	brackets: false,
	execute: async (d, fn) => {
		const version = require(`../package.json`).version

		return fn.resolve(
			version
		)
	}
}

module.exports = func