/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$cacheMembers",
  description: "",
	brackets: false,
  execute: async (d, fn) => {
		for(const server of Array.from(d.client.guilds.cache)){
			await server[1].members.fetch()
		}
		return
  }
}

module.exports = func