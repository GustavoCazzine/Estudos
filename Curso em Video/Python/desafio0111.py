from uteis_desafio0111 import moeda

p = float(input('Digite o preço: R$'))
taxa_aumento = int(input('Qual a porcentagem de aumento: '))
taxa_reduzir = int(input('Qual a porcentagem de desconto: '))

moeda.resumo(p, taxa_aumento, taxa_reduzir)