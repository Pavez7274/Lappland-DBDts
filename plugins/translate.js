/**
 * By YukitaDev || updated by Pavez#7274
 * @type {import("dbd.ts").FunctionData}
 */
const func = {
	name: '$translate',
	description: 'Translation function',
	brackets: true,
	execute: async (d, fn) => {
		let [text, lang] = await fn.resolveArray(d)
		const axios = require('axios')
		let res

		try {
			res = await axios.request({
				url: `https://translate-api.ml/translate?text=${text}&lang=${lang}`,
				method: 'GET',
				responseType: 'text',
				transformResponse(data) {
					try {
						return JSON.parse(data)
					} catch {
						return data
					}
				}
			})
		} catch (err) {
			return d.container.sendError(fn, err.message)
		}

		return fn.resolve(
			res.data.translated.text
		)
	},
	fields: [
		{
			name: 'text',
			required: true,
			type: 'STRING'
		},
		{
			name: 'lang',
			required: true,
			type: 'STRING'
		}
	]
}

module.exports = func