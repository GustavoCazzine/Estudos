#Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome ''Santo''.

#entrada de dados - nome da cidade
cidade = str(input('Digite o nome da sua cidade: '))

#manipulação dos dados
print(cidade[:5].upper() == 'SANTO')


