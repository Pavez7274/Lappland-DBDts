/**
 * By Pavez#7274
 * @type { import("dbd.ts").FunctionData }
 */
const func = {
	name: "$botVersion",
	description: "Returns the version of the bot (from package)",
	brackets: false,
	execute: async (d, fn) => {
		return fn.resolve(require(`../package.json`).version)
	}
}

module.exports = func