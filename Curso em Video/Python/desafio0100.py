# Faça um programa que tenha uma lista chamada números e duas funções chamadas sorteio() e somapar(). A primeira função vai sortear 5 números e vai colocalos dentro da lista e a segunda função vai mostrar a soma entre todos os valores pares da lista.

import random
from time import sleep

numeros_pares = list()
numeros_sorteados = list()


def sorteia():

    print(f'Sorteando números...', flush=True)
    sleep(0.2)
    for sorteio in range(0, 5):
        numeros = random.randint(1, 100)
        numeros_sorteados.append(numeros)
    for valor in numeros_sorteados:
        print(f'{valor} ', end='', flush=True)
        sleep(0.5)

def somapar():
    print(f'\nSomando os valores pares da lista...', flush=True)
    sleep(0.2)
    soma = 0
    for valor in numeros_sorteados:
        if valor % 2 == 0:
            soma += valor
            numeros_pares.append(valor)

    for pares in numeros_pares:
        print(f'{pares} ', end='', flush=True)
        sleep(0.5)

    print(f'\nSoma dos valores pares: {soma}')



sorteia()
somapar()