#Crie um programa que leia vários n´´úmeros inteiros pelo teclado. O programa só vai parar quando o usuário digitar o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados e qual foi a soma entre eles

cont = soma = n = 0
resp = ''

while True:
    n = int(input('Digite um valor (999 para parar):').strip().replace(' ',''))
    if n == 999:
        break
    else:
        cont += 1
        soma += n

print('Encerrando programa e imprimindo resultados...')
print('-'*30)
print(f'Você digitou {cont} números e a soma de todos eles foi {soma}.')
print('-'*30)
