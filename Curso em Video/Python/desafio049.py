#Refaça o desafio 009, mostrando a tabuada de um número que o usuário escolher, só que agora utilizando um laço for.

#Solicita um número para ser gerado a tabuada
num = int(input('Escolha um número para ver sua tabuada: '))

#Variavel para armazenar o multiplicador
mult = 1

for c in range(1, 11):
    print(f'{num} X {mult} = {num * mult}')
    mult = mult + 1
