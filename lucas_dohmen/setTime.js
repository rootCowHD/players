var utils = require('utils'),
    signs = require('signs');

var onTimeChoice = function(event){
    var selectedIndex = event.number;
    // convert to Minecraft time 0 = Dawn, 6000 = midday, 12000 = dusk, 18000 = midnight
    var time = selectedIndex * 6000; 
    event.player.location.world.setTime(time);
};
