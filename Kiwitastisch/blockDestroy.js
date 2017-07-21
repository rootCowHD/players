exports.kiwi2 = function(){
events.blockDestroy( function( event ) { 
  echo( event.player, ' hat einen Block kaputt gemacht!'); 
});
};