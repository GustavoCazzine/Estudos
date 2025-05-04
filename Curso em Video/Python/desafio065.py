#Crie um programa que leia vários números inteiros pelo teclado. No final da execução, mostre a média entre todos os valores e qual foi o maior e o menor valores lidos. O programa deve perguntar ao usuário se ele quer ou não continuar a digitar valores.
resp = 'S'
cont = 0
soma = 0
maior = None
menor = None
while not resp == 'N':
    if resp == 'S':
        num = int(input('Digite um valor: '))
        cont += 1
        soma += num
        # Inicializa maior e menor se ainda não foram definidos
        if maior is None or num > maior:
            maior = num
        if menor is None or num < menor:
            menor = num
        resp = str(input('Quer continuar? [S/N] ')).upper().strip()[0]
    else:
        resp = 'S'
        print('Você digitou uma opção invalida, tente novamente.')
print('-'*30)
print(f'A media dos números digitados é: {soma / cont}\nO maior número foi o {maior} e o menor foi o {menor}')