function clearExercise(){
			document.getElementById("exercise1").innerText = "";
		}
		function addTextToExcercise(newText){
			document.getElementById("exercise1").innerText = document.getElementById("exercise1").innerText + newText;
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
			addTextToExcercise("\nDas Ergebnis ist " + numberWithBaseToBase(originBaseNumber, originBase, newBase));
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

			addTextToExcercise(n + "\n");
			addTextToExcercise(toIEEE754SingleString(n));
		}

		function binExercise(){

			// Rand Number
			var n = randomNumber(1,100);
			if(randomNumber(1,3) == 1){
				n = -n;
			}

			addTextToExcercise(n + "\n");
			addTextToExcercise(numberWithTenToBase(n, 2) + "\n");
		}

		function twosComplementExercise(bit, max){
			// Rand Number
			var n = randomNumber(1,max);
			if(randomNumber(1,3) == 1){
				n = -n;
			}

			addTextToExcercise(n + "\n");
			addTextToExcercise(twosComplement(n, bit) + "\n");
			// addTextToExcercise(numberWithTenToBase(n, 2) + "\n");
		}

		function newExercise(){
			clearExercise();

			addTextToExcercise("\n\n");
			addTextToExcercise("Aufgabe 1 - Zahlensysteme:\n");

			numberSystemExercise();

			addTextToExcercise("\n\n");
			addTextToExcercise("Aufgabe 2 - IEEE 754:\n");
			ieeExercise();
			addTextToExcercise("\n\n");
			addTextToExcercise("Aufgabe 3 - Binaer - Dezimal:\n");
			
			binExercise();
			addTextToExcercise("\n\n");
			addTextToExcercise("Aufgabe 3 - Zweierkomplement (8bit):\n");
			twosComplementExercise(8, 100);

			addTextToExcercise("\n\n");
			addTextToExcercise("Aufgabe 4 - Zweierkomplement (16bit):\n");
			
			twosComplementExercise(16, 1000);
			

		}
		newExercise();