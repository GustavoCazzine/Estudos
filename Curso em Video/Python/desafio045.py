#Crie um programa que faça o computador jogar jokenpê com você

import random

# Solicita a jogada do usuário
jogada = str(input('Escolha Pedra, Papel ou Tesoura: ')).strip().lower()

# Lista com as jogadas do computador
computador = ['pedra', 'papel', 'tesoura']

# Seleciona a jogada do computador
computador_jogada = random.choice(computador)

print(f'Computador jogou: {computador_jogada}')

# Verifica o resultado
if jogada == computador_jogada:
    print('Empate!')
elif (jogada == 'pedra' and computador_jogada == 'tesoura') or \
     (jogada == 'tesoura' and computador_jogada == 'papel') or \
     (jogada == 'papel' and computador_jogada == 'pedra'):
    print('Você ganhou!')
else:
    print('Computador ganhou!')
