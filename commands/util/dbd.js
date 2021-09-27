const DbdApiCmd = [
  {
    type: "basicCommand", 
    name: "dbd", 
    code: `
$reply[$messageID;false]

$title[1;DBD.Ts API]
$addField[1;Description;$httpGet[https://dbdts.leref.ga/function/$message?limit=1&page=1;description;
$title[1;Error >> Not found]
$description[1;Could not find the function]
$color[1;001]
]]
$addField[1;Fields;$httpGet[https://dbdts.leref.ga/function/$message?limit=1&page=1;fields;]]
$color[1;001]
`
  }
]

module.exports = DbdApiCmd 