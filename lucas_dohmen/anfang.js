  var utils = require('utils')

  exports.Block = function() {
    var drone = new Drone(utils.getPlayerPos(self));
    drone.box('138',6,6,1);

  }
