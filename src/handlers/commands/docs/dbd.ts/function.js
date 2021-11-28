const FunctionInformationCmd = [
	{
		type: "basicCommand",
		name: "function",
		code: `
$reply[$messageID;false]

$onlyIf[$endsWith[$message;--help]!=true;
$title[1;Help >> Function]
$thumbnail[1;$authorAvatar]
$description[1;**usage**
\`\`\`
??function <function>
\`\`\`
**fields**
function: name

**returns**
Description, Usage, Params]
$color[1;001]
]
$js[false;

	axios.request({
		url: 'https://ruben.leref.repl.co/functions/embed?q=$message',
		method: 'GET',
		responseType: 'text',
		transformResponse(data) {
			try {
				return JSON.parse(data)
			} catch {
				return data
			}
		}
	}).then(res => {
		if(!res.data){
			d.channel.send("I couldn't find that function")
		} else{
			res.data.color = '#000001'
			d.channel.send({ embeds:[ res.data \\] })
		}
	})

]
		`
	}
]

module.exports = FunctionInformationCmd