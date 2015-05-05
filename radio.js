function Radio (ownerName, signalType) {
	
	this.ownerName = ownerName;
	this.station;
	this.signalType = signalType;
	this.setStation;
}

Radio.prototype.setStation = function (newStation) {
	if (this.signalType === 'AM') {

		if (newStation >= 535 && newStation <= 1705) {

			this.station = newStation;
			return newStation;

		} else if (this.signalType === 'FM') {
		
			if (frequency >= 88 && frequency >= 108) {

				this.station = newStation;
				return newStation;

			} else {

				console.log("You done fucked up.");

		}

	}
	 

    }
}

Radio.prototype.listen = function (amOrFm) {

	if (musicType === 'AM') {
		return 'distorted music';
	} else if (musicType === 'FM') {
		return 'clear music';
	}
}

Radio.prototype.setSignal