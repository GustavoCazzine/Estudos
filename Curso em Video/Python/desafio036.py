#Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
#Calculo o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado.

print('-----Simulador de financiamento-----')

#Entrada de dados - Valor da casa / Salário / Prestações
casa = float(input('Qual o valor da casa? R$'))
salario = float(input('Qual seu salário mensal? R$'))
meses = int(input('Quantos anos de financiamento? ')) * 12

#Calculos
limite_salario = salario * (30 / 100)
valor_prestacao = casa / meses
limite_prestacao = limite_salario
porcentagem_prestacao = (valor_prestacao / salario ) * 100

print('-----PROCESSANDO-----')
if valor_prestacao > limite_prestacao:
    print(f'Tempo de financiamento: {meses} meses\n Valor da prestação mensal: R${valor_prestacao:.2f}\n Limite de prestação: R${limite_prestacao:.2f}')
    print(f'Valor da prestação ultrapassou o limite de 30% do salário, atingindo {porcentagem_prestacao:.2f}% do seu salário')
    print('Emprestimo negado.')

elif valor_prestacao <= limite_prestacao:
    print(f'Tempo de financiamento: {meses} meses\n Valor da prestação mensal: {valor_prestacao:.2f}\n Limite de prestação: {limite_prestacao:.2f}')
    print(f'\n -----Sua prestação mensal ficará no valor de R${valor_prestacao:.2f}, totalizando {porcentagem_prestacao:.2f}% do seu salário total-----')
    print('-----Emprestimo aprovado-----.')
