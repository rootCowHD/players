//Try running this function from Minecraft with: /js $username.hi( self )

//Remember to use your real username instead of $username!

//So if you had username 'walterh', you would run: /js walterh.hi( self )


exports.hi = function( player )
{

	echo( player, 'Hi ' + player.name);

};

exports.Haus= function(){
box(57,10,1,10).box0(57,10,20,10).up(20).box(41,10,1,10).fwd(4).right(4).down(19).box(89,2,18,2);
};
