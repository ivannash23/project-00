var countP1= 1;
var countP2= 1;
document.addEventListener("keydown", function(event) {
  	if(event.which == 39){
  		topCar();
  	}if(event.which == 65){
  		bottomCar();
  	}
})

function topCar(){
	$("#top-car").attr("class",`col-md-1 col-md-offset-${countP1}`);
  		countP1++;
  		if(countP1 > 11){
  			alert("Shake and Bake, Ricky Bobby! Player 1 Won!");
  			location.reload();
  		}
}

function bottomCar(){
	$("#bottom-car").attr("class",`col-md-1 col-md-offset-${countP2}`);
  		countP2++;
  		if(countP2 > 11){
  			alert("You are not first, you are last! Player 2 Won!");
  			location.reload();
  		}
}