const SetAfkCmd = [
  {
    type: "basicCommand", 
		name: "afk", 
		code: `
$reply[$messageID;false]
$if[$dbGet[$authorID.afk.status;true;false]==false;
$if[$message!=;
$let[x;$message]
;
$let[x;No reason given]
]

$title[1;Always from the keyboard]
$thumbnail[1;$authorAvatar]
$addField[1;Reason;$get[x]]
$color[1;001]
$dbSet[$authorID.afk.status;true;false]
$dbSet[$authorID.afk.reason;$get[x];false]
;
AFK removed
$dbDelete[$authorID.afk]
]
`
  }
] 

module.exports = SetAfkCmd 