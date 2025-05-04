#Desenvolva um programa que leia quatro valores pelo teclado e guarde- os em uma tupla. No final, mostre: 1 - Quantas vezes apareceu o número 9. / 2 - Em que posição foi digitado o primeiro valor 3 / 3 - Quais foram os números pares

num = []
pares = []

for c in range(1,5):
    valor = (int(input(f'Digite um valor {c} (de 0 a 10): ')))
    num.append(valor)

    if valor % 2 == 0:
        pares.append(valor)


pares = tuple(pares)
num = tuple(num)

if 3 in num:
    posicao_3 = num.index(3)
else:
    posicao_3 = 'Não encontrado'


print(f'O número 9 apareceu {num.count(9)}')
print(f'O primeiro número 3 está na posição {posicao_3}')
print(f'Os números pares são os: {pares}')
