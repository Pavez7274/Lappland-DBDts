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
$title[1;Bot stats]
$thumbnail[1;$authorAvatar]
$description[1;Hi, I'm lappland, a moderation and interaction bot, developed by [Kaede studio\\](https://discord.gg/qCNgyTDJp5), for help you can use \`??help\`, if you need to see all my commands quickly use \`??all-commands\`, if you need help with a command add \`--help\` to the end of it
__[avatar\\](https://pin.it/1vemnuE)__]
$addField[1;Ping;$ping;true]
$addField[1;Cpu;$toFixed[$cpu;2]%;true]
$addField[1;Ram;$toFixed[$ram;2]MB;true]
$addField[1;DataBase;Package: dbdjs.db
Version: 2.0.2;true]
$addField[1;UpTime;<t:$toFixed[$math[($dateNow/1000)-($uptime/1000)];0]:R>;true]
$addField[1;API Status;$httpGet[https://lappland.kaedestudio.ga/;status;];true]
$footer[1;Stable $botVersion]
$color[1;001]

$callFunction[log]
		`
	}
]

module.exports = StatsCmd