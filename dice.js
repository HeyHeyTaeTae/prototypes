// Old Fashioned Way
function Dice (numberOfSides) {
  
  this.roll = function () {
   
   return Math.round(Math.random() * numberOfSides);
  
  };
}

//declare new variable
var dice = new Dice(numberOfSides);

//prototype time!
function Dice (numberOfSides) {

	this.numberOfSides = numberOfSides;

	return numberOfSides;
}

Dice.prototype.roll = function () {
	
	//assigns the evalution to the property lastRoll
	this.lastRoll = Math.round(Math.random() * this.numberOfSides);
	
	return this.lastRoll;
	
	} 
};