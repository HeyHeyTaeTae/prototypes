function Starship (model, ownerName) {
  
this.model = model;
this.ownerName = ownerName;
this.topSpeed = 1000;
this.currentSpeed = 0;
}

Starship.prototype.setTopSpeed = function (newTopSpeed) {

	this.topSpeed = newTopSpeed;

}

Starship.prototype.getTopSpeed = function () {

	return this.topSpeed;

}

Starship.prototype.accerlateTo = function (givenSpeed) {

	if (givenSpeed < this.topSpeed && givenSpeed > this.currentSpeed) {
		
		this.currentSpeed = givenSpeed;

		return givenSpeed;

	}

}