function numberWithTenToBase(number, base){
	return number.toString(base);
}
function numberWithBaseToTen(number, originBase){
	return parseInt(number, originBase)
}
function numberWithBaseToBase(number, originBase, newBase){
	var tenBase = numberWithBaseToTen(number, originBase);
	return numberWithTenToBase(tenBase, newBase);
}
function randomNumber(min, max){
	var x = (Math.random() * (max - min)) + min;
	return parseInt(x);
}
function niceRandomCommaNumber(){
	var ret = 0;
	var it = randomNumber(0,4);
	console.log(it);
	for (var i = 0; i < it; i++) {
		ret += randFromArray([0, 0.5, 0.25, 0.125, 0.0625])
	}
	return ret;
	
}
function randomYesNo(){
	var min = 1;
	var max = 3;
	var x = (Math.random() * (max - min)) + min;
	return parseInt(x) == 1;
}
function randFromArray(arr){
	return arr[randomNumber(0, arr.length)];
}

function twosCompl(d){
return (~d + 1 >>> 0).toString(2);
}
