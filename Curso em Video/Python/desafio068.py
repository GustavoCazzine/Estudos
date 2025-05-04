#Faça um programa que jogue par ou ímpar com o computador. O jogo só será interrompido quando o jogador PERDER, mostrando o totel de vitórias consecutivas que ele conquistou no final do jogo.

import random

computador = random.randint(0,10)
jogador_escolha = partida_def =''
jogador_num = soma = vitorias = 0

print('-'*30)
print('VAMOS JOGAR PAR OU IMPAR')
print('-'*30)

while True:
    jogador_escolha = str(input('Par ou Impar? ')).upper().strip().replace(' ','')
    if jogador_escolha == 'PAR' or jogador_escolha == 'IMPAR':
        jogador_num = int(input('Faça sua jogada: '))
        print(f'Sua jogada: {jogador_num}  - Computador: {computador}')
        soma = jogador_num + computador
        if soma % 2 == 0:
            partida_def = 'PAR'
        else:
            partida_def = 'IMPAR'
        print(f'Total de {soma}, essa partida deu: {partida_def}')

        if partida_def == jogador_escolha:
            print('-' * 30)
            print('Parabéns, você ganhou.')
            print('-' * 30)
            vitorias += 1
        else:
            print('-' * 30)
            print(f'GAME OVER. Você venceu {vitorias} vezes.')
            print('-' * 30)
            break
    else:
        print('-'*30)
        print('Você digitou uma opção inválida, tente novamente.')
        print('-'*30)