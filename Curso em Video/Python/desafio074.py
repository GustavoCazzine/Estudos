#Crie um programa que vai gerar cinco números aleatórios e colocar em uma tupla. Depois disso, mostre a listagem de números gerados e também indique o menor e o maior valor que estão na tupla

import random
num = []

for c in range(0,5):
    num.append(random.randint(0,1000))

num = tuple(num)


print(f'\nOs números gerados é: {num}')
print(f'\nO maior número gerado é {max(num)} e o menor é {min(num)}')

