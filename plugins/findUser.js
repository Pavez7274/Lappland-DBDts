/**
 * By Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$findUser",
  description: "Search for a user",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		let user = data[0]
		let u
		try{
		u = d.client.users.cache.find((m) => m.username.toLowerCase() === user.toLowerCase() ||  m.tag.toLowerCase() === user.toLowerCase()
    ) ||
		d.client.users.cache.get(user) ||
    d.data.message.mentions.users.first() ||
    (await d.client.users.fetch(user))
		} catch{
			u = { id: "undefined" }
		}

    return fn.resolve(
			u.id
    )
  },
	fields: [
		{
			name: "user",
			description: "userName/userTag/nickName/userID",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func