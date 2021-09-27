const AoiApiCmd = [
  {
    type: "basicCommand", 
    name: "aoi", 
    code: `
$reply[$messageID;false]

$title[1;Aoi.Js API]
$addField[1;Description;$httpGet[https://api.leref.ga/functions/$message?limit=1&page=1;data[0\\].desc;
$title[1;Error >> Not found]
$description[1;Could not find the function]
$color[1;001]
]]
$addField[1;Usage;\`\`\`js
$httpGet[https://api.leref.ga/functions/$message?limit=1&page=1;data[0\\].usage]
\`\`\`]
$color[1;001]
`
  }
]

module.exports = AoiApiCmd 