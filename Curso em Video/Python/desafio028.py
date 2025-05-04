#Escreva um programa que faça o computador ''pensar'' em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
#O programa deverá escrever na tela se o usuário venceu ou perdeu

#biblioteca random para gerar números
import random

#Gerar número aleatório de 0 a 5
computador = random.randint(0,5)

#Pedir para o usuário adivinhar o número
print('---Olá, sou seu computador!---')
print('---Vamos jogar um jogo?--- ')
print('---Pensei em um número de 0 a 5---')
print('Tente adivinhar...')
usuario = int(input('Qual número eu pensei? '))
print('PROCESSANDO...')
if usuario == computador:
    print('PARABENS! Você conseguiu adivinhar.')
else:
    print('Você errou! mais sorte na proxima.')