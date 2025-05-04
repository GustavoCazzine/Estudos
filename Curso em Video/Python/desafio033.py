#faça um programa que leia três números e mostre qual é o maior e qual é o menor.

#Solicita os 3 números
num1 = int(input('Digite o primeiro número: '))
num2 = int(input('Digite o segundo número: '))
num3 = int(input('Digite o terceito número: '))

#Separação do maior número

if num1  > num2 and num1 > num3:
    print(f'O maior número é o {num1}')
elif num2 > num1 and num2 > num3:
    print(f'O maior número é o {num2}')
else:
    print(f'O maior número é o {num3}')

#Separação do menor número

if num1  < num2 and num1 < num3:
    print(f'O menor número é o {num1}')
elif num2 < num1 and num2 < num3:
    print(f'O menor número é o {num2}')
else:
    print(f'O menor número é o {num3}')

