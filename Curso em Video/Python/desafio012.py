#Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto.
preco = float(input('Qual o preço do produto: '))
desconto = preco * (5/100)
preco_final = preco - desconto

print(f'O produto de R${preco:.2f}, com R${desconto:.2f} de desconto (5%), sai por R${preco_final:.2f}')