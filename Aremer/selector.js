//Funktion um einen Spieler anhand seines Namens zu finden
exports.getPlayer = function(player){
	var utils = require("utils");				//Verschiedene Werkzeuge
	var players = utils.players();			//Lädt alle Spieler
	for(var i=0;i< players.length;i++)	//Geht jeden Spieler der Reihe nach durch
	{
		if(players[i].name == player)			//Wenn der Spielername dem gesuchten Namen entspricht
			return players[i];							//Gebe den Spieler zurück
	}
	return false;												//Wurde der Spieler nicht gefunden gebe false zurück
}

//Schreibt allen Spielern
exports.writeAllPlayers = function(text){
  var utils = require("utils");				//Verschiedene Werkzeuge
	var players = utils.players();			//Lädt alle Spieler
	for(var i=0;i< players.length;i++)	//Geht jeden Spieler der Reihe nach durch
	{
    echo(players[i],text);            //Ausgabe an jeden Spieler einzeln
  }
}
