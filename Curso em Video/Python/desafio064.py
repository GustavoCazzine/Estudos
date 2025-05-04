#Crie um programa que leia vários números inteiros pelo teclado. O programa só vai parar quanto o usúario digitar o valor 999, que é a condição de parada. No finalm mostre quantos números foram digitador e qual foi a soma entre eles
from itertools import count

# Solicita os números ao usuário
num = 0
soma = 0
cont = 0

while num != 999:
    num = int(input('Digite quantos números você quiser (999 para parar): ').strip().replace(',', ''))

    if num != 999:  # Verifica se o número não é a condição de parada
        cont += 1  # Incrementa o contador
        soma += num  # Adiciona o número à soma

# Mensagem de saída
print(f'Você digitou {cont} números, que somam {soma}.')
