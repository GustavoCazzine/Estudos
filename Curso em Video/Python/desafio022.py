#Crie um programa que leia o nome completo de uma pessoa e mostre: -O nome com todas as letras maiusculas; -O nome com todas minusculas; -Quantas letras ao todo(sem considerar espaços; -Quantas letras tem o primeiro nome

#Entrada de dados - Nome do usuario
nome = str(input('Digite seu nome completo: '))

#Manipulação de texto
nome = nome.strip()
nome1 = ''.join(nome.split())
lista = nome.split()

#imprimir resultados
print(f'Seu nome em letras maiusculas: {nome.upper()}')
print(f'Seu nome em letras minusculas: {nome.lower()}')
print(f'Seu nome completo tem {len(nome1)} letras.')
print(f'Seu primeiro nome tem {len(lista[0])} letrar.')