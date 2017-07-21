var utils=require('utils')
exports.Fliegestarb=function(){
drone=new Drone(utils.getPlayerPos(self));

var $self = self;
/*
events.playerItemHeld(function(event){
	
	
	if (event.player.name=='Jabbason_James'){
		var inventory = $self.inventory;
		var mainHand = inventory.getItemInMainHand().getType();
		echo(mainHand);
		echo(event.getNewSlot())
		if(mainHand=='STICK'){
			echo('Stock Equipped')
			levitate($self)
		}
	}
	
	
	
}); */

events.on( org.bukkit.event.player.PlayerChangedMainHandEvent, function( event, cancel ) { 
  if (event.player.name=='Jabbason_James'){
		
		var mainHand = event.getMainHand()
		echo(mainHand)
		if(mainHand=='STICK'){
			echo('Stock Equipped')
			levitate($self)
		}
	}
} );

};


function levitate(_self){
	var i=0;
	var $self = _self;
	var t= setInterval(function(){
		var p = new org.bukkit.potion.PotionEffect(org.bukkit.potion.PotionEffectType.LEVITATION,10,1);
		console.log(i)
		$self.addPotionEffect(p);
		i++
		if (i>=5){
			clearInterval(t)
		}
	}, 500);

	
}

//drone=require('drone');
//drone.extend(Fliegestarb)



