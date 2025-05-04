#Fala um programa que leia o peso de cinco pessoas. No final, mostre qual foi o maior e o menor peso lidos.

#lista vazia para armazenar os pesos
pesos = []



#Loop para solicitar o peso das cinco pessoas
for i in range (1,6):
    pesos.append(float(input(f'Digite o {i} peso: ')))

print(f'O maior peso é {max(pesos)}Kg\nO menor peso é {min(pesos)}Kg')
