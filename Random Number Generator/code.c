#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void printRandomNumber(int a, int b, int c)
{
	int i;
	for (i = 0; i < c; i++) {
		int num = (rand() %
		(b - a + 1)) + a;
		printf("%d ", num);
	}
}

int main()
{
	int a = 1, b = 9, c = 1;
	srand(time(0));
	printRandomNumber(a, b, c);

	return 0;
}
