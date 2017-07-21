var bkArrow = org.bukkit.entity.Arrow;    //sucht die Eigenschaften eines Pfeiles
var bkPlayer = org.bukkit.entity.Player;  //sucht die Eigenschaften von Spielern
var selector=require("/selector.js");     //JS Datei zum auswählen von Spielern
var entities = require('entities');       //Funktionen für Objekte
var spawn = require('spawn');             //Funktionen um Objekte zu spawnen

if (typeof endersMode === 'undefined' || endersMode === null){  //Sollte die Variable endersMode nicht vorhanden sein
  var slash = require('slash');                                 //lädt das Slash Plugin
  slash("js var endersMode=false");                             //und legt diese im Namen des Servers an (mit dem Wert false)
  slash("js var store=persist('enders',{players:{ } } );");     //Ebenso die Variable der Spieler, persist bedeutet, dass diese auch nach einem neustart wieder geladen werden
}


//Startet den Ender Mode
exports.startEndersGame=function(){
  endersMode=true;                                          //Setzt den endersMode auf wahr
  selector.writeAllPlayers("Enders Game wurge gestartet");  //Informiert alle Spieler darübereits
  events.projectileHit(onEndersArrowHit);                   //und bindet den EventHandler an das projectileHit Event (jemand wird im Fernkamf getroffen)
}

//Beendet den Enders Mode, wie beim aktivieren, nur ohne EventHandler
exports.stopEndersGame=function(){
  endersMode=false;
  selector.writeAllPlayers("Enders Game wurge beendet");
}

//Gibt einen Spieler im Enders Mode frei oder sperrt diesen
exports.endersMode=function(target,state){    //Hier werden Spielername in Anführungszeichen und true oder false übergeben
  store.players[target.name]=state;           //In die Spielerliste wird der Spielername mit dem entsprechenden Status gespeichert

  //Alle Spieler werden informiert
  if(state){
    selector.writeAllPlayers(target.name + " ist jetzt im Enders Mode");
  }
  else{
    selector.writeAllPlayers(target.name + " hat den Enders Mode verlassen");
  }

}

//Der EventHandler
function onEndersArrowHit(event){
  if(endersMode){                       //Solange endersMode aktiv ist
    var projectile = event.entity;      //Hole die Projektil Alternative
    var world = event.world;            //Hole die Welt in der geschossen wurde
    var shooter = projectile.shooter;   //Hole den Schützen

    //Wenn das Projektil ein Pfeil und der Schütze ein Spieler ist
    if (projectile instanceof bkArrow && shooter instanceof bkPlayer){
      if(store.players[shooter.name]){                        //Und der Status des Spielers auf true steht
        spawn(entities.zombie(), projectile.location ); //Spawne einen Zombie an der Stelle des Projektils
      }
    }
  }
  else{
    this.unregister();  //Wenn endersMode nicht mehr Aktiv ist, entferne den Eventhandler
  }
}
