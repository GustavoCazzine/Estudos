#Faça um programa que leia um número inteiro e mostre na tela o seu sucessor e seu antecessor
num = int(input('Digite um número: '))
suc = num+1
ant = num-1
print('Você digitou o número {}, seu antecessor é {} e seu sucessor é {}.'.format(num, ant, suc))