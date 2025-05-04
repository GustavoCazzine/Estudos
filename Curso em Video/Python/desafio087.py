#Aprimore o desafio anterios, mostrando no final: 1 - A soma de todos os valores pares digitados. / 2 - A soma dos valores da terceira coluna / 3 - O maior valor da segunda linha

# Criar uma matriz 3x3 e preenchê-la com valores lidos do teclado
matriz = [[], [], []]
soma = soma_terceiro = maior = 0
# Preencher a matriz
for i in range(0, 3):
    for j in range(0, 3):
        valor = int(input(f'Digite um valor para [{i}, {j}]: '))
        matriz[i].append(valor)

# Exibir a matriz formatada
print('-=' * 30)
for l in range(0,3):
    for c in range(0,3):
        print(f'[{matriz[l][c]:^5}]', end='')
        if matriz[l][c] % 2 == 0:
            soma += matriz[l][c]
    print()

print('-=' * 30)
print(f'A soma dos valores pares é {soma}.')

for l in range(0,3):
    soma_terceiro += matriz[l][2]

for c in range(0,3):
    if c == 0:
        maior = matriz[1][c]
    elif matriz[1][c] > maior:
        maior = matriz[1][c]

print(f'A soma dos valores da terceira coluna é {soma_terceiro}.')
print(f'O maior valor da segunda linha é {maior}.')