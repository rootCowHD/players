var utils = require('utils');

exports.haus = function () {

   var d = new Drone(utils.getPlayerPos(self));



   d.chkpt("start");

   d.box('2', 15, 1, 15);
   d.right(3);
   d.fwd(3);
   d.box('5:5',8, 1, 8);
   d.up(1);
   d.chkpt("ecke");
   d.box('5:5', 1, 4, 8);
   d.right(1);
   d.box('5:5', 7, 4, 1);
   d.right(6);
   d.fwd(1);
   d.box('5:5', 1, 4, 7);
   d.fwd(6);
   d.left(6);
   d.box('5:5', 6, 4, 1);
   d.move("ecke");
   d.right(2);
   d.up(1);
   d.box('102', 4, 2, 1);
   d.fwd(7);
   d.box('102', 4, 2, 1);
   d.move("ecke");
   d.up(1);
   d.fwd(1);
   d.box('102', 1, 2, 1);
   d.fwd(5);
   d.box('102', 1, 2, 1);
   d.move('ecke');
   d.fwd(4);
   d.turn(1);
   d.door2('197');
   d.fwd(7);
   d.turn(2);
   d.left(1);
   d.door2('197');
   d.move("ecke");
   d.right(7);
   d.turn(3);
   d.right(1);
   d.up(1);
   d.box('102', 1, 2, 1);
   d.right(5);
   d.box('102', 1, 2, 1);

//Dach
   d.move("ecke");
   d.up(4);
   d.fwd(1);
   d.box('5:5', 8, 1, 6);
   d.fwd(1);
   d.up(1);
   d.box('5:5', 8, 1, 4);
   d.fwd(1);
   d.up(1);
   d.box('5:5', 8, 1, 2);
   d.move("ecke");
   d.up(3);
   d.back(1);
   d.left(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.move("ecke");
   d.right(7);
   d.fwd(7);
   d.turn(2);
   d.up(3);
   d.back(1);
   d.left(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
   d.fwd(1);
   d.up(1);
   d.box('134', 10, 1, 1);
//Dach zuende

//Inneneinrichtung
   d.move("ecke");
   d.right(1);
   d.fwd(1);
   d.box('50', 1, 1, 1);
   d.right(5);
   d.box('50', 1, 1, 1);
   d.fwd(5);
   d.box('50', 1, 1, 1);
   d.left(5);
   d.box('50', 1, 1, 1);
   d.move("start");




};
