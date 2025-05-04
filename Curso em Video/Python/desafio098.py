# Faça um programa que tenha uma função chamada contador(), que receba três parametros: inicio, fim e passo e realize a contagem. Seu programa tem que realizar as três contagens através da função criada: de 1 até 10 em 1/1, de 10 até 0 em 2/2 e uma contagem personalizada.

from time import sleep
# Função contagem para iniciar a contagem


def contador(inicio, fim, passo):
        if passo < 0:
            passo *= -1
        if passo == 0:
            passo = 1

        print(f'Contador de {inicio} até {fim} de {passo} em {passo}:')

        if inicio < fim:
            cont = inicio
            while cont <= fim:
                print(f'{cont} ', end=' → ', flush=True)
                sleep(.5)
                cont += passo
            print("FIM")
        else:
            cont = inicio
            while cont >= fim:
                print(f'{cont} ', end=' → ', flush=True)
                sleep(.5)
                cont -= passo
            print('FIM')


# Programa principal
contador(1, 10, 1)
contador(10, 0, 2)
print('\nHora de personalizar sua contagem!')
contador(inicio=int(input('\nInicio: ')), fim=int(input('Fim: ')), passo=int(input('Passo: ')))  # input para contagem personalizada
