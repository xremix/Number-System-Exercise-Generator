var numberSytems = {
	decimalToBase: function(number, base){
		return number.toString(base);
	},
	numberWithBaseToDecimal: function(number, originBase){
		return parseInt(number, originBase)
	},
	numberWithBaseToBase: function(number, originBase, newBase){
		var tenBase = numberSytems.numberWithBaseToDecimal(number, originBase);
		return numberSytems.decimalToBase(tenBase, newBase);
	},
	twosCompl: function(d){
		return (~d + 1 >>> 0).toString(2);
	}

};

var randomizer = {
	randFromArray: function(arr){
		return arr[randomizer.randomNumber(0, arr.length-1)];
	},

	randomNumber: function(min, max){
		max++;
		var x = (Math.random() * (max - min)) + min;
		return parseInt(x);
	},
	niceRandomCommaNumber: function(){
		var ret = 0;
		var it = randomizer.randomNumber(0,4);
		console.log(it);
		for (var i = 0; i < it; i++) {
			ret += randomizer.randFromArray([0, 0.5, 0.25, 0.125, 0.0625])
		}
		return ret;
		
	},
	randomYesNo: function(){
		var min = 1;
		var max = 3;
		var x = (Math.random() * (max - min)) + min;
		return parseInt(x) == 1;
	},
};