const FunctionInformationCmd = [
	{
		type: "basicCommand",
		name: "function",
		code: `
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