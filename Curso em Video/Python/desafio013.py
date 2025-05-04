#faça um algoritmo que leia o salário de um funcionario e mostre seu novo salário, com 15% de aumento.
salario_base = float(input('Qual seu salário: '))
desconto = salario_base * (15 / 100)
aumento = salario_base + desconto

print(f'Seu salário de R${salario_base} recebeu 15% de aumento, agora seu salário é R${aumento}')