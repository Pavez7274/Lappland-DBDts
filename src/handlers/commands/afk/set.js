const SetAfkCmd = [
	{
		type: "basicCommand", 
		name: "afk", 
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Afk]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??afk [reason\\]
\`\`\`
**fields**
reason: string

**returns**
Information]
$color[1;001]
]

$ignoreCode[
	If the user does not give a reason (message), 'no reason was given' will be used
]
$if[$message!=;
$let[x;$message]
;
$let[x;No reason given]
]

$ignoreCode[
	Set the variables and send an embed
]
$title[1;Away from the keyboard]
$thumbnail[1;$authorAvatar]
$addField[1;Reason;$get[x]]
$color[1;001]
$db[set;afk_$authorID_status;true]
$db[set;afk_$authorID_reason;$get[x]]
$db[set;afk_$authorID_stamp;$getTimestamp]
`
	}
] 

module.exports = SetAfkCmd 