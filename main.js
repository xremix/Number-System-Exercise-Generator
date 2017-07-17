function clearExercise(){
	document.getElementById("exercise1").innerHTML = "";
}
function addTextToExcercise(newText){
	document.getElementById("exercise1").innerHTML = document.getElementById("exercise1").innerHTML + newText;
	console.log(newText);
}
function addTextToExcerciseSolution(newText){
	addTextToExcercise('<span class="solutionText">Das Ergebnis ist ' + newText +"</span>");
}

function numberSystemExercise(){
	var number = randomizer.randomNumber(20,200);
	var originBase = randomizer.randomNumber(2, 16);
	var originBaseNumber = numberSytems.decimalToBase(number, originBase);
	var newBase = randomizer.randFromArray([2, 4, 8, 10, 16]);
	while(newBase == originBase){
		console.log("doh, that was the same base");
		newBase = randomizer.randFromArray([2, 4, 8, 10, 16]);
	}
	// originBaseNumber = "54";
	// originBase = 6;
	// newBase = 10;

	addTextToExcercise("Die Zahl " + originBaseNumber.toUpperCase() + "<sub>" + originBase + "</sub> soll in eine Zahl umgerechnet werden mit der Basis " + newBase + "<br/>");
	addTextToExcerciseSolution(numberSytems.numberWithBaseToBase(originBaseNumber, originBase, newBase).toUpperCase()+"<sub>"+ newBase +"</sub>");
}

function ieeExercise(){
	// Rand Number
	// TODO decrease the randomnes for 0 - we want more 0s!!!
	var n = randomizer.randomNumber(1,100);
	// TODO REMOVE!
	// n = 0;
	// Comma Value
	// TODO make functionality to add multiple of these numbers
	n = n+randomizer.niceRandomCommaNumber();
	// Negative
	if(randomizer.randomNumber(1,2) == 1){
		n = -n;
	}

	if(randomizer.randomYesNo()){
		addTextToExcercise("Dezimal zu IEEE 754<br/>");
		addTextToExcercise(n + "<br/>");
		addTextToExcerciseSolution(toIEEE754SingleString(n) + "<br/>");
	}else{
		addTextToExcercise("IEEE 754 zu Dezimal<br/>");
		addTextToExcercise(toIEEE754SingleString(n) + "<br/>");
		addTextToExcerciseSolution(n + "<br/>");
	}
}

function binExercise(){
	// Rand Number
	var n = randomizer.randomNumber(1,100);
	if(randomizer.randomNumber(1,2) == 1){
		n = -n;
	}
	if(randomizer.randomYesNo()){

		addTextToExcercise("Dezimal zu Bin&auml;r<br/>");
		addTextToExcercise(n + "<br/>");
		addTextToExcerciseSolution(numberSytems.decimalToBase(n, 2) + "<br/>");
	}else{
		addTextToExcercise("Bin&auml;r zu Dezimal<br/>");
		addTextToExcercise(numberSytems.decimalToBase(n, 2) + "<br/>");
		addTextToExcerciseSolution(n + "<br/>");
	}
}

function binCommaExercise(){
	// Rand Number
	var n = randomizer.randomNumber(1,100);
	if(randomizer.randomNumber(1,2) == 1){
		n = -n;
	}
	n = n + randomizer.niceRandomCommaNumber();
	if(randomizer.randomYesNo()){

		addTextToExcercise("Dezimal zu Bin&auml;r<br/>");
		addTextToExcercise(n + "<br/>");
		addTextToExcerciseSolution(numberSytems.decimalToBase(n, 2) + "<br/>");
	}else{
		addTextToExcercise("Bin&auml;r zu Dezimal<br/>");
		addTextToExcercise(numberSytems.decimalToBase(n, 2) + "<br/>");
		addTextToExcerciseSolution(n + "<br/>");
	}
}

function twosComplementExercise(bit, max){
	// Rand Number
	var n = randomizer.randomNumber(1,max);
	if(randomizer.randomNumber(1,2) == 1){
		n = -n;
	}
	if(randomizer.randomYesNo()){
		addTextToExcercise("Dezimal zu Zweier Komplement<br/>");
		addTextToExcercise(n + "<br/>");
		addTextToExcerciseSolution(twosComplement(n, bit) + "<br/>");
	}else{
		addTextToExcercise("Zweier Komplement zu Dezimal<br/>");
		addTextToExcercise(twosComplement(n, bit) + "<br/>");
		addTextToExcerciseSolution(n + "<br/>");
	}
}

function addExerciseTitle(title){
	addTextToExcercise("<br/><br/>");
	addTextToExcercise("<b>"+title+"</b><br/>");
}

function newExercises(){
	clearExercise();

	addExerciseTitle("Aufgabe 1) Zahlensysteme:");
	numberSystemExercise();

	addExerciseTitle("Aufgabe 2a) Bin&auml;r - Dezimal:");
	binExercise();

	addExerciseTitle("Aufgabe 2b) Bin&auml;r - Dezimal mit Komma:");
	binCommaExercise();

	addExerciseTitle("Aufgabe 3a) Zweierkomplement (8bit):");
	twosComplementExercise(8, 100);

	addExerciseTitle("Aufgabe 3b) Zweierkomplement (16bit):");
	twosComplementExercise(16, 1000);

	addExerciseTitle("Aufgabe 4) IEEE 754:");
	ieeExercise();
}
function showSolutions(){

	var x = document.getElementsByClassName('solutionText');
	for (var i = 0; i < x.length; i++) {
		x[i].classList.toggle("showSolution");
	}
	// document.('solutionText').toggleClass("show")
}

newExercises();