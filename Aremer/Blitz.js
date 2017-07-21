/** Beispiele fürs coderDojo
	*	Version 0.1
	**/

//Schiesst einen Blitz auf einen Spieler, sender sollte immer self sein
exports.schock = function(target, sender){
	if(target == sender){								//Überprüft ob man selbst das Ziel ist
		player=target;
	}
	else {
		var selector=require("/selector.js");				//Lädt die selector Datei um Spieler zu finden
		player=selector.getPlayer(target);					//Wenn nicht wird das Ziel gesucht
	}
	if(!player){												//Wird das Ziel nicht gefunden, wird der Spieler benachrichtigt
		echo(sender,"Spieler nicht gefunden");
	}
	else{
		world =player.world;								//Speichert die aktuelle Welt des Spielers
		position = player.getLocation();	//holt sich die Position des Spielers
		world.strikeLightning(position); 	// Lässt die Welt einen Blitz auf die Position werfen
	}/**/
}
