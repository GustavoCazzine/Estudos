#Melhore o jogo do desafio028 onde o computador vai ''pensar'' em um número entre 0 e 10. Só que agora o jogador vai tentar adivinhar até acertar, mostrando no final quantos palpites foram necessários para vencer.

#Biblioteca random para aleatorizar as jogadas do computador
import random

computador = 1
usuario = 0
tentativas = 1

while usuario != computador:

    #Cria a jogada do computador
    computador = random.randint(0, 10)

    # Solicita a escolha do usúario
    usuario = int(input('Faça sua tentativa: '))

    if usuario > 10:
        print('O jogo é apenas dos números 0 até o 10')
        print('Tente novamente.')

    else:
        #If para conferir se o número é diferente
        if usuario != computador:
            print(f'O número que pensei foi {computador}')
            print('Você errou, Tente novamente.')
            tentativas += 1



print(f'Parabéns, você acertou o número {computador}! Mas precisou de {tentativas} tentativas para acertar')