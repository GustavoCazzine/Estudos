#Faça um programa que leia o sexo de uma pessoa, mas só aceite os valores "m" ou "f". Caso esteja errado, peça a digitação novamente até ter um valor correto.

resp = ''

while resp != 'F' and resp != 'M':
    resp = str(input('Digite seu sexo: [M/F] ')).upper()
    if resp != 'M' and resp != 'F':
        print('Você digitou um sexo invalido, tente novamente!')

if resp == 'F':
    print('Olá, vou te emcaminhar para os produtos femininos.')
else:
    print('Eae, vou te mostrar os produtos masculinos.')