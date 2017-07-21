var utils = require('utils');

exports.Mike = function(a,b,c ){
	var drone = new Drone(utils.getPlayerPos(self));
    drone.box(1,3,4,1)
    drone.right(3)
    drone.door()
    drone.right(1)
    drone.box(1,3,4,1)
    drone.right(3)
    drone.turn(3)
    drone.box(1,10,4,1)
    drone.right(10)
drone.turn(3)
drone.box(1,7,4,1)
drone.turn(3)
drone.box(1,7,4,1)

};
