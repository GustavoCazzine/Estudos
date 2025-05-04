#Faça um programa que calcule a soma entre todos os números impares que são múltiplos de três e que se encontram no intervalo de 1 até 500.
from itertools import count

num = []

#Loop de 1 até 500
for c in range(1, 500, 2):
    if c % 3 == 0:
        num.append(c)

print(f'A soma de todos os {len(num)} valores solicitados é {sum(num)}')