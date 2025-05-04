#Refaça o desafio 051, lendo o primeiro termo e a razão de uma PA, mostrando os 10 primeiros termos da prograssão usando a estrutura while.

# Solicita o primeiro termo e a razão ao usuário
primeiro_termo = int(input("Digite o primeiro termo da PA: "))
razao = int(input("Digite a razão da PA: "))
termo = 0
# Calcula e exibe os 10 primeiros termos
while termo != 10:
    termo_atual = primeiro_termo + termo * razao
    print(f"Termo {termo + 1}: {termo_atual}")
    termo += 1
