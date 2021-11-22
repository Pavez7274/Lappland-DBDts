const RebootCmd = [
	{
		type: "basicCommand", 
		name: "reboot", 
		aliases: ["rt"], 
		code: `
$reply[$messageID;false]
$callFunction[devs]
$onlyIf[$endsWith[$message;--force]==false;
a reboot was **forced**!
$console[forced reboot by $userTag[$authorID];red;DEBUG]
$setTimeout[2s;$reboot[index.js]]
]
$deletecommand

$title[1;Reboot options]
$thumbnail[1;$authorAvatar]
$addField[1;All files;Restart all routes, whether they are part of the bot or not]
$addField[1;Cdm only;Only the commands are restarted, both those that are in the main file and those that are loaded by handler]
$color[1;001]
$addActionRow
$addButton[reboot;All files;DANGER]
$addButton[update;Cdm only;DANGER;;true]
$addButton[delete;Delete this;DANGER]
$if[$message!=;
$cache[set;reboot_reason;$message]
;
$cache[set;reboot_reason;No reason was given]
]
`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==reboot;]
$onlyForIDs[$pavez[id];$yuka[id];$guillermo[id];660970791202062381;
$ephemeral
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;This command is for developers only]
$color[1;001]
]
$console[$userTag[$authorID] has rebooted the code why $cache[get;reboot_reason] (stamp: $getTimestamp);white;DEBUG]
$deleteMessage[$channelID;$messageID]

$ephemeral
The files are being restarted, remember that each restart is saved in the database
$setTimeout[2s;$reboot[index.js]]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==update;]
$onlyForIDs[$pavez[id];$yuka[id];$guillermo[id];660970791202062381;
$ephemeral
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;This command is for developers only]
$color[1;001]
]
$console[$userTag[$authorID] has updated the code why $cache[get;reboot_reason] (stamp: $getTimestamp);white;DEBUG]
$deleteMessage[$channelID;$messageID]

$ephemeral
Commands are being restarted, remember that each restart is saved in database
$setTimeout[2s;$updateCommands]
		`
	},
	{
		type: "buttonCommand",
		code: `
$onlyIf[$interactionID==delete;]
$onlyForIDs[$pavez[id];$yuka[id];$guillermo[id];660970791202062381;
$ephemeral
$title[1;Error >> Required permissions]
$thumbnail[1;$authorAvatar]
$description[1;This command is for developers only]
$color[1;001]
]

$deleteMessage[$channelID;$messageID]
		`
	}
]  

module.exports = RebootCmd 