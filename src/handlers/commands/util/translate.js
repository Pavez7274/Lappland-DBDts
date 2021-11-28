const TranslateCmd = [
	{
		type: 'basicCommand',
		name: 'translate',
		aliases: [ 'traducir', 'traductor', 'translator' ],
		code: `
$reply[$messageID;false]
$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Translate]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??translate <lang> <text>
\`\`\`
**fields**
lang: string
text: string

**returns**
string]
$color[1;001]
]

$onlyIf[$message[0]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [lang\\] is empty]
$color[1;001]
]

$onlyIf[$message[1]!=;
$title[1;Error >> Field >> Empty]
$thumbnail[1;$authorAvatar]
$description[1;\`Field 1\` [text\\] is empty]
$color[1;001]
]
$suppressErrors[the message could not be translated]
$let[res;$translate[$messageSlice[1];$message[0]]]

$title[1;Translator]
$thumbnail[1;$authorAvatar]
$addField[1;Input;$messageSlice[1]]
$addField[1;Output;$get[res]]
$color[1;001]
		`
	}
]

module.exports = TranslateCmd