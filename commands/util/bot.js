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
$addField[1;Ping;$ping;true]
$addField[1;Cpu;$toFixed[$cpu;2]%;true]
$addField[1;Ram;$toFixed[$ram;2]MB;true]
$addField[1;DataBase;Package: dbdjs.db
Version: 2.0.2;true]
$addField[1;UpTime;<t:$toFixed[$math[($dateNow/1000)-($uptime/1000)];0]:R>;true]
$addField[1;API Status;$httpGet[https://lappland.kaedestudio.ga/;status;];true]
$color[1;001]

$callFunction[log]
		`
	}
]

module.exports = StatsCmd