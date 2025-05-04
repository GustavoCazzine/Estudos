from uteis_desafio0107 import moeda

p = float(input('Digite o preço: R$'))
taxa = int(input('Qual a porcentagem desconto/aumento: '))
print(f'A metade de R${p} é R${moeda.metade(p):.2f}')
print(f'O dobro de R${p} é R${moeda.dobro(p):.2f}')
print(f'Aumentando {taxa}%, temos R${moeda.aumento(p, taxa):.2f}')
print(f'Reduzindo {taxa}%, temos R${moeda.reduzir(p, taxa):.2f}')