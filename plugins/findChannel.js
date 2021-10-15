/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$findChannel",
  description: "Search for a channel",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let channel = data[0]
		let guild = await d.data.message.guild.channels.cache
		let r
		try{
			r = 
				await guild.find((c) => c.name.toLowerCase() === channel.toLowerCase()) ||
				await guild.get(channel) ||
				await d.data.message.mentions.channels.first() ||
				await guild.fetch(channel) ||
				{ id: "undefined" }
		} catch{
			r = { id: "undefined" }
		}

    return fn.resolve(
			r.id
    )
  },
	fields: [
		{
			name: "channel",
			description: "name/id",
			required: true,
			type: "TEXT"
		}
	]
}

module.exports = func