/**
 * By YukitaDev
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$pavez",
  description: "Returns the Guillermo id",
	brackets: true,
  execute: async (d, fn) => {
		let data = await fn.resolveArray(d)
		let u = await d.client.users.fetch("788869971073040454")
		let r
		switch(data[0]){
			case "id": r = u.id
			break;
			case "username": r = u.username
			break;
			case "tag": r = `${u.username}#${u.discriminator}`
			break;
			case "avatar": r = `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png?size=2048`
			break;
			default: d.sendError(fn, `:x: \`${data[0]}\` is not a valid option`)
		}
    return fn.resolve(
			r
    )
	},
	fields: [
		{
			name: "option",
			required: true,
			type: "STRING"
		}
	]
}

module.exports = func