module.exports = (client) => {

client.createSlashCommandData({
  type: "CHAT_INPUT",
  name: "eval",
  description: "Evaluate a code from dbd.ts",
  options: [
    {
      name: "code",
      description: "Code in dbd.ts that you want to evaluate",
      required: true,
      type: "STRING"
    }
  ]
})
	
}