#Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quains ele foi alugado. Calculo e preço a pagar, sabendo que o carro custa R$60 por dia e R$0.15 por KM rodado.

#solicita ao usuario as informaçoes de dias alugados e Km percorridos
dias_alugados = int(input('Quantos dias alugados? '))
km_percorridos = float(input('Quantos Km percorridos? '))

#Calculos de dias alugados e km rodados
valor_km = km_percorridos * 0.15
valor_dias = dias_alugados * 60
total = valor_km + valor_dias

print(f'O carro foi alugado por {dias_alugados} dias e custou R${valor_dias:.2f}')
print(f'O carro percorreu por {km_percorridos:.2f}Km e custou R${valor_km:.2f}')
print(f'O valor total pelo aluguel do carro foi de R${total:.2f}')
