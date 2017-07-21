//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};
exports.house = function( ){

	box(44,10,1,10).box0(42,10,20,10).up(20).box(89,10,1,10);  // floor

};
exports.football = function(){
chkpt('start');
box0(80,60,1,60).fwd (60).box0(80,60,1,60).turn(1).fwd(22).left(8).arc({blockType: 80,
	meta: 0,
	radius: 8,
     strokeWidth: 1,
  //   quadrants: { topright: true },
     orientation: 'horizontal',
     stack: 1,
     fill: false
	 } );
move('start');
right(10).box0(80, 40,1,20).fwd(100).box0(80, 40,1,20)	;
move ('start');
right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);
move ('start');
fwd(120).right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);

};
