#import <stdio.h>
#import <stdlib.h>
#import <string.h>
#include <time.h>

void showBinaryI(int z){
	if(z>>1){
		showBinaryI(z>>1);
		printf("%d", (z&1) > 0 ? 1 : 0);
	}else{
		printf("%d", (z&1) > 0 ? 1 : 0);
	}
}

void showBinaryC(char z){
	int l = sizeof(z)*8;
	for (int i = l-1; i >= 0; --i)
	{
		int bit = (z>>i)&1;
		printf("%d", bit);
	}
}

void showBinaryF(float f){
	char* cp = (char*)&f;
	for (int i = sizeof(f)-1; i >= 0; --i)
	{
		showBinaryC(*(cp+i));
		printf("");
	}
}

void showBinaryD(double f){
	char* cp = (char*)&f;
	for (int i = sizeof(f)-1; i >= 0; --i)
	{
		showBinaryC(*(cp+i));
		printf("");
	}
}

float randKomma(){
	int max = 3;
	time_t t;
	time(&t);
	srand((unsigned int)t); 	
	float kommaVals[] = {0.5, 0.25, 0.125, 0.0625};
	float sum = 0;
	for (int i = 0; i < 4; ++i)
	{
		int r = (rand() % (max+1));
		if(r==2){
			sum += kommaVals[i];
		}
	}
	return sum;

}
float randI(int max){
	// int max = 2000;
	time_t t;
	time(&t);
	srand((unsigned int)t); 	
	return rand() % (max+1);
}

void sampleRandToTen(){
	time_t t;
	time(&t);
	srand((unsigned int)t); 	

	int base = (rand() % 4)+2;
	int secondBase[] = {2, 8, 10, 16};
	printf("Umwandeln der Zahl ");
	for (int i = 0; i < rand() % (5+2); ++i)
	{
		int digit = rand() % (base);
		printf("%d", digit);
	}
	printf(" der Basis %d zur Basis %d\n", base, secondBase[rand() % (4)]);
}

int main(){
	printf("\n");
	printf("Aufgabe 1.\n");
	sampleRandToTen();
	// printf("\n");

	// printf("Du entscheidest bei jeder folgenden Aufgabe ob du die obere in die Untere umwandelst, oder anders herum.\n");

	printf("\n\n\n");
	printf("Aufgabe 2. Binaer <-> Dezimal.\n");
	int dez = randI(1000);
	printf("%d\n", dez);
	showBinaryI(dez);
	printf("\n\n\n");

	char s = randI(100);
	if(randI(1) == 0){
		s = -s;
	}
	printf("Aufgabe 3. Zweierkomplement (8bit) der Zahl\n%d\n", s);
	showBinaryC(s);


	printf("\n\n");
	float randIEEE = randI(1000)+randKomma();
	printf("Aufgabe 4. IEE754\nDez %.4f\nBin ", randIEEE);
	showBinaryF(randIEEE);

	// zahlenSystemUmrechnen(2, 6);

	printf("\n");
	return 0;
}