#Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, crie duas listas extras que vão conter apenas os valores pares e os valores impares digitados, respectivamente. Ao final, mostre o conteudo das três listas geradas.

lista = []
par = []
impar = []

while True:
    num = int(input('Digite um valor: '))
    lista.append(num)

    if num % 2 == 0:
        par.append(num)
    elif num % 2 == 1:
        impar.append(num)

    while True:
        escolha = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
        if escolha == 'S' or escolha == 'N':
            break
        else:
            print('Opção invalida, tente novamente!')
    if escolha == 'N':
        break





print('-'*30)
print(f'{"RELATÓRIO FINAL":^30}')
print('-'*30)
print(f'Os valores digitados foram {lista}')
print(f'Os valores pares digitados foram {par}')
print(f'Os valores impares digitados foram {impar}')
print('-'*30)
print(f'{"PROGRAMA FINALIZADO":^30}')
print('-'*30)