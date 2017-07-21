var mqtt = require('own-mqtt.js');
// create a new client
var client = mqtt.getClient();
// connect to the broker

//  publish a message to the broker
//client.publish( 'minecraft', 'loaded' );
// subscribe to messages on 'arduino' topic
client.subscribe( 'arduino' );
//  do something when an incoming message arrives...
client.onMessageArrived( function( topic, message ) {
    console.log( 'Message arrived: topic=' + topic + ', message=' + message );
});
/**/
