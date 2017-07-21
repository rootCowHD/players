var utils = require('utils');
var haus = require('./house')

exports.dorf = function () {





  var d = new Drone(utils.getPlayerPos(self));


    d.chkpt("start");

    d.move("start");
    d.box('35:15', 4, 1, 40);
    d.right(4);
    d.box('35:0', 1, 1, 40);
   d.right(1);
   d.box('35:15', 4, 1, 40);

   d.move("start");
   d.left(15);
    haus.house(d);

};
