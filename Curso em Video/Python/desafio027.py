#Faça um programa que leia o nome completo de uma pessoa, mostrando em sequida o primeiro e o último nome separadamente

#Entrada de dados - nome da pessoa
nome = str(input('Digite seu nome completo: ')).upper().strip()

#Manipulação dos dados
nome = nome.split()

#imprimir resultados
print(f'Seu primeiro nome é {nome[0].capitalize()}')
print(f'Seu último nome é {nome[len(nome)-1].capitalize()}')