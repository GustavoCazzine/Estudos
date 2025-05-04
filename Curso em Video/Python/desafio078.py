#Faça um programa que leia 5 valores numéricos e guarde-os em uma lista. No final, mostre qual foi o maior e o menor valor digitado e as suas respectivas posições na lista.

lista = []

# Preenche a lista com 5 valores inteiros
for c in range(1, 6):
    lista.append(int(input(f'Digite o {c}° valor: ')))

# Usar nomes diferentes para as variáveis
maior = max(lista)
menor = min(lista)

# Listas para armazenar as posições do maior e menor
pos_maior = []
pos_menor = []

# Percorrer a lista para achar todas as posições do maior e menor valor
for i, valor in enumerate(lista):
    if valor == maior:
        pos_maior.append(i)  # Adiciona a posição do maior valor
    if valor == menor:
        pos_menor.append(i)  # Adiciona a posição do menor valor

# Imprime a lista e os resultados
print(lista)

print(f'\nO maior valor digitado foi {maior} e está nas posições {pos_maior}')
print(f'O menor valor digitado foi {menor} e está nas posições {pos_menor}')