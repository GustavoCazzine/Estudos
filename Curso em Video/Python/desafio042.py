#Refaça o desafio 035 dos truangulos, acrescentando o recurso de mostrar que tipo de triangulo será formado: -equilátero: todos os lados iguais / -Isóscelos: dois lados iguais /-Escaleno: todos os lados diferentes


#Entrada de dados - comprimento de retas
r1 = float(input('Primeiro segmento: '))
r2 = float(input('Segundo segmento: '))
r3 = float(input('Terceiro segmento: '))

#Cauculo das retas

if r1 + r2 > r3 and r1 + r3 > r2 and r2 + r3 > r1:
    if r1 == r2 == r3:
        print('Esse triangulo é Equilátero.')
    elif r1 == r2 or r2 == r3 or r1 == r3:
        print('Esse triangulo é Isósceles.')
    else:
        print('Esse triangulo é Escaleno.')


else:
    print('Essas três retas nao podem formar um triangulo!')