#Crie um programa onde o usuário possa digitar vários valores númericos e cadastre-os em uma lista. Caso o número já exista lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
from typing import List

num: list[int] = []

print('-'*30)
print(f'{"CADASTRO DE NÚMEROS":^30}')
print('-'*30)


while True:
    entrada = (int(input('Digite um valor: ')))
    if entrada not in num:
        num.append(entrada)
        print('Número cadastrado com sucesso!')
    else:
        print('Número digitado já está cadastrado.')
    while True:
        escolha = str(input('\nDeseja cadastrar mais números: [S/N] ').upper()).strip()
        if escolha == 'N':
            break
        elif escolha == 'S':
            break
        else:
            print('Opção inválida, tente novamente!')
    if escolha == 'N':
        print('Finalizando programa...')
        break

print('-'*30)
print(f'Os valores digitados em ordem crescente foram {sorted(num)}')
print('-'*30)
