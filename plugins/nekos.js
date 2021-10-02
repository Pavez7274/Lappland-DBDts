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
		let r
		if(data[0] === "hug"){
			r = await nekos.sfw.hug()
		} else if(data[0] === "pat"){
			r = await nekos.sfw.pat()
		} else if(data[0] === "smug"){
			r = await nekos.sfw.smug()
		} else if(data[0] === "baka"){
			r = await nekos.sfw.baka()
		} else if(data[0] === "tickle"){
			r = await nekos.sfw.tickle()
		} else if(data[0] === "poke"){
			r = await nekos.sfw.poke()
		} else if(data[0] === "neko"){
			r = await nekos.sfw.neko()
		} else if(data[0] === "nekoGif"){
			r = await nekos.sfw.nekoGif()
		} else if(data[0] === "meow"){
			r = await nekos.sfw.meow()
		} else if(data[0] === "lizard"){
			r = await nekos.sfw.lizard()
		} else if(data[0] === "kiss"){
			r = await nekos.sfw.kiss()
		} else if(data[0] === "foxGirl"){
			r = await nekos.sfw.foxGirl()
		} else if(data[0] === "feed"){
			r = await nekos.sfw.feed()
		} else if(data[0] === "cuddle"){
			r = await nekos.sfw.cuddle()
		} else if(data[0] === "woof"){
			r = await nekos.sfw.woof()
		} else if(data[0] === "wallpaper"){
			r = await nekos.sfw.wallpaper()
		} else if(data[0] === "gecg"){
			r = await nekos.sfw.gecg()
		} else if(data[0] === "avatar"){
			r = await nekos.sfw.avatar()
		} else if(data[0] === "waifu"){
			r = await nekos.sfw.waifu()
		}
		
    return fn.resolve(
			r.url
    )
  },
	fields: [
		{
			name: "filter", 
			required: true, 
			type: "STRING"
		}
	]
}

module.exports = func