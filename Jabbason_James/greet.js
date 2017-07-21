//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};
