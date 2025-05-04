from uteis_desafio0109 import moeda

p = float(input('Digite o preço: R$'))
taxa = int(input('Qual a porcentagem desconto/aumento: '))
print(f'A metade de {moeda.moeda(p)} é {moeda.metade(p, True)}')
print(f'O dobro de {moeda.moeda(p)} é {moeda.dobro(p, True)}')
print(f'Aumentando {taxa}%, temos {moeda.aumento(p, taxa, True)}')
print(f'Reduzindo {taxa}%, temos {moeda.reduzir(p, taxa, True)}')