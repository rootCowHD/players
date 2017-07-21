//Try running this function from Minecraft with: /js $username.hi( self )
//Remember to use your real username instead of $username!
//So if you had username 'walterh', you would run: /js walterh.hi( self )
exports.hi = function( player ){
	echo( player, 'Hi ' + player.name);
};
exports.house = function( ){

	box(42,10,1,10).box0(95,10,20,10).up(20).box(89,10,1,10);  // floor

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

exports.football2 = function(){
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
// bramka 1
move ('start');
right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);
// siatka 1
move ('start');
back(1).right(20).box(30,20,10,1);
// bramka 2
move ('start');
fwd(119).right(20).box0(42,1,10,1).up(10).box0(42,21,1,1).right(20).down(10).box0(42,1,10,1);
//siatka 2
move ('start');
fwd(121).back(1).right(20).box(30,20,10,1);

for(var i=0;i<7;i++)
{
move('start');
left(3).back(2).up(1).turn(3).up(i).fwd(i).box(134,124,1,1);
};
for(var i=0;i<7;i++)
{
move('start');
right(64).left(3).back(2).up(1).turn(1).up(i).fwd(i).left(124).box(134,124,1,1);
};


for(var i=0;i<7;i++)
{
move('start');
right(62).back(6).up(1).turn(2).up(i).fwd(i).box(134,64,1,1);

};



for(var i=0;i<7;i++)
{
move('start');
fwd(126).left(2).fwd(6).up(1).up(i).fwd(i).box(134,64,1,1);

};

};



exports.home2 = function() {
box(89,10,1,10).box0(57,10,20,10).up(20).box(89,10,1,10).times(3).box0(41,10,1,10).up(1).right(1).fwd(1).box0(41,8,1,8).up(1).right(1).fwd(1).box0(41,6,1,6).up(1).right(1).fwd(1).box0(41,4,1,4).up(1).right(1).fwd(1).box0(41,2,1,2) ; 
};


exports.home3 = function() {
box(89,10,1,10).box0(57,10,20,10).right(4).up(1).door() ;
 };
 
 
 exports.home4 = function() {
castle(100,40);
 };
 exports.home5 = function() {
 cottage();
 };
 exports.home6 = function() {
 temple(100);
 };
 exports.home7 = function()  {
 dancefloor(40,40);
 };
 exports.home8 = function()  {
 garden(20,20);
 };
 exports.home9 = function()  {
 box0(24,30,1,30).up(1).right(1).fwd(1).box0(24,28,1,28).up(1).right(1).fwd(1).box0(24,24,1,24).up(1).right(1).fwd(1).box0(24,22,1,22).up(1).right(1).fwd(1).box0(24,20,1,20).up(1).right(1).fwd(1).box0(24,18,1,18).up(1).right(1).fwd(1).box0(24,14,1,14).up(1).right(1).fwd(1).box0(24,12,1,12).up(1).right(1).fwd(1).box0(24,10,1,10).up(1).right(1).fwd(1).box0(24,8,1,8).up(1).right(1).fwd(1).box0(24,4,1,4).up(1).right(1).fwd(1).box0(24,2,1,2);
 };
 
 