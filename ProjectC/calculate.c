#include <stdio.h>

int main()
{
    int pass = 12345;
    int UserPass;

    int i;
    for (i = 1; i <= 4; i++)
    {
        printf("Input Password ==> ");
        scanf("%d", &UserPass);

        if (UserPass == pass)
        {
            while (1)
            {
                printf("-------------------------------------------\n");
                printf("               Main menu\n");
                printf("-------------------------------------------\n");
                printf("                 1. +\n");
                printf("                 2. -\n");
                printf("                 3. X\n");
                printf("                 4. div\n");
                printf("                 5. mod\n");
                printf("                 6. Exit\n");
                printf("-------------------------------------------\n");
                printf("         Select to choice ==> ");

                int choice;
                scanf("%d", &choice);

                if (choice == 6)
                {
                    printf("\n");
                    printf("-------------------------------------------\n");
                    printf("           <<<Bye bye>>>\n");
                    printf("-------------------------------------------\n");

                    return 0;
                }
                else if (choice >= 1 && choice <= 5)
                {
                    int num1, num2;

                    // input num1
                    printf("Input Num 1 [1-10] ==> ");
                    scanf("%d", &num1);

                    // loop check num
                    while (num1 < 1 || num1 > 10)
                    {
                        printf("Input Num 1 [1-10] ==> ");
                        scanf("%d", &num1);
                    }

                    // input num2
                    printf("Input Num 2 [1-10] ==> ");
                    scanf("%d", &num2);

                    // loop check num
                    while (num2 < 1 || num2 > 10)
                    {
                        printf("Input Num 2 [1-10] ==> ");
                        scanf("%d", &num2);
                    }

                    // select menu
                    if (choice == 1)
                    {
                        printf("%d + %d = %d\n", num1, num2, num1 + num2);
                    }
                    else if (choice == 2)
                    {
                        if (num1 < num2)
                        {
                            // swich value
                            int temp = num1;
                            num1 = num2;
                            num2 = temp;
                        }
                        printf("%d - %d = %d\n", num1, num2, num1 - num2);
                    }
                }
            }
        }
        else
        {
            printf("Input password at %d no correct\n", i);
        }
    }
    if (i == 4)
    {
        return 0;
    }
}