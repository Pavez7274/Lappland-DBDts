module.exports = (client) => {

client.addEvent([
  "onMessage",
  "onInteraction", 
  "onJoin", 
  "onLeave"
])
	
}