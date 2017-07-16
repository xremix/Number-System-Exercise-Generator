function clearExercise(){
			document.getElementById("exercise1").innerHTML = "";
		}
		function addTextToExcercise(newText){
			document.getElementById("exercise1").innerHTML = document.getElementById("exercise1").innerHTML + newText;
		}

		function numberSystemExercise(){
			var number = randomNumber(20,200);
			var originBase = randomNumber(1, 16);
			var originBaseNumber = numberWithTenToBase(number, originBase);
			var newBase = randFromArray([2, 4, 8, 10, 16]);
			while(newBase == originBase){
				console.log("doh, that was the same base");
				newBase = randFromArray([2, 4, 8, 10, 16]);
			}
			// originBaseNumber = "54";
			// originBase = 6;
			// newBase = 10;

			addTextToExcercise("Die Zahl " + originBaseNumber + " mit der Basis  " + originBase + " soll in eine Zahl umgerechnet werden mit der Basis " + newBase);
			addTextToExcercise("<br/>Das Ergebnis ist " + numberWithBaseToBase(originBaseNumber, originBase, newBase));
		}

		function ieeExercise(){
			// Rand Number
			var n = randomNumber(1,100);
			// Comma Value
			n = n+randFromArray([0, 0.5, 0.25, 0.125, 0.0625]);
			// Negative
			if(randomNumber(1,3) == 1){
				n = -n;
			}

			if(randomYesNo()){
				addTextToExcercise(n + "<br/>");
				addTextToExcercise(toIEEE754SingleString(n) + "<br/>");
			}else{
				addTextToExcercise(toIEEE754SingleString(n) + "<br/>");
				addTextToExcercise(n + "<br/>");

			}
		}

		function binExercise(){

			// Rand Number
			var n = randomNumber(1,100);
			if(randomNumber(1,3) == 1){
				n = -n;
			}
			if(randomYesNo()){
				addTextToExcercise(n + "<br/>");
				addTextToExcercise(numberWithTenToBase(n, 2) + "<br/>");
			}else{
				addTextToExcercise(numberWithTenToBase(n, 2) + "<br/>");
				addTextToExcercise(n + "<br/>");
			}
		}

		function twosComplementExercise(bit, max){
			// Rand Number
			var n = randomNumber(1,max);
			if(randomNumber(1,3) == 1){
				n = -n;
			}
			if(randomYesNo()){
				addTextToExcercise(n + "<br/>");
				addTextToExcercise(twosComplement(n, bit) + "<br/>");
			}else{
				addTextToExcercise(twosComplement(n, bit) + "<br/>");
				addTextToExcercise(n + "<br/>");
			}
			
		}

		function newExercise(){
			clearExercise();

			addTextToExcercise("<br/><br/>");
			addTextToExcercise("<b>Aufgabe 1 - Zahlensysteme:</b><br/>");

			numberSystemExercise();

			addTextToExcercise("<br/><br/>");
			addTextToExcercise("<b>Aufgabe 2 - IEEE 754:</b><br/>");
			ieeExercise();
			addTextToExcercise("<br/><br/>");
			addTextToExcercise("<b>Aufgabe 3 - Binaer - Dezimal:</b><br/>");
			
			binExercise();
			addTextToExcercise("<br/><br/>");
			addTextToExcercise("<b>Aufgabe 4 - Zweierkomplement (8bit):</b><br/>");
			twosComplementExercise(8, 100);

			addTextToExcercise("<br/><br/>");
			addTextToExcercise("<b>Aufgabe 5 - Zweierkomplement (16bit):</b><br/>");
			
			twosComplementExercise(16, 1000);
			

		}
		newExercise();