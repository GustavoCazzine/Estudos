# Solicita ao usuário que insira a quantidade de reais
dinheiro = float(input('Quantos reais você tem: '))

# Taxa de conversão de reais para dólares (usando 3.27 como exemplo)
dolar = dinheiro / 3.27

# Exibe o valor em dólares com 2 casas decimais
print(f'Com R${dinheiro:.2f}, você pode comprar US${dolar:.2f}.')