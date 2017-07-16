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
function randFromArray(arr){
	return arr[randomNumber(0, arr.length)];
}

function twosCompl(d){
return (~d + 1 >>> 0).toString(2);
}
