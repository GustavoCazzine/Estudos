#Faça um programa que leia a largura e a altura de uma parede em metros, calcule sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta, pintar uma área de 2mquadrado.
altura = float(input('Qual a altura da parede: '))
largura = float(input('Qual a largura da parede: '))
area = largura*altura
tinta = area/2

print(f'A parede com {altura} metros de altura e {largura} metros de largura tem uma área de {area} metros quadrados e será necessário {tinta} para pintala')