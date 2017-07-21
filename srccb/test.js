var utils = require('utils');

var my_plugin = plugin('my_plugin_1', {
  help: function() {
    return [
      'Hello World!'
    ];
  },
}, true);

exports.my_plugin = my_plugin;


var options = {
  'help': function(params, sender) {
    echo(sender, my_plugin.help())
  }
};

// var optionList = [];
// for ( var o in options ) {
//   optionList.push(o);
// }

command( 'my_command', function ( params , sender) {
  var option;

  option = options[ params[0] ];

  if ( option ) {
    option( params, sender );
  }
} );
