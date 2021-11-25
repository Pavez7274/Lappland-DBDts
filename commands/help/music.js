const MusicOption = [
	{
		type: "selectMenuCommand",
		code: `
$onlyIf[$interactionID==HelpMenu;]
$onlyIf[$includes[$interactionValues;HelpMenuMusic_]==true;]
$onlyIf[$interactionValues==HelpMenuMusic_$authorID;
$ephemeral
$title[1;Error]
$thumbnail[1;$authorAvatar]
$description[1;You are not the owner of this menu]
$color[1;001]
]

$updateInteraction
$title[1;Help Menu >> Music]
$addField[1;Play;Add a song or album to the queue
\`\`\`xml
??play <query>
\`\`\`]
$addField[1;Stop;Stop the queue
\`\`\`xml
??stop
\`\`\`]
$addField[1;Skip;Skip to the next song
\`\`\`xml
??skip
\`\`\`]
$addField[1;NowPlaying;Shows information about the track being played
\`\`\`xml
??nowplaying
\`\`\`]
$addField[1;Pause;Pause the queue
\`\`\`xml
??pause
\`\`\`]
$addField[1;Resume;Resume the queue
\`\`\`xml
??resume
\`\`\`]
$addField[1;Queue;Show the tracks in the queue
\`\`\`xml
??queue
\`\`\`]
$addField[1;Search;Search for a track
\`\`\`xml
??search <query>
\`\`\`]
$addField[1;Shuffle;Shuffle the queue
\`\`\`xml
??shuffle
\`\`\`]
$color[1;001]

$callFunction[HelpMenu]
$callFunction[log]
		`
	}
]

module.exports = MusicOption