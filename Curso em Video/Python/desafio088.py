#Faça um programa que ajude um jogador da MEGA SENA a criar palpites. O programa vai perguntar quantos jogos serão gerador e vai sortear 6 números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.

import random

palpites = []
jogos = int(input('Quantos jogos quer gerar: '))

for c in range(1, jogos + 1):
    jogada = []
    while len(jogada) < 6:  # Certificar que o palpite tem 6 números
        num = random.randint(1, 60)
        if num not in jogada:
            jogada.append(num)
    jogada.sort()  # Ordenar os números sorteados para ficar mais organizado
    palpites.append(jogada)

# Exibir os palpites gerados
print('-=' * 30)
for i, p in enumerate(palpites, start=1):
    print(f'Jogo {i}: {p}')
