const SetAfkCmd = [
  {
    type: "basicCommand", 
		name: "afk", 
		code: `
$reply[$messageID;false]
$if[$message!=;
$let[x;$message]
;
$let[x;No reason given]
]

$title[1;Always from the keyboard]
$thumbnail[1;$authorAvatar]
$addField[1;Reason;$get[x]]
$color[1;001]
$db[set;afk_$authorID_status;true]
$db[set;afk_$authorID_reason;$get[x]]
$db[set;afk_$authorID_stamp;$dateNow]
`
  }
] 

module.exports = SetAfkCmd 