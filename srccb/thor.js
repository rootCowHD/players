var lightning = require('lightning');
var utils = require('utils');

var thor = plugin('thor', {
    buildThrone: function(player) {
        var drone = new Drone(utils.player(player));
        drone.arc({
          radius: 8,
          fill: true,
          orientation: 'horizontal',
          stack: 1
        });

    },
}, true);

exports.thor = thor;


var options = {
  'buildThrone': function(params, sender) {
    thor.buildThrone(sender);
  }
};

command('thor', function (params , sender) {
  var option;
  option = options[ params[0] ];

  if (option) {
    option(params, sender);
  }
});
