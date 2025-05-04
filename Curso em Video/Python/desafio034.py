#Crie um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$1250, calcule um aumento de 10%
#Para os inferiores ou iguais, o aumento é de 15%.

#entrada de dados - salário
salario = float(input('Digite seu salário: R$'))

#Calculo de aumento
if salario <= 1250:
    print(f'Seu salario de R${salario:.2f} terá um aumento de 15%')
    print(f'Seu novo salário será de R${salario + (salario * (15 / 100)):.2f}')
else:
    print(f'Seu salario de R${salario:.2f} terá um aumento de 10%')
    print(f'Seu novo salário será de R${salario + (salario * (10 / 100)):.2f}')