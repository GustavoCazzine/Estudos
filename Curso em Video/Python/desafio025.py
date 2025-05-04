#Crie um programa que leia o nome de uma pessoa e diga se ela tem ''silva'' no nome.

#Entrada de dados = nome da pessoa
nome = str(input('Digite seu nome completo: ')).upper().strip()

#Manipulação dos dados

print(f'Seu nome tem Silva? {'SILVA' in nome}')

