var utils = require('utils');

exports.firestone = function() {
  var drone = new Drone(utils.getPlayerPos(self));

  drone.up(1);
  drone.box(1, 1, 1, 1);
  drone.up(1);
  drone.box(51, 1, 1, 1);
};
