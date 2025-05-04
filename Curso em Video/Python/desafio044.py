#Elabora um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e condição de pagamento: -à vista dinheiro/cheque:10% de desconto / -à vista no cartão: 5% de desconto / -em até 2x no cartão: preço normal / -3x ou mais no cartão: 20% de juros

#Solicita o produto, valor e metodo de pagamento
produto = str(input('Nome do produto: ')).capitalize().strip()
preco = float(input('Valor do produto: R$'))
print('---Métodos de pagamentos---')
print('1 - À vista dinheiro/cheque - 10% de desconto')
print('2 - À vista no cartão - 5% de desconto')
print('3 - Em até 2x no cartão - Preço normal')
print('4 - 3x ou mais no cartão - 20% de juros')

escolha = int(input('Escolha uma opção: '))
if escolha == 1:
    preco = preco - (preco * (10 / 100))
    print(f'Produto: {produto} custa R${preco:.2f} - 10% de desconto.')
elif escolha == 2:
    preco = preco - (preco * (5/100))
    print(f'Produto {produto} custa R${preco:.2f} - 5% de desconto.')
elif escolha == 3:
    print(f'Produto {produto} custa R${preco:.2f} - Preço normal.')
elif escolha == 4:
    preco = preco + (preco * (20/100))
    print(f'Produto {produto} custa R${preco:.2f} - 20% de juros.')
else:
    print('Opção invalida...')
    print('Tente novamente.')


