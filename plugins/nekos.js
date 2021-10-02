/**
 * By Pavez#7274 
 * @type {import("dbd.ts").FunctionData}
 */ 
const func = {
	name: "$nekos",
  description: "NekosLife API",
	brackets: true,
  execute: async (d, fn) => {
		const data = await fn.resolveArray(d)
		const Neko = require('nekos.life');
		const nekos = new Neko()
		let r; let x

		switch(data[0]){
			case "hug": x = await nekos.sfw.hug()
			r = x.url
			break;
			case "pat": x = await nekos.sfw.pat()
			r = x.url
			break;
			case "kiss": x = await nekos.sfw.kiss()
			r = x.url
			break;
			case "slap": x = await nekos.sfw.slap()
			r = x.url
			break;
			case "smug": x = await nekos.sfw.smug()
			r = x.url
			break;
			case "poke": x = await nekos.sfw.poke()
			r = x.url
			break;
			case "neko": x = await nekos.sfw.neko()
			r = x.url
			break;
			case "nekoGif": x = await nekos.sfw.nekoGif()
			r = x.url
			break;
			case "cat": x = await nekos.sfw.meow()
			r = x.url
			break;
			case "foxGirl": x = await nekos.sfw.foxGirl()
			r = x.url
			break;
			case "cuddle": x = await nekos.sfw.cuddle()
			r = x.url
			break;
			case "dog": x = await nekos.sfw.woof()
			r = x.url
			break;
			case "wallpaper": x = await nekos.sfw.wallpaper()
			r = x.url
			break;
			case "gecg": x = await nekos.sfw.gecg()
			r = x.url
			break;
			case "avatar": x = await nekos.sfw.avatar()
			r = x.url
			break;
			case "waifu": x = await nekos.sfw.waifu()
			r = x.url
			break;
			case "tickle": x = await nekos.sfw.tickle()
			r = x.url
			break;
			case "lizard": x = await nekos.sfw.lizard()
			r = x.url
			break;
			case "feed": x = await nekos.sfw.feed()
			r = x.url
			break;
			case "holo": x = await nekos.sfw.holo()
			r = x.url
			break;
			case "kemonomimi": x = await nekos.sfw.kemonomimi()
			r = x.url
			break;
			case "goose": x = await nekos.sfw.goose()
			r = x.url
			break;
			case "owoify": if(!data[1]) d.sendError(fn, `:x: Enter a text!`)
			x = await nekos.sfw.OwOify({ text: data[1] })
			r = x.owo
			break;
			case "why": x = await nekos.sfw.why()
			r = x.why
			break;
			case "catText": x = await nekos.sfw.catText()
			r = x.cat
			break;
			case "fact": x = await nekos.sfw.fact()
			r = x.fact
			break;
			case "spoiler": if(!data[1]) d.sendError(fn, `:x: Enter a text!`)
			x = await nekos.sfw.spoiler({ text: data[1] })
			r = x.owo
			break;
			default: d.sendError(fn, `:x: \`${data[0]}\` is not a valid function`)
		}
		
    return fn.resolve(
			r
    )
  },
	fields: [
		{
			name: "function", 
			required: true, 
			type: "STRING"
		},
		{
			name: "text", 
			required: false, 
			type: "STRING"
		}
	]
}

module.exports = func