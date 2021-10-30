const StatsCmd = [
	{
		type: "basicCommand",
		name: "bot",
		aliases: [ "botinfo", "bot-info" ],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Bot]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??bot
\`\`\`
**returns**
Information]
$color[1;001]
]
$js[false;
d.keywords['djsversion'\\] = require('discord.js').version
d.keywords['dbversion'\\] = require('dbdjs.db').version
d.keywords['usage'\\] = os.loadavg()[0\\]
d.keywords['model'\\] = cpu.model
d.keywords['speed'\\] = cpu.speed
if(Math.floor(Math.random() * 100) > 85) {
	d.keywords.name = 'Lappy'
} else d.keywords.name = d.client.user.username
;0]

$title[1;Bot stats]
$thumbnail[1;$authorAvatar]
$description[1;Hi, I'm $get[name], a moderation and interaction bot, developed by [Kaede studio\\](https://discord.gg/qCNgyTDJp5), for help you can use \`??help\`, if you need to see all my commands quickly use \`??all-commands\`, if you need help with a command add \`--help\` to the end of it

__[avatar\\](https://pin.it/1vemnuE)__]
$addField[1;Ping;$ping;true]
$addField[1;Cpu;model: $get[model]
usage: $get[usage]%
speed $get[speed]MHz;true]
$addField[1;Ram;$toFixed[$ram;2]MB;true]
$addField[1;Packages;dbd.ts $packageVersion
discord.js $get[djsversion]
dbdjs.db $get[dbversion];true]
$addField[1;UpTime;<t:$toFixed[$math[($dateNow/1000)-($uptime/1000)];0]:R>;true]
$addField[1;API Status;$httpGet[https://lappland.kaedestudio.ga/;status;];true]
$footer[1;Stable $botVersion]
$color[1;001]

$callFunction[log]
		`
	}
]

module.exports = StatsCmd