from uteis_desafio0108 import moeda

p = float(input('Digite o preço: R$'))
taxa = int(input('Qual a porcentagem desconto/aumento: '))
print(f'A metade de {moeda.moeda(p)} é {moeda.moeda(moeda.metade(p))}')
print(f'O dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')
print(f'Aumentando {taxa}%, temos {moeda.moeda(moeda.aumento(p, taxa))}')
print(f'Reduzindo {taxa}%, temos {moeda.moeda(moeda.reduzir(p, taxa))}')