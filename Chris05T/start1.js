var utils = require('utils');

exports.start1=function(b,h,t,s){
	
	var d = new Drone(utils.getPlayerPos(self))
	
	if(s>5){
		s=5
		}
	if(h>6){
		h=6
	}
	for(var i=0;i<s;i++){
	
	d.box0(20,b,h,t).box(1,b,1,t).up(h-1).box(1,b,1,t);
	
	}
	
}