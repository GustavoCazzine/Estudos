#Crie um programa que crie uma matriz de dimensão 3x3 e preencha com valores lidos pelo teclado. No final, mostre a matriz na tela com a formatação correta

# Criar uma matriz 3x3 e preenchê-la com valores lidos do teclado
matriz = [[], [], []]

# Preencher a matriz
for i in range(3):
    for j in range(3):
        valor = int(input(f'Digite um valor para [{i}, {j}]: '))
        matriz[i].append(valor)

# Exibir a matriz formatada
print('-=' * 30)
for l in range(0,3):
    for c in range(0,3):
        print(f'[{matriz[l][c]:^5}]', end='')
    print()