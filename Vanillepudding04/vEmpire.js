var utils = require('utils');

exports.vEmpire = function () {
    // Erstelle eine Drohne an der Position deines Spielers
    var d = new Drone(utils.getPlayerPos(self));

    d.box(blocks.iron, 16, 40, 11);
    
    d.right(2);
    d.fwd(1);
    d.up(40);
    d.box(blocks.iron, 12, 16, 9);
    
    d.right(2);
    d.fwd(1);
    d.up(16);
    d.box(blocks.iron, 8, 14, 7);
    
    d.right(1);
    d.fwd(1);
    d.up(14);
    d.box(blocks.iron, 6, 11, 5);
    
    d.right(1);
    d.fwd(1);
    d.up(11);
    d.box(blocks.iron, 4, 7, 3);
    
    d.right(1);
    d.fwd(1);
    d.up(7);
    d.box(blocks.iron, 2, 10, 1);
  
};
