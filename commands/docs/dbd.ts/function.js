const FunctionInformationCmd = [
	{
		type: "basicCommand",
		name: "function",
		code: `
$reply[$messageID;false]
$onlyIf[0==1;
$title[1;Error >> Disabled!!]
$thumbnail[1;$authorAvatar]
$description[1;This command was __disabled__ by a developer [<@!$pavez[id]>\\] since the *API of dbd.ts* domain change, once it is found which is the new one, the command will be reinstated]
$footer[1;Repair date: undefined]
$color[1;FF0000]
]

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
		url: 'https://dbdts.leref.ga/functions/embed?q=$message',
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
		d.channel.send({ embeds:[ res.data \\] })
		}
	})

]
		`
	}
]

module.exports = FunctionInformationCmd