const StatsCmd = [
	{
		type: "basicCommand",
		name: "stats",
		code: `
$reply[$messageID;false]
$title[1;Stats]
$thumbnail[1;$authorAvatar]
$addField[1;Ping;$ping;true]
$addField[1;Cpu;$toFixed[$cpu;2]%;true]
$addField[1;Ram;$toFixed[$ram;2]MB;true]
$addField[1;DataBase;Size: $toFixed[$math[$fileSize[json.sqlite]/1024];2]MBs
Type: sqlite
Package: quick.db
Version: 7.1.3;true]
$addField[1;UpTime;$uptimeMS;true]
$addField[1;API Status;$httpGet[https://lappland.kaedestudio.ga/;status;];true]
$color[1;001]

$callFunction[log]
		`
	}
]

module.exports = StatsCmd