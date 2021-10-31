module.exports = (client) => {

client.addEvent([
  'onMessage',
	'onMessageDelete',
	'onMessageUpdate',
  'onInteraction', 
  'onJoin', 
  'onLeave',
	'onReady',
])
	
}