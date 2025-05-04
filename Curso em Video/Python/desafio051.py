#Desenvolva um programa que leia o primeiro termo e a razão de um PA. No final, mostre os 10 primeiros termos dessa progressão

# Solicita o primeiro termo e a razão ao usuário
primeiro_termo = int(input("Digite o primeiro termo da PA: "))
razao = int(input("Digite a razão da PA: "))

# Calcula e exibe os 10 primeiros termos
for i in range(10):
    termo_atual = primeiro_termo + i * razao
    print(f"Termo {i + 1}: {termo_atual}")
