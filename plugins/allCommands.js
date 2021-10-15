/**
 * By YukaDev
 * @type { import("dbd.ts").FunctionData }
*/ 
const func = {
	name: "$allCommands",
	description: "Return all commands from your bot (type: basicCommand)",
	brackets: false,
  execute: async (d, fn) => {
		let cdms = d.bot.commands.cache.get("basicCommand")
			let num = -1; let size = cdms.size; let arr = []
			for(let i = 0;i<=size-1;i++){
				num = eval(num+1)
				arr.push(cdms.get(num).data.name)
			}
    return fn.resolve(
			arr.join(", ")
    )
  }
}

module.exports = func