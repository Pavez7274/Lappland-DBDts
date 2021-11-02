module.exports = (client) => {
	const { StatusManager } = require(`dbd.ts`)
	const status = new StatusManager(client)
	status.add({
		name: `Developed by Kaede Studio | v$botVersion`,
		presence: "dnd",
	})
	status.start()
}