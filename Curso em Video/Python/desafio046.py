#Faça um programa que mostre na tela uma contagem regressiva para o estouro de fogos de artificio, indo de 10 até 0, com uma pausa de 1 segundo entre eles.

#Biblioteca para adicionar delay no loop
import time

#loop para contagem dos fogos, com delay de 1 segundo
for c in range (10, -1, -1):
    print(c)
    time.sleep(1)
print('FELIZ ANO NOVO!')