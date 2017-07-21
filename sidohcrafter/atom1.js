var simi = require('utils')

exports.Block = function() {
  var electro = new Drone(simi.getPlayerPos(self));

  //Grundgerüst

  electro.box('155:0',40,8,1);
  electro.right(40);
  electro.turn(3);
  electro.box('155:0',20,8,1);
  electro.right(20);
  electro.turn(3);
  electro.chkpt('Ecke1');
  electro.box('155:0',10,8,1);
  electro.right(10);
  electro.up(3);
  electro.box('155:0',2,5,1);
  electro.right(2);
  electro.down(3);
  electro.chkpt('Tür1rechts');
  electro.box('155:0',16,8,1);
  electro.right(16);
  electro.up(3);
  electro.box('155:0',2,5,1);
  electro.right(2);
  electro.down(3);
  electro.box('155:0',10,8,1);
  electro.right(10);
  electro.turn(3);
  electro.box('155:0',20,8,1);

  //Bühnenbau

  electro.move('Tür1rechts');
  electro.right(1);
  electro.fwd(1);
  electro.box('5:0',14,1,4);

  //Bühnenumrandung

  electro.move('Tür1rechts');
  electro.fwd(1);
  electro.box('126:0',1,1,4);
  electro.fwd(4);
  electro.box('126:0',15,1,1);
  electro.right(15);
  electro.turn(1);
  electro.box('126:0',5,1,1);

  //Dach

  electro.move('Ecke1');
  electro.up(8);
  electro.prism0('20',40,20);

  //Teppich

  electro.move('Tür1rechts');
  electro.fwd(1);
  electro.left(1);
  electro.rand(['171:14'],1,1,5);
  electro.fwd(5);
  electro.turn(1);
  electro.rand(['171:14'],1,1,18);
  electro.fwd(17);
  electro.turn(1);
  electro.rand(['171:14'],1,1,6);
  electro.fwd(6);

  electro.move('Tür1rechts');
  electro.fwd(1);
  electro.left(2);
  electro.rand(['171:14'],1,1,6);
  electro.fwd(6);
  electro.turn(1);
  electro.rand(['171:14'],1,1,19);
  electro.fwd(19);
  electro.turn(1);
  electro.rand(['171:14'],1,1,7);
  electro.fwd(7);

  //Tribüne

  electro.turn(3);
  electro.fwd(1);
  electro.left(6);

  var i=9;
  for(;i>0;i=i-2){
    electro.box(['156'],6,1,1);
    electro.fwd(1);
    electro.box(['155'],6,1,i);
    electro.up(1);
    electro.fwd(1);
  }
}
