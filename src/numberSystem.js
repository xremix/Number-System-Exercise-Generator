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



// Source:https://gist.github.com/bsara/519df5f91833d01c20ec

/**
 * @param {Number} value
 * @param {Number} [bitCount = 0]
 * 
 * @returns {String} binary representation of the two's complement of `value`.
 */
function twosComplement(value, bitCount) {
  let binaryStr;
  
  if (value >= 0) {
    let twosComp = value.toString(2);
    binaryStr    = padAndChop(twosComp, '0', (bitCount || twosComp.length));
  } else {
    binaryStr = (Math.pow(2, bitCount) + value).toString(2);
    
    if (Number(binaryStr) < 0) {
      return undefined
    }
  }
  
  return `${binaryStr}`;
  // return `0b${binaryStr}`;
}

function padAndChop(str, padChar, length) {
  return (Array(length).fill(padChar).join('') + str).slice(length * -1);
}