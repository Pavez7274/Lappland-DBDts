const NamesCmd = [
	{
		type: 'basicCommand', 
		name: 'search-invalid-names', 
		aliases: ['searchinvalidnames', 'sin'], 
		code: `
$js[false;
let arr = [\\]
d.guild.members.fetch().then((x) => {
	const members = Array.from(x)
for(const member of members){
	const user = member[1\\]
	const firstChar = String(user.displayName).split('')[0\\]
	if(isSymbol(firstChar)) arr.push('<@!' + user.id + '>')
}
d.keywords.users = arr.join(', ') || 'No users with invalid names' 
})
;0]

$title[1;List]
$description[1;$get[users]]
$color[1;001]
		`
	}
]

module.exports = NamesCmd 