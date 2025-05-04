#Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, mostre: 1 - Quantos números foram digitados. / 2 - A lista de valores, ordenada de forma decrescente. / 3 - Se o valor 5 foi digitado e está ou não lista.

#Lista para armazenar os numeros e contador
lista = []
cont = 0
num_5 = False
while True: #Loop while para repetir o programa
    num = int(input('Digite um número: '))
    lista.append(num)
    cont += 1

    while True: #Loop para garantir que o usuario escolha uma entre as opções válidas
        escolha = str(input('Quer continuar? [S/N] ')).upper().strip()[0]

        if escolha == 'S' or escolha == 'N':
            break
        else:
            print('Opção invalida, tente novamente.')
    if escolha == 'N':
        break

    for c in lista:
        if 5 in lista:
            num_5 = True
            break
#Sort com reverse True para organizar a lista em ordem decrecente
lista.sort(reverse=True)

print ('-'*30)
print(f'{"RELATÓRIO FINAL":^30}')
print ('-'*30)
print(f'Foram digitados {cont} vezes')
print(f'Números em forma descrecente: {lista}')
if num_5 == True:
    print(f'O valor 5 faz parte da lista.')
else:
    print(f'O valor 5 não faz parte da lista.')
print ('-'*30)
print(f'{"PROGRAMA FINALIZADO":^30}')
print ('-'*30)