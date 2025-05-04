#Crie um programa que leia dois valores e mostre um menu na tela: 1 - somar / 2 - multiplicar / 3- maior / 4 - novos números / 5 - sair do programa

#Seu programa deverá ralizar a operação solicitada em cada caso.

import time

escolha = 0
num = []

# Função de somar
def soma(num):
    return sum(num)

# Função multiplicar
def mult(num):
    return num[0] * num[1]

# Função maior
def maior(num):
    return max(num)

# Pedir os dois primeiros números
num.append(int(input('Digite um valor: ')))
num.append(int(input('Digite outro valor: ')))

while escolha != 5:
    time.sleep(1)
    print('Carregando sistemas...')
    time.sleep(1)

    # Menu de opções
    print('Escolha uma opção:\n1 - Somar\n2 - Multiplicar\n3 - Maior\n4 - Novos números\n5 - Sair do programa')
    escolha = int(input('Selecione uma opção: '))

    if escolha == 1:
        resultado = soma(num)
        print(f'O resultado da soma é: {resultado}')
    elif escolha == 2:
        resultado = mult(num)
        print(f'O resultado da multiplicação é: {resultado}')
    elif escolha == 3:
        resultado = maior(num)
        print(f'O maior valor é: {resultado}')
    elif escolha == 4:
        # Pedir novos números, redefinindo a lista num
        num = []
        num.append(int(input('Digite um novo valor: ')))
        num.append(int(input('Digite outro novo valor: ')))
    elif escolha == 5:
        print('Desligando sistemas...')
    else:
        print('Você escolheu uma opção inválida, tente novamente.')

time.sleep(1)
print('Programa finalizado')
