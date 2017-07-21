//Funktion die Festlegt ob Tnt erlaubt ist
exports.allowTnt =function(bool){
  if (typeof tntStopper === 'undefined' || tntStopper === null){  //Sollte die Variable tntStopper nicht vorhanden sein
    var slash = require('slash');                                 //lädt das Slash Plugin
    slash("js var tntStopper=false");                             //und legt diese im Namen des Servers an (mit dem Wert false)
  }
  var selector=require("/selector.js");                           //die selector datei wird geladen
  if(!bool){                                                      //Wird TNT verboten (nicht erlaubt übergabe false)
      if(!tntStopper){                                            //wird zu erst geprüft ob TNT schon verboten ist
      tntStopper=true;                                            //Wenn nicht, wird die Stopper Variable gesetzt
      selector.writeAllPlayers("Explosionen wurden deaktiviert"); //ein Hinweis an alle Spieler gesendet
      events.entityExplode(denyTnt);                              //Un der denyTnt Handler regestriert
    }
    else{
      selector.writeAllPlayers("Explosionen sind bereits deaktiviert")  //Sollte TNT bereits verboten sein, wird dies lediglich bekannt gegeben (um doppelte Event Handler zu vermeiden)
    }
  }
  else{                                                           //Wenn TNT erlaubt wird (übergabe true)
    tntStopper=false;                                             //wird der tntStopper auf false gesetzt
    selector.writeAllPlayers("Explosionen wurden aktiviert");     //und alle Spieler informeirt
  }
}

//Der Event Handler um TNT zu blockieren
function denyTnt(event){
  if(!tntStopper){            //Wird TNT wieder erlaubt
    this.unregister();        //Entfernt die nächste Explosionen den EventHandler
  }
  else{                                   //Solange TNT verboten ist
    event.setCancelled(tntStopper);       //Wird jede Explosionen abgebrochen
    var selector=require("/selector.js"); //Die selector Datei wird aufgerufen
    //selector.writeAllPlayers("Explosionen sind derzeit nicht erlaubt!");  //und alle Spieler informeirt das etwas hätte explodieren sollen
  }
}
