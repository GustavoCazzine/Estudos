#Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa, mostre:
#Mostre a media de idade, qual é o nome do homem mais velho e uqantas mulherem tem menos de 20 anos
from itertools import count

# Lista para armazenar as pessoas
pessoas = []

#Lista para armazenar idadades
idade = []

#Variavel para armazenar idade do mais velho
nome_velho = ''
velho = 0

#Variavel para armazenar quantas mulheres tem menos de 20 anos
min = 0

# Loop para solicitar informações
for i in range(1, 6):
    pessoa = {}  # Cria um novo dicionário para cada pessoa
    pessoa['nome'] = str(input('Nome: ')).capitalize()
    pessoa['idade'] = int(input('Digite sua idade: '))
    pessoa['sexo'] = str(input('Sexo [M/F]: ')).upper()
    pessoas.append(pessoa)  # Adiciona o dicionário à lista

    idade.append(pessoa['idade'])

    # Nome do homem mais velho
    if pessoa['sexo'] == 'M':
        if pessoa['idade'] > velho:
            nome_velho = pessoa['nome']
            velho = pessoa['idade']

    #Calcular quantas mulheres tem menos de 20 anos
    if pessoa['sexo'] == 'F':
        if pessoa['idade'] < 20:
            min += 1




# Calculo de media de idades
media_idade = (sum(idade) / len(idade))

print(f'A média de idade das {len(pessoas)} pessoas é {media_idade:.0f}')
print(f'O homem mais velho é o {nome_velho} com {velho} anos de idade')
print(f'Temos {min} mulheres com menos de 20 anos')