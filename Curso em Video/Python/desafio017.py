#Faça um programa que leia um comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo, calcule e mostre o comprimento da hipotenusa.

from math import sqrt

c1 = int(input('Cateto oposto: '))
c2 = int(input('Cateto adjacente: '))

h = sqrt(c1**2 + c2**2)

print('A hipotenusa vai medir {:.2f}'.format(h))
