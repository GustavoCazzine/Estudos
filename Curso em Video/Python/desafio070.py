#Crie um programa que leia o nome e o preço de vários produtos. O programa deverá perguntar se o usuário vai continuar. No final, mostre: 1 - qual é o total gasto na compra. / 2 - Quantos produtos custam mais de R$ 1000 / 3 - Qual é o nome do produto mais barato.

#Iniciar variaveis para armazenar os dados
total_gasto =  produtos_mil = 0
barato = ''
preco_produto = float('inf')  # Inicializa com infinito para encontrar o menor preço

print('-'*30)
print('CADASTRO DE COMPRAS')
print('-'*30)
#Loop while para manter o programa rodando
while True:
    #Entrada de dos produtos e preços
    produto = str(input('Nome do produto: ')).strip().capitalize()
    preco = float(input('Preço: R$'))
    #Calcula o total gasto
    total_gasto += preco
    #Calcula quantos produtos custam mais de 1000 reais
    if preco > 1000:
        produtos_mil += 1
    #Separa o produto mais barato dentr os listados
    if preco < preco_produto:
        preco_produto = preco
        barato = produto
    #Loop while para decidir se vai continuar ou não
    while True:
        resp = str(input('Quer continuar? [S/N] ')).upper().strip()[0]
        if resp in 'SN':
            break
        else:
            print('Escolha uma opção válida')
    if resp == 'N':
        break
print('-'*30)
print('RELATORIO')
print('-'*30)
print(f'Total gasto: R${total_gasto:.2f}')
print(f'Produtos com valor maior que R$1000: {produtos_mil}')
print(f'Produto mais barato: {barato}')
print('-'*30)