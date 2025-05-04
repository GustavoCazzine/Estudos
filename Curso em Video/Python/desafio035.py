#Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triângulo

#Entrada de dados - comprimento de retas
r1 = float(input('Primeiro segmento: '))
r2 = float(input('Segundo segmento: '))
r3 = float(input('Terceiro segmento: '))

#Cauculo das retas

if r1 + r2 > r3 and r1 + r3 > r2 and r2 + r3 > r1:
    print('Essas três retas podem formar um triangulo!')
else:
    print('Essas três retas nao podem formar um triangulo!')