#Escreva um programa que leia um número n inteiro qualquer e mostre na tela os n primeiros elementos de uma sequencia de fibonacci

print('-'*30)
print('Sequencia de Fibonacci')
print('-'*30)

#Solicita o número inteiro ao usuario
n = int(input('Quantos termos você quer mostrar? '))

t1 = 0
t2 = 1
cont = 3

print('~'*30)

print(f'{t1} → {t2}', end='')

while cont <= n:
    t3 = t1 + t2
    cont += 1
    t1 = t2
    t2 = t3
    print(f' → {t3}', end='')


