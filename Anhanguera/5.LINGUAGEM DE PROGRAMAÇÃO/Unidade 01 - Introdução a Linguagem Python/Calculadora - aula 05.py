#Inserir valor do produto
valor_produto = float(input("Qual o valor do produto? R$"))
#Inserir porcentagem de desconto
porcentagem_desconto = int(input('Qual a porcentagem de desconto do produto? '))

if porcentagem_desconto < 0 or porcentagem_desconto > 100:
    print('Erro: O percentual de desconto deve estar entre 0% e 100%.')
else:
    # Calcular porcentagem do desconto
    desconto = valor_produto * (porcentagem_desconto / 100)

#Calcular valor final
valor_final = valor_produto - desconto
print('Valor final com desconto: R$',float(valor_final))