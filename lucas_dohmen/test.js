function boxbuildtest() {
    this.chkpt('ecke_außen_vorne_links');
    this.box('42:0',2,4,1);
    this.right(2);
    this.door();
    this.chkpt('tuer');
    this.right();
    this.box('42:0',2,4,1);
    this.right(2);
    this.turn(3);
    this.chkpt('ecke_außen_vorne_rechts');
    this.box('42:0',10,4,1);
    this.right(10);
    this.turn(3);
    this.chkpt('ecke_außen_hinten_rechts');
    this.right(1);
    this.box('42:0',5,4,1);
    this.right(5);
    this.chkpt('ecke_außen_hinten_links');
    this.turn(3);
    this.right(1);
    //this.box('42:0',10,4,1);
    this.rand([blocks.brick.stone,blocks.brick.mossy,blocks.brick.cracked], 10,4,1);
    //this.right(10);
    this.move('ecke_außen_vorne_links');

    // dach
    this.up(4);
    this.left(1);
    this.box('42:0', 7,1,10);

    this.move('tuer');
    this.up(2);
    this.box('42:0', 1, 2, 1);

    //torch = blocks.torch + ':' + Drone.PLAYER_TORCH_FACING[this.dir];

    this.move('ecke_außen_vorne_rechts');
    this.right(3).turn(2).up(2).back().hangtorch().left(3).hangtorch();

};

drone = require('drone');
drone.extend(boxbuildtest)

var utils = require('utils');
exports.boxbuildtest2 = function() {
  drone = new Drone(utils.getPlayerPos(self));
  drone.box(blocks.oak);
};
