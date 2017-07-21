var Drone=require("Drone");                   //Lade das Drohnen Objekt (wird zum bauen benötigt)

//Eine einfache Straße
exports.buildRoad = function(material, length, width){  //Eine Funktion zum Wege bauen, benötigt werden Material, Länge und Breite
  if(!material) material=blocks.gravel;                 //Falls kein Material übergeben wurde, wird Kies (gravel) verwendet
  if(!length) length=10;                                //Falls die Länge nicht übergeben wird, wird diese auf 10 gesetzt
  if(!width)  width=3;                                  //Bei der Breite wird diese auf 3 gesetzt
  box(material,width,1,length);                         //Die Box ist ein gebautes Objekt.

  /**
    Gebaut wird ab dem Block auf den gezielt wird.
    Zuerst nach rechts (breite).
    Dann nach oben (höhe, da wir die Straße in der Erde haben wollen, ist die Höhe 1 und verändert nur die Ziel Schicht)
    Zuletzt folgt noch die Tiefe(Länge).
  /**/
}

//Eine deutlich ausgeklügeltere Straße
/**
  Hier gibt es einige Parameter extra in der Funktion:
  material:         Das Material der Straße
  middleMaterial:   Das Material für den Mittelstreifen
  sideMaterial:     Das Material für die Seitenstreifen(Bürgersteig)

  length:           Die Länge der Straße
  widthL:           Die Breite der Linken Seite
  widthR:           Die Breite der Rechten Seite
  widthM:           Die Breite des Mittelstreifen
  widthS:           Die Breite der Seitenstreifen

  offset:           Die höhe des Seitenstreifen
/**/
exports.buildStreet=function(material,middleMaterial,sideMaterial,length,widthL,widthR,widthM,widthS,offset){
  if(!material) material=blocks.stone;
  if(!middleMaterial) middleMaterial = blocks.grass;
  if(!sideMaterial) sideMaterial = blocks.slab.brick;
  if(!length) length=25;
  if(!widthL && !widthR) widthL=widthR=2;       //Wenn weder die Breite von rechts noch von links angegeben wird, wird diese auf 2 gesetzt
  else if(widthL && !widthR)  widthR = widthL;  //Ist die linke Seite angegeben, aber nicht die rechte wird die rechte Breite auf die der linken gesetzt
  else if(widthR && !widthL)  widthL = widthR;  //oder andersrum
  if(!widthM) widthM = 1;
  if(!widthS) widthS =1;

  //Die Befehle der Drohne lassen sich mit einem Punkt (.) verketten.
  up(offset).                                     //up, down, left und right verändern die Position
  box(sideMaterial,widthS,1,length).
  down(offset).
  right(widthS).
  box(material,widthL,1,length).
  right(widthL).
  box(middleMaterial,widthM,1,length).
  right(widthM).
  box(material,widthR,1,length).
  right(widthR).
  up(offset).
  box(sideMaterial,widthS,1,length);
}
