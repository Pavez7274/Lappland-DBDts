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
		let guild = await d.client.guilds.cache.get(d.data.message.guild.id)
		let r
		try{
		r = await guild.channels.cache.find((c) => c.name.toLowerCase() === channel.toLowerCase() || c.id === channel
    ) ||
		await guild.channels.cache.get(channel) ||
    await d.data.message.mentions.channels.first() ||
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
			type: "STRING"
		}
	]
}

module.exports = func