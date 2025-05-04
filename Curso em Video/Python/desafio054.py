#Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas ainda não atingiram a maioridade e quantas já são maiores.

from datetime import datetime

# Pegar o ano atual
ano_atual = datetime.now().year

maior = []
menor = []

#Loop para receber as sete datas
for i in range(1,8):
    nascimento = int(input(f'Digit e {i} data: '))
    idade = ano_atual - nascimento
    if idade >= 21:
        maior.append(1)
    else:
        menor.append(1)

print(f'{len(maior)} pessoas maiores de 18 anos.\n{len(menor)} pessoas menores de 18 anos.')



