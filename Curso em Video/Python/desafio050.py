#Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que foram pares. Se o valor digitado for impar, desconsidere-o

#Biblioteca time, para dar delay no programa
import time

#lista vazia para armazenar os números pares
l = []

#Loop para solicitar 6 números inteiros com delay de 1 segundo
print('Será solicitado seis números abaixo, digite: ')
time.sleep(1)
for c in range(1,7):
    num = int(input(f'Número {c}: '))
    if num % 2 == 0:
        l.append(num)
        soma = sum(l)

print(f'A soma entre os valores pares {l} é {soma}')

