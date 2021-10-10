module.exports = (client) => {
	const dbd = require(`dbd.ts`)
	const status = new dbd.StatusManager(client)
	status.add({
		name: `Running whit dbd.ts | v$botVersion`,
		presence: "dnd",
	})
	status.start()
}